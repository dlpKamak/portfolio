import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Award, Users } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "IT Developer | Analyst",
      company: "Canada Revenue Agency",
      location: "Ottawa, ON",
      period: "October 2023 - Present",
      type: "Full-time",
      description: "Leading digital transformation initiatives and full-stack development projects for government services.",
      achievements: [
        "Project Leader managing sectional dashboards for digital transformation (DAD DDI, ITB)",
        "Scrum Master for cross-functional teams, reducing scope creep through proactive identification",
        "Built multilingual Angular application with web accessibility for digital tax forms",
        "Built AI-powered APIs leveraging Azure OpenAI Service for dynamic LLM model integration with RAG",
        "Implemented RESTful APIs in Java with MongoDB and Azure Blob Storage integration",
        "Designed high-performance APIs handling 50k-100k hits with optimized performance for partner data exchange",
        "Conducted threat modeling, security assessments, and vulnerability analysis ensuring ITB security policies",
        "Achieved 80% testing code coverage with Karma and Jasmine, cleared SonarQube code smells",
        "Reduced rollout time by 30% as pathfinder for auto-deployment during maintenance hours"
      ],
      technologies: ["Angular", "Java", "MongoDB", "Azure OpenAI", "RESTful APIs", "Agile", "SonarQube", "Security"],
      color: "border-l-blue-500"
    },
    {
      title: "Research Assistant - DaTALab",
      company: "Lakehead University",
      location: "Thunder Bay, ON",
      period: "2021 - 2023",
      type: "Graduate Research",
      description: "Advanced data science research and undergraduate teaching in AI/ML and cloud computing.",
      achievements: [
        "Developed AI/ML projects: NLP classifiers, text embedding methods, OpenCV diffusion models",
        "Built recommendation systems using AWS Personalize and SageMaker with cloud experiments on AWS EMR",
        "Implemented CUDA-based ELM model achieving 94.4% accuracy, securing 1st place in university Hackathon",
        "Assisted in undergraduate teaching: Big Data, Artificial Intelligence, Cloud Computing, RDBMS",
        "Mentored students in capstone projects and research methodologies"
      ],
      technologies: ["Python", "CUDA", "AWS", "OpenCV", "NLP", "Machine Learning", "Teaching"],
      color: "border-l-green-500"
    },
    {
      title: "Data Engineer Associate",
      company: "Cognizant Technology Solutions",
      location: "Chennai, India",
      period: "2018 - 2021",
      type: "Full-time",
      description: "Led data engineering teams managing large-scale telecommunication data pipelines and ETL processes.",
      achievements: [
        "Led team of five managing industrial telecommunication data pipelines using ETL tools",
        "Performed data profiling and analysis of legacy systems with NumPy and Pandas integration",
        "Constructed cohort business analysis reports using SciPy, PyTables, SQLAlchemy, Seaborn",
        "Enabled migration to Python-based tech stack from traditional ETL tools",
        "Automated job runs, reducing customer delivery wait time by 3 hours, saving 600 hours in total"
      ],
      technologies: ["Python", "ETL", "NumPy", "Pandas", "SciPy", "SQLAlchemy", "Team Leadership"],
      color: "border-l-purple-500"
    },
    {
      title: "Senior Software Engineer",
      company: "Solartis Technology Services",
      location: "Chennai, India", 
      period: "2013 - 2018",
      type: "Full-time",
      description: "End-to-end development of business intelligence and reporting solutions for insurance industry.",
      achievements: [
        "Developed BI and reporting layer for insurance policy administration systems",
        "Led database modeling with HLBR consumption, configuration management, ER diagrams",
        "Designed and deployed microservices with Pentaho Report generation engine",
        "Reduced reporting layer costs by 60% through architectural improvements",
        "Performed geostatistical analysis reducing auditing costs by 21%",
        "Integrated RESTful web services and xHTML UI using Java APIs and Hibernate"
      ],
      technologies: ["Java", "Pentaho", "Hibernate", "Microservices", "SQL", "Business Intelligence"],
      color: "border-l-orange-500"
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Lakehead University",
      location: "Thunder Bay, ON",
      year: "2023",
      gpa: "9.7/10 GPA",
      honors: "NSERC PromoScience Scholarship",
      description: "Advanced coursework in AI/ML, data science, and distributed systems."
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Anna University", 
      location: "Chennai, India",
      year: "2013",
      gpa: null,
      honors: null,
      description: "Foundation in computer science fundamentals and software engineering."
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            data-testid="experience-title"
          >
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A decade of progressive experience across government, academia, and industry, 
            delivering impactful solutions in software development, data engineering, and AI/ML research.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Career Timeline</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className={`hover-elevate border-l-4 ${exp.color}`}>
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-muted-foreground mb-2">
                        <div className="flex items-center space-x-1">
                          <Building className="w-4 h-4" />
                          <span className="text-sm font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                    <div className="text-right lg:text-left flex-shrink-0">
                      <div className="flex items-center space-x-1 mb-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">{exp.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs"
                          data-testid={`exp-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight">{edu.degree}</CardTitle>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Building className="w-4 h-4" />
                    <span className="text-sm">{edu.institution}</span>
                    <span>•</span>
                    <span className="text-sm">{edu.location}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Graduated:</span>
                      <Badge variant="outline">{edu.year}</Badge>
                    </div>
                    {edu.gpa && (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">GPA:</span>
                        <Badge variant="secondary">{edu.gpa}</Badge>
                      </div>
                    )}
                    {edu.honors && (
                      <div className="flex items-center space-x-2 pt-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">{edu.honors}</span>
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground pt-2">{edu.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}