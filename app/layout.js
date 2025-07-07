import "./globals.css";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
