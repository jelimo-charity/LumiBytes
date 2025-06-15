
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Users, 
  TrendingUp, 
  Eye, 
  Heart, 
  MessageCircle, 
  Download,
  Clock,
  Calendar
} from 'lucide-react';

interface UserData {
  id: number;
  name: string;
  email: string;
  joinedDate: string;
  lastActive: string;
  contentViewed: number;
  articlesBookmarked: number;
  commentsPosted: number;
  materialsDownloaded: number;
  status: 'active' | 'inactive' | 'new';
  childrenAges: string[];
}

interface ContentAnalytics {
  id: number;
  title: string;
  type: 'blog' | 'material';
  category: string;
  views: number;
  likes: number;
  comments: number;
  downloads?: number;
  engagement: number;
  publishedDate: string;
}

export const UserAnalytics = () => {
  const [timeFilter, setTimeFilter] = useState('30d');
  const [contentFilter, setContentFilter] = useState('all');

  const userData: UserData[] = [
    {
      id: 1,
      name: "Emma Thompson",
      email: "emma@email.com",
      joinedDate: "2024-01-15",
      lastActive: "2024-01-20",
      contentViewed: 45,
      articlesBookmarked: 12,
      commentsPosted: 8,
      materialsDownloaded: 15,
      status: "active",
      childrenAges: ["3 years", "6 years"]
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael@email.com", 
      joinedDate: "2024-01-14",
      lastActive: "2024-01-19",
      contentViewed: 32,
      articlesBookmarked: 8,
      commentsPosted: 5,
      materialsDownloaded: 22,
      status: "active",
      childrenAges: ["2 years"]
    },
    {
      id: 3,
      name: "Sarah Wilson",
      email: "sarah@email.com",
      joinedDate: "2024-01-18",
      lastActive: "2024-01-18",
      contentViewed: 12,
      articlesBookmarked: 3,
      commentsPosted: 1,
      materialsDownloaded: 5,
      status: "new",
      childrenAges: ["5 years", "8 years"]
    }
  ];

  const contentAnalytics: ContentAnalytics[] = [
    {
      id: 1,
      title: "Building Emotional Intelligence in Toddlers",
      type: "blog",
      category: "Development",
      views: 1234,
      likes: 89,
      comments: 23,
      engagement: 87,
      publishedDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Counting with Colors",
      type: "material",
      category: "Math",
      views: 567,
      likes: 45,
      comments: 12,
      downloads: 234,
      engagement: 92,
      publishedDate: "2024-01-15"
    },
    {
      id: 3,
      title: "Healthy Screen Time Guidelines",
      type: "blog",
      category: "Health",
      views: 892,
      likes: 67,
      comments: 18,
      engagement: 78,
      publishedDate: "2024-01-14"
    }
  ];

  const overviewStats = [
    {
      title: "Total Users",
      value: "1,234",
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Active Users (30d)",
      value: "892",
      change: "+8%",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Total Content Views",
      value: "15.2K",
      change: "+23%",
      icon: Eye,
      color: "text-purple-600"
    },
    {
      title: "Average Session Time",
      value: "12.5 min",
      change: "+5%",
      icon: Clock,
      color: "text-orange-600"
    }
  ];

  const getEngagementColor = (engagement: number) => {
    if (engagement >= 80) return "text-green-600 bg-green-50";
    if (engagement >= 60) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">User Analytics</h2>
          <p className="text-gray-600">Monitor user engagement and content performance</p>
        </div>
        
        <div className="flex space-x-2">
          <Select value={timeFilter} onValueChange={setTimeFilter}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.change} vs last period
                  </p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Content Performance */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Top Performing Content</CardTitle>
                <CardDescription>Most engaged content by type</CardDescription>
              </div>
              <Select value={contentFilter} onValueChange={setContentFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Content</SelectItem>
                  <SelectItem value="blog">Blog Posts</SelectItem>
                  <SelectItem value="material">Learning Materials</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contentAnalytics
                .filter(content => contentFilter === 'all' || content.type === contentFilter)
                .map((content) => (
                <div key={content.id} className="p-4 border border-gray-100 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium">{content.title}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline">{content.type}</Badge>
                        <Badge variant="secondary">{content.category}</Badge>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${getEngagementColor(content.engagement)}`}>
                      {content.engagement}% engaged
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {content.views}
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-3 w-3 mr-1" />
                      {content.likes}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-3 w-3 mr-1" />
                      {content.comments}
                    </div>
                    {content.downloads && (
                      <div className="flex items-center">
                        <Download className="h-3 w-3 mr-1" />
                        {content.downloads}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* User Engagement */}
        <Card>
          <CardHeader>
            <CardTitle>User Engagement Overview</CardTitle>
            <CardDescription>Active users and their activity patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Activity</TableHead>
                  <TableHead>Children</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userData.slice(0, 5).map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        user.status === 'active' ? 'default' : 
                        user.status === 'new' ? 'secondary' : 'outline'
                      }>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{user.contentViewed} views</div>
                        <div className="text-gray-500">{user.articlesBookmarked} bookmarks</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {user.childrenAges.map((age, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {age}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Detailed User Activity */}
      <Card>
        <CardHeader>
          <CardTitle>User Activity Details</CardTitle>
          <CardDescription>Comprehensive user engagement metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Content Viewed</TableHead>
                <TableHead>Bookmarks</TableHead>
                <TableHead>Comments</TableHead>
                <TableHead>Downloads</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userData.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-3 w-3 mr-1" />
                      {user.joinedDate}
                    </div>
                  </TableCell>
                  <TableCell>{user.lastActive}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {user.contentViewed}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Heart className="h-3 w-3 mr-1" />
                      {user.articlesBookmarked}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <MessageCircle className="h-3 w-3 mr-1" />
                      {user.commentsPosted}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Download className="h-3 w-3 mr-1" />
                      {user.materialsDownloaded}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      user.status === 'active' ? 'default' : 
                      user.status === 'new' ? 'secondary' : 'outline'
                    }>
                      {user.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
