import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import productFrame from "@/assets/product-frame.jpg";
import productTote from "@/assets/product-tote.jpg";
import productBookmark from "@/assets/product-bookmark.jpg";
import productLettering from "@/assets/product-lettering.jpg";
import aboutWorkspace from "@/assets/about-workspace.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      image: productFrame,
      title: "Love Quote Frame",
      category: "Framed Quotes",
    },
    {
      image: productTote,
      title: "Motivational Tote",
      category: "Tote Bags",
    },
    {
      image: productBookmark,
      title: "Literary Bookmarks",
      category: "Bookmarks",
    },
    {
      image: productLettering,
      title: "Custom Name Art",
      category: "Lettering",
    },
    {
      image: aboutWorkspace,
      title: "Workspace Setup",
      category: "Behind the Scenes",
    },
    {
      image: productFrame,
      title: "Inspirational Quote",
      category: "Framed Quotes",
    },
    {
      image: productTote,
      title: "Poetry Tote Bag",
      category: "Tote Bags",
    },
    {
      image: productLettering,
      title: "Wedding Calligraphy",
      category: "Lettering",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-16 px-4 bg-gradient-warm">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Gallery
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our collection of handcrafted pieces and customer favorites
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 aspect-square animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="font-sans text-xs text-accent uppercase tracking-wider mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-xl font-semibold text-primary-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-4">
            Follow Our Journey
          </h2>
          <p className="font-sans text-muted-foreground mb-6">
            See more of our daily creations and behind-the-scenes moments on Instagram
          </p>
          <a
            href="https://instagram.com/inktouched_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-soft font-sans"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @inktouched_
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
