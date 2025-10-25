"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="p-4  border-b bg-secondary">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link className="font-bold text-xl" href="/">
            Portfolio
          </Link>
          <NavigationMenu viewport={isMobile}>
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/work">Work</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
