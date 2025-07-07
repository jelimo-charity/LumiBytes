
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
  MapPin,
  Loader2
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useUserAnalytics } from '@/hooks/useUserAnalytics';

export const UserManager = () => {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [newsletter, setNewsletter] = useState({
    subject: '',
    content: '',
    targetAudience: 'all'
  });

  const { users, loading, error } = useUserAnalytics();

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.display_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSendNewsletter = () => {
    let targetUsers = users;
    
    if (newsletter.targetAudience !== 'all') {
      // Filter based on target audience criteria
      if (newsletter.targetAudience === 'active') {
        targetUsers = users.filter(user => user.status === 'active');
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

  const handleUpdateUserStatus = (userId: string, newStatus: 'active' | 'inactive' | 'suspended') => {
    // In a real app, this would update the database
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
      const joinDate = new Date(u.created_at);
      const now = new Date();
      return joinDate.getMonth() === now.getMonth() && joinDate.getFullYear() === now.getFullYear();
    }).length
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-[#758bfd]" />
        <span className="ml-2 text-[#758bfd]">Loading user data...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-600">Error loading user data: {error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">User Management</h2>
          <p className="text-gray-600">Manage users and send communications with real data</p>
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
                    <SelectItem value="admins">Admin Users ({users.filter(u => u.role === 'admin').length})</SelectItem>
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
          <CardDescription>Search and manage user accounts from database</CardDescription>
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
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
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
                    <Badge variant={getStatusColor(user.status)}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(user.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>{user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString() : 'Never'}</TableCell>
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
