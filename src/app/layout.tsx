import "./globals.css";
import localFont from 'next/font/local';
import Providers from "@/store/Provider";
import { Loader } from "@/components/loader";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Grabit - Multipurpose eCommerce React NextJS Template",
  description: "Multipurpose eCommerce React NextJS Template",

  icons: {
    icon: "/favicon.ico",
  },
};



const iranyekan = localFont({
  src: [
    { path: './fonts/IRANYekanXFaNum-Regular.ttf', weight: '400' },
    { path: './fonts/IRANYekanXFaNum-Bold.ttf', weight: '700' },
    { path: './fonts/IRANYekanXFaNum-Light.ttf', weight: '300' },
    { path: './fonts/IRANYekanXFaNum-Black.ttf', weight: '900' },
    { path: './fonts/IRANYekanXFaNum-ExtraBlack.ttf', weight: '800' },
  ],
  variable: '--font-iranyekan',
})
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en"  className={`${iranyekan.variable} rtl`} >
      <body    style={{ background: "none" }}>
        <Loader>
          <Providers>
            <div>{children}</div>
          </Providers>
        </Loader>
      </body>
    </html>
  );
}
