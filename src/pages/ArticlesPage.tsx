import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Moon, Sun } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { blogs } from "@/data/blogs";
import type { Blog } from "@/data/blogs";
import ReactMarkdown from "react-markdown";
import { Seo } from "@/components/Seo";

const ArticlesPage = () => {
  const [selectedArticle, setSelectedArticle] = useState<Blog | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [activeType, setActiveType] = useState<"all" | "technical" | "personal">("all");

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
    <div className="min-h-screen bg-background">
      <Seo
        title="Articles | Charity Jelimo"
        description="Articles and insights by Charity Jelimo, a Data Engineer working with Python, SQL, ETL pipelines, and backend development."
        path="/articles"
        imageUrl="https://charityjelimo.com/favicon.svg"
      />
      {/* Sticky Top Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4 max-w-6xl">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/" className="text-secondary hover:text-primary transition-colors font-medium">
                jelimocharity
              </Link>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/software-engineer" className="text-secondary hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link to="/articles" className="text-primary font-medium">
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

      {/* Articles Section */}
      <section className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="sr-only">Articles by Charity Jelimo</h1>
          <h2 className="text-4xl font-light text-accent mb-4">Writings & Insights</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Exploring software development, leadership, and lessons learned along the way
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-card border border-border rounded-xl p-1 shadow-sm">
            <button
              onClick={() => setActiveType("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeType === "all"
                  ? "bg-primary/10 text-primary border border-primary/30"
                  : "text-secondary hover:text-primary"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveType("technical")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeType === "technical"
                  ? "bg-primary/10 text-primary border border-primary/30"
                  : "text-secondary hover:text-primary"
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => setActiveType("personal")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeType === "personal"
                  ? "bg-primary/10 text-primary border border-primary/30"
                  : "text-secondary hover:text-primary"
              }`}
            >
              Personal
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs
            .filter((blog) => (activeType === "all" ? true : blog.type === activeType))
            .map((blog) => (
            <button
              key={blog.id}
              onClick={() => {
                if (blog.externalUrl) {
                  window.open(blog.externalUrl, "_blank", "noopener,noreferrer");
                  return;
                }
                setSelectedArticle(blog);
              }}
              className="group text-left border border-border rounded-xl hover:border-primary hover:shadow-xl transition-all duration-300 bg-card overflow-hidden h-full flex flex-col"
            >
              {blog.coverImage && (
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={blog.coverImage} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-primary font-medium">
                    {blog.category}
                  </span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>
                
                <h3 className="text-xl font-medium text-accent group-hover:text-primary transition-colors leading-tight flex-1">
                  {blog.title}
                </h3>
                
                <p className="text-sm text-secondary leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-background border border-border rounded-md text-xs text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                  <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                    <span className="text-xs font-medium">
                      {blog.externalUrl
                        ? blog.externalUrl.includes("medium.com")
                          ? "Read on Medium"
                          : "Read on DEV"
                        : "Read article"}
                    </span>
                    {blog.externalUrl ? (
                      <ExternalLink className="h-4 w-4 ml-1" />
                    ) : (
                      <ArrowRight className="h-4 w-4 ml-1" />
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Article Modal */}
      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card border-2 border-border shadow-2xl rounded-xl">
          {selectedArticle && (
            <>
              {selectedArticle.coverImage && (
                <div className="w-full h-64 md:h-80 overflow-hidden rounded-t-lg -mt-6 -mx-6 mb-6">
                  <img 
                    src={selectedArticle.coverImage} 
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <DialogHeader className="space-y-4 pb-6 border-b border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded text-primary font-medium">
                    {selectedArticle.category}
                  </span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <DialogTitle className="text-4xl font-serif text-accent leading-tight pr-8">
                  {selectedArticle.title}
                </DialogTitle>
                <p className="text-secondary text-lg leading-relaxed italic">
                  {selectedArticle.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-background border border-border rounded-md text-xs text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </DialogHeader>
              <div className="prose prose-slate max-w-none pt-8 leading-relaxed text-lg dark:prose-invert">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => <h2 className="text-3xl font-serif text-accent mt-10 mb-4 border-b border-border pb-2">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-2xl font-serif text-accent mt-8 mb-3">{children}</h3>,
                    p: ({ children }) => <p className="text-secondary mb-5 leading-relaxed text-lg">{children}</p>,
                    strong: ({ children }) => <strong className="text-accent font-semibold">{children}</strong>,
                    ul: ({ children }) => <ul className="list-disc list-outside ml-6 mb-5 space-y-2 text-secondary">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-outside ml-6 mb-5 space-y-2 text-secondary">{children}</ol>,
                    li: ({ children }) => <li className="text-secondary leading-relaxed">{children}</li>,
                    code: ({ children, className }) => {
                      const isInline = !className;
                      return isInline ? (
                        <code className="bg-background px-2 py-0.5 rounded text-primary text-sm border border-border font-mono">{children}</code>
                      ) : (
                        <code className="block bg-background p-4 rounded-lg border border-border overflow-x-auto text-sm text-secondary my-4 font-mono">{children}</code>
                      );
                    },
                    pre: ({ children }) => <pre className="bg-background p-4 rounded-lg border border-border overflow-x-auto my-4">{children}</pre>,
                  }}
                >
                  {selectedArticle.content}
                </ReactMarkdown>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 max-w-6xl border-t border-border mt-12">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Charity Jelimo
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ArticlesPage;