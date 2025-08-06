import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Heart, Star, Clock, User, LogOut, Search, Zap, Target, Award, TrendingUp, Bell, Calendar, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';

const ParentDashboard = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = async () => {
    await signOut();
    toast({
      title: "See you soon!",
      description: "Thanks for being part of our community!",
    });
    navigate('/');
  };

  const handleReadArticle = (articleId: number, articleTitle: string) => {
    navigate(`/article/${articleId}`);
  };

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

  const quickStats = [
    { label: "Articles Read", value: "12", icon: BookOpen, color: "text-[#27187e]", bg: "bg-[#aeb8fe]/20", border: "border-[#758bfd]/30" },
    { label: "Saved Articles", value: "8", icon: Heart, color: "text-[#ff8600]", bg: "bg-[#ff8600]/10", border: "border-[#ff8600]/30" },
    { label: "Community Points", value: "156", icon: Star, color: "text-[#758bfd]", bg: "bg-[#758bfd]/20", border: "border-[#758bfd]/30" },
    { label: "Achievements", value: "4", icon: Award, color: "text-[#27187e]", bg: "bg-[#27187e]/20", border: "border-[#27187e]/30" }
  ];

  const filteredContent = featuredContent.filter(content =>
    content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    content.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    content.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
    content.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1f2f6] via-white to-[#aeb8fe]/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-[#758bfd]/20 to-[#aeb8fe]/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-[#ff8600]/20 to-[#758bfd]/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-[#27187e]/10 to-[#758bfd]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-xl border-b border-[#758bfd]/20 sticky top-0 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#27187e] via-[#758bfd] to-[#aeb8fe] rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#27187e] to-[#758bfd] rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-[#27187e] via-[#758bfd] to-[#ff8600] bg-clip-text text-transparent">LumiBytes</span>
                <p className="text-sm text-[#758bfd] font-medium">Digital Citizenship Hub</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button size="sm" variant="ghost" className="relative text-[#758bfd] hover:bg-[#aeb8fe]/20">
                <Bell className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#ff8600] rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">3</span>
                </div>
              </Button>
              <div className="flex items-center space-x-3 text-[#27187e] bg-gradient-to-r from-white/80 to-[#aeb8fe]/20 backdrop-blur-md rounded-2xl px-4 py-2 border border-[#758bfd]/20">
                <div className="w-8 h-8 bg-gradient-to-br from-[#758bfd] to-[#ff8600] rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold">Hello, {user?.user_metadata?.full_name || user?.email || 'Parent'}!</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                className="border-[#758bfd]/30 text-[#27187e] hover:bg-[#758bfd]/10 rounded-2xl bg-white/60 backdrop-blur-md transition-all duration-300 hover:scale-105"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#27187e] via-[#758bfd] to-[#ff8600] bg-clip-text text-transparent mb-4">Raising Digital Citizens</h1>
          <p className="text-xl text-[#758bfd] max-w-2xl mx-auto leading-relaxed">Discover expert guidance for navigating the digital world with your children and building responsible technology habits.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {quickStats.map((stat, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 border-2 ${stat.border} bg-white/80 backdrop-blur-md rounded-3xl transform hover:-translate-y-2 hover:scale-105 cursor-pointer`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#758bfd] mb-2 font-medium">{stat.label}</p>
                    <p className="text-4xl font-bold text-[#27187e] group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                  </div>
                  <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 border-2 ${stat.border}`}>
                    <stat.icon className={`h-7 w-7 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-[#758bfd] h-6 w-6" />
            <Input
              placeholder="Search digital citizenship topics, technology guides, and parenting insights..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-16 pr-6 py-4 border-2 border-[#758bfd]/20 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg text-lg focus:ring-4 focus:ring-[#758bfd]/20 focus:border-[#758bfd]/40 transition-all duration-300"
            />
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-[#27187e] mb-4">Digital Citizenship Resources</h2>
            <p className="text-lg text-[#758bfd] max-w-xl mx-auto">Expert guidance on technology, digital safety, and raising responsible citizens for our connected world.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map((content) => (
              <Card key={content.id} className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-[#758bfd]/20 bg-white/80 backdrop-blur-md rounded-3xl transform hover:-translate-y-3 hover:scale-105 overflow-hidden">
                <CardHeader className="pb-4 relative">
                  <div className="absolute top-4 right-4 text-4xl">{content.image}</div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`bg-gradient-to-r ${content.gradient} text-white border-0 px-4 py-2 rounded-full font-semibold`}>
                      {content.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-[#758bfd]">
                      <Heart className="h-4 w-4 text-[#ff8600] group-hover:scale-125 transition-transform" />
                      <span className="text-sm font-bold">{content.likes}</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-[#27187e] transition-colors text-xl leading-snug text-[#27187e] mb-3">
                    {content.title}
                  </CardTitle>
                  <CardDescription className="text-[#758bfd] text-base leading-relaxed mb-4">{content.description}</CardDescription>
                  
                  {/* Excerpt */}
                  <div className="bg-gradient-to-r from-[#aeb8fe]/20 to-[#758bfd]/10 rounded-2xl p-4 mb-4 border border-[#758bfd]/20">
                    <p className="text-sm text-[#27187e] italic font-medium">{content.excerpt}</p>
                  </div>

                  {/* Key Points */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#27187e] mb-2">What you'll learn:</h4>
                    <ul className="space-y-1">
                      {content.keyPoints.map((point, index) => (
                        <li key={index} className="text-xs text-[#758bfd] flex items-start">
                          <span className="w-1.5 h-1.5 bg-[#ff8600] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-[#758bfd] mb-4">
                    <span className="font-semibold">By {content.author}</span>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {content.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-[#758bfd]/30 text-[#27187e] bg-[#aeb8fe]/20 rounded-full px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    onClick={() => handleReadArticle(content.id, content.title)}
                    className="w-full bg-gradient-to-r from-[#27187e] to-[#758bfd] hover:from-[#758bfd] hover:to-[#ff8600] text-white rounded-2xl group-hover:scale-105 transition-all duration-300"
                  >
                    Read Full Article <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="border-2 border-[#758bfd]/20 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl text-[#27187e] mb-3">Quick Actions</CardTitle>
            <CardDescription className="text-lg text-[#758bfd]">Jump into your favorite parenting resources</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Button className="h-32 flex flex-col bg-gradient-to-br from-[#27187e] to-[#758bfd] hover:from-[#758bfd] hover:to-[#ff8600] rounded-3xl shadow-xl transform hover:scale-110 transition-all duration-300 group">
                <BookOpen className="h-10 w-10 mb-3 group-hover:rotate-12 transition-transform" />
                <span className="font-semibold text-lg">Explore Articles</span>
              </Button>
              <Button variant="outline" className="h-32 flex flex-col border-2 border-[#ff8600]/30 hover:bg-[#ff8600]/10 rounded-3xl shadow-xl transform hover:scale-110 transition-all duration-300 group bg-white/60">
                <Heart className="h-10 w-10 mb-3 text-[#ff8600] group-hover:scale-125 transition-transform" />
                <span className="font-semibold text-lg text-[#ff8600]">Saved Content</span>
              </Button>
              <Button variant="outline" className="h-32 flex flex-col border-2 border-[#758bfd]/30 hover:bg-[#758bfd]/10 rounded-3xl shadow-xl transform hover:scale-110 transition-all duration-300 group bg-white/60">
                <User className="h-10 w-10 mb-3 text-[#758bfd] group-hover:rotate-12 transition-transform" />
                <span className="font-semibold text-lg text-[#758bfd]">Community Hub</span>
              </Button>
              <Button variant="outline" className="h-32 flex flex-col border-2 border-[#27187e]/30 hover:bg-[#27187e]/10 rounded-3xl shadow-xl transform hover:scale-110 transition-all duration-300 group bg-white/60">
                <Award className="h-10 w-10 mb-3 text-[#27187e] group-hover:bounce transition-transform" />
                <span className="font-semibold text-lg text-[#27187e]">Achievements</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ParentDashboard;
