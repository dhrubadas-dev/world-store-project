import SiteFooter from "@/components/Header/SiteFooter";
import SiteHeader from "@/components/Header/SiteHeader";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body>
        <SiteHeader />

        <main>{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
};

export default RootLayout;
