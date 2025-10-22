import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Quote, Heart, Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";
import productFrame from "@/assets/product-frame.jpg";
import productTote from "@/assets/product-tote.jpg";
import productBookmark from "@/assets/product-bookmark.jpg";
import productLettering from "@/assets/product-lettering.jpg";

const Home = () => {
  const featuredProducts = [
    {
      title: "Framed Quotes",
      image: productFrame,
      price: "From LKR 2,500",
      category: "Wall Art",
      slug: "framed-quotes",
    },
    {
      title: "Custom Tote Bags",
      image: productTote,
      price: "From LKR 1,800",
      category: "Accessories",
      slug: "tote-bags",
    },
    {
      title: "Handmade Bookmarks",
      image: productBookmark,
      price: "From LKR 500",
      category: "Stationery",
      slug: "bookmarks",
    },
    {
      title: "Custom Lettering",
      image: productLettering,
      price: "From LKR 1,200",
      category: "Art Pieces",
      slug: "custom-lettering",
    },
  ];

  const testimonials = [
    {
      text: "The perfect gift! The handwriting is beautiful and the quality is amazing. Highly recommend!",
      author: "Sarah M.",
    },
    {
      text: "I ordered a custom quote for my best friend's birthday. She absolutely loved it. Thank you Inktouched!",
      author: "Priya L.",
    },
    {
      text: "Beautiful work and great customer service. Will definitely order again!",
      author: "Nadeem R.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
          <h1 className="font-script text-5xl md:text-7xl text-primary mb-4">
            We Write for You
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-accent" />
          </div>
          <p className="font-sans text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Transform your words into beautiful, personalized gifts. Handwritten quotes, artwork, and calligraphy crafted with love in Sri Lanka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft">
                Explore Products
              </Button>
            </Link>
            <Link to="/custom-orders">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Create Custom Gift
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 container mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <Quote className="h-10 w-10 text-accent mx-auto mb-4" />
          <p className="font-sans text-lg text-muted-foreground leading-relaxed">
            At Inktouched, we believe that every word holds meaning and every gift should tell a story. 
            Each piece is carefully handcrafted to capture your emotions and create lasting memories.
          </p>
          <Link to="/about">
            <Button variant="link" className="mt-4 text-accent hover:text-accent/80">
              Learn More About Us →
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Collections
            </h2>
            <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
              Discover our handcrafted gifts, each designed to make your moments unforgettable
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.slug} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <Heart className="h-10 w-10 text-accent mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              Loved by Our Customers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Quote className="h-6 w-6 text-accent mb-4" />
                <p className="font-sans text-sm text-foreground/80 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-sans text-sm font-semibold text-primary">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-accent">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to Create Something Special?
          </h2>
          <p className="font-sans text-lg text-foreground/80 mb-8">
            Let us bring your words to life with our personalized calligraphy and artwork
          </p>
          <Link to="/custom-orders">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft">
              Start Your Custom Order
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
