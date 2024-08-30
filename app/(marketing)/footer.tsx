import Image from "next/image";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return (
    <footer className="hidden w-full border-t-2 border-slate-200 px-4 py-2 lg:block">
      <div className="">
        <Button size="lg" variant="ghost">
          <Image
            src="/flags/ph.svg"
            alt="Philippines"
            width={20}
            height={20}
            className="mr-4 rounded-md"
          />
          Tagalog
        </Button>
        {/* 5 flags */}
      </div>
    </footer>
  );
};

export default Footer;
