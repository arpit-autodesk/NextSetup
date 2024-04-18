import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function TopNav(){
    return (
      <nav className="flex w-full items-center justify-between font-semibold text-xl p-4">
        <div>
          Gallery
        </div>
        <div>
            <SignedOut><SignInButton/></SignedOut>
            <SignedIn><UserButton/></SignedIn>
        </div>
      </nav>
    )
  }