import { useState, useEffect } from 'react';
import { Code, Users, MessageCircle, Brain, Shield, BookOpen } from 'lucide-react';

const Skills = () => {
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateProgress(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 85, description: "Primary programming language for projects and problem-solving" },
        { name: "Java", level: 75, description: "Object-oriented programming and enterprise applications" },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "Machine Learning Concepts", level: 60, description: "Currently learning algorithms and implementations" },
        { name: "Data Analysis", level: 55, description: "Data processing and visualization techniques" },
        { name: "Neural Networks", level: 45, description: "Understanding deep learning fundamentals" },
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: [
        { name: "Security Fundamentals", level: 50, description: "Basic security principles and practices" },
        { name: "Ethical Hacking", level: 40, description: "Learning penetration testing basics" },
        { name: "Network Security", level: 45, description: "Understanding network vulnerabilities" },
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Team Management", level: 80, description: "Leading and coordinating team projects" },
        { name: "Communication", level: 85, description: "Effective verbal and written communication" },
        { name: "Problem Solving", level: 90, description: "Analytical thinking and solution development" },
      ]
    }
  ];

  const learningAreas = [
    { name: "Deep Learning", progress: 30 },
    { name: "Cybersecurity Frameworks", progress: 25 },
    { name: "Cloud Computing", progress: 35 },
    { name: "DevOps", progress: 20 },
  ];

  return (
    <section id="skills" className="section-padding px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Current competencies and areas of continuous learning and development.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="tech-card animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center mb-8">
                <category.icon className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-gradient">{category.title}</h3>
              </div>
              
              <div className="space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-lg">{skill.name}</h4>
                      <span className="text-base text-primary font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: animateProgress ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 3 + skillIndex) * 0.2}s`
                        }}
                      />
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning */}
        <div className="tech-card animate-fade-in mb-12">
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-primary mr-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-gradient">Currently Learning</h3>
          </div>
          
          <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
            I'm committed to continuous learning and staying updated with emerging technologies. 
            Here are the areas I'm actively developing:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {learningAreas.map((area, index) => (
              <div
                key={area.name}
                className="space-y-3"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg">{area.name}</h4>
                  <span className="text-sm text-accent font-bold">Learning</span>
                </div>
                
                <div className="skill-bar">
                  <div
                    className="skill-progress bg-accent"
                    style={{
                      width: animateProgress ? `${area.progress}%` : '0%',
                      transitionDelay: `${index * 0.2 + 1}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center tech-card animate-fade-in">
            <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-xl md:text-2xl font-bold mb-4">Communication</h3>
            <p className="text-muted-foreground leading-relaxed">
              Strong verbal and written communication skills for effective collaboration.
            </p>
          </div>
          
          <div className="text-center tech-card animate-fade-in">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-xl md:text-2xl font-bold mb-4">Team Leadership</h3>
            <p className="text-muted-foreground leading-relaxed">
              Experience in managing teams and coordinating project deliverables.
            </p>
          </div>
          
          <div className="text-center tech-card animate-fade-in">
            <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-xl md:text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground leading-relaxed">
              Committed to staying updated with the latest technology trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;