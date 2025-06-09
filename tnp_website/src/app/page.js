import Image from "next/image";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f6fa] flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#3a4eb1] text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo Placeholder */}
          <Image src="/rgipt-logo.png" alt="RGIPT Logo" width={50} height={50} className="rounded-full aspect-square bg-white p-0.5" />
          <span className="text-2xl font-semibold">Placement Cell, RGIPT</span>
        </div>
        <ul className="hidden md:flex gap-8 text-base font-medium">
          <li><a href="#" className="hover:underline">Overview</a></li>
          <li><a href="#" className="hover:underline">Why Recruit</a></li>
          <li><a href="#" className="hover:underline">For Alumni</a></li>
          <li><a href="#" className="hover:underline">Recruitment Process</a></li>
          <li><a href="#" className="hover:underline">Academics</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
        </ul>
        {/* Mobile menu placeholder (optional) */}
      </nav>

      {/* Main Section */}
      <main className="flex-1 flex flex-col items-center justify-start px-4 py-10">
        <section className="w-full max-w-6xl flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Card 1: Student */}
          <div className="bg-white rounded-xl shadow-md flex flex-col items-center p-8 w-full md:w-1/3 transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
            {/* Icon: Student PNG */}
            <div className="mb-4">
              <Image src="https://img.icons8.com/?size=100&id=79387&format=png&color=3a4eb1" alt="Student Icon" width={48} height={48} />
            </div>
            <span className="text-lg font-medium text-[#3a4eb1]">Student</span>
          </div>
          {/* Card 2: Recruiter */}
          <div className="bg-white rounded-xl shadow-md flex flex-col items-center p-8 w-full md:w-1/3 transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
            <div className="mb-4">
              <Image src="https://img.icons8.com/?size=100&id=YRfRzNUDwNRJ&format=png&color=3a4eb1" alt="Recruiter Icon" width={48} height={48} />
            </div>
            <span className="text-lg font-medium text-[#3a4eb1]">Recruiter</span>
          </div>
          {/* Card 3: Coordinator */}
          <div className="bg-white rounded-xl shadow-md flex flex-col items-center p-8 w-full md:w-1/3 transition-transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
            <div className="mb-4">
              <Image src="https://img.icons8.com/?size=100&id=rA8uLAjVcwl8&format=png&color=3a4eb1" alt="Coordinator Icon" width={48} height={48} />
            </div>
            <span className="text-lg font-medium text-[#3a4eb1]">Coordinator</span>
          </div>
        </section>
      </main>
    </div>
  );
}
