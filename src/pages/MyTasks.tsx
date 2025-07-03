
import { Sidebar } from "@/components/Sidebar";
import { TaskList } from "@/components/TaskList";
import { CreateTaskDialog } from "@/components/CreateTaskDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckSquare, Plus, Search, Filter, Calendar, Clock } from "lucide-react";
import { useState } from "react";

const MyTasks = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const taskStats = {
    total: 24,
    completed: 8,
    inProgress: 12,
    overdue: 4
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 animate-fade-in">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between animate-slide-in">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                <CheckSquare className="h-8 w-8 text-primary" />
                My Tasks
              </h1>
              <p className="text-secondary mt-1">Stay organized and productive</p>
            </div>
            <CreateTaskDialog>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift">
                <Plus className="h-4 w-4 mr-2" />
                New Task
              </Button>
            </CreateTaskDialog>
          </div>

          {/* Task Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="bg-card border border-border rounded-lg p-4 hover-lift">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-secondary">Total Tasks</p>
                  <p className="text-2xl font-bold text-foreground">{taskStats.total}</p>
                </div>
                <CheckSquare className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover-lift">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-secondary">Completed</p>
                  <p className="text-2xl font-bold text-green-500">{taskStats.completed}</p>
                </div>
                <Badge className="bg-green-500 text-white">✓</Badge>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover-lift">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-secondary">In Progress</p>
                  <p className="text-2xl font-bold text-secondary">{taskStats.inProgress}</p>
                </div>
                <Clock className="h-8 w-8 text-secondary" />
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 hover-lift">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-secondary">Overdue</p>
                  <p className="text-2xl font-bold text-red-500">{taskStats.overdue}</p>
                </div>
                <Calendar className="h-8 w-8 text-red-500" />
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center space-x-4 animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary" />
              <Input
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-border text-foreground"
              />
            </div>
            <Button variant="outline" className="border-border text-foreground hover:bg-secondary/20">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Task List */}
          <div className="animate-slide-in" style={{ animationDelay: "0.3s" }}>
            <TaskList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyTasks;
