import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import productFrame from "@/assets/product-frame.jpg";
import productTote from "@/assets/product-tote.jpg";
import productBookmark from "@/assets/product-bookmark.jpg";
import productLettering from "@/assets/product-lettering.jpg";

const Shop = () => {
  const products = [
    {
      title: "Framed Quotes - Classic",
      image: productFrame,
      price: "LKR 2,500",
      category: "Wall Art",
      slug: "framed-quotes-classic",
    },
    {
      title: "Framed Quotes - Premium",
      image: productFrame,
      price: "LKR 3,500",
      category: "Wall Art",
      slug: "framed-quotes-premium",
    },
    {
      title: "Cotton Tote Bag",
      image: productTote,
      price: "LKR 1,800",
      category: "Accessories",
      slug: "cotton-tote",
    },
    {
      title: "Canvas Tote Bag",
      image: productTote,
      price: "LKR 2,200",
      category: "Accessories",
      slug: "canvas-tote",
    },
    {
      title: "Paper Bookmarks (Set of 3)",
      image: productBookmark,
      price: "LKR 500",
      category: "Stationery",
      slug: "paper-bookmarks",
    },
    {
      title: "Leather Bookmarks",
      image: productBookmark,
      price: "LKR 900",
      category: "Stationery",
      slug: "leather-bookmarks",
    },
    {
      title: "Custom Quote Lettering",
      image: productLettering,
      price: "From LKR 1,200",
      category: "Art Pieces",
      slug: "quote-lettering",
    },
    {
      title: "Name Calligraphy",
      image: productLettering,
      price: "From LKR 800",
      category: "Art Pieces",
      slug: "name-calligraphy",
    },
  ];

  const categories = ["All", "Wall Art", "Accessories", "Stationery", "Art Pieces"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-16 px-4 bg-gradient-warm">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Products
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of handcrafted personalized gifts
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full font-sans text-sm font-medium border border-border hover:border-accent hover:text-accent transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div key={product.slug} className="animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="font-sans text-muted-foreground mb-6">
            We specialize in custom orders! Share your vision with us and we'll create something uniquely yours.
          </p>
          <a
            href="/custom-orders"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-soft"
          >
            Request Custom Order
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
