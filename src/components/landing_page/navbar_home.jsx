import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import { LanguageDropdown } from "../layout/languageDropdown";

const NavbarHome = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <header className="header-container">
      <nav className="header-left">
        <div className="header-item">Welcome!</div>
      </nav>

      <nav className="header-right">
        <LanguageDropdown />
        <div className="header-item">
          {user ? (
            <UserButton />
          ) : (
            <Button
              onClick={() => openSignIn({ redirectUrl: "/user" })}
              type="main"
              colorVariant="primary"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavbarHome;
