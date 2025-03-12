import "./globals.css";

export const metadata = {
  title: "Estee PMS | PortFolio Management Services",
  description:
    "Estee offers portfolio management services built on systematic investing approach. We incorporate investing insights in our products by tracking markets, fundamentals, technicals, and macro economic conditions.",
  keywords:
    "investing, stocks, equities, debt, fixed-income, macro, personal finance, Gulaq, Estee Advisors, Estee, Vivek Sharma, Sandeep Tyagi, indian economy, systematic investing, building wealth, wealth management, portfolio management services, PMS, equity investments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
