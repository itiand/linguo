import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="header-container mx-auto flex h-full items-center justify-between py-2 lg:max-w-screen-lg">
        {/* left side */}
        <div id="linguo-logo" className="header-left flex items-center gap-x-2">
          <Image
            src="/logo-placeholder-image.png"
            alt="Linguo"
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-bold tracking-wide text-[var(--linguo-green)]">
            Linguo
          </h1>
        </div>

        {/* right side */}
        <div className="header-right">
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button size="lg" variant="ghost">
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};

export default Header;
