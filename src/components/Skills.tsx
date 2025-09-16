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
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Current competencies and areas of continuous learning and development.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="tech-card animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <category.icon className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-gradient">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">{skill.name}</h4>
                      <span className="text-sm text-primary font-medium">{skill.level}%</span>
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
                    
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning */}
        <div className="tech-card animate-fade-in-up">
          <div className="flex items-center mb-6">
            <BookOpen className="h-6 w-6 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-gradient">Currently Learning</h3>
          </div>
          
          <p className="text-muted-foreground mb-8">
            I'm committed to continuous learning and staying updated with emerging technologies. 
            Here are the areas I'm actively developing:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {learningAreas.map((area, index) => (
              <div
                key={area.name}
                className="space-y-3"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">{area.name}</h4>
                  <span className="text-sm text-primary font-medium">Learning</span>
                </div>
                
                <div className="skill-bar">
                  <div
                    className="skill-progress"
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
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center tech-card animate-fade-in-up">
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Communication</h3>
            <p className="text-muted-foreground">
              Strong verbal and written communication skills for effective collaboration.
            </p>
          </div>
          
          <div className="text-center tech-card animate-fade-in-up">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Team Leadership</h3>
            <p className="text-muted-foreground">
              Experience in managing teams and coordinating project deliverables.
            </p>
          </div>
          
          <div className="text-center tech-card animate-fade-in-up">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
            <p className="text-muted-foreground">
              Committed to staying updated with the latest technology trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;