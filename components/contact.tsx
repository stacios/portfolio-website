"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-32 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">Contact</p>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-balance">Let's Connect</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
                question or just want to say hi, feel free to reach out.
              </p>

              <div className="space-y-6 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm tracking-wide">Email</span>
                  </div>
                  <a
                    href="mailto:staci0str@gmail.com"
                    className="block text-foreground hover:text-muted-foreground transition-colors"
                  >
                    staci0str@gmail.com
                  </a>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm tracking-wide">Phone</span>
                  </div>
                  <a
                    href="tel:+12067470779"
                    className="block text-foreground hover:text-muted-foreground transition-colors"
                  >
                    206-747-0779
                  </a>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm tracking-wide">Location</span>
                  </div>
                  <p className="text-foreground">Greater Seattle Area, WA</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 rounded-xl border-border/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 rounded-xl border-border/50"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="rounded-xl border-border/50 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 rounded-full bg-foreground text-background hover:bg-foreground/90 gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
