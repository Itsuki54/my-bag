import { Session } from "next-auth";

export const getSession = async () => {
  const session = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/session`);
  const data:Session = await session.json();
  return data;
};