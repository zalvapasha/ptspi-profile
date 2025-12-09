import IcMail from "@/assets/icons/IcMail";
import IcMapPin from "@/assets/icons/IcMapPin";
import IcPhone from "@/assets/icons/IcPhone";
import { InquiryForm } from "@/components/InquiryForm";

const InquireSection = () => {
  return (
    <section className="flex flex-col gap-12 sm:flex-row mt-20 px-5 md:px-16 py-16 md:py-28">
      <div className="flex flex-col gap-8 sm:w-1/2">
        <div>
          <h1 className="mb-4">Connect</h1>
          <h2 className="text-5xl mb-6">Contact Us</h2>
          <p className="text-lg">
            Send us your questions about our seafood trading services
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center gap-3">
            <IcMail />
            <span className="underline">email@example.com</span>
          </div>
          <div className="flex items-center gap-3">
            <IcPhone />
            <span className="underline">+1 (555) 000-0000</span>
          </div>
          <div className="flex items-center gap-3">
            <IcMapPin />
            <span>123 Sample St, Sydney NSW 2000 AU</span>
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
