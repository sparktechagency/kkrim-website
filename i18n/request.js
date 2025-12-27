import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieLocale = (await cookies()).get("SUDOSECURE_LOCALE")?.value || "en";

  // Validate locale and fallback to "en" if invalid
  const locale = ["en", "de"].includes(cookieLocale) ? cookieLocale : "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});