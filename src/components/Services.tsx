import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Palette, Code, Smartphone, Server, Globe, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with modern design principles.",
      icon: Palette,
      color: "text-pink-400",
      features: [
        "Wireframing and prototyping",
        "User experience research",
        "Responsive design principles",
        "Design system creation",
        "Accessibility compliance"
      ],
      tools: ["Figma", "Adobe XD", "Sketch", "InVision"]
    },
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using modern web technologies.",
      icon: Code,
      color: "text-blue-400",
      features: [
        "React.js applications",
        "Responsive web design",
        "Cross-browser compatibility",
        "Performance optimization",
        "Modern CSS frameworks"
      ],
      tools: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      title: "Backend Development",
      description: "Developing robust server-side applications and APIs for scalable web solutions.",
      icon: Server,
      color: "text-green-400",
      features: [
        "RESTful API development",
        "Database design and optimization",
        "Authentication systems",
        "Server configuration",
        "Performance monitoring"
      ],
      tools: ["Node.js", "PHP", "MySQL", "MongoDB", "Express"]
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end web application development from concept to deployment.",
      icon: Globe,
      color: "text-purple-400",
      features: [
        "Complete web applications",
        "Database integration",
        "User authentication",
        "Payment gateway integration",
        "Deployment and hosting"
      ],
      tools: ["MERN Stack", "PHP/MySQL", "Git", "Docker", "AWS"]
    },
    {
      title: "Mobile-First Design",
      description: "Creating mobile-optimized experiences that work seamlessly across all devices.",
      icon: Smartphone,
      color: "text-cyan-400",
      features: [
        "Progressive Web Apps",
        "Mobile optimization",
        "Touch-friendly interfaces",
        "Fast loading times",
        "Offline functionality"
      ],
      tools: ["React", "PWA", "Responsive Design", "Performance Tools"]
    },
    {
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, efficiency, and better user experience.",
      icon: Zap,
      color: "text-yellow-400",
      features: [
        "Code optimization",
        "Image compression",
        "Lazy loading implementation",
        "Bundle size reduction",
        "SEO optimization"
      ],
      tools: ["Webpack", "Lighthouse", "GTmetrix", "PageSpeed Insights"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer comprehensive web development services to help bring your ideas to life 
            with modern technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="glow-card hover:scale-[1.02] transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-secondary mr-4`}>
                      <IconComponent className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div>
                    <h4 className="font-medium text-sm mb-2">What I Offer:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-muted-foreground text-xs flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.tools.map((tool, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
      
      <div className="section-divider container mx-auto px-4 sm:px-6 lg:px-8"></div>
    </section>
  );
};

export default Services;