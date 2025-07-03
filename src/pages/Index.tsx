
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckSquare, Users, Calendar, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <CheckSquare className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-purple-900">Purple Pixel Planner</span>
            </div>
            <div className="flex space-x-4">
              <Link to="/login">
                <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                  Login
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-900 sm:text-5xl md:text-6xl">
            Organize Your Tasks
            <span className="block text-purple-600">Beautifully</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-purple-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A modern task management application with real-time collaboration, 
            beautiful UI, and powerful features to keep your team productive.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Link to="/dashboard">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                Start Planning
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center">
                <CheckSquare className="h-12 w-12 text-purple-500" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-purple-900">Task Management</h3>
              <p className="mt-2 text-purple-600">Create, organize, and track your tasks efficiently</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-purple-500" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-purple-900">Team Collaboration</h3>
              <p className="mt-2 text-purple-600">Work together in real-time with your team</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Calendar className="h-12 w-12 text-purple-500" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-purple-900">Schedule Management</h3>
              <p className="mt-2 text-purple-600">Plan and schedule your tasks with calendar integration</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <BarChart3 className="h-12 w-12 text-purple-500" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-purple-900">Analytics</h3>
              <p className="mt-2 text-purple-600">Track productivity and gain insights</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
