"use client"
import Image from "next/image";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";

import SelectForm from "@/components/SelectForm";

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
          <div className="">
            <SelectForm/>
          </div>
          
        </div>
      </div>
    </main>
  );
}
