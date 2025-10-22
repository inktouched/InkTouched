import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";
import { toast } from "sonner";

const CustomOrders = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productType: "",
    text: "",
    occasion: "",
    colorPreference: "",
    additionalNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.productType || !formData.text) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Here you would typically send this to a backend or email service
    toast.success("Order request submitted! We'll contact you soon via email or WhatsApp.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      productType: "",
      text: "",
      occasion: "",
      colorPreference: "",
      additionalNotes: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-16 px-4 bg-gradient-warm">
        <div className="container mx-auto text-center max-w-3xl animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Custom Orders
          </h1>
          <p className="font-sans text-lg text-muted-foreground">
            Let's create something special together. Fill out the form below and we'll bring your vision to life.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-8 bg-card p-8 rounded-2xl shadow-soft border border-border animate-fade-in">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="font-serif text-2xl font-semibold text-primary">Your Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-sans">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="border-border focus:border-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-sans">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="border-border focus:border-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="font-sans">WhatsApp Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+94 77 123 4567"
                  className="border-border focus:border-accent"
                />
              </div>
            </div>

            {/* Order Details */}
            <div className="space-y-6">
              <h2 className="font-serif text-2xl font-semibold text-primary">Order Details</h2>
              
              <div className="space-y-2">
                <Label htmlFor="productType" className="font-sans">Product Type *</Label>
                <Select
                  value={formData.productType}
                  onValueChange={(value) => setFormData({ ...formData, productType: value })}
                >
                  <SelectTrigger className="border-border">
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="framed-quote">Framed Quote</SelectItem>
                    <SelectItem value="tote-bag">Tote Bag</SelectItem>
                    <SelectItem value="bookmark">Bookmark</SelectItem>
                    <SelectItem value="custom-lettering">Custom Lettering</SelectItem>
                    <SelectItem value="other">Other (Specify in notes)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="text" className="font-sans">Your Quote/Text *</Label>
                <Textarea
                  id="text"
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  placeholder="Enter the quote, message, or text you'd like"
                  rows={4}
                  required
                  className="border-border focus:border-accent resize-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="occasion" className="font-sans">Occasion (Optional)</Label>
                  <Input
                    id="occasion"
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    placeholder="e.g., Birthday, Anniversary"
                    className="border-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="colorPreference" className="font-sans">Color Preference (Optional)</Label>
                  <Input
                    id="colorPreference"
                    value={formData.colorPreference}
                    onChange={(e) => setFormData({ ...formData, colorPreference: e.target.value })}
                    placeholder="e.g., Black ink, Gold accents"
                    className="border-border focus:border-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalNotes" className="font-sans">Additional Notes</Label>
                <Textarea
                  id="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  placeholder="Any specific requests, style preferences, or reference images you'd like to share"
                  rows={4}
                  className="border-border focus:border-accent resize-none"
                />
              </div>

              {/* File Upload Section */}
              <div className="space-y-2">
                <Label className="font-sans">Reference Images (Optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
                  <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                  <p className="font-sans text-sm text-muted-foreground mb-1">
                    Drag and drop files here, or click to browse
                  </p>
                  <p className="font-sans text-xs text-muted-foreground">
                    Share any inspiration or reference images (Max 5MB)
                  </p>
                </div>
              </div>
            </div>

            {/* Processing Info */}
            <div className="bg-muted/30 rounded-lg p-6 space-y-3">
              <h3 className="font-serif text-lg font-semibold text-primary">Processing & Delivery</h3>
              <ul className="font-sans text-sm text-muted-foreground space-y-2">
                <li>• Standard processing time: 5-7 business days</li>
                <li>• We'll send you a design preview before finalizing</li>
                <li>• Delivery within Colombo: 2-3 days</li>
                <li>• Island-wide delivery available</li>
                <li>• Payment upon confirmation of design</li>
              </ul>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft"
            >
              Submit Request
            </Button>

            <p className="font-sans text-sm text-muted-foreground text-center">
              We'll get back to you within 24 hours via email or WhatsApp
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomOrders;
