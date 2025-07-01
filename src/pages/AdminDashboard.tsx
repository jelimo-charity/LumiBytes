
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  Sparkles,
  Bell,
  Activity,
  TrendingUp,
  Eye
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

  const adminStats = [
    { label: "Total Users", value: "2,847", icon: Users, color: "text-[#27187e]", bg: "bg-[#aeb8fe]/20", change: "+12%", changeColor: "text-green-600" },
    { label: "Active Sessions", value: "1,234", icon: Activity, color: "text-[#758bfd]", bg: "bg-[#758bfd]/20", change: "+8%", changeColor: "text-green-600" },
    { label: "Published Articles", value: "156", icon: FileText, color: "text-[#ff8600]", bg: "bg-[#ff8600]/10", change: "+3", changeColor: "text-blue-600" },
    { label: "Monthly Views", value: "89.2K", icon: Eye, color: "text-[#27187e]", bg: "bg-[#27187e]/20", change: "+24%", changeColor: "text-green-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1f2f6] via-white to-[#aeb8fe]/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-[#27187e]/10 to-[#758bfd]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-[#ff8600]/15 to-[#758bfd]/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-[#aeb8fe]/20 to-[#ff8600]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-xl border-b border-[#758bfd]/20 sticky top-0 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#27187e] via-[#758bfd] to-[#ff8600] rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#ff8600] to-[#758bfd] rounded-full flex items-center justify-center shadow-lg">
                  <Crown className="h-3 w-3 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#27187e] to-[#758bfd] rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-3xl font-bold bg-gradient-to-r from-[#27187e] via-[#758bfd] to-[#ff8600] bg-clip-text text-transparent">KidSpark</span>
                  <span className="ml-3 text-[#27187e] font-bold text-xl">Admin</span>
                </div>
                <p className="text-sm text-[#758bfd] font-medium">Content Management System</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button size="sm" variant="ghost" className="relative text-[#758bfd] hover:bg-[#aeb8fe]/20">
                <Bell className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#ff8600] rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">5</span>
                </div>
              </Button>
              <div className="flex items-center space-x-3 text-[#27187e] bg-gradient-to-r from-white/80 to-[#aeb8fe]/20 backdrop-blur-md rounded-2xl px-4 py-2 border border-[#758bfd]/20">
                <div className="w-8 h-8 bg-gradient-to-br from-[#758bfd] to-[#ff8600] rounded-full flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <span className="font-semibold">Welcome, {user?.user_metadata?.full_name || user?.email || 'Admin'}!</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                className="border-[#758bfd]/30 text-[#27187e] hover:bg-[#758bfd]/10 rounded-2xl bg-white/60 backdrop-blur-md transition-all duration-300 hover:scale-105"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Dashboard Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#27187e] via-[#758bfd] to-[#ff8600] bg-clip-text text-transparent mb-4">Admin Command Center</h1>
          <p className="text-xl text-[#758bfd] max-w-2xl mx-auto">Monitor platform performance, manage content, and oversee user experience with powerful administrative tools.</p>
        </div>

        {/* Admin Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {adminStats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 border-[#758bfd]/20 bg-white/80 backdrop-blur-md rounded-3xl transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 border-2 border-[#758bfd]/20`}>
                    <stat.icon className={`h-7 w-7 ${stat.color}`} />
                  </div>
                  <div className={`text-sm font-semibold ${stat.changeColor} bg-white/80 px-3 py-1 rounded-full border border-current/20`}>
                    {stat.change}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#758bfd] mb-2 font-medium">{stat.label}</p>
                  <p className="text-4xl font-bold text-[#27187e] group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="blogs" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-md border-2 border-[#758bfd]/20 rounded-3xl p-2 shadow-lg">
            <TabsTrigger 
              value="blogs" 
              className="flex items-center text-[#27187e] data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#27187e] data-[state=active]:to-[#758bfd] data-[state=active]:text-white rounded-2xl py-4 px-6 transition-all duration-300 font-semibold hover:bg-[#aeb8fe]/20"
            >
              <FileText className="h-5 w-5 mr-2" />
              Blog Management
            </TabsTrigger>
            <TabsTrigger 
              value="materials" 
              className="flex items-center text-[#27187e] data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#758bfd] data-[state=active]:to-[#ff8600] data-[state=active]:text-white rounded-2xl py-4 px-6 transition-all duration-300 font-semibold hover:bg-[#aeb8fe]/20"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Learning Materials
            </TabsTrigger>
            <TabsTrigger 
              value="analytics" 
              className="flex items-center text-[#27187e] data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#ff8600] data-[state=active]:to-[#758bfd] data-[state=active]:text-white rounded-2xl py-4 px-6 transition-all duration-300 font-semibold hover:bg-[#aeb8fe]/20"
            >
              <BarChart3 className="h-5 w-5 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger 
              value="users" 
              className="flex items-center text-[#27187e] data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#758bfd] data-[state=active]:to-[#27187e] data-[state=active]:text-white rounded-2xl py-4 px-6 transition-all duration-300 font-semibold hover:bg-[#aeb8fe]/20"
            >
              <Users className="h-5 w-5 mr-2" />
              User Management
            </TabsTrigger>
          </TabsList>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-[#758bfd]/20 shadow-2xl overflow-hidden">
            <TabsContent value="blogs" className="mt-0 p-8">
              <BlogManager />
            </TabsContent>

            <TabsContent value="materials" className="mt-0 p-8">
              <LearningMaterialsManager />
            </TabsContent>

            <TabsContent value="analytics" className="mt-0 p-8">
              <UserAnalytics />
            </TabsContent>

            <TabsContent value="users" className="mt-0 p-8">
              <UserManager />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
