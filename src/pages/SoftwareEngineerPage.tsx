import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Moon, Sun, ExternalLink, Github, X } from "lucide-react";
import smartphoneImg from "@/assets/smartphone.jpg";
import farmlensImg from "@/assets/farmlens.png";
import airflowOpenskyImg from "@/assets/airflow-opensky.png";
import dbtOpenskyImg from "@/assets/dbt-opensky.png";
import { Seo } from "@/components/Seo";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const SoftwareEngineerPage = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-light text-accent mb-8 text-center">Featured Projects</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Project 1: Smartphone Usage Analysis */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-xl group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={smartphoneImg} 
                    alt="Smartphone Usage Analysis" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-accent">Smartphone Usage Analysis</h3>
                    <p className="text-sm text-muted-foreground">Data Science � Python � 2024</p>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">
                    Comprehensive analysis of mobile device usage patterns and user behavior. Utilized Python, Pandas, and data visualization libraries to extract insights from usage data.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-background border border-primary/30 rounded text-xs text-secondary">Python</span>
                    <span className="px-2 py-1 bg-background border border-primary/30 rounded text-xs text-secondary">Pandas</span>
                    <span className="px-2 py-1 bg-background border border-primary/30 rounded text-xs text-secondary">Jupyter</span>
                    <span className="px-2 py-1 bg-background border border-primary/30 rounded text-xs text-secondary">Data Viz</span>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a 
                      href="https://github.com/jelimo-charity/smartphone-usage-analysis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-sm text-secondary"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a 
                      href="https://colab.research.google.com/github/jelimo-charity/smartphone-usage-analysis/blob/main/Mobile_device_usage_and_user_behaviour.ipynb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-sm text-secondary"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Colab
                    </a>
                    <button 
                      onClick={() => setSelectedProject('smartphone')}
                      className="flex items-center gap-1.5 px-4 py-2 bg-primary/10 border border-primary rounded-lg hover:bg-primary/20 transition-all text-sm text-accent font-medium"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Project 2: FarmLens */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-xl group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={farmlensImg} 
                    alt="FarmLens" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-accent">FarmLens</h3>
                    <p className="text-sm text-muted-foreground">Full-stack � Climate Tech � Mapping & Analytics � 2026</p>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">
                    Website to report climate-related crop impacts, visualize trends across regions, and support faster, data-driven decisions for farmers, organizations, and policymakers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-background border border-primary/30 rounded text-xs text-secondary">React</span>
                    <span className="px-2 py-1 bg-background border border-primary/30 rounded text-xs text-secondary">TypeScript</span>
                    <span className="px-2 py-1 bg-background border border-primary/30 rounded text-xs text-secondary">TailwindCSS</span>
                    <span className="px-2 py-1 bg-background border border-primary/30 rounded text-xs text-secondary">Leaflet</span>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a 
                      href="https://github.com/jelimo-charity/farmlens"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-sm text-secondary"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a 
                      href="https://farmlens.charityjelimo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-sm text-secondary"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Site
                    </a>
                    <button 
                      onClick={() => setSelectedProject('farmlens')}
                      className="flex items-center gap-1.5 px-4 py-2 bg-primary/10 border border-primary rounded-lg hover:bg-primary/20 transition-all text-sm text-accent font-medium"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Project 3: OpenSky Flight Data Pipeline (Airflow) */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-xl group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={airflowOpenskyImg} 
                    alt="OpenSky Flight Data Pipeline (Airflow)" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-accent">OpenSky Flight Data Pipeline (Airflow)</h3>
                    <p className="text-sm text-muted-foreground">Data Engineering � Airflow � PostgreSQL � Docker � 2026</p>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">
                    End-to-end pipeline that ingests live aircraft state vectors from the OpenSky Network API, transforms them, and loads into PostgreSQL (bronze) on a schedule using Apache Airflow.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-background border border-primary/30 rounded text-xs text-secondary">Python</span>
                    <span className="px-2 py-1 bg-background border border-primary/30 rounded text-xs text-secondary">Airflow</span>
                    <span className="px-2 py-1 bg-background border border-primary/30 rounded text-xs text-secondary">PostgreSQL</span>
                    <span className="px-2 py-1 bg-background border border-primary/30 rounded text-xs text-secondary">Docker Compose</span>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a 
                      href="https://github.com/jelimo-charity/opensky-flight-data-pipeline"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-sm text-secondary"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <button 
                      onClick={() => setSelectedProject('opensky-airflow')}
                      className="flex items-center gap-1.5 px-4 py-2 bg-primary/10 border border-primary rounded-lg hover:bg-primary/20 transition-all text-sm text-accent font-medium"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Project 4: OpenSky dbt (Analytics Modeling) */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all hover:shadow-xl group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dbtOpenskyImg} 
                    alt="OpenSky dbt Project" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-accent">OpenSky dbt Project</h3>
                    <p className="text-sm text-muted-foreground">Analytics Engineering � dbt � SQL � Medallion Modeling � 2026</p>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">
                    dbt project for modeling OpenSky flight data into cleaner, analytics-ready layers (silver/gold) to enable reliable reporting and downstream dashboards.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-background border border-primary/30 rounded text-xs text-secondary">dbt</span>
                    <span className="px-2 py-1 bg-background border border-primary/30 rounded text-xs text-secondary">SQL</span>
                    <span className="px-2 py-1 bg-background border border-primary/30 rounded text-xs text-secondary">PostgreSQL</span>
                    <span className="px-2 py-1 bg-background border border-primary/30 rounded text-xs text-secondary">Data Modeling</span>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a 
                      href="https://github.com/jelimo-charity/opensky-flight-data-pipeline"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-sm text-secondary"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <button 
                      onClick={() => setSelectedProject('opensky-dbt')}
                      className="flex items-center gap-1.5 px-4 py-2 bg-primary/10 border border-primary rounded-lg hover:bg-primary/20 transition-all text-sm text-accent font-medium"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Modals */}
            <Dialog open={selectedProject === 'smartphone'} onOpenChange={() => setSelectedProject(null)}>
              <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-card border-border">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-accent">Smartphone Usage Analysis</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Data Science Project � Python, Pandas, Jupyter Notebook
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="relative h-72 rounded-lg overflow-hidden">
                    <img 
                      src={smartphoneImg} 
                      alt="Smartphone Usage Analysis" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 text-secondary">
                    <h3 className="text-lg font-medium text-accent">Project Overview</h3>
                    <p className="leading-relaxed">
                      This project presents a comprehensive analysis of mobile device usage patterns and user behavior. Using real-world data, the analysis explores how users interact with their smartphones, including app usage frequency, screen time patterns, and behavioral insights.
                    </p>
                    
                    <h3 className="text-lg font-medium text-accent pt-2">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2 leading-relaxed">
                      <li>Exploratory Data Analysis (EDA) of smartphone usage metrics</li>
                      <li>Interactive visualizations using Matplotlib and Seaborn</li>
                      <li>Statistical analysis of user behavior patterns</li>
                      <li>Time-series analysis of app usage trends</li>
                      <li>Insights into user engagement and device interaction</li>
                    </ul>

                    <h3 className="text-lg font-medium text-accent pt-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">Python</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">Pandas</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">NumPy</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">Matplotlib</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">Seaborn</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">Jupyter Notebook</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">Google Colab</span>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <a 
                        href="https://github.com/jelimo-charity/smartphone-usage-analysis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all font-medium"
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                      </a>
                      <a 
                        href="https://colab.research.google.com/github/jelimo-charity/smartphone-usage-analysis/blob/main/Mobile_device_usage_and_user_behaviour.ipynb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary rounded-lg hover:bg-primary/20 transition-all text-accent font-medium"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Open in Google Colab
                      </a>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={selectedProject === 'farmlens'} onOpenChange={() => setSelectedProject(null)}>
              <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-card border-border">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-accent">FarmLens</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Full-stack Platform � Climate Impacts Reporting � Mapping & Analytics
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="relative h-72 rounded-lg overflow-hidden">
                    <img 
                      src={farmlensImg} 
                      alt="FarmLens" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 text-secondary">
                    <h3 className="text-lg font-medium text-accent">Project Overview</h3>
                    <p className="leading-relaxed">
                      FarmLens is a community-powered platform that enables farmers to report climate-related crop impacts while helping organizations and policymakers visualize trends across regions and make faster, data-driven decisions.
                    </p>
                    
                    <h3 className="text-lg font-medium text-accent pt-2">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2 leading-relaxed">
                      <li>Submit climate impact reports (drought, floods, pests, etc.)</li>
                      <li>Interactive map view of reported incidents</li>
                      <li>Dashboards and filters for trend exploration</li>
                      <li>Basic analytics by region, crop, and event type</li>
                      <li>Verification workflow for report quality</li>
                    </ul>

                    <h3 className="text-lg font-medium text-accent pt-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">React</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">TypeScript</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">TailwindCSS</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">React Leaflet</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">NestJS</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">Drizzle ORM</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">PostgreSQL</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">Git</span>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <a 
                        href="https://github.com/jelimo-charity/farmlens"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all font-medium"
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                      </a>
                      <a 
                        href="https://farmlens.charityjelimo.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all font-medium"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Visit Live Site
                      </a>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={selectedProject === 'opensky-airflow'} onOpenChange={() => setSelectedProject(null)}>
              <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-card border-border">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-accent">OpenSky Flight Data Pipeline (Airflow)</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Data Engineering � Live API Ingestion � Orchestration with Airflow
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="relative h-72 rounded-lg overflow-hidden">
                    <img 
                      src={airflowOpenskyImg} 
                      alt="OpenSky Flight Data Pipeline (Airflow)" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 text-secondary">
                    <h3 className="text-lg font-medium text-accent">Project Overview</h3>
                    <p className="leading-relaxed">
                      An end-to-end pipeline that extracts live aircraft state vectors from the OpenSky Network API, performs light transformations (timestamps, null handling), and loads them into PostgreSQL (bronze layer) on a scheduled Airflow DAG.
                    </p>
                    
                    <h3 className="text-lg font-medium text-accent pt-2">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2 leading-relaxed">
                      <li>Scheduled ingestion with retries and logging via Airflow</li>
                      <li>Bulk inserts of large global snapshots into PostgreSQL</li>
                      <li>Config and secrets via environment variables</li>
                      <li>Containerized local stack using Docker Compose</li>
                    </ul>

                    <h3 className="text-lg font-medium text-accent pt-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">Python</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">Apache Airflow</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">PostgreSQL</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">SQLAlchemy</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">Docker Compose</span>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <a 
                        href="https://github.com/jelimo-charity/opensky-flight-data-pipeline"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all font-medium"
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={selectedProject === 'opensky-dbt'} onOpenChange={() => setSelectedProject(null)}>
              <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-card border-border">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-accent">OpenSky dbt Project</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Analytics Engineering � dbt Modeling � Silver/Gold Layers
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="relative h-72 rounded-lg overflow-hidden">
                    <img 
                      src={dbtOpenskyImg} 
                      alt="OpenSky dbt Project" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 text-secondary">
                    <h3 className="text-lg font-medium text-accent">Project Overview</h3>
                    <p className="leading-relaxed">
                      A dbt modeling layer for OpenSky data to turn raw ingested snapshots into consistent, analytics-ready tables and views, following a medallion approach (bronze ? silver ? gold).
                    </p>
                    
                    <h3 className="text-lg font-medium text-accent pt-2">Focus Areas</h3>
                    <ul className="list-disc list-inside space-y-2 leading-relaxed">
                      <li>Cleaned and typed models for downstream analytics</li>
                      <li>Reusable marts for reporting (by country/region, altitude bands, on-ground ratio)</li>
                      <li>Foundations for data quality checks and documentation</li>
                    </ul>

                    <h3 className="text-lg font-medium text-accent pt-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">dbt</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">SQL</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">PostgreSQL</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs">Dimensional Modeling</span>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <a 
                        href="https://github.com/jelimo-charity/opensky-flight-data-pipeline"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all font-medium"
                      >
                        <Github className="w-5 h-5" />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        );
      case "experience":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-light text-accent mb-8 text-center">Experience & Work</h2>
            
            <div className="space-y-12 max-w-4xl mx-auto">
              {/* GRIFFIN Global Technologies - Data Engineer - LEFT */}
              <div className="flex">
                <div className="w-full md:w-10/12">
                  <div className="border-l-2 border-primary pl-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-medium text-accent">Data Engineer</h3>
                      <p className="text-primary font-medium">GRIFFIN Global Technologies, LLC</p>
                      <p className="text-sm text-muted-foreground">Mar 2026 - Present � 5 mos � Full-time � Hybrid</p>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">
                      I currently work with the client Cerebri AI where I collaborate with a team of engineers to maintain and improve data-driven systems. My work focuses on maintaining and enhancing data pipelines that ingest, transform, and validate large datasets used for analytics and AI applications. I help ensure reliable data flow across systems while working closely with backend and data engineers to improve pipeline efficiency and system stability.
                    </p>
                    <p className="text-xs text-muted-foreground italic">Git, GitHub, Docker, PostgreSQL, Python, Apache Airflow, dbt, SQL</p>
                  </div>
                </div>
              </div>

              {/* GRIFFIN Global Technologies - Associate Software Engineer - RIGHT */}
              <div className="flex justify-end">
                <div className="w-full md:w-10/12">
                  <div className="border-r-2 border-primary pr-6 space-y-3 text-right">
                    <div>
                      <h3 className="text-xl font-medium text-accent">Associate Software Engineer</h3>
                      <p className="text-primary font-medium">GRIFFIN Global Technologies, LLC</p>
                      <p className="text-sm text-muted-foreground">Mar 2025 - Feb 2026 � 1 yr � Full-time � Hybrid</p>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">
                      At Griffin Global Technologies, I also contribute to the development and maintenance of internal platforms across both frontend and backend systems. I work on implementing features, improving APIs and services, and enhancing user interfaces to support system functionality and usability. I collaborate with engineers across the team and participate in testing, code reviews, and documentation to maintain high engineering standards.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      TypeScript, React, API Development, SQL, Testing, Git/GitHub, Agile
                    </p>
                  </div>
                </div>
              </div>

              {/* GRIFFIN Global Technologies - Engineer Intern - LEFT */}
              <div className="flex">
                <div className="w-full md:w-10/12">
                  <div className="border-l-2 border-primary pl-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-medium text-accent">Engineer Intern</h3>
                      <p className="text-primary font-medium">GRIFFIN Global Technologies, LLC</p>
                      <p className="text-sm text-muted-foreground">Dec 2024 - Feb 2025 � 3 mos � Internship � Nyeri, Kenya � On-site</p>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">
                      Supported the engineering team by working on small features, bug fixes, and internal tools. Collaborated with teammates to troubleshoot issues, improve UI flows, and contribute to clean, maintainable code.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      JavaScript/TypeScript, React, Node.js, SQL, Git/GitHub
                    </p>
                  </div>
                </div>
              </div>

              {/* TEACH2GIVE - LEFT */}
              <div className="flex">
                <div className="w-full md:w-10/12">
                  <div className="border-l-2 border-primary pl-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-medium text-accent">Full-stack Developer</h3>
                      <p className="text-primary font-medium">TEACH2GIVE</p>
                      <p className="text-sm text-muted-foreground">May 2024 - Jul 2024 � 3 mos � Apprenticeship � Nyeri, Kenya � On-site</p>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">
                      Participated in a 3-month full-stack training program where I enhanced my expertise in React, TypeScript, PostgreSQL, and Hono(Node.js). Successfully developed a car rental application, applying my skills in creating scalable solutions and improving my technical and soft skills.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      React, TypeScript, PostgreSQL, Hono (Node.js), REST APIs, Git
                    </p>
                  </div>
                </div>
              </div>

              {/* THE Jitu - RIGHT */}
              <div className="flex justify-end">
                <div className="w-full md:w-10/12">
                  <div className="border-r-2 border-primary pr-6 space-y-3 text-right">
                    <div>
                      <h3 className="text-xl font-medium text-accent">Full Stack Developer</h3>
                      <p className="text-primary font-medium">THE Jitu</p>
                      <p className="text-sm text-muted-foreground">May 2023 - Jul 2023 � 3 mos � Apprenticeship � On-site</p>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">
                      Contributed to web application development as part of a collaborative team environment. Worked on building and refining features, improving responsiveness, and learning best practices for delivering production-quality software.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      JavaScript, React, Node.js, UI Development, Git, Team Collaboration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "achievements":
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-light text-accent mb-8 text-center">Achievements & Leadership</h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Microsoft Learn Student Ambassador */}
              <div className="bg-card border border-border rounded-lg p-6 space-y-4 hover:border-primary transition-all">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-accent">Beta Microsoft Learn Student Ambassador</h3>
                  <p className="text-primary text-sm font-medium">Microsoft</p>
                  <p className="text-xs text-muted-foreground">Apr 2023 - Sep 2024 � 1 yr 6 mos</p>
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  Engaged with the tech community through workshops, webinars, and study groups, promoting Microsoft technologies and fostering continuous learning. Led and contributed to technical projects and hackathons, mentored students, and organized tech events to enhance participants' skills. Strengthened leadership, communication, and project management abilities while making a positive impact on the community.
                </p>
              </div>

              {/* KamiLimu Peer Mentor */}
              <div className="bg-card border border-border rounded-lg p-6 space-y-4 hover:border-primary transition-all">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-accent">Peer Mentor</h3>
                  <p className="text-primary text-sm font-medium">KamiLimu</p>
                  <p className="text-xs text-muted-foreground">Mar 2025 - Oct 2025 � 8 mos</p>
                  <p className="text-secondary text-sm leading-relaxed">
                 As a Peer Mentor at KamiLimu, I had the privilege of guiding three students through their intensive 8-month learning and professional development journey. I supported them in strengthening their technical skills, refining their personal branding, and navigating opportunities within the tech ecosystem. Throughout the mentorship, I provided consistent feedback, accountability, and career guidance�helping each mentee identify their strengths and grow with confidence. This experience strengthened my leadership, communication, and coaching abilities while allowing me to give back to a community that has significantly shaped my own growth.
                </p>
                </div>
              </div>

              {/* KamiLimu Mentee */}
              <div className="bg-card border border-border rounded-lg p-6 space-y-4 hover:border-primary transition-all">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-accent">KamiLimu Mentee</h3>
                  <p className="text-primary text-sm font-medium">KamiLimu</p>
                  <p className="text-xs text-muted-foreground">Sep 2021 - May 2022 � 9 mos � Nairobi County, Kenya � Hybrid</p>
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  Completed the KamiLimu premier 8-month program designed to enhance the global competitiveness of tech-aligned university students. Gained advanced skills in personal and professional development, innovation, ICT, and community engagement. The program provided a comprehensive approach to fostering growth and leadership in the tech industry.
                </p>
              </div>

              {/* Secretary General */}
              <div className="bg-card border border-border rounded-lg p-6 space-y-4 hover:border-primary transition-all">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-accent">Secretary General</h3>
                  <p className="text-primary text-sm font-medium">Computer Society Of Kirinyaga</p>
                  <p className="text-xs text-muted-foreground">Sep 2022 - Apr 2024 � 1 yr 8 mos � Science and Technology</p>
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  Managed the administrative and organizational functions of the Computer Society. Coordinated meetings, oversaw event planning, and facilitated communication within the society. Played a key role in organizing workshops, tech talks, and competitions, contributing to the development and engagement of the university's tech community. Championed initiatives for women in tech by founding a community to encourage and support female students in participating in tech activities and events.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-12 max-w-5xl mx-auto">
              <h3 className="text-2xl font-light text-accent mb-6 text-center">Education</h3>
              <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                <div>
                  <h4 className="text-xl font-medium text-accent">Bachelor of Science in Software Engineering</h4>
                  <p className="text-primary font-medium">Kirinyaga University</p>
                  <p className="text-sm text-muted-foreground">Sep 2020 - Sep 2024</p>
                </div>
                <p className="text-secondary text-sm leading-relaxed">
                  Pursued a comprehensive education in Software Engineering, focusing on software development, system design, and project management. Gained hands-on experience through practical projects and coursework.
                </p>
                {/* <p className="text-xs text-muted-foreground italic">
                  Activities: Secretary General at Computer Society of Kirinyaga University and Microsoft Learn Student Ambassador
                </p> */}
              </div>
            </div>
          </div>
        );
      case "skills":
        return (
          <div className="space-y-10">
            <h2 className="text-3xl font-light text-accent mb-8 text-center">Skills & Technologies</h2>
            
            <div className="max-w-6xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-6 space-y-6">
                <h3 className="text-xl font-medium text-primary border-b border-border pb-3">All Skills</h3>
                
                <div className="space-y-5">
                  {/* Row 1: Programming Languages & Databases */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <p className="text-sm text-accent mb-2 font-medium">Programming Languages</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">C#</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">TypeScript</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">JavaScript</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Python</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-accent mb-2 font-medium">Databases & ORMs</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">PostgreSQL</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Microsoft SQL Server</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Drizzle ORM</span>
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Data Engineering (Full Width) */}
                  <div>
                    <p className="text-sm text-accent mb-2 font-medium">Data Engineering</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Data Pipelines</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">ETL/ELT</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Data Validation</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Data Loading</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Data Maintenance</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Apache Airflow</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">dbt</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">SQL</span>
                    </div>
                  </div>

                  {/* Row 3: Frameworks & Libraries (Full Width) */}
                  <div>
                    <p className="text-sm text-accent mb-2 font-medium">Frameworks & Libraries</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">ASP.NET Core</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">React.js</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Node.js</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Express.js</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">AngularJS</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Redux.js</span>
                    </div>
                  </div>

                  {/* Row 4: Cloud & DevOps, Tools & Platforms */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <p className="text-sm text-accent mb-2 font-medium">Cloud & DevOps</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Microsoft Azure</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Azure DevOps</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Docker</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Git</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">GitHub</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-accent mb-2 font-medium">Tools & Platforms</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Power BI</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Power Automate</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Jira</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Confluence</span>
                      </div>
                    </div>
                  </div>

                  {/* Row 5: Development Practices, AI & Data Science */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <p className="text-sm text-accent mb-2 font-medium">Development Practices</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Agile</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Scrum</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">API Development</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Web Development</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-accent mb-2 font-medium">AI & Data Science</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Machine Learning</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">NLP</span>
                      </div>
                    </div>
                  </div>

                  {/* Row 6: Leadership & Soft Skills (Full Width) */}
                  <div>
                    <p className="text-sm text-accent mb-2 font-medium">Leadership & Soft Skills</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Communication</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Leadership</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Project Management</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Teamwork</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Mentoring</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Public Speaking</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Technical Writing</span>
                      <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Problem Solving</span>
                    </div>
                  </div>

                  {/* Row 7: Professional Development & Additional Skills */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <p className="text-sm text-accent mb-2 font-medium">Professional Development</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Community Engagement</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Personal Branding</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Innovation & Creativity</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Continuous Learning</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-accent mb-2 font-medium">Additional Skills</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Interview Prep</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Resume Writing</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Pitching Ideas</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Entrepreneurship</span>
                        <span className="px-3 py-1.5 bg-background border border-primary/50 rounded-md text-xs text-secondary">Mobile Apps</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "journey":
        return (
          <div className="space-y-12">
            <h2 className="text-3xl font-light text-accent mb-8 text-center">My Story & Journey</h2>
            
            {/* Story Section */}
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-card border border-primary/30 rounded-lg p-8 space-y-4">
                <p className="text-secondary text-base leading-relaxed">
                  <span className="text-primary font-medium text-lg">Are you a lover? Are you ready to pay the price for what you really love?</span>
                </p>
                
                <p className="text-secondary text-base leading-relaxed">
                  I am a tech lover. I never interacted with computers until secondary school, where Computer Studies sparked my interest. But as a village girl, I was told Agriculture was the better fit�that I couldn't compete with girls who had grown up with technology. I attended Agricultural class for one week before making the bold decision to pursue what I truly loved.
                </p>

                <p className="text-secondary text-base leading-relaxed">
                  In form three, a 'Women In Technology' program by Safaricom women changed everything. That day, I decided I would pursue software engineering. I completed secondary education with an A grade in Computer Studies.
                </p>

                <p className="text-secondary text-base leading-relaxed">
                  Sometimes we drift. When KUCCPS selections came, I was told to choose a "marketable course." I selected civil engineering and nursing, but destiny had other plans. The second selection brought me to Computer Science, which I later transferred to Software Engineering.
                </p>

                <p className="text-secondary text-base leading-relaxed">
                  Now, a year into my professional career, I'm still deeply in love with technology. The journey from a curious student to a working engineer has been one of continuous growth, discovery, and transformation. I've learned that bugs and errors are not disappointments�they're puzzles waiting to be solved. From being mentored through KamiLimu's 8-month program to being challenged through Microsoft Game of Learners, and now navigating real-world engineering challenges at GRIFFIN, each experience has shaped me into who I am today.
                </p>

                <p className="text-secondary text-base leading-relaxed">
                  What began as a small win has accumulated into something much more. Through the confusion, difficulties, and debugging sessions, I found excitement, hope, and fun. <span className="text-primary font-medium">I found what I love.</span>
                </p>

                <p className="text-secondary text-base leading-relaxed italic">
                  Love is not hasty, but patient. This is my journey�the good, the bad, and the beautiful�all coming together to make sense.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo
        title="Work Portfolio | Charity Jelimo"
        description="Work portfolio for Charity Jelimo, a Data Engineer focused on Python, SQL, ETL pipelines, and backend development. Explore featured data engineering projects and experience."
        path="/software-engineer"
        imageUrl="https://charityjelimo.com/favicon.png"
      />
      {/* Sticky Top Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-6 py-4 max-w-6xl">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/" className="text-secondary hover:text-primary transition-colors">
                jelimocharity
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/software-engineer" className="text-primary font-medium">
                Portfolio
              </Link>
              <Link to="/articles" className="text-secondary hover:text-primary transition-colors">
                Blogs
              </Link>
              <button
                onClick={toggleTheme}
                className="text-secondary hover:text-primary transition-colors p-1.5 hover:bg-accent/10 rounded-md"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <nav className="mt-8">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-8">
            <button
              onClick={() => setActiveTab("experience")}
              className={`py-2 sm:py-3 px-1 border-b-2 transition-colors text-sm sm:text-base ${
                activeTab === "experience"
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Experience
            </button>
            
            <button
              onClick={() => setActiveTab("projects")}
              className={`py-2 sm:py-3 px-1 border-b-2 transition-colors text-sm sm:text-base ${
                activeTab === "projects"
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Projects
            </button>
            
            <button
              onClick={() => setActiveTab("achievements")}
              className={`py-2 sm:py-3 px-1 border-b-2 transition-colors text-sm sm:text-base ${
                activeTab === "achievements"
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Achievements
            </button>
            
            <button
              onClick={() => setActiveTab("skills")}
              className={`py-2 sm:py-3 px-1 border-b-2 transition-colors text-sm sm:text-base ${
                activeTab === "skills"
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Skills
            </button>
            
            <button
              onClick={() => setActiveTab("journey")}
              className={`py-2 sm:py-3 px-1 border-b-2 transition-colors text-sm sm:text-base ${
                activeTab === "journey"
                  ? "border-primary text-primary font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              My Story
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1 overflow-y-auto">
        <h1 className="sr-only">Work portfolio of Charity Jelimo</h1>
        <div className="container mx-auto px-6 py-8 max-w-6xl">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default SoftwareEngineerPage;
