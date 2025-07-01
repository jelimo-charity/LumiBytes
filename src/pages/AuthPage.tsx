
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles, ArrowLeft, Zap, Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [signupForm, setSignupForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        navigate('/dashboard');
      }
    };
    checkAuth();
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginForm.email,
        password: loginForm.password,
      });

      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          toast({
            title: "Login Failed",
            description: "Invalid email or password. Please check your credentials.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Login Failed",
            description: error.message,
            variant: "destructive",
          });
        }
        return;
      }

      if (data.user) {
        toast({
          title: "Welcome back to KidSpark! ✨",
          description: "Ready to continue your parenting adventure?",
        });
        navigate('/dashboard');
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (signupForm.password !== signupForm.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      return;
    }

    if (signupForm.password.length < 6) {
      toast({
        title: "Password Too Short",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: signupForm.email,
        password: signupForm.password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            full_name: signupForm.fullName,
          }
        }
      });

      if (error) {
        if (error.message.includes('User already registered')) {
          toast({
            title: "Account Exists",
            description: "An account with this email already exists. Please try logging in instead.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Signup Failed",
            description: error.message,
            variant: "destructive",
          });
        }
        return;
      }

      if (data.user) {
        toast({
          title: "Welcome to KidSpark! 🎉",
          description: "Your parenting adventure begins now! Check your email for verification.",
        });
        
        // Auto-login after successful signup
        if (data.session) {
          navigate('/dashboard');
        }
      }
    } catch (error) {
      toast({
        title: "Signup Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-gradient-to-br from-green-300 to-teal-300 rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6 hover:bg-white/50 rounded-xl"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="h-3 w-3 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              KidSpark
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Join thousands of parents creating magical moments and raising extraordinary children
            </p>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-md rounded-3xl">
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-pink-500 mr-2" />
                <Zap className="h-6 w-6 text-purple-500" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-2">Welcome</CardTitle>
              <CardDescription className="text-lg text-gray-600">Ready to spark your parenting journey?</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 rounded-2xl p-1">
                  <TabsTrigger value="login" className="rounded-xl font-medium">Sign In</TabsTrigger>
                  <TabsTrigger value="signup" className="rounded-xl font-medium">Join Us</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                      <Label htmlFor="login-email" className="text-gray-700 font-medium">Email Address</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="Enter your email"
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                        required
                        disabled={isLoading}
                        className="mt-2 border-gray-200 rounded-xl py-3 focus:ring-2 focus:ring-purple-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="login-password" className="text-gray-700 font-medium">Password</Label>
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="Enter your password"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                        required
                        disabled={isLoading}
                        className="mt-2 border-gray-200 rounded-xl py-3 focus:ring-2 focus:ring-purple-300"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 py-3 rounded-xl font-medium text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Signing in...' : 'Sign In'}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup">
                  <form onSubmit={handleSignup} className="space-y-6">
                    <div>
                      <Label htmlFor="signup-name" className="text-gray-700 font-medium">Full Name</Label>
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder="Enter your full name"
                        value={signupForm.fullName}
                        onChange={(e) => setSignupForm({...signupForm, fullName: e.target.value})}
                        required
                        disabled={isLoading}
                        className="mt-2 border-gray-200 rounded-xl py-3 focus:ring-2 focus:ring-purple-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="signup-email" className="text-gray-700 font-medium">Email Address</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="Enter your email"
                        value={signupForm.email}
                        onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                        required
                        disabled={isLoading}
                        className="mt-2 border-gray-200 rounded-xl py-3 focus:ring-2 focus:ring-purple-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="signup-password" className="text-gray-700 font-medium">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="Create a secure password (min. 6 characters)"
                        value={signupForm.password}
                        onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                        required
                        disabled={isLoading}
                        className="mt-2 border-gray-200 rounded-xl py-3 focus:ring-2 focus:ring-purple-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="signup-confirm" className="text-gray-700 font-medium">Confirm Password</Label>
                      <Input
                        id="signup-confirm"
                        type="password"
                        placeholder="Confirm your password"
                        value={signupForm.confirmPassword}
                        onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                        required
                        disabled={isLoading}
                        className="mt-2 border-gray-200 rounded-xl py-3 focus:ring-2 focus:ring-purple-300"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 py-3 rounded-xl font-medium text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Creating your account...' : 'Start Your Journey'}
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

export default AuthPage;
