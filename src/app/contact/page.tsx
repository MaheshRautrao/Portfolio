import { PrimaryContactInformation } from "@/components/contact/primary-contact-information";
import { ContactForm } from "@/components/contact/contact-form";

export default function Contact() {
  return (
    <div className="flex justify-center gap-10">
      <PrimaryContactInformation />
      <ContactForm />
    </div>
  );
}
