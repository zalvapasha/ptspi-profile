"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = (nextLocale: "en" | "id") => {
    if (nextLocale === locale) return;

    startTransition(() => {
      // keeps user on same page
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="flex items-center w-fit  rounded-md overflow-hidden select-none">
      {/* EN */}
      <button
        type="button"
        onClick={() => changeLanguage("en")}
        disabled={isPending}
        className={`px-3 py-1.5 text-sm font-semibold transition-colors cursor-pointer
        ${
          locale === "en"
            ? "bg-blue-900 text-white"
            : "bg-white text-black hover:bg-gray-100"
        }`}
      >
        EN
      </button>

      {/* ID */}
      <button
        type="button"
        onClick={() => changeLanguage("id")}
        disabled={isPending}
        className={`px-3 py-1.5 text-sm font-semibold transition-colors cursor-pointer
        ${
          locale === "id"
            ? "bg-blue-900 text-white"
            : "bg-white text-black hover:bg-gray-100"
        }`}
      >
        ID
      </button>
    </div>
  );
}
