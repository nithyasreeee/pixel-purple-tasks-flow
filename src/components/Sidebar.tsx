
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  CheckSquare, 
  Home, 
  Calendar, 
  Users, 
  BarChart3, 
  Settings,
  Plus,
  FolderOpen
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'My Tasks', href: '/tasks', icon: CheckSquare },
    { name: 'Calendar', href: '/calendar', icon: Calendar },
    { name: 'Projects', href: '/projects', icon: FolderOpen },
    { name: 'Team', href: '/team', icon: Users },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="flex items-center h-16 px-6 border-b border-gray-200">
        <Link to="/" className="flex items-center space-x-2">
          <CheckSquare className="h-8 w-8 text-purple-600" />
          <span className="text-xl font-bold text-purple-900">Purple Pixel</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                isActive 
                  ? "bg-purple-100 text-purple-700" 
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Create Project Button */}
      <div className="p-4 border-t border-gray-200">
        <Button className="w-full bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-purple-600">U</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">User Name</p>
            <p className="text-xs text-gray-500 truncate">user@example.com</p>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
