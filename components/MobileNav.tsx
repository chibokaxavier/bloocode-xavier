"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const MobileNav = () => {
  const links = [
    {
        name: "Home",
        path: "/",
      },
      {
        name: "Furnitures",
        path: "/furnitures",
      },
      {
        name: "Beauty",
        path: "/beauty",
      },
      {
        name: "Fragrances",
        path: "/fragrances",
      },
      {
        name: "Groceries",
        path: "/groceries",
      },
  ];
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="tetx-4xl font-semibold">
              BlooCodeTech<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col space-y-8 items-center justify-center">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathName &&
                  "text-yellow-600 border-b-2 border-yellow-600"
                } text-xl capitalize hover:text-yellow-600 transition-all `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
