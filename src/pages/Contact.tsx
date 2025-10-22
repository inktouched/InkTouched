import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-16 px-4 bg-gradient-warm">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Get in Touch
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you! Reach out with questions, custom requests, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <a
              href="mailto:hello@inktouched.com"
              className="group bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-[1.02] animate-fade-in"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                    Email Us
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground mb-2">
                    For general inquiries and custom orders
                  </p>
                  <p className="font-sans text-sm font-medium text-accent">
                    hello@inktouched.com
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                    WhatsApp
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground mb-2">
                    Quick questions and instant quotes
                  </p>
                  <p className="font-sans text-sm font-medium text-accent">
                    +94 77 123 4567
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://instagram.com/inktouched_"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                  <Instagram className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                    Instagram
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground mb-2">
                    Follow us for daily inspiration
                  </p>
                  <p className="font-sans text-sm font-medium text-accent">
                    @inktouched_
                  </p>
                </div>
              </div>
            </a>

            <div className="group bg-card border border-border rounded-2xl p-8 shadow-soft animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                    Location
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground mb-2">
                    Based in Colombo, Sri Lanka
                  </p>
                  <p className="font-sans text-sm font-medium text-accent">
                    Island-wide delivery available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                How do I place a custom order?
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                Simply fill out our custom order form, or reach out via WhatsApp or email with your requirements. We'll guide you through the process and create a preview before finalizing.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                What's the typical processing time?
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                Standard orders take 5-7 business days to complete. Rush orders may be available for an additional fee. Delivery within Colombo takes 2-3 days.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                Do you ship internationally?
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                Currently, we offer island-wide delivery within Sri Lanka. For international orders, please contact us directly to discuss shipping options.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                What payment methods do you accept?
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                We accept bank transfers and mobile payment apps. Payment is required upon design approval before we proceed with production.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                Can I return or exchange an item?
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                Since all our items are custom-made to order, we don't accept returns or exchanges unless there's a defect or error on our part. We'll always share a preview before finalizing to ensure you're happy with the design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-4">
            Ready to Start Your Order?
          </h2>
          <p className="font-sans text-muted-foreground mb-6">
            Let's create something beautiful together
          </p>
          <a href="/custom-orders">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft">
              Place Custom Order
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
