import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Estee PMS | Portfolio Management Services",
  description:
    "Estee offers portfolio management services built on systematic investing approach. We incorporate investing insights in our products by tracking markets, fundamentals, technicals, and macro economic conditions.",
  keywords:
    "investing, stocks, equities, debt, fixed-income, macro, personal finance, Gulaq, Estee Advisors, Estee, Vivek Sharma, Sandeep Tyagi, indian economy, systematic investing, building wealth, wealth management, portfolio management services, PMS, equity investments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        {/* Google tag (gtag.js) */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-TC1EEMSJD8" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TC1EEMSJD8');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
