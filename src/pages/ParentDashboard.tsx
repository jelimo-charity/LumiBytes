
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Heart, Star, Clock, User, LogOut, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const ParentDashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    const name = localStorage.getItem('userName');
    
    if (role !== 'parent') {
      navigate('/');
      return;
    }
    
    setUserName(name || 'Parent');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    toast({
      title: "Logged out successfully",
      description: "See you next time!",
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
      description: "Learn practical strategies to help your toddler understand and express emotions in healthy ways.",
      tags: ["Toddlers", "Emotions", "Development"]
    },
    {
      id: 2,
      title: "Healthy Screen Time Guidelines by Age",
      category: "Health",
      author: "Child Development Team",
      readTime: "8 min read",
      likes: 187,
      description: "Expert recommendations for managing screen time while promoting healthy development.",
      tags: ["Screen Time", "Health", "Guidelines"]
    },
    {
      id: 3,
      title: "Creative Indoor Activities for Rainy Days",
      category: "Activities",
      author: "Maria Rodriguez",
      readTime: "6 min read",
      likes: 312,
      description: "Fun, educational activities to keep kids engaged when outdoor play isn't possible.",
      tags: ["Activities", "Indoor", "Creativity"]
    }
  ];

  const quickStats = [
    { label: "Articles Read", value: "12", icon: BookOpen },
    { label: "Saved Articles", value: "8", icon: Heart },
    { label: "Community Points", value: "156", icon: Star }
  ];

  const filteredContent = featuredContent.filter(content =>
    content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    content.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    content.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-800">KidSpark</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <User className="h-4 w-4" />
                <span>Welcome, {userName}!</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                className="border-orange-200 hover:bg-orange-50"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Parenting Journey</h1>
          <p className="text-gray-600">Discover personalized content and resources to support your family.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-orange-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-orange-600">{stat.value}</p>
                  </div>
                  <stat.icon className="h-8 w-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search articles, topics, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-orange-200 focus:border-orange-400"
            />
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended for You</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((content) => (
              <Card key={content.id} className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-orange-100">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      {content.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{content.likes}</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-orange-600 transition-colors">
                    {content.title}
                  </CardTitle>
                  <CardDescription>{content.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>By {content.author}</span>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {content.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {content.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-orange-200 text-orange-700">
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
        <Card className="border-orange-100">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                <BookOpen className="h-6 w-6 mb-1" />
                Browse Articles
              </Button>
              <Button variant="outline" className="h-20 flex flex-col border-orange-200 hover:bg-orange-50">
                <Heart className="h-6 w-6 mb-1 text-orange-500" />
                Saved Content
              </Button>
              <Button variant="outline" className="h-20 flex flex-col border-orange-200 hover:bg-orange-50">
                <User className="h-6 w-6 mb-1 text-orange-500" />
                Community
              </Button>
              <Button variant="outline" className="h-20 flex flex-col border-orange-200 hover:bg-orange-50">
                <Star className="h-6 w-6 mb-1 text-orange-500" />
                Achievements
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ParentDashboard;
