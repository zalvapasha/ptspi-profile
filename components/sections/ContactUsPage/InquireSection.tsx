import IcMail from "@/assets/icons/IcMail";
import IcMapPin from "@/assets/icons/IcMapPin";
import IcPhone from "@/assets/icons/IcPhone";
import { InquiryForm } from "@/components/InquiryForm";
import { useTranslations } from "next-intl";

const InquireSection = () => {
  const t = useTranslations("ContactUsPage.inquire-section");
  return (
    <section className="max-w-7xl mx-auto flex flex-col gap-12 sm:flex-row mt-20 px-5 md:px-16 py-16 md:py-28">
      <div className="flex flex-col gap-8 sm:w-1/2">
        <div>
          <h1 className="mb-4">{t("badge")}</h1>
          <h2 className="text-5xl mb-6">{t("title")}</h2>
          <p className="text-lg">{t("description")}</p>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center gap-3">
            <IcMail />
            <a
              href="mailto:info@sulaseafood.id"
              aria-label={t("contact.emailLabel")}
              title={t("contact.emailLabel")}
              className="underline"
            >
              info@sulaseafood.id
            </a>
          </div>
          <div className="flex items-center gap-3">
            <IcPhone />
            <a
              href="tel:+6282298186622"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors underline duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +62 (822) 9818-6622
            </a>
          </div>
          <div className="flex items-center gap-3">
            <IcMapPin />
            <a
              href="https://maps.app.goo.gl/2KBTKGYkpy6TNs2q7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("contact.addressLabel")}
              title={t("contact.addressLabel")}
            >
              Pohea, Sanana Utara, Kepulauan Sula, Maluku Utara
            </a>
          </div>
        </div>
      </div>
      <div className="sm:w-1/2">
        <InquiryForm />
      </div>
    </section>
  );
};

export default InquireSection;
