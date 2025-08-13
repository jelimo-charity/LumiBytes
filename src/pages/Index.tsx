import { Link } from "react-router-dom";
import { Heart, Users, BookOpen, Globe, ArrowRight, Shield, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const { data: featuredArticles } = useQuery({
    queryKey: ['featured-articles'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Charity Jelimo</h1>
          <p className="text-lg text-muted-foreground">
            Digital Citizenship Advocate | Parenting Expert | Child Development Specialist
          </p>
          <nav className="flex items-center space-x-6 text-sm">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/articles" className="text-foreground hover:text-primary transition-colors">
              Articles
            </Link>
            <Link to="/admin" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
              <Shield className="h-4 w-4" />
              Admin
            </Link>
          </nav>
        </div>
      </header>

      {/* Quote Section */}
      <section className="container mx-auto px-6 py-12 max-w-3xl text-center">
        <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
          "In a world where technology shapes every aspect of our lives, our children need guides who understand both the digital landscape and the timeless principles of healthy development. Every child deserves to grow up digitally literate, emotionally intelligent, and equipped to thrive in an interconnected world."
        </blockquote>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6 max-w-4xl">
        <hr className="border-border" />
      </div>

      {/* Work Section */}
      {featuredArticles && featuredArticles.length > 0 && (
        <section className="container mx-auto px-6 py-12 max-w-4xl">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Featured Work</h2>
          <div className="space-y-6">
            {featuredArticles.map((article) => (
              <div key={article.id} className="group">
                <Link to={`/article/${article.id}`} className="block">
                  <div className="flex items-start justify-between py-4 border-b border-border hover:border-primary/50 transition-colors">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(article.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors ml-4 flex-shrink-0" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <Link to="/articles">
              <Button variant="outline" className="w-full">
                View All Articles
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* Updates Section - Timeline Style */}
      <section className="container mx-auto px-6 py-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-8">~~NOT~~ IN THE NEWS</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">2024</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>- December: Launched personal website to share insights on digital citizenship and parenting.</div>
              <div>- November: Published article on <Link to="/articles" className="text-primary hover:underline">"Teaching Digital Empathy to Children"</Link></div>
              <div>- October: Spoke at the Digital Parenting Conference about responsible technology use.</div>
              <div>- September: Started consulting with families on digital wellness strategies.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="container mx-auto px-6 py-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-8">What I Focus On</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Globe className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-medium text-foreground mb-2">Digital Citizenship</h3>
            <p className="text-sm text-muted-foreground">
              Teaching responsible technology use and online ethics
            </p>
          </div>
          <div>
            <Heart className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-medium text-foreground mb-2">Parenting Guidance</h3>
            <p className="text-sm text-muted-foreground">
              Supporting parents in the digital age
            </p>
          </div>
          <div>
            <Users className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-medium text-foreground mb-2">Child Development</h3>
            <p className="text-sm text-muted-foreground">
              Promoting healthy growth and learning
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 max-w-4xl border-t border-border">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Charity Jelimo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;