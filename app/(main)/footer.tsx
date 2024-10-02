import Image from "next/image";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return (
    <footer className="hidden w-full border-t-2 border-slate-200 px-4 py-2 lg:block">
      <div className="footer-container mx-auto flex h-full items-center justify-between py-2 lg:max-w-screen-lg">
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
        <Button size="lg" variant="ghost">
          <Image
            src="/flags/jp.svg"
            alt="Japan"
            width={20}
            height={20}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
        <Button size="lg" variant="ghost">
          <Image
            src="/flags/mx.svg"
            alt="Mexico"
            width={20}
            height={20}
            className="mr-4 rounded-md"
          />
          Mexican Spanish
        </Button>
        <Button size="lg" variant="ghost">
          <Image
            src="/flags/tr.svg"
            alt="Turkey"
            width={20}
            height={20}
            className="mr-4 rounded-md"
          />
          Turkish
        </Button>
        <Button size="lg" variant="ghost">
          <Image
            src="/flags/tw.svg"
            alt="Taiwan"
            width={20}
            height={20}
            className="mr-4 rounded-md"
          />
          Mandarin Chinese
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
