
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Folder, Users, Calendar, MoreHorizontal } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Projects = () => {
  const [projects] = useState([
    {
      id: '1',
      name: 'Website Redesign',
      description: 'Complete overhaul of company website with modern design',
      status: 'active',
      progress: 75,
      teamSize: 5,
      dueDate: '2024-02-15',
      color: 'bg-primary'
    },
    {
      id: '2',
      name: 'Mobile App Development',
      description: 'Native mobile application for iOS and Android',
      status: 'planning',
      progress: 25,
      teamSize: 8,
      dueDate: '2024-03-30',
      color: 'bg-secondary'
    },
    {
      id: '3',
      name: 'API Integration',
      description: 'Integration with third-party payment and analytics APIs',
      status: 'completed',
      progress: 100,
      teamSize: 3,
      dueDate: '2024-01-20',
      color: 'bg-accent'
    },
    {
      id: '4',
      name: 'Database Migration',
      description: 'Migrate from legacy database to modern cloud solution',
      status: 'active',
      progress: 60,
      teamSize: 4,
      dueDate: '2024-02-28',
      color: 'bg-primary'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-primary text-primary-foreground';
      case 'active': return 'bg-secondary text-secondary-foreground';
      case 'planning': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="bg-card border-b border-border px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-foreground animate-fade-in">Projects</h1>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground animate-scale-in">
                <Plus className="h-4 w-4 mr-2" />
                New Project
              </Button>
            </div>
          </header>

          <main className="flex-1 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {projects.map((project, index) => (
                <Card key={project.id} className="hover-lift animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${project.color}`}></div>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-card border-border">
                          <DropdownMenuItem>Edit Project</DropdownMenuItem>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span className="text-primary font-medium">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-500" 
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{project.teamSize} members</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(project.dueDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <Badge className={getStatusColor(project.status)}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Projects;
