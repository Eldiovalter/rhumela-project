const value = process.env.EXPO_PUBLIC_API_URL;
let url;
try {
  url = new URL(value);
} catch {
  throw new Error("Export EXPO_PUBLIC_API_URL with the HTTPS API URL before building.");
}

const hostname = url.hostname.toLowerCase();
if (
  url.protocol !== "https:" ||
  url.username ||
  url.password ||
  hostname === "localhost" ||
  hostname.endsWith(".localhost") ||
  hostname === "[::1]" ||
  hostname.startsWith("127.") ||
  hostname === "0.0.0.0"
) {
  throw new Error("EXPO_PUBLIC_API_URL must be HTTPS, non-loopback, and contain no credentials.");
}
