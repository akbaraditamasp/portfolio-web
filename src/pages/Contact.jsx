import ContactList from "../components/ContactList";
import { RiInstagramLine, RiMailLine, RiPhoneLine } from "react-icons/ri";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div className="bg-white rounded border-gray-400 border p-5 lg:p-8">
      <Header>Kontak Saya</Header>
      <div className="flex flex-col space-y-5">
        <ContactList
          icon={RiPhoneLine}
          name="No. Handphone / Whatsapp"
          value="0812-7176-2774"
        />
        <ContactList
          icon={RiMailLine}
          name="Email"
          value="akbaraditamasp@gmail.com"
        />
        <ContactList
          icon={RiInstagramLine}
          name="Instagram"
          value="@akbaraditamasp"
        />
      </div>
    </div>
  );
}
