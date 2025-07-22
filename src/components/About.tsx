import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "MCA",
      institution: "KIET Group of Institutions (AKTU)",
      year: "2026 (ongoing)",
      status: "current"
    },
    {
      degree: "BCA",
      institution: "YMCA University of Science and Technology, Haryana",
      year: "2023",
      status: "completed"
    },
    {
      degree: "12th (CBSE)",
      institution: "AD SR Sec School",
      stream: "Commerce with Maths",
      year: "2020",
      status: "completed"
    },
    {
      degree: "10th (CBSE)",
      institution: "Vidya Niketan High School",
      year: "2018",
      status: "completed"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <Card className="glow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Who I Am</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am a motivated professional with a strong academic background in MCA. 
                  I am passionate about learning new skills, solving problems, and contributing 
                  to innovative projects. My goal is to apply my knowledge in the IT industry 
                  to make a positive impact and grow both professionally and personally.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  I enjoy working in team environments and am always eager to take on new 
                  challenges. With a solid foundation in web development and software 
                  engineering, I strive to create meaningful solutions that bridge the 
                  gap between technology and user experience.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6 text-primary flex items-center">
              <GraduationCap className="mr-2 h-5 w-5" />
              Educational Journey
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className={`glow-card transition-all duration-300 hover:scale-[1.02] ${
                    edu.status === 'current' ? 'border-primary shadow-glow' : ''
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground flex items-center">
                          {edu.degree}
                          {edu.status === 'current' && (
                            <span className="ml-2 px-2 py-1 text-xs bg-primary text-primary-foreground rounded-full">
                              Current
                            </span>
                          )}
                        </h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        {edu.stream && (
                          <p className="text-sm text-muted-foreground">{edu.stream}</p>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground ml-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.year}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="section-divider container mx-auto px-4 sm:px-6 lg:px-8"></div>
    </section>
  );
};

export default About;