
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Users, BookOpen, Heart, LogOut } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sparkles className="h-8 w-8 text-orange-500 mr-2" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              KidSpark
            </h1>
          </div>
          {user && (
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-12 w-12 text-orange-500 mr-3" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              KidSpark
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Empowering parents with expert guidance, engaging content, and a supportive community 
            to nurture happy, healthy, and thriving children.
          </p>
          
          {user ? (
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Welcome back! Ready to continue your parenting journey?
              </p>
              <Button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-lg px-8 py-3"
              >
                Go to Dashboard
              </Button>
            </div>
          ) : (
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-lg px-8 py-3"
            >
              Get Started Today
            </Button>
          )}
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

        {!user && (
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Already have an account?
            </p>
            <Button 
              variant="outline" 
              onClick={() => navigate('/auth')}
              className="border-orange-300 text-orange-600 hover:bg-orange-50"
            >
              Sign In
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
