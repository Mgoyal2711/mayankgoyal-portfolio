import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">Mayank Goyal</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
              Web Developer & MCA Student
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about creating innovative web solutions and contributing to 
              cutting-edge projects. I combine strong academic foundations with 
              practical development experience.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('#projects')}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Explore My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                asChild
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <a href="mailto:goyalmayank337@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                asChild
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <a href="https://linkedin.com/in/mayankgoyal27" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                asChild
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <a href="https://github.com/Mgoyal2711" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-primary p-1 animate-float">
                <img 
                  src="/lovable-uploads/4b8f6c08-9428-44e6-abc5-3466f1e2dad9.png"
                  alt="Mayank Goyal"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;