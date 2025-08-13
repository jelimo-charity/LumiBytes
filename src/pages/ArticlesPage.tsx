import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const ArticlesPage = () => {
  const { data: articles, isLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Loading articles...</div>
      </div>
    );
  }

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
            <span className="text-primary font-medium">Articles</span>
            <Link to="/admin" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
              <Shield className="h-4 w-4" />
              Admin
            </Link>
          </nav>
        </div>
      </header>

      {/* Divider */}
      <div className="container mx-auto px-6 max-w-4xl">
        <hr className="border-border" />
      </div>

      {/* Articles Section */}
      <section className="container mx-auto px-6 py-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-8">All Articles</h2>
        
        {articles && articles.length > 0 ? (
          <div className="space-y-6">
            {articles.map((article) => (
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
                        <span>{article.views_count || 0} views</span>
                        <span>{article.likes_count || 0} likes</span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors ml-4 flex-shrink-0" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles published yet.</p>
            <Link to="/admin" className="inline-block mt-4">
              <Button variant="outline">
                Go to Admin to Add Articles
              </Button>
            </Link>
          </div>
        )}
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

export default ArticlesPage;