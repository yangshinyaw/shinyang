
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-glow-conic rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 cyber-heading mx-auto">Get In Touch</h2>
          <div className="h-px w-24 bg-cyber-primary/50 mx-auto mb-8"></div>
          <p className="text-lg text-cyber-light/90">
            Have a project in mind or want to collaborate? Feel free to reach out through the form below or using my contact information.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-2xl font-mono font-bold mb-6 text-cyber-primary">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 h-12 w-12 rounded-full bg-cyber-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-cyber-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-mono text-cyber-light mb-1">Email Address</h4>
                      <a href="mailto:syeugene101@gmail.com" className="text-cyber-primary hover:underline">syty03@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 h-12 w-12 rounded-full bg-cyber-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-cyber-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-mono text-cyber-light mb-1">Phone Number</h4>
                      <a href="tel:+639665896767" className="text-cyber-primary hover:underline">+63 961 487 3084</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 h-12 w-12 rounded-full bg-cyber-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-cyber-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-mono text-cyber-light mb-1">Location</h4>
                      <p className="text-cyber-light/70">City of San Fernando, Pampanga, Philippines</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="cyber-border rounded p-6 bg-cyber-dark/50">
                <h3 className="text-xl font-mono font-bold mb-4 text-cyber-primary">Let's Build Something Amazing</h3>
                <p className="text-cyber-light/70 mb-4">
                  I'm currently available for freelance work and open to discussing full-time opportunities.
                  Whether you have a project that needs technical expertise or just want to chat about technology, I'd love to hear from you.
                </p>
                <div className="h-1 w-16 bg-cyber-primary/30"></div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="cyber-border rounded p-6 bg-cyber-dark/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-mono text-cyber-light">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="cyber-input rounded"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-mono text-cyber-light">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="cyber-input rounded"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 font-mono text-cyber-light">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="cyber-input rounded"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-mono text-cyber-light">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="cyber-input rounded resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-cyber-primary text-cyber-dark py-3 px-6 rounded font-medium transition-all flex items-center justify-center
                             hover:shadow-[0_0_15px_rgba(56,189,248,0.7)] disabled:bg-cyber-primary/70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  {submitSuccess && (
                    <div className="mt-4 p-3 bg-cyber-primary/20 border border-cyber-primary/40 rounded text-center text-cyber-primary">
                      Your message has been sent successfully!
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
