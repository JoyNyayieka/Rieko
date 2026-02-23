import { HeaderMegaMenu } from "../components/landingpage/Header/Header";
import { FooterLinks } from "../components/landingpage/Footer/Footer";
import BacktoTop from "../components/shared/BacktoTop";

export default function LandingLayout({ children }) {
  return (
    <>
      <HeaderMegaMenu />
      <main>{children}</main>
      <BacktoTop />
      <FooterLinks />
    </>
  );
}