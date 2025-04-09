import { Heart, Smile, Sparkles, ShoppingBag } from "lucide-react";
import { Feature108 } from "@/components/shadcnblocks-com-feature108"

const demoData = {
  badge: "Ophelia Collection",
  heading: "Cute & Kawaii Products Just For You",
  description: "Discover our adorable designs that make everyday life more sparkly!",
  tabs: [
    {
      value: "tab-1",
      icon: <Heart className="h-auto w-4 shrink-0 fill-pink-500 text-pink-500" />,
      label: "T-Shirts",
      content: {
        badge: "Soft & Comfy",
        title: "Wear your love for cats & anime",
        description:
          "Our premium cotton tees feature vibrant prints of cute cats, anime characters, and dreamy designs. Perfect for school, hangouts, or just feeling extra cute!",
        buttonText: "Browse Tees",
        imageSrc:
          "https://i.pinimg.com/736x/89/f4/9d/89f49d4e81462b94d84464e785dd911f.jpg",
        imageAlt: "Ophelia cute cat t-shirt",
      },
    },
    {
      value: "tab-2",
      icon: <Sparkles className="h-auto w-4 shrink-0 fill-pink-500 text-pink-500" />,
      label: "Phone Cases",
      content: {
        badge: "Protect in Style",
        title: "Show off your kawaii aesthetic",
        description:
          "Keep your phone safe with our durable cases featuring blushing anime girls, pastel cats, and glittery designs. Fits most smartphone models!",
        buttonText: "See Cases",
        imageSrc:
          "https://i.pinimg.com/736x/79/13/75/791375832ec3844f89f35c172e40547a.jpg",
        imageAlt: "Ophelia cute phone case",
      },
    },
    {
      value: "tab-3",
      icon: <Smile className="h-auto w-4 shrink-0 fill-pink-500 text-pink-500" />,
      label: "Stickers",
      content: {
        badge: "Express Yourself",
        title: "Decorate your world with cuteness",
        description:
          "High-quality vinyl stickers perfect for laptops, water bottles, journals, and more! Mix and match our cat, anime, and aesthetic sticker packs.",
        buttonText: "View Stickers",
        imageSrc:
          "https://i.pinimg.com/736x/da/bf/5d/dabf5dd50fe18ce38514e555ddeb822f.jpg",
        imageAlt: "Ophelia sticker collection",
      },
    },
    {
      value: "tab-4",
      icon: <ShoppingBag className="h-auto w-4 shrink-0 fill-pink-500 text-pink-500" />,
      label: "More Goodies",
      content: {
        badge: "Complete Your Look",
        title: "Find matching accessories",
        description:
          "Explore our full collection including tote bags, laptop sleeves, and notebooks - all featuring our signature cute designs!",
        buttonText: "See All",
        imageSrc:
          "https://i.pinimg.com/736x/84/ad/8c/84ad8c329e2c169e8e8d91dc088bf28c.jpg",
        imageAlt: "Ophelia product collection",
      },
    },
  ],
};

function Feature108Demo() {
  return <Feature108 {...demoData} />;
}

export { Feature108Demo };