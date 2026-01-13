import { Urbanist, Nunito, Cairo } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/main.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--body-color-font",
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--heading-font",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--cairo-font",
});

export const metadata = {
  title: {
    absolute: "",
    default: "ENS - شركة تطوير البرمجيات وتصميم المواقع الإلكترونية",
    template: "%s | ENS - شركة تطوير البرمجيات وتصميم المواقع",
  },
  description: "ENS - شركة متخصصة في تطوير البرمجيات وتصميم المواقع الإلكترونية والتطبيقات باستخدام أحدث التقنيات مثل Next.js و Node.js. نقدم حلول استضافة المواقع، برمجة التطبيقات، والشبكات والحلول الأمنية.",
  keywords: "تطوير برمجيات, تصميم مواقع, Next.js, Node.js, استضافة مواقع, تطبيقات, حلول أمنية, ENS",
  openGraph: {
    title: "ENS - شركة تطوير البرمجيات وتصميم المواقع الإلكترونية",
    description: "ENS - شركة متخصصة في تطوير البرمجيات وتصميم المواقع الإلكترونية والتطبيقات باستخدام أحدث التقنيات",
    type: "website",
    locale: "ar_EG",
    alternateLocale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true}>
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const path = window.location.pathname;
                const locale = path.split('/')[1];
                const validLocales = ['ar', 'en'];
                const finalLocale = validLocales.includes(locale) ? locale : 'ar';
                const dir = finalLocale === 'ar' ? 'rtl' : 'ltr';
                document.documentElement.setAttribute('lang', finalLocale);
                document.documentElement.setAttribute('dir', dir);
                document.body.setAttribute('dir', dir);
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${urbanist.variable} ${nunito.variable} ${cairo.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
