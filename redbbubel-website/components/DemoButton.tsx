import { GradientButton } from "@/components/ui/gradient-button"
import { MoveRight } from "lucide-react";


function Demo() {
  return (
    <div className="flex gap-8">
      <GradientButton className="flex items-center justify-center gap-3">Shop Now  <MoveRight className="w-4 h-4" /></GradientButton>
    </div>
  )
}

export { Demo }