
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Heart, Star, Clock, User, LogOut, Search, Zap, Target, Award, TrendingUp } from 'lucide-react';
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

  const featuredContent = [
    {
      id: 1,
      title: "Building Emotional Intelligence in Toddlers",
      category: "Development",
      author: "Dr. Sarah Johnson",
      readTime: "5 min read",
      likes: 234,
      description: "Discover proven techniques to help your toddler navigate emotions with confidence and grace.",
      tags: ["Toddlers", "Emotions", "Development"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Healthy Screen Time Guidelines by Age",
      category: "Health",
      author: "Child Development Team",
      readTime: "8 min read",
      likes: 187,
      description: "Expert-backed strategies for balanced screen time that supports healthy development.",
      tags: ["Screen Time", "Health", "Guidelines"],
      gradient: "from-pink-500 to-orange-500"
    },
    {
      id: 3,
      title: "Creative Indoor Adventures for Every Season",
      category: "Activities",
      author: "Maria Rodriguez",
      readTime: "6 min read",
      likes: 312,
      description: "Transform your home into a wonderland of learning with these engaging activities.",
      tags: ["Activities", "Indoor", "Creativity"],
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  const quickStats = [
    { label: "Articles Read", value: "12", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-100" },
    { label: "Saved Articles", value: "8", icon: Heart, color: "text-pink-600", bg: "bg-pink-100" },
    { label: "Community Points", value: "156", icon: Star, color: "text-orange-600", bg: "bg-orange-100" },
    { label: "Achievements", value: "4", icon: Award, color: "text-green-600", bg: "bg-green-100" }
  ];

  const filteredContent = featuredContent.filter(content =>
    content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    content.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    content.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full opacity-30 animate-bounce"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">KidSpark</span>
                <p className="text-sm text-gray-600">Parent Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-700 bg-white/60 rounded-xl px-4 py-2">
                <User className="h-4 w-4 text-purple-600" />
                <span className="font-medium">Hello, {user?.user_metadata?.full_name || user?.email || 'Parent'}!</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                className="border-purple-200 text-purple-600 hover:bg-purple-50 rounded-xl"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Your Parenting Adventure</h1>
          <p className="text-xl text-gray-600">Discover amazing resources tailored just for your family's journey.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-md rounded-2xl transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search articles, topics, or discover new ideas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 border-0 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg text-lg focus:ring-2 focus:ring-purple-300"
            />
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Handpicked Just for You</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map((content) => (
              <Card key={content.id} className="hover:shadow-2xl transition-all duration-300 cursor-pointer group border-0 bg-white/80 backdrop-blur-md rounded-3xl transform hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`bg-gradient-to-r ${content.gradient} text-white border-0 px-3 py-1 rounded-full`}>
                      {content.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Heart className="h-4 w-4 text-pink-500" />
                      <span className="text-sm font-medium">{content.likes}</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-purple-600 transition-colors text-xl leading-snug">
                    {content.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">{content.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="font-medium">By {content.author}</span>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {content.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {content.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-purple-200 text-purple-700 bg-purple-50 rounded-full px-2 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="border-0 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-gray-800 mb-2">Quick Actions</CardTitle>
            <CardDescription className="text-lg text-gray-600">Jump into your favorite activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Button className="h-24 flex flex-col bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <BookOpen className="h-8 w-8 mb-2" />
                <span className="font-medium">Explore Articles</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col border-2 border-pink-200 hover:bg-pink-50 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <Heart className="h-8 w-8 mb-2 text-pink-500" />
                <span className="font-medium text-pink-700">Saved Content</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col border-2 border-orange-200 hover:bg-orange-50 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <User className="h-8 w-8 mb-2 text-orange-500" />
                <span className="font-medium text-orange-700">Community Hub</span>
              </Button>
              <Button variant="outline" className="h-24 flex flex-col border-2 border-yellow-200 hover:bg-yellow-50 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <Award className="h-8 w-8 mb-2 text-yellow-600" />
                <span className="font-medium text-yellow-700">My Achievements</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ParentDashboard;
