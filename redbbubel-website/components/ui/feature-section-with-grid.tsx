import { Badge } from "@/components/ui/badge";
import { DATA } from "@/DATA_PRODUCTS/data"; // Import the data
import { GradientButton } from "@/components/ui/gradient-button"


function Feature() {
  // Filter the data to include only items with type "T-shirts"
  const tShirts = DATA.filter((product) => product.type === "T-shirts");

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Platform</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Something new!
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Managing a small business today is already tough.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Map over the filtered T-shirts data */}
            {tShirts.map((product) => (
              <div key={product.id} className="flex flex-col gap-2">
                <div
                  className="bg-muted rounded-md  mb-2"
                  style={{
                    backgroundImage: `url(${product.imageSrc})`,
                    backgroundSize: "contain", // Preserve the original aspect ratio
                    backgroundRepeat: "no-repeat", 
                    backgroundPosition: "center",
                    height : "500px",
                  

                  }}
                ></div>
                <h3 className="text-xl tracking-tight">{product.tittle}</h3>
                {/* <p className="text-muted-foreground text-base">
                  {product.description}
                </p> */}
              <GradientButton className="flex items-center justify-center gap-3"> <a
                  href={product.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white e"
                >
                  View Product
                </a></GradientButton>

                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };