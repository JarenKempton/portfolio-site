import { expect, test } from "@playwright/test";

const sections = ["hero", "principles", "about", "stories", "projects", "experience", "skills", "contact"];

test("static HTML contains all content, metadata, and working assets without JavaScript", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(baseURL!);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Jaren Kempton");
  await expect(page.locator("main section")).toHaveCount(sections.length);
  expect(await page.locator("main section").evaluateAll(elements => elements.map(element => element.id))).toEqual(sections);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://jarenkempton.dev/");
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /Jaren Kempton/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /Senior full stack engineer/);
  await expect(page.locator("astro-island")).toHaveCount(0);
  await expect(page.getByRole("img", { name: "Jaren Kempton" })).toBeVisible();
  expect(await page.getByRole("img", { name: "Jaren Kempton" }).evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth > 0)).toBe(true);
  await page.getByRole("navigation", { name: "Sections" }).getByRole("link", { name: "7:contact" }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.locator("#contact")).toBeInViewport();
  for (const path of ["/resume.pdf", "/icon.svg", "/robots.txt", "/sitemap-index.xml", "/sitemap-0.xml"]) {
    const response = await page.request.get(new URL(path, baseURL).href);
    expect(response.status(), path).toBe(200);
  }
  await context.close();
});

test("terminal navigation, status, focus, and mobile layout stay functional", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator("[data-status-scroll]")).toHaveText("Top");
  for (let index = 1; index < sections.length; index++) {
    await page.keyboard.press(String(index));
    await expect(page).toHaveURL(new RegExp(`#${sections[index]}$`));
    await expect(page.locator('[aria-current="location"]')).toHaveAttribute("href", `#${sections[index]}`);
    await expect(page.locator("[data-status-section]")).toHaveText(`${index + 1}/${sections.length}`);
  }
  await page.keyboard.press("G");
  await expect(page.locator("[data-status-scroll]")).toHaveText("Bot");
  await page.keyboard.press("g");
  await expect(page.locator("[data-status-scroll]")).toHaveText("Top");
  await expect(page.locator('[aria-current="location"]')).toHaveAttribute("href", "#hero");
  await page.keyboard.press("j");
  await expect(page.locator("[data-nav]:focus")).toHaveCount(1);
  const first = await page.locator("[data-nav]:focus").textContent();
  await page.keyboard.press("j");
  await expect(page.locator("[data-nav]:focus")).not.toHaveText(first!);
  await page.keyboard.press("k");
  await expect(page.locator("[data-nav]:focus")).toHaveText(first!);
  await page.keyboard.press("Escape");
  await expect(page.locator("[data-nav]:focus")).toHaveCount(0);
  await page.keyboard.press("g");
  await expect(page.locator("[data-status-scroll]")).toHaveText("Top");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  expect(errors).toEqual([]);
});

test("unknown URLs return a real 404 instead of the homepage", async ({ request }) => {
  const response = await request.get("/not-a-real-page");
  expect(response.status()).toBe(404);
  expect(await response.text()).not.toContain("cat contact.txt");
});

test("www redirects to the canonical host without losing paths or query strings", async ({ request, baseURL }) => {
  test.skip(new URL(baseURL!).hostname !== "jarenkempton.dev", "Requires the production Cloudflare edge rule");
  for (const path of ["/?source=redirect-check", "/resume.pdf?source=redirect-check"]) {
    const response = await request.get(`https://www.jarenkempton.dev${path}`, { maxRedirects: 0 });
    expect(response.status()).toBe(301);
    expect(response.headers().location).toBe(`https://jarenkempton.dev${path}`);
  }
});

test("five quick photo clicks open the computer desktop, and its menubar leads back to the terminal", async ({ page }) => {
  await page.goto("/");
  const photo = page.getByRole("img", { name: "Jaren Kempton" });
  for (let click = 0; click < 4; click++) await photo.click();
  await expect(page).toHaveURL(/\/$/);
  await photo.click();
  await expect(page).toHaveURL(/\/computer\/?$/);
  await expect(page.getByRole("heading", { name: "Read Me" })).toBeVisible();
  await page.getByRole("link", { name: "← Terminal" }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Jaren Kempton");
});
