import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";

interface Product {
  name: string;
  price: string;
  status: string;
  statusColor: string;
}

interface ProductsListProps {
  products: Product[];
}

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-[#f6f8fc] text-base tracking-[0] leading-5">
          Produtos
        </h3>
        <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent">
          <ChevronRightIcon className="w-5 h-5 text-[#f6f8fc]" />
        </Button>
      </div>

      <div className="space-y-3">
        {products.map((product, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${product.statusColor}`} />
            <div className="flex-1">
              <div className="font-normal text-blue-50 text-sm tracking-[0] leading-5">
                {product.name}
              </div>
            </div>
            <div className="font-semibold text-blue-50 text-sm tracking-[0] leading-5">
              {product.price}
            </div>
            <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent">
              <ExternalLinkIcon className="w-[18px] h-[18px] text-[#f6f8fc]" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
