// src/app/page.tsx
import { auth0 } from "@/lib/auth0";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth0.getSession();

  if (!session?.user) {
    redirect("/auth/login");
  }

  redirect("/dashboard"); // or show Dashboard content here
}
