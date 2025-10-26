"use client";

import { useIsMobile } from "@/core/hooks/use-mobile";
import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="p-4 h-16 fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b bg-secondary/50">
      <div className="container mx-auto flex h-full justify-between items-center">
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
