import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import PageBanner from "../components/PageBanner";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // ignore
    } finally {
      setSending(false);
    }
  };

  return (
    <main>
      <PageBanner
        title="Contact Us"
        subtitle="We'd love to hear from you — reach out to our team"
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-navy mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">
                      Office Address
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      NKB Biopharma Ltd.,
                      <br />
                      123 Pharma Park, Science City,
                      <br />
                      Hyderabad – 500 081, India
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Phone</h4>
                    <a
                      href="tel:+914012345678"
                      className="text-sm text-muted-foreground hover:text-navy transition-colors"
                    >
                      +91 40 1234 5678
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Email</h4>
                    <a
                      href="mailto:info@nkbbiopharma.com"
                      className="text-sm text-muted-foreground hover:text-navy transition-colors"
                    >
                      info@nkbbiopharma.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-navy rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">
                      Business Hours
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Monday – Friday: 9:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 border border-border shadow-card">
                {submitted ? (
                  <div
                    className="text-center py-12"
                    data-ocid="contact.success_state"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">✓</span>
                    </div>
                    <h3 className="font-display font-bold text-navy text-2xl mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      Your message has been sent. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    action="https://formspree.io/f/YOUR_FORM_ID"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    data-ocid="contact.panel"
                  >
                    <h2 className="font-display text-2xl font-bold text-navy mb-6">
                      Send a Message
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="Dr. Anil"
                          required
                          data-ocid="contact.input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Kumar"
                          required
                          data-ocid="contact.input"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@hospital.com"
                          required
                          data-ocid="contact.input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Organization"
                          data-ocid="contact.input"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select name="inquiryType">
                        <SelectTrigger data-ocid="contact.select">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="product">
                            Product Information
                          </SelectItem>
                          <SelectItem value="partnership">
                            Partnership
                          </SelectItem>
                          <SelectItem value="career">Career</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help..."
                        rows={5}
                        required
                        data-ocid="contact.textarea"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={sending}
                      className="w-full bg-navy hover:bg-navy/90 text-white"
                      data-ocid="contact.submit_button"
                    >
                      {sending ? "Sending..." : "Send Message"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      ⚠️ Replace{" "}
                      <code className="bg-muted px-1 rounded">
                        YOUR_FORM_ID
                      </code>{" "}
                      in the form action with your actual FormSpree form ID.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
