
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckSquare, Users, Calendar, BarChart3 } from "lucide-react";
import { BackgroundAnimations } from "@/components/BackgroundAnimations";
import heroWorkspace from "@/assets/hero-workspace.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in relative">
      <BackgroundAnimations />
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2 animate-slide-in">
              <CheckSquare className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Purple Pixel Planner</span>
            </div>
            <div className="flex space-x-4 animate-scale-in">
              <Link to="/login">
                <Button variant="outline" className="border-border text-foreground hover:bg-secondary/20">
                  Login
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8 animate-scale-in">
            <img 
              src={heroWorkspace} 
              alt="Modern workspace" 
              className="w-full max-w-lg mx-auto rounded-lg shadow-lg hover-lift"
            />
          </div>
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            Organize Your Tasks
            <span className="block text-primary">Beautifully</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-secondary sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A modern task management application with real-time collaboration, 
            beautiful UI, and powerful features to keep your team productive.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 hover-lift">
                Start Planning
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center animate-slide-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex justify-center">
                <CheckSquare className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-foreground">Task Management</h3>
              <p className="mt-2 text-secondary">Create, organize, and track your tasks efficiently</p>
            </div>
            <div className="text-center animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-foreground">Team Collaboration</h3>
              <p className="mt-2 text-secondary">Work together in real-time with your team</p>
            </div>
            <div className="text-center animate-slide-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex justify-center">
                <Calendar className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-foreground">Schedule Management</h3>
              <p className="mt-2 text-secondary">Plan and schedule your tasks with calendar integration</p>
            </div>
            <div className="text-center animate-slide-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex justify-center">
                <BarChart3 className="h-12 w-12 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-foreground">Analytics</h3>
              <p className="mt-2 text-secondary">Track productivity and gain insights</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
