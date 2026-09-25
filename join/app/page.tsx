import fs from "fs";
import path from "path";
import HomeTourOffersSection from "@/components/HomeTourOffersSection";
import WebflowFragment from "@/components/WebflowFragment";
import WebflowHome from "@/components/WebflowHome";

const FOOTER_START = '<section id="contact" class="footer">';

export default function Home() {
  const full = fs.readFileSync(
    path.join(process.cwd(), "content/home.html"),
    "utf8"
  );

  const footerIndex = full.indexOf(FOOTER_START);
  const mainHtml =
    footerIndex >= 0 ? full.slice(0, footerIndex) : full;
  const footerHtml = footerIndex >= 0 ? full.slice(footerIndex) : "";

  return (
    <>
      <WebflowHome html={mainHtml} />
      <HomeTourOffersSection />
      {footerHtml ? <WebflowFragment html={footerHtml} /> : null}
    </>
  );
}
