import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/neeraj-profile.avif';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h1 className="hero-text mb-6">
              Hello,
              <br />
              I'm Neeraj
            </h1>
            <p className="hero-subtitle mb-8">
              Aspiring Computer Science Engineer with a strong passion for{' '}
              <span className="text-gradient font-semibold">Artificial Intelligence</span> and{' '}
              <span className="text-gradient font-semibold">Cybersecurity</span>. 
              Proficient in Python programming with solid problem-solving and team management skills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="btn-hero"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button 
                className="btn-outline"
                onClick={() => window.open('https://i.postimg.cc/Lsh8M8M5/file-000000009ed061fbbf1f724f14d0a852.png', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </button>
            </div>

            <div className="flex space-x-6">
              <a
                href="mailto:neerajramala.work@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/neeraj-ramala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/neerajramala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="animate-slide-in-left lg:order-first">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary rounded-2xl transform rotate-6 animate-float"></div>
              <img
                src={profileImage}
                alt="Neeraj Ramala"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;