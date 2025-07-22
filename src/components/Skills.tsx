import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Settings, Users, Monitor, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "C", "JavaScript", "Python", "PHP", "SQL"],
      color: "text-blue-400"
    },
    {
      title: "Frameworks & Libraries",
      icon: Monitor,
      skills: ["React", "Node.js", "Bootstrap"],
      color: "text-green-400"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB"],
      color: "text-purple-400"
    },
    {
      title: "Tools & IDEs",
      icon: Settings,
      skills: ["VS Code", "IntelliJ IDE", "GitHub", "CodeBlocks", "Notepad++"],
      color: "text-orange-400"
    },
    {
      title: "Operating Systems",
      icon: Smartphone,
      skills: ["Linux", "Windows"],
      color: "text-cyan-400"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Coordination", "Teamwork", "Brainstorming & Ideation", "Problem Solving"],
      color: "text-pink-400"
    }
  ];

  const webTechnologies = ["HTML5", "CSS3", "Responsive Design", "RESTful APIs", "Version Control"];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        {/* Web Technologies Highlight */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="glow-card border-primary/50">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-primary">Web Development Core</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {webTechnologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    className="bg-gradient-primary text-primary-foreground px-4 py-2 text-sm hover:scale-105 transition-transform"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="glow-card hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent className={`h-6 w-6 mr-3 ${category.color}`} />
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skill Level Indicators */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="glow-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-center">Proficiency Levels</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Frontend Development</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Backend Development</span>
                      <span className="text-sm text-muted-foreground">75%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Database Management</span>
                      <span className="text-sm text-muted-foreground">70%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">UI/UX Design</span>
                      <span className="text-sm text-muted-foreground">80%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Problem Solving</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Team Collaboration</span>
                      <span className="text-sm text-muted-foreground">95%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="section-divider container mx-auto px-4 sm:px-6 lg:px-8"></div>
    </section>
  );
};

export default Skills;