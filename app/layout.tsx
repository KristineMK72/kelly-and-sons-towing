import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Kelly & Sons Towing",
  description: "24/7 Emergency Towing & Recovery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
