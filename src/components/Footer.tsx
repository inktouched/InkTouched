import { Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-script text-3xl text-primary">Inktouched</h3>
            <p className="font-sans text-sm text-muted-foreground">
              We Write for You 💫
            </p>
            <p className="font-sans text-sm text-muted-foreground">
              Handcrafted personalized gifts with love in Sri Lanka.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-primary">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/shop" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                Shop
              </Link>
              <Link to="/custom-orders" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                Custom Orders
              </Link>
              <Link to="/gallery" className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-primary">Connect With Us</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/inktouched_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform" />
                @inktouched_
              </a>
              <a
                href="mailto:hello@inktouched.com"
                className="flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                hello@inktouched.com
              </a>
              <a
                href="https://wa.me/94767332238"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-sans text-sm text-muted-foreground">
            © {new Date().getFullYear()} Inktouched. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
