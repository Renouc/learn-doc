function parseCookie(): Record<string, string> {
  const parsedCookies: Record<string, string> = {};

  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (!key || !value) continue;
    parsedCookies[key.trim()] = value;
  }

  return parsedCookies;
}

export default parseCookie;
