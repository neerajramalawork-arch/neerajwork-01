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
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a conversation about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <Card className="tech-card border-0 shadow-none">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl text-gradient">Let's Connect</CardTitle>
                </div>
                <CardDescription className="text-base">
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
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
                
                <div className="mt-8 p-6 bg-secondary/50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Current Location</h3>
                      <p className="text-muted-foreground text-sm">
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
          <div className="animate-slide-in-left">
            <Card className="tech-card border-0 shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">Send a Message</CardTitle>
                <CardDescription>
                  Have a question or want to work together? I'd love to hear from you.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="bg-background"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
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
                        className="bg-background"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
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
                      className="bg-background resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-hero"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
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
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center tech-card animate-fade-in-up">
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Quick Response</h3>
            <p className="text-muted-foreground text-sm">
              I typically respond to messages within 24 hours during weekdays.
            </p>
          </div>
          
          <div className="text-center tech-card animate-fade-in-up">
            <Github className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Open Source</h3>
            <p className="text-muted-foreground text-sm">
              Interested in contributing to or collaborating on open source projects.
            </p>
          </div>
          
          <div className="text-center tech-card animate-fade-in-up">
            <Linkedin className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Professional Network</h3>
            <p className="text-muted-foreground text-sm">
              Let's connect professionally and expand our tech networks together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;