import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex h-full">
      <div className="left-side border-2 border-red-500">
        <Image src="/vercel.svg" alt="Linguo" width={200} height={200} />
        <span>Learn, Practice, and master a new language with Linguo</span>
      </div>
      <div className="right-side flex flex-col border-2 border-blue-500">
        <Button variant="secondary">Get Started</Button>
        <Button variant="primaryOutline">I already have an account</Button>
      </div>
    </div>
  );
}
