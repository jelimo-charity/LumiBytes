import { Link } from "react-router-dom";
import { Code, Globe, ArrowRight, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import galleryPortrait from "@/assets/gallery-portrait.jpg";
import galleryWorkspace from "@/assets/gallery-workspace.jpg";
import galleryAdvocacy from "@/assets/gallery-advocacy.jpg";
import gallerySpeaking from "@/assets/gallery-speaking.jpg";
import galleryTeamwork from "@/assets/gallery-teamwork.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Charity Jelimo</h1>
          <p className="text-lg text-foreground">Software Engineer | Digital Citizenship Advocate</p>
        </div>
      </header>

      {/* Divider */}
      <div className="container mx-auto px-6 max-w-4xl">
        <hr className="border-border" />
      </div>

      {/* Bio Section */}
      <section className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="space-y-4 text-center">
          <p className="text-muted-foreground leading-relaxed">
            A passionate software engineer crafting digital solutions that make technology accessible and meaningful for everyone.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Dedicated to empowering families and children with the knowledge and tools needed to navigate our digital world safely and responsibly.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-6 py-12 max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={galleryPortrait} alt="Professional portrait" className="w-full h-40 md:h-48 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={galleryWorkspace} alt="Workspace" className="w-full h-40 md:h-48 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={galleryAdvocacy} alt="Digital citizenship advocacy" className="w-full h-40 md:h-48 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={galleryTeamwork} alt="Team collaboration" className="w-full h-40 md:h-48 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={gallerySpeaking} alt="Speaking at conference" className="w-full h-40 md:h-48 object-cover" />
          </div>
        </div>
      </section>

      {/* Role Cards */}
      <section className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          <Link to="/software-engineer" className="block group">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-6 w-6 text-primary" />
                  Software Engineer
                </CardTitle>
                <CardDescription>
                  Building innovative solutions and applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Experienced in developing scalable web applications, mobile solutions, and digital platforms that solve real-world problems.
                </p>
                <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link to="/advocate" className="block group">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-6 w-6 text-primary" />
                  Digital Citizenship Advocate
                </CardTitle>
                <CardDescription>
                  Promoting responsible technology use
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Educating families and communities about digital wellness, online safety, and ethical technology practices for the next generation.
                </p>
                <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 max-w-4xl border-t border-border">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Charity Jelimo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;