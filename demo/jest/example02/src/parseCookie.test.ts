// src/parseCookie.test.ts
import parseCookie from "./parseCookie";

describe("parseCookie", () => {
  beforeEach(() => {
    // 清除之前的 cookie
    document.cookie.split(";").forEach((cookie) => {
      document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    });
  });

  it("should parse cookies correctly", () => {
    document.cookie = "key1=value1;";
    document.cookie = "key2=value2;";
    document.cookie = "";
    document.cookie = "key3=value3;";
    document.cookie = "key4=;";
    document.cookie = "=;";
    const result = parseCookie();

    expect(result).toEqual({
      key1: "value1",
      key2: "value2",
      key3: "value3",
    });
  });

  it("should handle empty cookies", () => {
    document.cookie = "";
    const result = parseCookie();
    expect(result).toEqual({});
  });
});
