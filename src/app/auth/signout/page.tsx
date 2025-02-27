import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SignoutButton } from "@/components/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  return (
    <div>
      ログアウトします
      <SignoutButton />
    </div>
  );
}
