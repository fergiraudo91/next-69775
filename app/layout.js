import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aplicación de coderhouse",
  description: "Aplicación hecha en next por estudiantes de codehouse",
  openGraph: {
    title: "E commerce coderhouse",
    description: "Este es un eccomerce hecho con next",
    type: "article",
  },
};

// export async function generateMetadata({params}){
//   const id = params.id;
//   const info = await fetch(`http://.../${id}`).then(( rel => rel.json()));
//   return {
//     title: info.title,
//     description: info.description
//   }

// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow p-3">{children}</main>
              <Footer />
            </div>
          </CartProvider>
        </AuthProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
