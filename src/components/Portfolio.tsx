import { ExternalLink, Github, Globe, Code, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Built a professional portfolio website using AI tools as an aid while implementing custom designs and coding manually to showcase personal skills and projects.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      category: "Web Development",
      status: "Completed",
      highlights: [
        "Responsive design with modern UI/UX",
        "Custom animations and interactions",
        "Performance optimized",
        "SEO friendly structure"
      ]
    }
  ];

  const upcomingProjects = [
    {
      title: "AI-Powered Chatbot",
      description: "Planning to develop an intelligent chatbot using natural language processing.",
      technologies: ["Python", "NLP", "Machine Learning"],
      category: "Artificial Intelligence"
    },
    {
      title: "Cybersecurity Dashboard",
      description: "A comprehensive security monitoring dashboard for network analysis.",
      technologies: ["Python", "React", "Security Tools"],
      category: "Cybersecurity"
    },
    {
      title: "Data Analysis Tool",
      description: "Interactive data visualization and analysis platform.",
      technologies: ["Python", "Pandas", "Plotly"],
      category: "Data Science"
    }
  ];

  return (
    <section id="portfolio" className="section-padding px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Portfolio & Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing my journey in technology through completed and upcoming projects.
          </p>
        </div>

        {/* Current Projects */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-12 animate-slide-up">Completed Projects</h3>
          
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="portfolio-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <Globe className="h-8 w-8 text-primary" />
                    <h4 className="text-2xl md:text-3xl font-bold">{project.title}</h4>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full">
                      {project.category}
                    </span>
                    <span className="px-4 py-2 bg-green-100 text-green-800 font-semibold rounded-full">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed text-base md:text-lg">
                    {project.description}
                  </p>
                  
                  <div className="mb-8">
                    <h5 className="font-semibold mb-4 text-lg">Key Highlights:</h5>
                    <ul className="space-y-3">
                      {project.highlights?.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <span className="w-3 h-3 bg-primary rounded-full mr-4 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button className="btn-primary group">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Live Demo
                    </Button>
                    <Button className="btn-secondary">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold mb-4 text-lg">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-secondary text-secondary-foreground font-medium rounded-lg transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-muted/80 to-muted rounded-xl p-8 hover:shadow-card-hover transition-all duration-300">
                    <Code className="h-10 w-10 text-primary mb-4" />
                    <h5 className="font-semibold mb-3 text-lg">Technical Approach</h5>
                    <p className="text-muted-foreground leading-relaxed">
                      Developed using modern web technologies with a focus on performance, 
                      accessibility, and user experience. Implemented responsive design 
                      principles and optimized for various devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-8 animate-slide-up">Upcoming Projects</h3>
          <p className="text-muted-foreground mb-12 animate-slide-up text-base md:text-lg leading-relaxed">
            Projects in planning phase that align with my learning goals in AI and Cybersecurity.
          </p>
          
          <div className="grid-portfolio">
            {upcomingProjects.map((project, index) => (
              <div
                key={project.title}
                className="portfolio-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 font-semibold rounded-full text-sm">
                    Planning
                  </span>
                </div>
                
                <h4 className="text-xl md:text-2xl font-bold mb-4">{project.title}</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                
                <div>
                  <h5 className="font-semibold mb-3">Planned Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Development */}
        <div className="tech-card animate-fade-in">
          <div className="flex items-center gap-4 mb-8">
            <User className="h-8 w-8 text-primary" />
            <h3 className="text-2xl md:text-3xl font-bold text-gradient">Professional Development</h3>
          </div>
          
          <p className="text-muted-foreground mb-8 leading-relaxed text-base md:text-lg">
            As an aspiring Computer Science Engineer, I focus on building practical skills 
            through hands-on projects while maintaining strong academic performance. 
            My portfolio will continue to grow as I complete more projects and gain experience.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
              <h4 className="font-bold mb-3 text-lg">Academic Excellence</h4>
              <p className="text-4xl font-bold text-primary mb-2">8.3</p>
              <p className="text-muted-foreground">Current CGPA</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl">
              <h4 className="font-bold mb-3 text-lg">Focus Areas</h4>
              <p className="text-muted-foreground">AI & Cybersecurity</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl">
              <h4 className="font-bold mb-3 text-lg">Learning Approach</h4>
              <p className="text-muted-foreground">Project-based & Practical</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;