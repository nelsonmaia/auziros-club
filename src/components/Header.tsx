import { auth0 } from "@/lib/auth0";
import Image from "next/image";

export default async function Header() {
  const { user } = await auth0.getSession();

  return (
<header className="h-[64px] bg-[#0b0c2a] text-white px-6 flex justify-between items-center">

  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <div className="flex gap-6 text-sm font-medium">
      <a href="#">Discover</a>
      <a href="#">Book</a>
      <a href="#">Manage</a>
      <a href="#">Help</a>
      <a href="#">Search</a>
    </div>
    <Image
  src="/auth0-club-logo-transparent.png"
  alt="Logo"
  width={110}
  height={48}
  className="object-contain px-4"
/>

    <div className="flex items-center gap-4 text-sm">
      <span>{user?.nickname}</span>
      <a href="/auth/logout" className="border px-4 py-1 rounded">Log out</a>
      <Image src={user?.picture ?? '/default-avatar.png'} width={32} height={32} className="rounded-full" alt="Profile" />
    </div>
  </div>
</header>

  );
}
