import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Database, TrendingUp, Zap, Users, Building } from "lucide-react";

export default function DataProjects() {
  const projects = [
    {
      title: "Insurance Policy BI & Reporting Layer",
      company: "Solartis Technology Services",
      period: "2013-2018",
      description: "End-to-end development of business intelligence and reporting infrastructure for insurance policy administration, handling millions of policy records.",
      achievements: [
        "Reduced reporting layer costs by 60% through microservices architecture",
        "Decreased auditing costs by 21% via geostatistical analysis",
        "Automated report generation in multiple formats (PDF, Excel, XML)",
        "Integrated RESTful web services with Java APIs and Hibernate"
      ],
      technologies: ["Java", "Pentaho", "Hibernate", "RESTful APIs", "Microservices", "SQL"],
      icon: Building,
      color: "text-blue-600"
    },
    {
      title: "Telecommunication Data Pipelines",
      company: "Cognizant Technology Solutions", 
      period: "2018-2021",
      description: "Led team of five managing industrial telecommunication data pipelines using advanced ETL tools and agile methodologies for large-scale data transformation.",
      achievements: [
        "Saved 6000 hours through automated job runs and optimization",
        "Reduced customer wait time by 3 hours per delivery",
        "Enabled migration to Python-based stack from legacy ETL tools",
        "Implemented robust statistical analysis with SciPy and PyTables"
      ],
      technologies: ["Python", "ETL Tools", "NumPy", "Pandas", "SciPy", "SQLAlchemy", "Seaborn"],
      icon: Database,
      color: "text-green-600"
    },
    {
      title: "Digital Transformation Dashboards",
      company: "Canada Revenue Agency",
      period: "2023-Present",
      description: "Project leader managing sectional dashboards for digital transformation initiatives, supporting director-level decision making with data-driven insights.",
      achievements: [
        "Built multilingual Angular application with web accessibility",
        "Implemented cloud-integrated reporting with Azure Blob Storage",
        "Designed APIs handling 50k-100k hits with optimized performance",
        "Achieved 80% testing code coverage with comprehensive quality assurance"
      ],
      technologies: ["Angular", "Java", "MongoDB", "Azure", "RESTful APIs", "Agile"],
      icon: TrendingUp,
      color: "text-purple-600"
    }
  ];

  const metrics = [
    {
      value: "6000",
      label: "Hours Saved",
      description: "Through automation and optimization",
      icon: Zap
    },
    {
      value: "60%",
      label: "Cost Reduction",
      description: "In reporting layer infrastructure",
      icon: TrendingUp
    },
    {
      value: "30%",
      label: "Deployment Speed",
      description: "Faster rollout through automation",
      icon: BarChart3
    },
    {
      value: "100k+",
      label: "API Requests",
      description: "Handled per day with optimization",
      icon: Database
    }
  ];

  const skills = [
    {
      category: "ETL & Data Processing",
      technologies: ["Python", "Pandas", "NumPy", "SciPy", "PyTables", "SQLAlchemy"]
    },
    {
      category: "Business Intelligence",
      technologies: ["Pentaho", "Tableau", "Power BI", "Data Warehousing", "OLAP"]
    },
    {
      category: "Database Technologies", 
      technologies: ["SQL", "MongoDB", "PostgreSQL", "MySQL", "Oracle", "Data Modeling"]
    },
    {
      category: "Cloud & Analytics",
      technologies: ["Azure", "AWS", "Statistical Analysis", "Data Visualization", "Reporting"]
    }
  ];

  const handleProjectClick = (projectTitle: string) => {
    console.log(`Data project clicked: ${projectTitle}`);
    // TODO: Implement project detail view
  };

  return (
    <section id="data" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            data-testid="data-title"
          >
            Data Engineering Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Large-scale data transformation, business intelligence solutions, and 
            enterprise-grade reporting systems with proven impact on operational efficiency.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center hover-elevate">
              <CardContent className="pt-6">
                <metric.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{metric.label}</div>
                <div className="text-xs text-muted-foreground">{metric.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Major Projects */}
        <div className="space-y-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="hover-elevate cursor-pointer" onClick={() => handleProjectClick(project.title)}>
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <project.icon className={`w-10 h-10 ${project.color} mt-1 flex-shrink-0`} />
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-muted-foreground mb-3">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{project.company}</span>
                      <span>•</span>
                      <span className="text-sm">{project.period}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs"
                        data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
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

        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Data Engineering Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-primary">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="text-sm text-muted-foreground">
                        {tech}
                      </div>
                    ))}
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