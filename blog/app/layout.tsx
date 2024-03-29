import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import AuthContext from "@/context/AuthContext";
import getCurrentUser from "./actions/getCurrentUser";
import Navbar from "@/components/shared/Navbar";
import { EdgeStoreProvider } from "@/lib/edgestore";

export const metadata: Metadata = {
  title: "Bento",
  description: "A personal web Blog application",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <html lang="en">
      <AuthContext>
        <EdgeStoreProvider>
          <body className="overflow-x-hidden">
            <Navbar user={user as any} />
            {children}
            <Footer />
          </body>
        </EdgeStoreProvider>
      </AuthContext>
    </html>
  );
}
