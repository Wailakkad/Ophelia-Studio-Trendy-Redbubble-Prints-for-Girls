"use client"
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      { text: "kawaii", icon: <Heart className="w-6 h-6 inline ml-2 fill-pink-500 text-pink-500" /> },
      { text: "purr-fect", icon: <Heart className="w-6 h-6 inline ml-2 fill-pink-500 text-pink-500" /> },
      { text: "anime-core", icon: <Heart className="w-6 h-6 inline ml-2 fill-pink-500 text-pink-500" /> },
      { text: "cat-approved", icon: <Heart className="w-6 h-6 inline ml-2 fill-pink-500 text-pink-500" /> },
      { text: "sparkly", icon: <Heart className="w-6 h-6 inline ml-2 fill-pink-500 text-pink-500" /> }
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Meet our new collection <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Ophelia brings you</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold flex items-center"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title.text}
                    {title.icon}
                  </motion.span>
                ))}
              </span>
              <span>girl power designs</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Welcome to Ophelia—where cute cats, anime magic, and girly vibes come to life on tees, stickers & phone cases! Each design is made to bring a smile to your face.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline">
              Shop now <MoveRight className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4 bg-pink-500 hover:bg-pink-600">
              Get started <Heart className="w-4 h-4 fill-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };