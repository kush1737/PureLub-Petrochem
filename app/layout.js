import "./globals.css";

export const metadata = {
  title: "PureLub Petrochem | Lubricants and fluids",
  description:
    "PureLub Petrochem supplies engine oils, industrial lubricants, greases and diesel exhaust fluid for vehicles, fleets and industry.",
};

export const viewport = { themeColor: "#0a1726" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
