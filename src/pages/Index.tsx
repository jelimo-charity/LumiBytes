import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Sparkles, 
  Users, 
  BookOpen, 
  Heart, 
  LogOut, 
  Zap, 
  Star, 
  TrendingUp, 
  Award,
  Menu,
  X,
  Shield,
  Globe,
  Rocket,
  Target,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #27187e 0%, #758bfd 100%)' }}>
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold" style={{ color: '#27187e' }}>LumiBytes</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[#27187e] transition-colors">Home</a>
              <a href="#features" className="text-gray-700 hover:text-[#27187e] transition-colors">Features</a>
              <a href="#about" className="text-gray-700 hover:text-[#27187e] transition-colors">About Us</a>
              <a href="#contact" className="text-gray-700 hover:text-[#27187e] transition-colors">Contact</a>
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Welcome, {user.email}</span>
                  <Button 
                    variant="outline" 
                    onClick={handleSignOut}
                    className="border-[#758bfd] text-[#27187e] hover:bg-[#aeb8fe]/20"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : null}
              <Button 
                onClick={handleGetStarted}
                className="text-white font-semibold px-6"
                style={{ background: 'linear-gradient(135deg, #27187e 0%, #758bfd 100%)' }}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#27187e]"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-[#27187e] transition-colors">Home</a>
                <a href="#features" className="text-gray-700 hover:text-[#27187e] transition-colors">Features</a>
                <a href="#about" className="text-gray-700 hover:text-[#27187e] transition-colors">About Us</a>
                <a href="#contact" className="text-gray-700 hover:text-[#27187e] transition-colors">Contact</a>
                {user && (
                  <Button 
                    variant="outline" 
                    onClick={handleSignOut}
                    className="border-[#758bfd] text-[#27187e] hover:bg-[#aeb8fe]/20 w-full"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                )}
                <Button 
                  onClick={handleGetStarted}
                  className="text-white font-semibold w-full"
                  style={{ background: 'linear-gradient(135deg, #27187e 0%, #758bfd 100%)' }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f1f2f6 0%, #aeb8fe 100%)' }}>
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#27187e' }}>
                  Raising Digital
                  <span className="block text-[#ff8600]">Citizens</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Navigate the digital era with confidence. Expert guidance and practical tools to help you raise responsible, tech-savvy children who thrive in our connected world.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleGetStarted}
                  size="lg"
                  className="text-white font-semibold px-8 py-6 text-lg"
                  style={{ background: 'linear-gradient(135deg, #27187e 0%, #758bfd 100%)' }}
                >
                  <Zap className="h-5 w-5 mr-2" />
                  {user ? 'Go to Dashboard' : 'Start Free Trial'}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[#27187e] text-[#27187e] hover:bg-[#27187e]/10 px-8 py-6 text-lg"
                >
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: '#27187e' }}>10K+</div>
                  <div className="text-gray-600">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: '#27187e' }}>500+</div>
                  <div className="text-gray-600">Expert Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: '#27187e' }}>98%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Happy family learning together"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 rounded-full opacity-20" style={{ background: 'linear-gradient(135deg, #ff8600 0%, #758bfd 100%)' }}></div>
              <div className="absolute -bottom-4 -left-4 w-48 h-48 rounded-full opacity-30" style={{ background: 'linear-gradient(135deg, #27187e 0%, #aeb8fe 100%)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold" style={{ color: '#27187e' }}>About LumiBytes</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We believe every child has unlimited potential waiting to be discovered. Founded by parents and child development experts, LumiBytes combines cutting-edge research with practical parenting wisdom.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is to empower parents with the tools, knowledge, and community support needed to nurture confident, creative, and capable children who will shape tomorrow's world.
                </p>
              </div>
              
              <div className="bg-[#f1f2f6] p-6 rounded-2xl border-l-4" style={{ borderColor: '#ff8600' }}>
                <blockquote className="text-lg italic text-gray-700">
                  "Every child is a different kind of flower, and all together, they make this world a beautiful garden."
                </blockquote>
                <p className="mt-4 font-semibold" style={{ color: '#27187e' }}>- Dr. Sarah Chen, Founder & Child Psychologist</p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team of experts"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20" style={{ backgroundColor: '#f1f2f6' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#27187e' }}>Why Choose LumiBytes?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover the comprehensive tools and resources that make LumiBytes the trusted choice for modern parents worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #27187e 0%, #758bfd 100%)' }}>
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl" style={{ color: '#27187e' }}>Expert Content</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">Access curated articles, guides, and resources created by child development specialists and education experts.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #758bfd 0%, #aeb8fe 100%)' }}>
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl" style={{ color: '#27187e' }}>Supportive Community</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">Connect with like-minded parents, share experiences, and get support from our vibrant global community.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #ff8600 0%, #758bfd 100%)' }}>
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl" style={{ color: '#27187e' }}>Personalized Journey</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">Get tailored content and recommendations based on your child's age, interests, and developmental milestones.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #27187e 0%, #ff8600 100%)' }}>
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl" style={{ color: '#27187e' }}>Goal Tracking</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">Set and track developmental milestones, learning goals, and celebrate your child's achievements along the way.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #aeb8fe 0%, #27187e 100%)' }}>
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl" style={{ color: '#27187e' }}>Interactive Activities</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">Engage your child with fun, educational activities designed to boost creativity, critical thinking, and confidence.</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #ff8600 0%, #aeb8fe 100%)' }}>
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl" style={{ color: '#27187e' }}>24/7 Access</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">Access our platform anytime, anywhere. Get instant support and resources whenever you need them most.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="text-white font-semibold px-8"
              style={{ background: 'linear-gradient(135deg, #27187e 0%, #758bfd 100%)' }}
            >
              Explore All Features
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#27187e' }}>Get In Touch</h2>
              <p className="text-xl text-gray-700">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-[#f1f2f6] border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl" style={{ color: '#27187e' }}>Send us a message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-700">Name</Label>
                      <Input id="name" placeholder="Your name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700">Message</Label>
                    <Textarea id="message" placeholder="Tell us more..." rows={5} className="mt-1" />
                  </div>
                  <Button 
                    className="w-full text-white font-semibold"
                    style={{ background: 'linear-gradient(135deg, #27187e 0%, #758bfd 100%)' }}
                  >
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6" style={{ color: '#27187e' }}>Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #27187e 0%, #758bfd 100%)' }}>
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-700">hello@lumibytes.com</p>
                        <p className="text-gray-700">support@lumibytes.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #758bfd 0%, #aeb8fe 100%)' }}>
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-700">+1 (555) 123-4567</p>
                        <p className="text-gray-700">Mon-Fri 9AM-6PM EST</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #ff8600 0%, #758bfd 100%)' }}>
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Office</h4>
                        <p className="text-gray-700">123 Innovation Drive</p>
                        <p className="text-gray-700">San Francisco, CA 94107</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f1f2f6] p-6 rounded-2xl">
                  <h4 className="font-semibold mb-3" style={{ color: '#27187e' }}>Quick Response</h4>
                  <p className="text-gray-700 text-sm">
                    We typically respond to all inquiries within 24 hours. For urgent matters, please call our support line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#27187e] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-[#27187e]" />
                </div>
                <span className="ml-3 text-2xl font-bold">LumiBytes</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering parents with expert guidance and community support to raise brilliant, confident children.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-300 hover:text-white transition-colors">Home</a>
                <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Features</a>
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About Us</a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Blog</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Community</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Webinars</a>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">GDPR</a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300">
                © 2024 LumiBytes. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Terms</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
