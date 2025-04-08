"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Sample product images (replace with your actual Redbubble product URLs)
  const productImages = [
    "https://i.pinimg.com/736x/13/61/3f/13613f40dff9d223ebbee0fa38f3ac16.jpg",
    "https://i.pinimg.com/736x/da/43/67/da4367902dc699f1590bb7e435bb9578.jpg",
    "https://i.pinimg.com/736x/a5/bb/b4/a5bbb4685f2af72d0e5e8815e890634c.jpg",
    "https://i.pinimg.com/736x/49/8b/d5/498bd5e0b8b9c1066412d00bb4435b28.jpg",
    "https://i.pinimg.com/736x/84/46/ff/8446ff0a644444d84c8d64fc43f11092.jpg",
    "https://i.pinimg.com/736x/13/61/3f/13613f40dff9d223ebbee0fa38f3ac16.jpg",
    "https://i.pinimg.com/736x/da/43/67/da4367902dc699f1590bb7e435bb9578.jpg",
    "https://i.pinimg.com/736x/a5/bb/b4/a5bbb4685f2af72d0e5e8815e890634c.jpg",
    "https://i.pinimg.com/736x/49/8b/d5/498bd5e0b8b9c1066412d00bb4435b28.jpg",
    "https://i.pinimg.com/736x/84/46/ff/8446ff0a644444d84c8d64fc43f11092.jpg",
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-xl font-bold md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Our Best Selling Products
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {productImages.map((imageUrl, index) => (
                <CarouselItem 
                  className="basis-1/2 md:basis-1/3 lg:basis-1/4" 
                  key={index}
                >
                  <div className="relative rounded-md aspect-square overflow-hidden bg-muted p-2">
                    <Image
                      src={imageUrl}
                      alt={`Product ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      quality={85}
                      priority={index < 3} // Only prioritize first few images
                    />
                    {/* Optional: Add a badge for best sellers */}
                    {index < 5 && (
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-bold">
                        Bestseller
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Case };