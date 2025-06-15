
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Users, 
  FileText, 
  TrendingUp, 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  LogOut,
  BarChart3,
  BookOpen,
  Heart,
  Eye
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newContent, setNewContent] = useState({
    title: '',
    category: '',
    content: '',
    tags: '',
    author: ''
  });

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    const name = localStorage.getItem('userName');
    
    if (role !== 'admin') {
      navigate('/');
      return;
    }
    
    setUserName(name || 'Admin');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    toast({
      title: "Logged out successfully",
      description: "Admin session ended",
    });
    navigate('/');
  };

  const handleCreateContent = () => {
    // Simulate content creation
    toast({
      title: "Content Created Successfully",
      description: `"${newContent.title}" has been published.`,
    });
    setIsCreateModalOpen(false);
    setNewContent({ title: '', category: '', content: '', tags: '', author: '' });
  };

  const stats = [
    { label: "Total Users", value: "1,234", icon: Users, trend: "+12%" },
    { label: "Published Articles", value: "89", icon: FileText, trend: "+5%" },
    { label: "Monthly Views", value: "15.2K", icon: Eye, trend: "+23%" },
    { label: "Engagement Rate", value: "68%", icon: TrendingUp, trend: "+8%" }
  ];

  const recentArticles = [
    {
      id: 1,
      title: "Building Emotional Intelligence in Toddlers",
      category: "Development",
      author: "Dr. Sarah Johnson",
      status: "Published",
      views: 1234,
      likes: 89,
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Healthy Screen Time Guidelines by Age",
      category: "Health",
      author: "Child Development Team",
      status: "Draft",
      views: 0,
      likes: 0,
      date: "2024-01-14"
    },
    {
      id: 3,
      title: "Creative Indoor Activities for Rainy Days",
      category: "Activities",
      author: "Maria Rodriguez",
      status: "Published",
      views: 892,
      likes: 67,
      date: "2024-01-13"
    }
  ];

  const recentUsers = [
    { name: "Emma Thompson", email: "emma@email.com", joined: "2024-01-15", status: "Active" },
    { name: "Michael Chen", email: "michael@email.com", joined: "2024-01-14", status: "Active" },
    { name: "Sarah Wilson", email: "sarah@email.com", joined: "2024-01-13", status: "New" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-800">KidSpark Admin</span>
                <p className="text-sm text-gray-500">Content Management System</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Settings className="h-4 w-4" />
                <span>Welcome, {userName}!</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                className="border-blue-200 hover:bg-blue-50"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage content, users, and platform analytics.</p>
          </div>
          
          <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                <Plus className="h-4 w-4 mr-2" />
                Create Content
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create New Content</DialogTitle>
                <DialogDescription>
                  Add a new article, blog post, or learning resource to the platform.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Title</Label>
                  <Input
                    placeholder="Enter content title"
                    value={newContent.title}
                    onChange={(e) => setNewContent({...newContent, title: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Category</Label>
                    <Select onValueChange={(value) => setNewContent({...newContent, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="health">Health</SelectItem>
                        <SelectItem value="activities">Activities</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="nutrition">Nutrition</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Author</Label>
                    <Input
                      placeholder="Author name"
                      value={newContent.author}
                      onChange={(e) => setNewContent({...newContent, author: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <Label>Tags (comma separated)</Label>
                  <Input
                    placeholder="toddlers, development, parenting"
                    value={newContent.tags}
                    onChange={(e) => setNewContent({...newContent, tags: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Content</Label>
                  <Textarea
                    placeholder="Write your content here..."
                    rows={6}
                    value={newContent.content}
                    onChange={(e) => setNewContent({...newContent, content: e.target.value})}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleCreateContent} className="bg-gradient-to-r from-blue-500 to-indigo-500">
                    Publish Content
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {stat.trend}
                    </p>
                  </div>
                  <stat.icon className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="content">Content Management</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Recent Articles
                </CardTitle>
                <CardDescription>Manage your published and draft content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentArticles.map((article) => (
                    <div key={article.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold">{article.title}</h4>
                          <Badge variant={article.status === 'Published' ? 'default' : 'secondary'}>
                            {article.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>By {article.author}</span>
                          <span>{article.category}</span>
                          <span>{article.date}</span>
                          {article.status === 'Published' && (
                            <>
                              <span className="flex items-center">
                                <Eye className="h-3 w-3 mr-1" />
                                {article.views}
                              </span>
                              <span className="flex items-center">
                                <Heart className="h-3 w-3 mr-1" />
                                {article.likes}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Recent Users
                </CardTitle>
                <CardDescription>Monitor user registrations and activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold">{user.name}</h4>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                            {user.status}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">Joined {user.joined}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Content Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Most Viewed Category</span>
                      <Badge>Development</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Average Read Time</span>
                      <span className="font-semibold">4.2 minutes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Completion Rate</span>
                      <span className="font-semibold">78%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    User Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Daily Active Users</span>
                      <span className="font-semibold">342</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Average Session Duration</span>
                      <span className="font-semibold">12.5 minutes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Return Rate</span>
                      <span className="font-semibold">65%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
