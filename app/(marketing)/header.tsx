import Image from "next/image";
import { ClerkLoading } from "@clerk/nextjs";
const Header = () => {
  return (
    <header className="w-full border-b-2 border-slate-200 px-4">
      <div>
        <div id="linguo-logo">
          <Image
            src="/logo-placeholder-image.png"
            alt="Linguo"
            width={50}
            height={50}
          />
          <h1>Linguo</h1>
        </div>
        <ClerkLoading></ClerkLoading>
      </div>
    </header>
  );
};

export default Header;
