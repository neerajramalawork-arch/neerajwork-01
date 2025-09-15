import { ExternalLink, Github, Globe, Code, User } from 'lucide-react';
import Header from '@/components/Header';
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Portfolio & Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing my journey in technology through completed and upcoming projects.
            </p>
          </div>

          {/* Current Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gradient mb-8 animate-fade-in-up">Completed Projects</h2>
            
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="tech-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="h-6 w-6 text-primary" />
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {project.highlights?.map((highlight, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <Button variant="default" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6">
                      <Code className="h-8 w-8 text-primary mb-3" />
                      <h4 className="font-semibold mb-2">Technical Approach</h4>
                      <p className="text-sm text-muted-foreground">
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
            <h2 className="text-3xl font-bold text-gradient mb-8 animate-fade-in-up">Upcoming Projects</h2>
            <p className="text-muted-foreground mb-8 animate-fade-in-up">
              Projects in planning phase that align with my learning goals in AI and Cybersecurity.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="tech-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                      Planning
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  
                  <div>
                    <h4 className="font-medium text-sm mb-2">Planned Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
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
          <div className="tech-card animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-gradient">Professional Development</h2>
            </div>
            
            <p className="text-muted-foreground mb-6">
              As an aspiring Computer Science Engineer, I focus on building practical skills 
              through hands-on projects while maintaining strong academic performance. 
              My portfolio will continue to grow as I complete more projects and gain experience.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-transparent rounded-lg">
                <h4 className="font-semibold mb-2">Academic Excellence</h4>
                <p className="text-2xl font-bold text-primary mb-1">8.3</p>
                <p className="text-sm text-muted-foreground">Current CGPA</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-accent/5 to-transparent rounded-lg">
                <h4 className="font-semibold mb-2">Focus Areas</h4>
                <p className="text-sm text-muted-foreground">AI & Cybersecurity</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-secondary/20 to-transparent rounded-lg">
                <h4 className="font-semibold mb-2">Learning Approach</h4>
                <p className="text-sm text-muted-foreground">Project-based & Practical</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;