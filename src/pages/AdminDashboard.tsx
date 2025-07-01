
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LogOut,
  Settings,
  FileText,
  Users,
  BookOpen,
  BarChart3,
  Shield,
  Zap,
  Crown,
  Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { BlogManager } from '@/components/admin/BlogManager';
import { LearningMaterialsManager } from '@/components/admin/LearningMaterialsManager';
import { UserAnalytics } from '@/components/admin/UserAnalytics';
import { UserManager } from '@/components/admin/UserManager';
import { useAuth } from '@/hooks/useAuth';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    toast({
      title: "Admin session ended",
      description: "Thanks for keeping KidSpark amazing!",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full opacity-15 animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Crown className="h-2 w-2 text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">KidSpark</span>
                  <span className="ml-2 text-white font-bold">Admin</span>
                </div>
                <p className="text-sm text-gray-300">Content Management System</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 text-white bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/20">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium">Welcome, {user?.user_metadata?.full_name || user?.email || 'Admin'}!</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                className="border-white/20 text-white hover:bg-white/10 rounded-xl bg-transparent backdrop-blur-md"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-3">Admin Command Center</h1>
          <p className="text-xl text-gray-300">Manage content, users, and platform analytics with powerful tools.</p>
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="blogs" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-2">
            <TabsTrigger 
              value="blogs" 
              className="flex items-center text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white rounded-xl py-3 px-4 transition-all duration-300"
            >
              <FileText className="h-4 w-4 mr-2" />
              Blog Management
            </TabsTrigger>
            <TabsTrigger 
              value="materials" 
              className="flex items-center text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-orange-500 data-[state=active]:text-white rounded-xl py-3 px-4 transition-all duration-300"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Learning Materials
            </TabsTrigger>
            <TabsTrigger 
              value="analytics" 
              className="flex items-center text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white rounded-xl py-3 px-4 transition-all duration-300"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger 
              value="users" 
              className="flex items-center text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-xl py-3 px-4 transition-all duration-300"
            >
              <Users className="h-4 w-4 mr-2" />
              User Management
            </TabsTrigger>
          </TabsList>

          <div className="bg-black/20 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
            <TabsContent value="blogs" className="mt-0">
              <BlogManager />
            </TabsContent>

            <TabsContent value="materials" className="mt-0">
              <LearningMaterialsManager />
            </TabsContent>

            <TabsContent value="analytics" className="mt-0">
              <UserAnalytics />
            </TabsContent>

            <TabsContent value="users" className="mt-0">
              <UserManager />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
