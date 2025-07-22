import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ShoppingCart, Heart, Package } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Food Ordering System",
      description: "An intuitive food ordering platform designed for restaurants and customers. Features include menu browsing, cart management, order tracking, and payment integration.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      features: [
        "User-friendly interface for browsing menus",
        "Shopping cart with real-time updates",
        "Order management system",
        "Responsive design for all devices"
      ],
      icon: ShoppingCart,
      color: "text-orange-400",
      status: "Completed"
    },
    {
      title: "Health Elevator",
      description: "A comprehensive medicine ordering system with real-time tracking capabilities. Built with modern tech stack for seamless user experience.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express"],
      features: [
        "Medicine catalog with search functionality",
        "Real-time order tracking",
        "User authentication and profiles",
        "Prescription upload system"
      ],
      icon: Heart,
      color: "text-red-400",
      status: "Completed"
    },
    {
      title: "Amazon Clone",
      description: "A replica of Amazon's core functionality built for e-commerce learning. Implements product listings, user accounts, and shopping cart features.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "Product catalog with filtering",
        "User registration and login",
        "Shopping cart functionality",
        "Responsive e-commerce layout"
      ],
      icon: Package,
      color: "text-yellow-400",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in 
            full-stack development and problem-solving abilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="glow-card hover:scale-[1.02] transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className={`h-8 w-8 ${project.color}`} />
                    <Badge variant="secondary">{project.status}</Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-muted-foreground text-xs flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-primary/50 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="glow-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Want to see more projects?</h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub profile for a complete list of projects and contributions.
              </p>
              <Button asChild className="bg-gradient-primary hover:shadow-glow">
                <a href="https://github.com/Mgoyal2711" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View All Projects
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="section-divider container mx-auto px-4 sm:px-6 lg:px-8"></div>
    </section>
  );
};

export default Projects;