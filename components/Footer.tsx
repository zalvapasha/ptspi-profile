import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <section className="max-w-7xl mx-auto px-5 py-12 ">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link
            href="/"
            aria-label="Go home"
            title="PT Sula Seafood Indonesia"
            className="inline-flex items-center"
          >
            <span className="text-xl font-bold tracking-wide text-gray-800">
              PT Sula Seafood Indonesia
            </span>
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">{t("about.description-1")}</p>
            <p className="mt-4 text-sm text-gray-800">
              {t("about.description-2")}
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            {t("contacts-title")}
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">{t("phone-label")}</p>
            <a
              href="tel:+6282298186622"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +62 (822) 9818-6622
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">{t("email-label")}</p>
            <a
              href="mailto:info@sulaseafood.id"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              info@sulaseafood.id
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">{t("address-label")}</p>
            <a
              href="https://maps.app.goo.gl/2KBTKGYkpy6TNs2q7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Pohea, Sanana Utara, Kepulauan Sula, Maluku Utara
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            {t("social-title")}
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://www.linkedin.com/company/sula-seafood-indonesia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-500 transition-colors hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/sananapelangi?igsh=ZXdsdG8xMmxkaGZh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-500 transition-colors hover:text-gray-700"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-500 transition-colors hover:text-gray-700"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            {t("social-description")}
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 border-t lg:flex-row">
        <p className="text-sm text-gray-600">{t("copyright")}</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link href="/products" className="text-sm text-gray-600">
              {t("links.products")}
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-sm text-gray-600">
              {t("links.about")}
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="text-sm text-gray-600">
              {t("links.contact")}
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
