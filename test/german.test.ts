import { registerGermanYupLocale, mixed } from "../src/german";
test("setLocale can be called", () => {
  expect(typeof registerGermanYupLocale === "function").toBe(true);
});

test("mixed fields can be changed", () => {
  const old = mixed.default;
  mixed.default = "test";
  expect(mixed.default).not.toBe(old);
  expect(mixed.default).toBe("test");
});
