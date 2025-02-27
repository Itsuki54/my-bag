import { Footer, Header } from "@/components/layout";
import { NextAuthProvider } from "@/provider/session";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="ja">
      <body>
        <NextAuthProvider session={session}>
          <div className="min-h-screen flex flex-col">
            <Header user={session?.user} />
            <main className="flex-grow container mx-auto">
              {children}
            </main>
            <Toaster />
            <Footer />
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
