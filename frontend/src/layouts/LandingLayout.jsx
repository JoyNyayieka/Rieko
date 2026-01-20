import { HeaderMegaMenu } from "../components/landingpage/Header";
import { FooterCentered } from "../components/landingpage/Footer";

export default function LandingLayout({ children }) {
  return (
    <>
      <HeaderMegaMenu />
      <main>{children}</main>
      <FooterCentered />
    </>
  );
}