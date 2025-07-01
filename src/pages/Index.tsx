
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Users, BookOpen, Heart, LogOut, Zap, Star, TrendingUp, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
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

      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between bg-white/80 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg border border-white/20">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h1 className="ml-3 text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              KidSpark
            </h1>
          </div>
          {user && (
            <Button 
              variant="outline" 
              onClick={handleSignOut}
              className="border-purple-200 text-purple-600 hover:bg-purple-50 rounded-xl"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="h-3 w-3 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            KidSpark
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your parenting journey with expert guidance, engaging content, and a vibrant community 
            dedicated to raising happy, healthy, and brilliant children.
          </p>
          
          {user ? (
            <div className="space-y-6">
              <p className="text-lg text-gray-800 font-medium">
                Welcome back! Ready to spark new discoveries?
              </p>
              <Button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-lg px-10 py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="h-5 w-5 mr-2" />
                Continue Your Journey
              </Button>
            </div>
          ) : (
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-lg px-10 py-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Zap className="h-5 w-5 mr-2" />
              Start Your Adventure
            </Button>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl transform hover:-translate-y-2">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-purple-800">Expert Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed">Discover curated articles, interactive guides, and learning resources crafted by child development experts.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl transform hover:-translate-y-2">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-pink-800">Vibrant Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed">Connect with passionate parents and share experiences in our supportive, encouraging community.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl transform hover:-translate-y-2">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-orange-800">Personalized Path</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed">Receive tailored content based on your child's unique personality, interests, and developmental milestones.</p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-purple-600">10K+</div>
            <div className="text-gray-600">Happy Families</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-pink-600">500+</div>
            <div className="text-gray-600">Expert Articles</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-orange-600">25K+</div>
            <div className="text-gray-600">Community Posts</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Award className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-yellow-600">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {!user && (
          <div className="text-center bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/20">
            <p className="text-gray-700 mb-6 text-lg">
              Already part of our amazing community?
            </p>
            <Button 
              variant="outline" 
              onClick={() => navigate('/auth')}
              className="border-purple-300 text-purple-600 hover:bg-purple-50 rounded-xl px-8 py-3 text-lg"
            >
              Welcome Back
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
