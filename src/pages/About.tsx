import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Pen, Sparkles } from "lucide-react";
import aboutWorkspace from "@/assets/about-workspace.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Story
          </h1>
          <p className="font-script text-2xl md:text-3xl text-accent mb-8">
            We Write for You 💫
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <img
                src={aboutWorkspace}
                alt="Calligraphy workspace"
                className="rounded-2xl shadow-hover w-full"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-serif text-3xl font-bold text-primary">
                The Art of Personal Expression
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Inktouched was born from a love of handwritten words and the belief that 
                personalized gifts carry more meaning than anything you can buy off the shelf.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Every piece we create is carefully crafted by hand, transforming your chosen 
                words into beautiful artwork that speaks from the heart. Whether it's a 
                meaningful quote, a special message, or a cherished memory, we bring your 
                vision to life with ink and artistry.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-2xl bg-muted/30 shadow-soft animate-scale-in">
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                Made with Love
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                Every piece is handcrafted with care and attention to detail, ensuring quality you can feel.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-muted/30 shadow-soft animate-scale-in" style={{ animationDelay: "100ms" }}>
              <Pen className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                Personalized Touch
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                Your words, your style, your vision. We work closely with you to create something truly unique.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-muted/30 shadow-soft animate-scale-in" style={{ animationDelay: "200ms" }}>
              <Sparkles className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                Timeless Quality
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                Using premium materials and timeless techniques to create gifts that last a lifetime.
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="bg-gradient-warm rounded-2xl p-8 md:p-12 animate-fade-in">
            <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
              Our Creative Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-primary font-serif font-bold flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h4 className="font-sans font-semibold text-primary mb-2">Share Your Vision</h4>
                <p className="font-sans text-sm text-muted-foreground">
                  Tell us your quote, message, or idea
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-primary font-serif font-bold flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h4 className="font-sans font-semibold text-primary mb-2">Design & Preview</h4>
                <p className="font-sans text-sm text-muted-foreground">
                  We create a custom design for your approval
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-primary font-serif font-bold flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h4 className="font-sans font-semibold text-primary mb-2">Handcraft</h4>
                <p className="font-sans text-sm text-muted-foreground">
                  Each piece is carefully made by hand
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-primary font-serif font-bold flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h4 className="font-sans font-semibold text-primary mb-2">Deliver</h4>
                <p className="font-sans text-sm text-muted-foreground">
                  Your gift arrives ready to cherish
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
