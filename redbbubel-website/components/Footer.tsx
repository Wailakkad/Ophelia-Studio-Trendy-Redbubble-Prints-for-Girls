"use client";

import Link from "next/link";
import { DIcons } from "dicons";
import ThemeToogle from "@/components/ui/footer";

const navigation = {
  categories: [
    {
      id: "products",
      name: "Products",
      sections: [
        {
          id: "shop",
          name: "Shop",
          items: [
            { name: "T-Shirts", href: "/products/t-shirts" },
            { name: "Stickers", href: "/products/stickers" },
            { name: "Phone Cases", href: "/products/phone-cases" },
            { name: "Tote Bags", href: "/products/tote-bags" },
            { name: "Mugs", href: "/products/mugs" },
          ],
        },
        {
          id: "collections",
          name: "Collections",
          items: [
            { name: "New Arrivals", href: "/collections/new" },
            { name: "Best Sellers", href: "/collections/bestsellers" },
            { name: "Seasonal", href: "/collections/seasonal" },
          ],
        },
      ],
    },
    {
      id: "help",
      name: "Help",
      sections: [
        {
          id: "customer-service",
          name: "Customer Service",
          items: [
            { name: "Shipping Info", href: "/help/shipping" },
            { name: "Returns & Exchanges", href: "/help/returns" },
            { name: "Size Guide", href: "/help/size-guide" },
            { name: "Contact Us", href: "/contact" },
          ],
        },
        {
          id: "about-orders",
          name: "About Orders",
          items: [
            { name: "Track Order", href: "/account/orders" },
            { name: "FAQ", href: "/help/faq" },
            { name: "Custom Orders", href: "/help/custom-orders" },
          ],
        },
      ],
    },
    {
      id: "company",
      name: "Company",
      sections: [
        {
          id: "about",
          name: "About Us",
          items: [
            { name: "Our Story", href: "/about" },
            { name: "Sustainability", href: "/about/sustainability" },
            { name: "Blog", href: "/blog" },
          ],
        },
        {
          id: "policies",
          name: "Policies",
          items: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Cookie Policy", href: "/cookies" },
          ],
        },
      ],
    },
  ],
};

const Underline = `hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform`;

export function Footer() {
  return (
    <footer className="border-ali/20 :px-4 mx-auto w-full border-b border-t px-2">
      <div className="relative mx-auto grid max-w-7xl items-center justify-center gap-6 p-10 pb-0 md:flex">
        <Link href="/">
          <p className="flex items-center justify-center rounded-full">
            <DIcons.Designali className="w-8 text-red-600" />
          </p>
        </Link>
        <p className="bg-transparent text-center text-xs leading-4 text-primary/60 md:text-left">
          Welcome to our boutique print-on-demand store for girls! We specialize in
          creating unique, high-quality t-shirts, stickers, and phone cases that
          let you express your personal style. All our products are made with love
          and printed on demand just for you.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="border-b border-dotted"></div>
        <div className="py-10">
          <div className="flex flex-wrap justify-center gap-10">
            {navigation.categories.flatMap(category => 
              category.sections.flatMap(section => 
                section.items.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-black dark:text-slate-400 hover:dark:text-white"
                  >
                    {item.name}
                  </Link>
                ))
              )
            )}
          </div>
        </div>
        <div className="border-b border-dotted"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <Link
            aria-label="Instagram"
            href="https://www.instagram.com/yourstore"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Instagram className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Facebook"
            href="https://www.facebook.com/yourstore"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Facebook className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Pinterest"
            href="https://www.pinterest.com/yourstore"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.X className="h-5 w-5" />
          </Link>
          <Link
            aria-label="TikTok"
            href="https://www.tiktok.com/@yourstore"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.LinkedIn className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-1 text-slate-600 dark:text-slate-400">
          <span>©</span>
          <span>{new Date().getFullYear()}</span>
          <span>Your Store Name. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}