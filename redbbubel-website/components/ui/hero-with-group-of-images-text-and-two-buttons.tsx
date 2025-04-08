import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { GradientButton } from "@/components/ui/gradient-button"


function Hero() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          {/* Text Content */}
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">New Collection!</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                Dark Feminine Vibes
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Discover our exclusive aesthetic designs perfect for the mystic queen in you. 
                Each piece is crafted to empower your unique style.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4" variant="outline">
                View Collection <MoveRight className="w-4 h-4" />
              </Button>
             
             <GradientButton className="flex items-center justify-center gap-3">Shop Now  <MoveRight className="w-4 h-4" /></GradientButton>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left - Square Image */}
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image
                src="https://i.pinimg.com/736x/5a/7f/1a/5a7f1aa2e735e57b8c4c5851c207738e.jpg"
                alt="Dark feminine t-shirt"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Right - Tall Image */}
            <div className="relative row-span-2 rounded-md overflow-hidden">
              <Image
                src="https://i.pinimg.com/736x/93/ce/bb/93cebb19086392f25be2152734faee07.jpg"
                alt="Featured product"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Bottom Left - Square Image */}
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image
                src="https://i.pinimg.com/736x/3e/87/91/3e87916a3eb1d18d310a43e50933bc52.jpg"
                alt="Phone case design"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };