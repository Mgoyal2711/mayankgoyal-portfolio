import { Button } from '@/components/ui/button';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Mayank Goyal. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-1 flex items-center justify-center md:justify-start">
              Made with <Heart className="h-3 w-3 mx-1 text-red-400 fill-current" /> using React & TypeScript
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Contact
            </a>
          </div>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            "Building the future, one line of code at a time."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;