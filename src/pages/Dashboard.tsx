
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Search, Filter, Bell, Settings, CheckSquare } from "lucide-react";
import { TaskList } from "@/components/TaskList";
import { CreateTaskDialog } from "@/components/CreateTaskDialog";
import { Sidebar } from "@/components/Sidebar";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-card border-b border-border px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold text-foreground animate-fade-in">Dashboard</h1>
              </div>
              <div className="flex items-center space-x-4 animate-scale-in">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search tasks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64 bg-background border-border"
                  />
                </div>
                <Button variant="outline" size="icon" className="hover:bg-secondary/20">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-secondary/20">
                  <Bell className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-secondary/20">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="flex-1 p-6 animate-fade-in">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="hover-lift animate-scale-in">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
                  <CheckSquare className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">24</div>
                  <p className="text-xs text-secondary">+2 from yesterday</p>
                </CardContent>
              </Card>
              <Card className="hover-lift animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                  <CheckSquare className="h-4 w-4 text-secondary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-secondary">8</div>
                  <p className="text-xs text-muted-foreground">Active tasks</p>
                </CardContent>
              </Card>
              <Card className="hover-lift animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed</CardTitle>
                  <CheckSquare className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">12</div>
                  <p className="text-xs text-secondary">This week</p>
                </CardContent>
              </Card>
              <Card className="hover-lift animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Overdue</CardTitle>
                  <CheckSquare className="h-4 w-4 text-destructive" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-destructive">4</div>
                  <p className="text-xs text-destructive">Needs attention</p>
                </CardContent>
              </Card>
            </div>

            {/* Tasks Section */}
            <div className="space-y-6 animate-slide-in">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">Recent Tasks</h2>
                <Button 
                  onClick={() => setIsCreateDialogOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  New Task
                </Button>
              </div>

              <TaskList searchQuery={searchQuery} />
            </div>
          </main>
        </div>
      </div>

      <CreateTaskDialog 
        open={isCreateDialogOpen} 
        onOpenChange={setIsCreateDialogOpen} 
      />
    </div>
  );
};

export default Dashboard;
