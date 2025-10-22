import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

interface ProductCardProps {
  title: string;
  image: string;
  price?: string;
  category: string;
  slug: string;
}

const ProductCard = ({ title, image, price, category, slug }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-[1.02]">
      <div className="aspect-square overflow-hidden bg-muted/30">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-4 space-y-2">
        <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
          {category}
        </p>
        <h3 className="font-serif text-lg font-semibold text-primary">
          {title}
        </h3>
        {price && (
          <p className="font-sans text-sm font-medium text-accent">
            {price}
          </p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/custom-orders?product=${slug}`} className="w-full">
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
            Customize Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
