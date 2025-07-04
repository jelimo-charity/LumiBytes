
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles, ArrowLeft, Zap, Heart, Star, Lock, Mail, User, Shield } from 'lucide-react';
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
          title: "Welcome back to LumiBytes! ✨",
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
          title: "Welcome to LumiBytes! 🎉",
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
    <div className="min-h-screen bg-gradient-to-br from-[#f1f2f6] via-white to-[#aeb8fe]/30 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-[#27187e]/10 to-[#758bfd]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-[#ff8600]/15 to-[#758bfd]/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-br from-[#aeb8fe]/20 to-[#ff8600]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-gradient-to-br from-[#758bfd]/15 to-[#27187e]/10 rounded-full blur-lg animate-bounce delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-[#27187e]/5 to-[#758bfd]/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6 hover:bg-white/60 rounded-2xl border border-[#758bfd]/20 backdrop-blur-md transition-all duration-300 hover:scale-105 text-[#27187e]"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="relative group">
                <div className="w-20 h-20 bg-gradient-to-br from-[#27187e] via-[#758bfd] to-[#ff8600] rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                  <Sparkles className="h-10 w-10 text-white animate-pulse" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#ff8600] to-[#758bfd] rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <Star className="h-4 w-4 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#27187e] to-[#758bfd] rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[#27187e] via-[#758bfd] to-[#ff8600] bg-clip-text text-transparent">
              LumiBytes
            </h1>
            <p className="text-xl text-[#758bfd] max-w-2xl mx-auto leading-relaxed font-medium">
              Join thousands of parents creating magical moments and raising extraordinary children ✨
            </p>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="shadow-2xl border-2 border-[#758bfd]/20 bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-500">
            <CardHeader className="text-center pb-8 bg-gradient-to-br from-white/80 to-[#aeb8fe]/20">
              <div className="flex items-center justify-center mb-6">
                <div className="flex space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#758bfd] to-[#ff8600] rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#27187e] to-[#758bfd] rounded-2xl flex items-center justify-center shadow-lg animate-pulse delay-300">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ff8600] to-[#758bfd] rounded-2xl flex items-center justify-center shadow-lg animate-pulse delay-500">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardTitle className="text-4xl font-bold text-[#27187e] mb-3">Welcome to Your Journey</CardTitle>
              <CardDescription className="text-lg text-[#758bfd] font-medium">Ready to spark your parenting adventure?</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-gradient-to-r from-[#f1f2f6] to-[#aeb8fe]/30 rounded-2xl p-1 border-2 border-[#758bfd]/20">
                  <TabsTrigger 
                    value="login" 
                    className="rounded-xl font-semibold text-[#27187e] data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#27187e] data-[state=active]:to-[#758bfd] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105 py-3"
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger 
                    value="signup" 
                    className="rounded-xl font-semibold text-[#27187e] data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#758bfd] data-[state=active]:to-[#ff8600] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 hover:scale-105 py-3"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Join Us
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="space-y-0">
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div className="group">
                      <Label htmlFor="login-email" className="text-[#27187e] font-semibold text-sm mb-2 block">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#758bfd] group-focus-within:text-[#27187e] transition-colors" />
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="Enter your email"
                          value={loginForm.email}
                          onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                          required
                          disabled={isLoading}
                          className="pl-12 pr-4 py-4 border-2 border-[#758bfd]/20 rounded-2xl bg-white/80 backdrop-blur-md focus:ring-2 focus:ring-[#758bfd]/50 focus:border-[#27187e] transition-all duration-300 hover:border-[#758bfd]/40 text-[#27187e] placeholder-[#758bfd]/60"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <Label htmlFor="login-password" className="text-[#27187e] font-semibold text-sm mb-2 block">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#758bfd] group-focus-within:text-[#27187e] transition-colors" />
                        <Input
                          id="login-password"
                          type="password"
                          placeholder="Enter your password"
                          value={loginForm.password}
                          onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                          required
                          disabled={isLoading}
                          className="pl-12 pr-4 py-4 border-2 border-[#758bfd]/20 rounded-2xl bg-white/80 backdrop-blur-md focus:ring-2 focus:ring-[#758bfd]/50 focus:border-[#27187e] transition-all duration-300 hover:border-[#758bfd]/40 text-[#27187e] placeholder-[#758bfd]/60"
                        />
                      </div>
                    </div>
                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-[#27187e] via-[#758bfd] to-[#aeb8fe] hover:from-[#27187e]/90 hover:via-[#758bfd]/90 hover:to-[#aeb8fe]/90 py-4 rounded-2xl font-semibold text-lg shadow-xl transform hover:scale-105 transition-all duration-300 border-0 min-h-[56px]"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Signing in...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Lock className="h-5 w-5 mr-2" />
                            Sign In to LumiBytes
                          </div>
                        )}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup" className="space-y-0">
                  <form onSubmit={handleSignup} className="space-y-6">
                    <div className="group">
                      <Label htmlFor="signup-name" className="text-[#27187e] font-semibold text-sm mb-2 block">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#758bfd] group-focus-within:text-[#27187e] transition-colors" />
                        <Input
                          id="signup-name"
                          type="text"
                          placeholder="Enter your full name"
                          value={signupForm.fullName}
                          onChange={(e) => setSignupForm({...signupForm, fullName: e.target.value})}
                          required
                          disabled={isLoading}
                          className="pl-12 pr-4 py-4 border-2 border-[#758bfd]/20 rounded-2xl bg-white/80 backdrop-blur-md focus:ring-2 focus:ring-[#758bfd]/50 focus:border-[#27187e] transition-all duration-300 hover:border-[#758bfd]/40 text-[#27187e] placeholder-[#758bfd]/60"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <Label htmlFor="signup-email" className="text-[#27187e] font-semibold text-sm mb-2 block">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#758bfd] group-focus-within:text-[#27187e] transition-colors" />
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="Enter your email"
                          value={signupForm.email}
                          onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                          required
                          disabled={isLoading}
                          className="pl-12 pr-4 py-4 border-2 border-[#758bfd]/20 rounded-2xl bg-white/80 backdrop-blur-md focus:ring-2 focus:ring-[#758bfd]/50 focus:border-[#27187e] transition-all duration-300 hover:border-[#758bfd]/40 text-[#27187e] placeholder-[#758bfd]/60"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <Label htmlFor="signup-password" className="text-[#27187e] font-semibold text-sm mb-2 block">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#758bfd] group-focus-within:text-[#27187e] transition-colors" />
                        <Input
                          id="signup-password"
                          type="password"
                          placeholder="Create a secure password (min. 6 characters)"
                          value={signupForm.password}
                          onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                          required
                          disabled={isLoading}
                          className="pl-12 pr-4 py-4 border-2 border-[#758bfd]/20 rounded-2xl bg-white/80 backdrop-blur-md focus:ring-2 focus:ring-[#758bfd]/50 focus:border-[#27187e] transition-all duration-300 hover:border-[#758bfd]/40 text-[#27187e] placeholder-[#758bfd]/60"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <Label htmlFor="signup-confirm" className="text-[#27187e] font-semibold text-sm mb-2 block">Confirm Password</Label>
                      <div className="relative">
                        <Shield className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#758bfd] group-focus-within:text-[#27187e] transition-colors" />
                        <Input
                          id="signup-confirm"
                          type="password"
                          placeholder="Confirm your password"
                          value={signupForm.confirmPassword}
                          onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                          required
                          disabled={isLoading}
                          className="pl-12 pr-4 py-4 border-2 border-[#758bfd]/20 rounded-2xl bg-white/80 backdrop-blur-md focus:ring-2 focus:ring-[#758bfd]/50 focus:border-[#27187e] transition-all duration-300 hover:border-[#758bfd]/40 text-[#27187e] placeholder-[#758bfd]/60"
                        />
                      </div>
                    </div>
                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-[#758bfd] via-[#ff8600] to-[#758bfd] hover:from-[#758bfd]/90 hover:via-[#ff8600]/90 hover:to-[#758bfd]/90 py-4 rounded-2xl font-semibold text-lg shadow-xl transform hover:scale-105 transition-all duration-300 border-0 min-h-[56px]"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Creating your account...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Sparkles className="h-5 w-5 mr-2" />
                            Start Your Journey
                          </div>
                        )}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Additional Features */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center space-x-8 text-[#758bfd]">
              <div className="flex items-center text-sm font-medium">
                <Shield className="h-4 w-4 mr-2" />
                Secure & Private
              </div>
              <div className="flex items-center text-sm font-medium">
                <Zap className="h-4 w-4 mr-2" />
                Instant Access
              </div>
              <div className="flex items-center text-sm font-medium">
                <Heart className="h-4 w-4 mr-2" />
                Family Focused
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
