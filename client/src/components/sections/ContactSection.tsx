import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { fadeIn, slideInFromLeft, slideInFromRight } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.email.trim() || !formData.email.includes('@')) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.subject) {
      toast({
        title: "Error",
        description: "Please select a subject",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please enter a message",
        variant: "destructive",
      });
      return;
    }
    
    // Form is valid, show success message
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromLeft}
            >
              <h2 className="text-3xl font-bold font-rajdhani mb-4">
                Get in <span className="text-[#6C63FF]">Touch</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Have questions or need assistance? Reach out to our team and we'll get
                back to you as soon as possible.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="text-[#6C63FF] mr-3 mt-1">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Email</h3>
                    <p className="text-gray-400">support@sonicwave.example.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-[#6C63FF] mr-3 mt-1">
                    <i className="fab fa-discord"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Discord</h3>
                    <p className="text-gray-400">Join our community: discord.gg/sonicwave</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-[#6C63FF] hover:text-[#00FFFF] transition-colors duration-300 text-2xl"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a 
                  href="#" 
                  className="text-[#6C63FF] hover:text-[#00FFFF] transition-colors duration-300 text-2xl"
                  aria-label="YouTube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a 
                  href="#" 
                  className="text-[#6C63FF] hover:text-[#00FFFF] transition-colors duration-300 text-2xl"
                  aria-label="Discord"
                >
                  <i className="fab fa-discord"></i>
                </a>
                <a 
                  href="#" 
                  className="text-[#6C63FF] hover:text-[#00FFFF] transition-colors duration-300 text-2xl"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromRight}
            >
              <form 
                className="bg-[#1E1E1E] p-6 rounded-lg border border-[#2D2D2D]"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <Label htmlFor="name" className="text-gray-400 mb-2">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    className="bg-[#121212] border border-[#2D2D2D] text-white focus:border-[#6C63FF]"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="email" className="text-gray-400 mb-2">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    className="bg-[#121212] border border-[#2D2D2D] text-white focus:border-[#6C63FF]"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="subject" className="text-gray-400 mb-2">Subject</Label>
                  <Select onValueChange={handleSelectChange} value={formData.subject}>
                    <SelectTrigger className="bg-[#121212] border border-[#2D2D2D] text-white focus:border-[#6C63FF]">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing Question</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-6">
                  <Label htmlFor="message" className="text-gray-400 mb-2">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="bg-[#121212] border border-[#2D2D2D] text-white focus:border-[#6C63FF]"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="relative overflow-hidden bg-[#6C63FF] hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 w-full shadow-[0_0_15px_rgba(108,99,255,0.5)]"
                >
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute inset-0 overflow-hidden before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full"></span>
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
