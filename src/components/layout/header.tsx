"use client";

import Image from "next/image";
import Link from "next/link";

type user =
  | {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    uid: string;
  }
  | undefined;

export const Header = ({ user }: { user: user }) => (
  <header className="bg-primary text-white">
    <div className="container mx-auto flex items-center justify-between py-2 px-6">
      <h1 className="text-lg font-bold text-center grow">ネイル図鑑</h1>
      <nav className="flex gap-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        {user
          ? (
            <Link href="/mypage" className="hover:underline">
              <Image
                // biome-ignore lint/style/noNonNullAssertion: <explanation>
                src={user!.image!}
                // biome-ignore lint/style/noNonNullAssertion: <explanation>
                alt={user!.name!}
                width={32}
                height={32}
                className="rounded-full"
              />
            </Link>
          )
          : (
            <Link href="/auth/signin" className="hover:underline">
              Login
            </Link>
          )}
      </nav>
    </div>
  </header>
);
