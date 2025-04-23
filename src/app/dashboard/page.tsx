import { auth0 } from "@/lib/auth0";
import Image from "next/image";

export default async function DashboardPage() {
  const session = await auth0.getSession();
  const user = session?.user;


  return (
    <div className="bg-[#f6f6f6] w-screen min-h-screen overflow-x-hidden">
      {/* Full-width orange hero */}
      <div className="bg-gradient-to-b from-[#aa3a19] to-[#c64d1f] text-white py-12 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-center sm:text-left">
          <h1 className="text-4xl sm:text-hero font-bold mb-4 leading-tight sm:leading-snug">
            Your Auziros Club account
          </h1>
          <p className="text-sm sm:text-base">
            <span className="inline-block bg-white text-black px-2 py-0.5 rounded text-sm font-semibold mr-2">
              Bronze Member
            </span>
            Membership number: <strong>AO-123456789</strong>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 text-center">
            <div className="bg-white text-black rounded-lg p-6 shadow-md min-h-[110px] flex flex-col justify-center">
              <p className="text-3xl font-bold">14,200</p>
              <p className="text-sm text-gray-600 mt-1">Your Auziros</p>
            </div>
            <div className="bg-white text-black rounded-lg p-6 shadow-md min-h-[110px] flex flex-col justify-center">
              <p className="text-3xl font-bold">22,100</p>
              <p className="text-sm text-gray-600 mt-1">Household Auziros</p>
            </div>
            <div className="bg-white text-black rounded-lg p-6 shadow-md min-h-[110px] flex flex-col justify-center">
              <p className="text-3xl font-bold">0</p>
              <p className="text-sm text-gray-600 mt-1">Tier Points</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <nav className="bg-white border-b w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 overflow-x-auto">
          <ul className="flex gap-8 py-4 text-auziros-blue font-medium text-sm whitespace-nowrap">
            <li className="border-b-2 border-auziros-blue pb-2">Your trips</li>
            <li className="hover:text-auziros-blue cursor-pointer">Your profile</li>
            <li className="hover:text-auziros-blue cursor-pointer">Membership</li>
          </ul>
        </div>
      </nav>

      {/* Trips section */}
      <section className="bg-[#f9f9f9] py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <h2 className="text-2xl font-semibold text-auziros-blue mb-3">Your upcoming trips</h2>
          <p className="text-gray-600 mb-6">You have no upcoming trips.</p>

          <button className="border border-auziros-blue text-auziros-blue px-6 py-2 rounded hover:bg-auziros-blue hover:text-white transition text-sm">
            View all trips
          </button>

          <p className="text-sm mt-4 text-blue-700 underline cursor-pointer">
            Don’t see your trip?
          </p>
        </div>
      </section>
    </div>
  );
}
