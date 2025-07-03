
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  MoreHorizontal, 
  Calendar, 
  User,
  Clock,
  AlertCircle
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed' | 'overdue';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  assignee: string;
  project: string;
}

interface TaskListProps {
  searchQuery: string;
}

export const TaskList = ({ searchQuery }: TaskListProps) => {
  const [tasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Design new landing page',
      description: 'Create wireframes and mockups for the new landing page',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2024-01-15',
      assignee: 'John Doe',
      project: 'Website Redesign'
    },
    {
      id: '2',
      title: 'Fix authentication bug',
      description: 'Users are unable to log in with Google OAuth',
      status: 'todo',
      priority: 'high',
      dueDate: '2024-01-12',
      assignee: 'Jane Smith',
      project: 'Bug Fixes'
    },
    {
      id: '3',
      title: 'Write API documentation',
      description: 'Document all REST API endpoints',
      status: 'completed',
      priority: 'medium',
      dueDate: '2024-01-10',
      assignee: 'Mike Johnson',
      project: 'Documentation'
    },
    {
      id: '4',
      title: 'Update dependencies',
      description: 'Update all npm packages to latest versions',
      status: 'overdue',
      priority: 'low',
      dueDate: '2024-01-05',
      assignee: 'Sarah Wilson',
      project: 'Maintenance'
    }
  ]);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleTaskToggle = (taskId: string) => {
    console.log('Toggle task:', taskId);
    // TODO: Implement task status toggle
  };

  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date() && new Date().toDateString() !== new Date(dueDate).toDateString();
  };

  return (
    <div className="space-y-4">
      {filteredTasks.map((task) => (
        <Card key={task.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-start space-x-4">
              <Checkbox
                checked={task.status === 'completed'}
                onCheckedChange={() => handleTaskToggle(task.id)}
                className="mt-1"
              />
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-lg font-semibold ${task.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                    {task.title}
                  </h3>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                <p className="text-gray-600 mb-3">{task.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span className={isOverdue(task.dueDate) ? 'text-red-600 font-medium' : ''}>
                        {new Date(task.dueDate).toLocaleDateString()}
                      </span>
                      {isOverdue(task.dueDate) && <AlertCircle className="h-4 w-4 text-red-600" />}
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{task.assignee}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{task.project}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Badge className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                    <Badge className={getStatusColor(task.status)}>
                      {task.status.replace('-', ' ')}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      
      {filteredTasks.length === 0 && (
        <div className="text-center py-12">
          <CheckSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
          <p className="text-gray-500">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};
