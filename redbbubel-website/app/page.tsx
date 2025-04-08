import Image from "next/image";
import { NavbarDemo } from "@/components/Navbar";
import { Hero } from "@/components/ui/hero-with-group-of-images-text-and-two-buttons";
import { CaseDemo } from "@/components/DemoCrousel";
import {GlowingEffectDemo} from "@/components/Category"
import { AnimatedTestimonialsDemo } from "@/components/Show-Cat"; 
import { Footer } from "@/components/Footer";
import { Demo } from "@/components/DemoButton";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-40 px-50">
          <NavbarDemo/>  
          <Hero />
          <CaseDemo />
          <Demo/>
         
         <div className="flex flex-col items-start justify-center gap-8">
          <h1 className="text-5xl font-bold">Category</h1>
          <div>
          <GlowingEffectDemo/>
          <AnimatedTestimonialsDemo/>
          </div>
         </div>
        

    </div>
  );
}
