import { Link } from "react-router-dom";
import { ArrowRight, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import profilePic from "@/assets/cha1.jpg";
import ParticleBackground from "@/components/ParticleBackground";
import { Seo } from "@/components/Seo";

const Index = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

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

  return (
    <>
      <Seo
        title="Charity Jelimo | Data Engineer"
        description="Charity Jelimo is a Data Engineer specializing in Python, SQL, ETL pipelines, and backend development. Explore data engineering projects, portfolio work, and engineering experience."
        path="/"
        imageUrl="https://charityjelimo.com/og-image.svg"
        includePersonJsonLd
      />
      <div className="min-h-screen font-sans bg-background flex items-center justify-center py-8 px-4 relative overflow-hidden">
        {/* Enhanced light mode background with gradient mesh */}
        <div className="dark:block hidden absolute inset-0 bg-gradient-to-br from-[hsl(45,35%,95%)] via-[hsl(42,30%,96%)] to-[hsl(38,25%,94%)]" />
        <div className="dark:block hidden absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-[hsl(43,74%,70%)] to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-[hsl(38,70%,65%)] to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-[hsl(40,60%,75%)] to-transparent rounded-full blur-3xl" />
        </div>
        
        <ParticleBackground />
        
        {/* Theme Switcher - Top Right */}
        <button
          onClick={toggleTheme}
          className="fixed top-6 right-6 z-50 p-3 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all shadow-lg"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Moon size={20} className="text-accent" /> : <Sun size={20} className="text-accent" />}
        </button>
        
        {/* Hero Section */}
        <section className="w-full max-w-4xl mx-auto relative z-10">
          <div className="text-center space-y-6 md:space-y-8">
            {/* Main Title */}
            <div className="space-y-2">
              {/* Profile Picture */}
              <div className="flex justify-center pb-2">
                <img 
                  src={profilePic} 
                  alt="Charity Jelimo Kipruto" 
                  className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-2 border-primary shadow-lg"
                />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-accent px-4">
                Charity Jelimo Kipruto
              </h1>
            <p className="text-sm sm:text-base text-secondary font-light">
              Data Engineer <span className="text-muted-foreground">·</span> Software Engineer
            </p>
              {/* <p className="text-lg md:text-xl text-gray-600 font-light">
                Software Engineer <span className="text-gray-300">·</span> Digital Storyteller
              </p> */}
            </div>

          {/* Bio
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              Crafting digital solutions that bridge innovation and real-world impact. 
              Passionate about accessible technology and empowering communities through thoughtful engineering.
            </p>
          </div> */}

          {/* Navigation Links - Sleek Pill-Shaped Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 pt-6 max-w-2xl mx-auto">
            <Link 
              to="/software-engineer" 
              className="group relative w-full sm:flex-1 px-8 py-7 border-2 border-border rounded-2xl hover:border-primary hover:bg-primary/5 transition-all text-center flex items-center justify-center"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="font-medium text-accent text-base group-hover:text-primary transition-colors whitespace-nowrap">Work Portfolio</span>
                <ArrowRight className="h-4 w-4 text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Link>

            <Link 
              to="/articles" 
              className="group relative w-full sm:flex-1 px-8 py-7 border-2 border-border rounded-2xl hover:border-primary hover:bg-primary/5 transition-all text-center flex items-center justify-center"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="font-medium text-accent text-base group-hover:text-primary transition-colors whitespace-nowrap">My Voice</span>
                <ArrowRight className="h-4 w-4 text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Link>

            <a 
              href="mailto:charityjelimo893@gmail.com" 
              className="group relative w-full sm:flex-1 px-8 py-7 border-2 border-border rounded-2xl hover:border-primary hover:bg-primary/5 transition-all text-center flex items-center justify-center"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="font-medium text-accent text-base group-hover:text-primary transition-colors whitespace-nowrap">Get in touch</span>
                <ArrowRight className="h-4 w-4 text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-3 text-xs sm:text-sm">
            <a 
              href="https://github.com/jelimo-charity" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/charity-jelimo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:charityjelimo893@gmail.com"
              className="text-secondary hover:text-primary transition-colors"
            >
              Email
            </a>
            <a 
              href="https://medium.com/@charityjelimo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              Medium
            </a>
            <a 
              href="https://charityjelimo.hashnode.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              Hashnode
            </a>
            
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 md:mt-20 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2026 Charity Jelimo
          </p>
        </footer>
        </section>
      </div>
    </>
  );
};

export default Index;