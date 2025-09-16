import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/neeraj-profile.avif';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="section-padding min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in content-spacing">
            <h1 className="hero-text mb-6">
              Hello,
              <br />
              I'm <span className="text-gradient">Neeraj</span>
            </h1>
            <p className="hero-subtitle mb-8 leading-relaxed">
              Aspiring Computer Science Engineer with a strong passion for{' '}
              <span className="text-primary font-semibold">Artificial Intelligence</span> and{' '}
              <span className="text-primary font-semibold">Cybersecurity</span>. 
              Proficient in Python programming with solid problem-solving and team management skills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="btn-primary group"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                className="btn-accent"
                onClick={() => window.open('https://i.postimg.cc/Lsh8M8M5/file-000000009ed061fbbf1f724f14d0a852.png', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </button>
            </div>

            <div className="flex space-x-6">
              <a
                href="mailto:neerajramala.work@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/neeraj-ramala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/neerajramala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="animate-slide-up lg:order-first">
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl transform rotate-6 animate-hover-scale"></div>
              <img
                src={profileImage}
                alt="Neeraj Ramala - AI & Cybersecurity Enthusiast"
                className="relative w-full aspect-video object-cover rounded-2xl shadow-card-hover transition-transform duration-300 hover:scale-105"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;