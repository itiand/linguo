import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="left-side flex flex-col items-center justify-center border-2 border-red-500">
        <Image src="/vercel.svg" alt="Linguo" width={200} height={200} />
      </div>
      <div className="right-side flex flex-col items-center justify-center border-2 border-blue-500">
        <h1 className="mb-2 max-w-[480px] text-center text-2xl font-bold text-neutral-600 lg:text-3xl">
          Learn, Practice, and master a new language with Linguo
        </h1>
        <div className="flex max-w-[330px] flex-col gap-2 border-2 border-green-500">
          <Button variant="secondary">Get Started</Button>
          <Button variant="primaryOutline">I already have an account</Button>
        </div>
      </div>
    </div>
  );
}
