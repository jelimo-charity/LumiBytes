
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles, Users, BookOpen, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleLogin = (e: React.FormEvent, role: 'admin' | 'parent') => {
    e.preventDefault();
    // Simulate authentication
    localStorage.setItem('userRole', role);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', name || email.split('@')[0]);
    
    toast({
      title: "Welcome to KidSpark!",
      description: `Logged in as ${role}`,
    });
    
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-12 w-12 text-orange-500 mr-3" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              KidSpark
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering parents with expert guidance, engaging content, and a supportive community 
            to nurture happy, healthy, and thriving children.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300 border-orange-100">
            <CardHeader>
              <BookOpen className="h-10 w-10 text-orange-500 mb-2" />
              <CardTitle className="text-orange-800">Expert Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Access curated articles, blogs, and learning resources from child development experts.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-amber-100">
            <CardHeader>
              <Users className="h-10 w-10 text-amber-500 mb-2" />
              <CardTitle className="text-amber-800">Community Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Connect with other parents and share experiences in a supportive environment.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 border-yellow-100">
            <CardHeader>
              <Heart className="h-10 w-10 text-yellow-600 mb-2" />
              <CardTitle className="text-yellow-800">Personalized Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Get content tailored to your child's age, interests, and developmental stage.</p>
            </CardContent>
          </Card>
        </div>

        {/* Authentication Section */}
        <div className="max-w-md mx-auto">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800">Join KidSpark</CardTitle>
              <CardDescription>Start your parenting journey with us</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="parent" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="parent" className="text-sm">Parent</TabsTrigger>
                  <TabsTrigger value="admin" className="text-sm">Admin</TabsTrigger>
                </TabsList>
                
                <TabsContent value="parent">
                  <form onSubmit={(e) => handleLogin(e, 'parent')} className="space-y-4">
                    <div>
                      <Label htmlFor="parent-name">Full Name</Label>
                      <Input
                        id="parent-name"
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="parent-email">Email</Label>
                      <Input
                        id="parent-email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="parent-password">Password</Label>
                      <Input
                        id="parent-password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                      Join as Parent
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="admin">
                  <form onSubmit={(e) => handleLogin(e, 'admin')} className="space-y-4">
                    <div>
                      <Label htmlFor="admin-email">Admin Email</Label>
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="admin@kidspark.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="admin-password">Password</Label>
                      <Input
                        id="admin-password"
                        type="password"
                        placeholder="Enter admin password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
                      Admin Login
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
