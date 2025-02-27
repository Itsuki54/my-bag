import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function MypagePage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return (
    <div>
      <h1>マイページ</h1>
      <p>{session.user?.name}</p>
      <Link href="/auth/signout">ログアウト</Link>
    </div>
  );
}
