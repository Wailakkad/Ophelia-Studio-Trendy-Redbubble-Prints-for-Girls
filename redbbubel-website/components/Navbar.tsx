"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

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
        
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about-us">Our Story</HoveredLink>
            <HoveredLink href="/design-process">Design Process</HoveredLink>
            <HoveredLink href="/materials">Materials & Quality</HoveredLink>
            <HoveredLink href="/sustainability">Sustainability</HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Q&A">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/shipping-info">Shipping Info</HoveredLink>
            <HoveredLink href="/returns">Returns & Exchanges</HoveredLink>
            <HoveredLink href="/size-guide">Size Guide</HoveredLink>
            <HoveredLink href="/custom-orders">Custom Orders</HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact-us">Email Us</HoveredLink>
            <HoveredLink href="/social-media">Social Media</HoveredLink>
            <HoveredLink href="/wholesale">Wholesale Inquiries</HoveredLink>
            <HoveredLink href="/collaborations">Collaborations</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}