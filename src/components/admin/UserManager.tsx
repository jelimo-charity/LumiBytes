
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Send, 
  Mail, 
  Users, 
  UserCheck, 
  UserX, 
  Settings,
  Search,
  Filter,
  Calendar,
  MapPin
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface User {
  id: number;
  name: string;
  email: string;
  joinedDate: string;
  lastActive: string;
  status: 'active' | 'inactive' | 'suspended';
  role: 'parent' | 'admin';
  location?: string;
  children: {
    age: string;
    interests: string[];
  }[];
  preferences: {
    emailNotifications: boolean;
    contentTypes: string[];
  };
}

export const UserManager = () => {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [newsletter, setNewsletter] = useState({
    subject: '',
    content: '',
    targetAudience: 'all'
  });

  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Emma Thompson",
      email: "emma@email.com",
      joinedDate: "2024-01-15",
      lastActive: "2024-01-20",
      status: "active",
      role: "parent",
      location: "New York, NY",
      children: [
        { age: "3 years", interests: ["art", "music"] },
        { age: "6 years", interests: ["reading", "science"] }
      ],
      preferences: {
        emailNotifications: true,
        contentTypes: ["development", "activities"]
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael@email.com",
      joinedDate: "2024-01-14",
      lastActive: "2024-01-19",
      status: "active",
      role: "parent",
      location: "San Francisco, CA",
      children: [
        { age: "2 years", interests: ["sensory", "motor skills"] }
      ],
      preferences: {
        emailNotifications: true,
        contentTypes: ["health", "nutrition"]
      }
    },
    {
      id: 3,
      name: "Sarah Wilson",
      email: "sarah@email.com",
      joinedDate: "2024-01-18",
      lastActive: "2024-01-18",
      status: "active",
      role: "parent",
      location: "Austin, TX",
      children: [
        { age: "5 years", interests: ["sports", "math"] },
        { age: "8 years", interests: ["reading", "coding"] }
      ],
      preferences: {
        emailNotifications: false,
        contentTypes: ["education", "technology"]
      }
    },
    {
      id: 4,
      name: "David Rodriguez",
      email: "david@email.com",
      joinedDate: "2024-01-10",
      lastActive: "2024-01-15",
      status: "inactive",
      role: "parent",
      location: "Miami, FL",
      children: [
        { age: "4 years", interests: ["art", "language"] }
      ],
      preferences: {
        emailNotifications: true,
        contentTypes: ["development", "activities"]
      }
    }
  ]);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSendNewsletter = () => {
    let targetUsers = users;
    
    if (newsletter.targetAudience !== 'all') {
      // Filter based on target audience criteria
      if (newsletter.targetAudience === 'new-parents') {
        targetUsers = users.filter(user => 
          user.children.some(child => 
            parseInt(child.age) <= 2
          )
        );
      }
      // Add more filtering logic as needed
    }

    toast({
      title: "Newsletter Sent Successfully",
      description: `Newsletter "${newsletter.subject}" sent to ${targetUsers.length} users.`,
    });

    setIsNewsletterModalOpen(false);
    setNewsletter({ subject: '', content: '', targetAudience: 'all' });
  };

  const handleUpdateUserStatus = (userId: number, newStatus: 'active' | 'inactive' | 'suspended') => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: newStatus }
        : user
    ));

    toast({
      title: "User Status Updated",
      description: `User status changed to ${newStatus}.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'default';
      case 'inactive': return 'secondary';
      case 'suspended': return 'destructive';
      default: return 'outline';
    }
  };

  const userStats = {
    total: users.length,
    active: users.filter(u => u.status === 'active').length,
    inactive: users.filter(u => u.status === 'inactive').length,
    newThisMonth: users.filter(u => {
      const joinDate = new Date(u.joinedDate);
      const now = new Date();
      return joinDate.getMonth() === now.getMonth() && joinDate.getFullYear() === now.getFullYear();
    }).length
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">User Management</h2>
          <p className="text-gray-600">Manage users and send communications</p>
        </div>
        
        <Dialog open={isNewsletterModalOpen} onOpenChange={setIsNewsletterModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
              <Send className="h-4 w-4 mr-2" />
              Send Newsletter
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Send Newsletter</DialogTitle>
              <DialogDescription>
                Create and send updates to your user base
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>Subject</Label>
                <Input
                  placeholder="Newsletter subject line"
                  value={newsletter.subject}
                  onChange={(e) => setNewsletter({...newsletter, subject: e.target.value})}
                />
              </div>

              <div>
                <Label>Target Audience</Label>
                <Select onValueChange={(value) => setNewsletter({...newsletter, targetAudience: value})} value={newsletter.targetAudience}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Users ({users.length})</SelectItem>
                    <SelectItem value="active">Active Users ({userStats.active})</SelectItem>
                    <SelectItem value="new-parents">New Parents (0-2 years)</SelectItem>
                    <SelectItem value="experienced-parents">Experienced Parents (3+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Content</Label>
                <Textarea
                  placeholder="Write your newsletter content here..."
                  rows={8}
                  value={newsletter.content}
                  onChange={(e) => setNewsletter({...newsletter, content: e.target.value})}
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsNewsletterModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSendNewsletter}>
                  <Mail className="h-4 w-4 mr-2" />
                  Send Newsletter
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* User Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold">{userStats.total}</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-green-600">{userStats.active}</p>
              </div>
              <UserCheck className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Inactive Users</p>
                <p className="text-2xl font-bold text-orange-600">{userStats.inactive}</p>
              </div>
              <UserX className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">New This Month</p>
                <p className="text-2xl font-bold text-purple-600">{userStats.newThisMonth}</p>
              </div>
              <Calendar className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle>User Directory</CardTitle>
          <CardDescription>Search and manage user accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search users by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Children</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                      <div className="flex items-center mt-1">
                        {user.preferences.emailNotifications && (
                          <Badge variant="outline" className="text-xs mr-1">
                            <Mail className="h-3 w-3 mr-1" />
                            Notifications On
                          </Badge>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(user.status)}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {user.children.map((child, index) => (
                        <div key={index} className="text-sm">
                          <Badge variant="secondary" className="text-xs mr-1">
                            {child.age}
                          </Badge>
                          <span className="text-gray-500">
                            {child.interests.slice(0, 2).join(', ')}
                            {child.interests.length > 2 && '...'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    {user.location && (
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-3 w-3 mr-1" />
                        {user.location}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>{user.joinedDate}</TableCell>
                  <TableCell>{user.lastActive}</TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      {user.status === 'active' ? (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleUpdateUserStatus(user.id, 'suspended')}
                        >
                          Suspend
                        </Button>
                      ) : (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleUpdateUserStatus(user.id, 'active')}
                        >
                          Activate
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
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
