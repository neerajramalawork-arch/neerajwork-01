import { GraduationCap, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology, innovation, and continuous learning in the ever-evolving world of computer science.
          </p>
        </div>

        {/* Bio Section */}
        <div className="tech-card mb-12 animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-6 text-gradient">My Journey</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I'm a dedicated B.Tech student with an unwavering passion for Artificial Intelligence and Cybersecurity. 
            My journey in technology began with a curiosity about how things work, which evolved into a deep appreciation 
            for the power of code to solve real-world problems.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Currently pursuing my Bachelor's degree in Computer Science Engineering, I maintain a strong academic 
            record with a CGPA of 8.3. Beyond academics, I'm committed to developing practical skills and applying 
            theoretical knowledge to meaningful projects.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My goal is to contribute to innovative solutions in AI and Cybersecurity while continuously learning 
            and adapting to emerging technologies. I believe in the power of collaboration and effective communication 
            to drive successful project outcomes.
          </p>
        </div>

        {/* Education Section */}
        <div className="tech-card mb-12 animate-fade-in-up">
          <div className="flex items-center mb-6">
            <GraduationCap className="h-6 w-6 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-gradient">Education</h3>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h4 className="text-xl font-semibold mb-2">Bachelor of Technology (B.Tech)</h4>
              <p className="text-muted-foreground mb-1">Computer Science Engineering</p>
              <p className="text-sm text-muted-foreground mb-2">2023 - 2028 (Expected)</p>
              <p className="text-primary font-semibold">Current CGPA: 8.3</p>
            </div>
            
            <div className="border-l-4 border-accent pl-6">
              <h4 className="text-xl font-semibold mb-2">Intermediate (12th)</h4>
              <p className="text-muted-foreground mb-1">SR Junior College</p>
              <p className="text-primary font-semibold">Percentage: 90.2%</p>
            </div>
            
            <div className="border-l-4 border-secondary pl-6">
              <h4 className="text-xl font-semibold mb-2">10th Standard</h4>
              <p className="text-muted-foreground mb-1">Ravindhra Bharathi School</p>
              <p className="text-primary font-semibold">Percentage: 90%</p>
            </div>
          </div>
        </div>

        {/* Values & Goals */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="tech-card animate-fade-in-up">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-bold text-gradient">Core Values</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Continuous Learning & Growth
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Innovation & Problem Solving
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Collaboration & Teamwork
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Ethical Technology Use
              </li>
            </ul>
          </div>

          <div className="tech-card animate-fade-in-up">
            <div className="flex items-center mb-4">
              <Target className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-bold text-gradient">Future Goals</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Master AI & Machine Learning
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Cybersecurity Expertise
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Build Impactful Projects
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Contribute to Open Source
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;