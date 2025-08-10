import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ArrowRight, Heart, Search, ArrowLeft, User } from 'lucide-react';

const ArticlesPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const featuredContent = [
    {
      id: 1,
      title: "Digital Empathy: Teaching Kindness Online",
      category: "Digital Citizenship",
      author: "Dr. Sarah Johnson",
      readTime: "8 min read",
      likes: 234,
      description: "In our digital world, empathy is more important than ever. This guide explores how to help children understand the human impact of their online actions and develop compassionate digital communication skills that will serve them throughout their connected lives.",
      tags: ["Digital Empathy", "Online Kindness", "Cyberbullying Prevention", "Digital Communication"],
      gradient: "from-[#27187e] to-[#758bfd]",
      image: "💝",
      excerpt: "Children who learn digital empathy early are less likely to engage in cyberbullying and more likely to become positive digital leaders in their communities.",
      keyPoints: ["Recognizing emotions in digital communication", "Teaching respectful online behavior", "Building empathy through technology", "Addressing cyberbullying prevention"]
    },
    {
      id: 2,
      title: "Healthy Digital Habits for Growing Minds",
      category: "Digital Wellness",
      author: "Digital Wellness Team",
      readTime: "12 min read",
      likes: 187,
      description: "Build a foundation of healthy technology use from an early age. This comprehensive guide covers age-appropriate screen time, digital boundaries, and strategies for creating a balanced relationship with technology that supports your child's development in our connected world.",
      tags: ["Digital Wellness", "Screen Time", "Tech Balance", "Healthy Habits"],
      gradient: "from-[#758bfd] to-[#aeb8fe]",
      image: "⚖️",
      excerpt: "Children who develop healthy digital habits early are better equipped to navigate technology responsibly and maintain well-being in our increasingly connected world.",
      keyPoints: ["Age-appropriate digital boundaries", "Quality vs quantity in digital consumption", "Creating tech-free family time", "Building self-regulation skills"]
    },
    {
      id: 3,
      title: "Creating Digital Content Together",
      category: "Digital Creativity",
      author: "Maria Rodriguez",
      readTime: "10 min read",
      likes: 312,
      description: "Turn screen time into creative time! Learn how to collaborate with your children to create meaningful digital content, from family videos to educational presentations. This guide shows how technology can become a tool for creativity, learning, and family bonding.",
      tags: ["Digital Creation", "Family Projects", "Creative Technology", "Digital Storytelling"],
      gradient: "from-[#aeb8fe] to-[#ff8600]",
      image: "🎬",
      excerpt: "When children become creators rather than just consumers of digital content, they develop critical thinking, technical skills, and a deeper understanding of how technology works.",
      keyPoints: ["Family video projects", "Digital storytelling techniques", "Age-appropriate creation tools", "Sharing content safely online"]
    },
    {
      id: 4,
      title: "Positive Discipline Strategies That Actually Work",
      category: "Parenting",
      author: "Dr. Michael Chen",
      readTime: "15 min read",
      likes: 428,
      description: "Move beyond traditional punishment-based discipline to evidence-based positive parenting techniques that build cooperation, self-control, and mutual respect. This in-depth article explores the science behind positive discipline and provides step-by-step guidance for implementing these transformative approaches in your daily parenting routine.",
      tags: ["Discipline", "Positive Parenting", "Behavior", "Communication"],
      gradient: "from-[#27187e] to-[#ff8600]",
      image: "🤝",
      excerpt: "Positive discipline isn't permissive parenting - it's about setting clear boundaries while maintaining your child's dignity and teaching valuable life skills.",
      keyPoints: ["Natural consequences vs. punishment", "Setting clear expectations", "Problem-solving with children", "Building intrinsic motivation"]
    },
    {
      id: 5,
      title: "Nutrition Essentials for Growing Minds",
      category: "Health",
      author: "Nutritionist Lisa Park",
      readTime: "11 min read",
      likes: 265,
      description: "Fuel your child's developing brain with the right nutrients at the right time. This comprehensive nutrition guide covers essential vitamins, minerals, and food groups that support cognitive development, mood regulation, and physical growth. Includes meal planning tips, picky eater strategies, and brain-boosting recipe ideas.",
      tags: ["Nutrition", "Brain Development", "Healthy Eating", "Meal Planning"],
      gradient: "from-[#758bfd] to-[#27187e]",
      image: "🥗",
      excerpt: "The foods your child eats directly impact their learning ability, attention span, and emotional regulation. Learn which nutrients matter most and how to make healthy eating enjoyable.",
      keyPoints: ["Brain-boosting superfoods", "Dealing with picky eaters", "Meal prep strategies", "Healthy snack alternatives"]
    },
    {
      id: 6,
      title: "Sleep Solutions for Better Family Rest",
      category: "Sleep",
      author: "Sleep Specialist Dr. Jennifer Lee",
      readTime: "14 min read",
      likes: 198,
      description: "Quality sleep is fundamental to your child's physical growth, emotional regulation, and cognitive development. This expert guide addresses common sleep challenges at every age, from newborn sleep patterns to teenage circadian rhythms. Discover evidence-based strategies for creating healthy sleep habits that benefit the whole family.",
      tags: ["Sleep", "Bedtime Routines", "Sleep Training", "Family Wellness"],
      gradient: "from-[#ff8600] to-[#758bfd]",
      image: "😴",
      excerpt: "Poor sleep affects everything from academic performance to immune function. Learn how to create optimal sleep environments and routines for children of all ages.",
      keyPoints: ["Age-appropriate sleep schedules", "Creating calming bedtime routines", "Addressing night fears", "Sleep environment optimization"]
    },
    {
      id: 7,
      title: "Building Strong Sibling Relationships",
      category: "Family",
      author: "Family Therapist Amanda White",
      readTime: "9 min read",
      likes: 156,
      description: "Sibling relationships can be a source of joy or stress in family life. Learn how to foster cooperation, reduce rivalry, and help your children build lifelong bonds with each other. This article provides practical strategies for managing conflicts, celebrating differences, and creating family traditions that strengthen sibling connections.",
      tags: ["Siblings", "Family Dynamics", "Conflict Resolution", "Relationships"],
      gradient: "from-[#aeb8fe] to-[#27187e]",
      image: "👫",
      excerpt: "Strong sibling relationships provide children with their first lessons in cooperation, empathy, and conflict resolution - skills they'll use throughout life.",
      keyPoints: ["Preventing sibling rivalry", "Teaching conflict resolution", "Celebrating individual strengths", "Creating shared experiences"]
    },
    {
      id: 8,
      title: "Teaching Privacy and Digital Footprints",
      category: "Digital Safety",
      author: "Privacy Expert Dr. Robert Kim",
      readTime: "13 min read",
      likes: 289,
      description: "Help your children understand the importance of privacy in the digital age. Learn how to teach concepts of digital footprints, data protection, and personal information security in age-appropriate ways that empower them to make smart choices online.",
      tags: ["Digital Privacy", "Online Safety", "Digital Footprint", "Data Protection"],
      gradient: "from-[#27187e] to-[#aeb8fe]",
      image: "🔒",
      excerpt: "Children who understand privacy from an early age develop better judgment about what to share online and how to protect themselves in digital spaces.",
      keyPoints: ["Understanding digital footprints", "Age-appropriate privacy settings", "Safe information sharing", "Building digital decision-making skills"]
    }
  ];

  const filteredContent = featuredContent.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="text-[#27187e] hover:bg-[#27187e]/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <div className="hidden md:block w-px h-6 bg-gray-300" />
              <h1 className="text-2xl font-bold" style={{ color: '#27187e' }}>
                Articles & Resources
              </h1>
            </div>
            <Button
              onClick={() => navigate('/admin')}
              variant="outline"
              className="text-[#27187e] border-[#27187e] hover:bg-[#27187e] hover:text-white"
            >
              <User className="h-4 w-4 mr-2" />
              Admin
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles by title, category, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 max-w-4xl mx-auto">
          {filteredContent.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your search.</p>
            </div>
          ) : (
            filteredContent.map((article) => (
              <Card key={article.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 relative">
                    <div className={`h-48 lg:h-full bg-gradient-to-br ${article.gradient} flex items-center justify-center text-6xl`}>
                      {article.image}
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-[#758bfd] transition-colors" style={{ color: '#27187e' }}>
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="font-medium">{article.author}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            <span>{article.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {article.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-[#ff8600] pl-4 mb-4">
                      <p className="text-sm italic text-gray-600">{article.excerpt}</p>
                    </div>
                    
                    <Button 
                      onClick={() => navigate(`/article/${article.id}`)}
                      className="text-white font-semibold"
                      style={{ background: 'linear-gradient(135deg, #27187e 0%, #758bfd 100%)' }}
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default ArticlesPage;