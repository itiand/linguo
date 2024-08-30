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
    <header className="w-full border-b-2 border-slate-200 px-4">
      <div>
        {/* left side */}
        <div id="linguo-logo" className="header-left">
          <Image
            src="/logo-placeholder-image.png"
            alt="Linguo"
            width={50}
            height={50}
          />
          <h1>Linguo</h1>
        </div>

        {/* right side */}
        <div className="header-right">
          <ClerkLoading>
            <Loader />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <span>I am signed in</span>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal" afterSignInUrl="/learn">
                <Button>Login</Button>
              </SignInButton>
              <span>I am signed out</span>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};

export default Header;
