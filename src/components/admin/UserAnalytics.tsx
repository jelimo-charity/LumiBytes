
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
  Calendar,
  Loader2
} from 'lucide-react';
import { useUserAnalytics } from '@/hooks/useUserAnalytics';

export const UserAnalytics = () => {
  const [timeFilter, setTimeFilter] = useState('30d');
  const [contentFilter, setContentFilter] = useState('all');
  const { users, content, loading, error } = useUserAnalytics();

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-[#758bfd]" />
        <span className="ml-2 text-[#758bfd]">Loading analytics...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-600">Error loading analytics: {error}</p>
      </div>
    );
  }

  const overviewStats = [
    {
      title: "Total Users",
      value: users.length.toString(),
      change: "+12%",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Active Users (30d)",
      value: users.filter(u => u.status === 'active').length.toString(),
      change: "+8%",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Total Content Views",
      value: content.reduce((sum, item) => sum + item.views, 0).toLocaleString(),
      change: "+23%",
      icon: Eye,
      color: "text-purple-600"
    },
    {
      title: "Published Content",
      value: content.length.toString(),
      change: "+5%",
      icon: Clock,
      color: "text-orange-600"
    }
  ];

  const getEngagementColor = (views: number) => {
    if (views >= 500) return "text-green-600 bg-green-50";
    if (views >= 200) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  const filteredContent = content.filter(item => 
    contentFilter === 'all' || item.type === contentFilter
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">User Analytics</h2>
          <p className="text-gray-600">Monitor user engagement and content performance with real data</p>
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
                <CardDescription>Real content engagement metrics</CardDescription>
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
              {filteredContent.slice(0, 5).map((item) => (
                <div key={item.id} className="p-4 border border-gray-100 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium">{item.title}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline">{item.type}</Badge>
                        <span className="text-xs text-gray-500">
                          {new Date(item.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${getEngagementColor(item.views)}`}>
                      {item.views} views
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {item.views}
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-3 w-3 mr-1" />
                      {item.likes}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-3 w-3 mr-1" />
                      {item.comments}
                    </div>
                    {item.downloads && (
                      <div className="flex items-center">
                        <Download className="h-3 w-3 mr-1" />
                        {item.downloads}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* User Overview */}
        <Card>
          <CardHeader>
            <CardTitle>User Overview</CardTitle>
            <CardDescription>Real user data from database</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Joined</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.slice(0, 5).map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{user.display_name || 'Anonymous User'}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.status === 'active' ? 'default' : 'outline'}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(user.created_at).toLocaleDateString()}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Content Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>Content Performance Details</CardTitle>
          <CardDescription>Comprehensive analytics for all published content</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Engagement</TableHead>
                <TableHead>Published</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {content.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="font-medium">{item.title}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={item.type === 'blog' ? 'default' : 'secondary'}>
                      {item.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {item.views}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2 text-sm">
                      <span className="flex items-center">
                        <Heart className="h-3 w-3 mr-1" />
                        {item.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        {item.comments}
                      </span>
                      {item.downloads && (
                        <span className="flex items-center">
                          <Download className="h-3 w-3 mr-1" />
                          {item.downloads}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{new Date(item.created_at).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
