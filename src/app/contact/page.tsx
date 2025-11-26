import { siteInfo } from "@/lib/site-info"
import { ContactFormPage } from "./contact-form"

export const metadata = {
  title: `お問い合わせ | ${siteInfo.brand}`,
  description: "無煙焼却炉に関するご相談・お見積り依頼はこちらから。",
}

export default function ContactPage() {
  return <ContactFormPage />
}
