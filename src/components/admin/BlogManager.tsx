
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
import { Plus, Edit, Trash2, Eye, Heart, MessageCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published';
  views: number;
  likes: number;
  comments: number;
  createdAt: string;
  image?: string;
}

export const BlogManager = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    author: '',
    category: '',
    tags: '',
    status: 'draft' as 'draft' | 'published',
    image: ''
  });

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Building Emotional Intelligence in Toddlers",
      content: "Understanding emotions is crucial for toddler development...",
      author: "Dr. Sarah Johnson",
      category: "Development",
      tags: ["toddlers", "emotions", "development"],
      status: "published",
      views: 1234,
      likes: 89,
      comments: 23,
      createdAt: "2024-01-15",
      image: "https://example.com/toddler-emotions.jpg"
    },
    {
      id: 2,
      title: "Healthy Screen Time Guidelines by Age",
      content: "Screen time recommendations vary by age group...",
      author: "Child Development Team",
      category: "Health",
      tags: ["screen time", "digital wellness", "guidelines"],
      status: "draft",
      views: 0,
      likes: 0,
      comments: 0,
      createdAt: "2024-01-14"
    }
  ]);

  const handleCreatePost = () => {
    const post: BlogPost = {
      id: Date.now(),
      title: newPost.title,
      content: newPost.content,
      author: newPost.author,
      category: newPost.category,
      tags: newPost.tags.split(',').map(tag => tag.trim()),
      status: newPost.status,
      views: 0,
      likes: 0,
      comments: 0,
      createdAt: new Date().toISOString().split('T')[0],
      image: newPost.image || undefined
    };

    setBlogPosts([...blogPosts, post]);
    setIsCreateModalOpen(false);
    setNewPost({ title: '', content: '', author: '', category: '', tags: '', status: 'draft', image: '' });
    
    toast({
      title: "Blog Post Created",
      description: `"${post.title}" has been ${post.status === 'published' ? 'published' : 'saved as draft'}.`,
    });
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setNewPost({
      title: post.title,
      content: post.content,
      author: post.author,
      category: post.category,
      tags: post.tags.join(', '),
      status: post.status,
      image: post.image || ''
    });
  };

  const handleUpdatePost = () => {
    if (!editingPost) return;

    const updatedPosts = blogPosts.map(post => 
      post.id === editingPost.id 
        ? {
            ...post,
            title: newPost.title,
            content: newPost.content,
            author: newPost.author,
            category: newPost.category,
            tags: newPost.tags.split(',').map(tag => tag.trim()),
            status: newPost.status,
            image: newPost.image || undefined
          }
        : post
    );

    setBlogPosts(updatedPosts);
    setEditingPost(null);
    setNewPost({ title: '', content: '', author: '', category: '', tags: '', status: 'draft', image: '' });
    
    toast({
      title: "Blog Post Updated",
      description: `"${newPost.title}" has been updated.`,
    });
  };

  const handleDeletePost = (id: number) => {
    setBlogPosts(blogPosts.filter(post => post.id !== id));
    toast({
      title: "Blog Post Deleted",
      description: "The blog post has been removed.",
    });
  };

  const resetForm = () => {
    setNewPost({ title: '', content: '', author: '', category: '', tags: '', status: 'draft', image: '' });
    setEditingPost(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Blog Management</h2>
          <p className="text-gray-600">Create, edit, and manage blog posts</p>
        </div>
        
        <Dialog open={isCreateModalOpen || !!editingPost} onOpenChange={(open) => {
          setIsCreateModalOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-500 to-indigo-500">
              <Plus className="h-4 w-4 mr-2" />
              New Blog Post
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}</DialogTitle>
              <DialogDescription>
                {editingPost ? 'Update your blog post details' : 'Add a new blog post to the platform'}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>Title</Label>
                <Input
                  placeholder="Enter blog post title"
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Category</Label>
                  <Select onValueChange={(value) => setNewPost({...newPost, category: value})} value={newPost.category}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="health">Health</SelectItem>
                      <SelectItem value="activities">Activities</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="nutrition">Nutrition</SelectItem>
                      <SelectItem value="safety">Safety</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Author</Label>
                  <Input
                    placeholder="Author name"
                    value={newPost.author}
                    onChange={(e) => setNewPost({...newPost, author: e.target.value})}
                  />
                </div>
                <div>
                  <Label>Status</Label>
                  <Select onValueChange={(value: 'draft' | 'published') => setNewPost({...newPost, status: value})} value={newPost.status}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Tags (comma separated)</Label>
                <Input
                  placeholder="parenting, toddlers, development"
                  value={newPost.tags}
                  onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
                />
              </div>

              <div>
                <Label>Featured Image URL (optional)</Label>
                <Input
                  placeholder="https://example.com/image.jpg"
                  value={newPost.image}
                  onChange={(e) => setNewPost({...newPost, image: e.target.value})}
                />
              </div>

              <div>
                <Label>Content</Label>
                <Textarea
                  placeholder="Write your blog post content here..."
                  rows={8}
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
                <Button onClick={editingPost ? handleUpdatePost : handleCreatePost}>
                  {editingPost ? 'Update Post' : 'Create Post'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Blog Posts</CardTitle>
          <CardDescription>Manage your published and draft content</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Engagement</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{post.title}</div>
                      <div className="text-sm text-gray-500 flex flex-wrap gap-1 mt-1">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{post.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                      {post.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {post.views}
                      </span>
                      <span className="flex items-center">
                        <Heart className="h-3 w-3 mr-1" />
                        {post.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        {post.comments}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{post.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleEditPost(post)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-red-600 hover:text-red-700"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        <Trash2 className="h-4 w-4" />
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
