import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";

export const metadata = {
  title: "My Website",
  description: "Next.js App Router Example with Pure CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
