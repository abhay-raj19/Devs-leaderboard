"use client"
import Image from "next/image";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";
import { Combobox } from "@/components/Combobox"; // Ensure this path is correct

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Home() {
  return (
    <main className={cn("flex min-h-screen flex-col items-center justify-between p-10", fontSans.variable)}>
      <div>
        <div className="text-5xl font-bold justify-center flex">LeaderBoard</div>
        <div className="p-5">
          Check out the top Contributors on our Repos and see where are you?
          Can you make it to the top of the leaderboard?
        </div>
        <div className="flex justify-center">
          <div className="p-4">
            <Combobox displayText="Select Repository" />
          </div>
          <div className="p-4">
            <Combobox displayText="Category" />
          </div>
        </div>
      </div>
    </main>
  );
}
