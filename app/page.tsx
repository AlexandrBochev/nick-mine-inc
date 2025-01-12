
import { CreateAccount } from "@/components/CreateAccount/CreateAccount"
import { Hero } from "@/components/Hero/Hero"
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="w-full md:h-svh flex items-center container mx-auto py-5 md:py-7.5 text-primary">
      <div className="relative w-full flex flex-col items-end justify-center md:flex-row">
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <CreateAccount />
        </Suspense>
      </div>
    </main>
  );
}
