import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_v71iyhh';
  const EMAILJS_TEMPLATE_ID = 'template_n87muth';
  const EMAILJS_PUBLIC_KEY = '3JtNzI1iMEqYonKf1';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Neeraj Ramala',
        }
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "neerajramala.work@gmail.com",
      href: "mailto:neerajramala.work@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9030761449",
      href: "tel:+919030761449"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Neeraj Ramala",
      href: "https://www.linkedin.com/in/neeraj-ramala"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "neerajramala",
      href: "https://github.com/neerajramala"
    }
  ];

  return (
    <section id="contact" className="section-padding px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's connect and discuss opportunities, collaborations, or just have a conversation about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <Card className="portfolio-card border-0 shadow-card">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl md:text-3xl text-gradient">Let's Connect</CardTitle>
                </div>
                <CardDescription className="text-base md:text-lg leading-relaxed">
                  I'm always open to discussing new opportunities, sharing knowledge, 
                  or collaborating on interesting projects. Feel free to reach out!
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-5 p-5 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-105 hover:shadow-card group"
                  >
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-muted-foreground text-sm">{item.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors text-lg">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
                
                <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-3 text-lg">Current Location</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Based in India, available for remote collaboration and 
                        local opportunities in the tech industry.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="portfolio-card border-0 shadow-card">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl md:text-3xl text-gradient">Send a Message</CardTitle>
                <CardDescription className="text-base md:text-lg">
                  Have a question or want to work together? I'd love to hear from you.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="bg-background h-12 text-base"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background h-12 text-base"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="bg-background h-12 text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, question, or how we can work together..."
                      required
                      rows={6}
                      className="bg-background resize-none text-base"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-primary h-12 text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-3"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-3 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center tech-card animate-fade-in">
            <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-xl md:text-2xl font-bold mb-4">Quick Response</h3>
            <p className="text-muted-foreground leading-relaxed">
              I typically respond to messages within 24 hours during weekdays.
            </p>
          </div>
          
          <div className="text-center tech-card animate-fade-in">
            <Github className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-xl md:text-2xl font-bold mb-4">Open Source</h3>
            <p className="text-muted-foreground leading-relaxed">
              Interested in contributing to or collaborating on open source projects.
            </p>
          </div>
          
          <div className="text-center tech-card animate-fade-in">
            <Linkedin className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-xl md:text-2xl font-bold mb-4">Professional Network</h3>
            <p className="text-muted-foreground leading-relaxed">
              Let's connect professionally and expand our tech networks together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;