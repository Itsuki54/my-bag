import { Header, Footer } from "@/components/layout";
import { NextAuthProvider } from "@/provider/session";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import "./globals.css";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession(authOptions);

	return (
		<html lang="ja">
			<body>
				<NextAuthProvider session={session}>
					<div className="min-h-screen flex flex-col">
						<Header user={session?.user} />
						<main className="flex-grow">
							{children}
						</main>
						<Footer />
					</div>
				</NextAuthProvider>
			</body>
		</html>
	);
}