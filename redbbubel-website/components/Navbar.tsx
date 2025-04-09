"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <Link href="/" className="text-neutral-700 hover:text-black dark:text-neutral-200 dark:hover:text-white">
          Home
        </Link>
        {/* Only Shop will have the dropdown */}
        <MenuItem setActive={setActive} active={active} item="Shop">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Cute T-Shirts"
              href="/products/t-shirts"
              src="https://i.pinimg.com/736x/89/f4/9d/89f49d4e81462b94d84464e785dd911f.jpg"
              description="Adorable designs perfect for girls of all ages"
            />
            <ProductItem
              title="Fun Stickers"
              href="/products/stickers"
              src="https://i.pinimg.com/736x/da/bf/5d/dabf5dd50fe18ce38514e555ddeb822f.jpg"
              description="Decorate your belongings with our unique stickers"
            />
            <ProductItem
              title="Phone Cases"
              href="/products/phone-cases"
              src="https://i.pinimg.com/736x/79/13/75/791375832ec3844f89f35c172e40547a.jpg"
              description="Protect your phone in style with our cute cases"
            />
            <ProductItem
              title="Laptop Decals"
              href="/products/laptop-decals"
              src="https://i.pinimg.com/736x/84/ad/8c/84ad8c329e2c169e8e8d91dc088bf28c.jpg"
              description="Personalize your laptop with our girly designs"
            />
          </div>
        </MenuItem>
        
        {/* Other menu items as simple links */}
        <Link href="/pages/AboutPage" className="text-neutral-700 hover:text-black dark:text-neutral-200 dark:hover:text-white">
          About
        </Link>
        
        <Link href="/qa" className="text-neutral-700 hover:text-black dark:text-neutral-200 dark:hover:text-white">
          Q&A
        </Link>
        
        <Link href="/contact" className="text-neutral-700 hover:text-black dark:text-neutral-200 dark:hover:text-white">
          Contact
        </Link>
      </Menu>
    </div>
  );
}