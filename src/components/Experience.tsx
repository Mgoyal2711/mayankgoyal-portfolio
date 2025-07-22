import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Info AidTech",
      location: "Remote",
      duration: "Jan 2025 – Feb 2025",
      type: "Internship",
      description: [
        "Worked on multiple web projects focusing on user experience and functionality",
        "Enhanced website functionality using HTML, CSS, and JavaScript",
        "Gained valuable experience in team collaboration and code deployment",
        "Implemented responsive design principles across various projects"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Git", "Team Collaboration"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="glow-card mb-8 hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-5 w-5 text-primary mr-2" />
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                    </div>
                    <p className="text-lg text-primary font-medium mb-2">{exp.company}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </span>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Key Responsibilities & Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="border-primary text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Future Opportunities */}
          <Card className="glow-card border-dashed border-2 border-primary/50">
            <CardContent className="p-6 text-center">
              <div className="text-primary mb-4">
                <Briefcase className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ready for New Opportunities</h3>
              <p className="text-muted-foreground">
                I'm actively seeking internships and entry-level positions where I can 
                contribute my skills and continue growing as a developer.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="section-divider container mx-auto px-4 sm:px-6 lg:px-8"></div>
    </section>
  );
};

export default Experience;