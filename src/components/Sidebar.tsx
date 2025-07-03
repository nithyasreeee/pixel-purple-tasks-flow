
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
  FolderOpen,
  Bell
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
    { name: 'Notifications', href: '/notifications', icon: Bell },
  ];

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col animate-slide-in">
      {/* Logo */}
      <div className="flex items-center h-16 px-6 border-b border-sidebar-border">
        <Link to="/" className="flex items-center space-x-2">
          <CheckSquare className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-sidebar-foreground">Purple Pixel</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors animate-slide-in hover-lift",
                isActive 
                  ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Create Project Button */}
      <div className="p-4 border-t border-sidebar-border">
        <Link to="/projects">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-lift">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </Link>
      </div>

      {/* User Section */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-primary">U</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">User Name</p>
            <p className="text-xs text-sidebar-foreground/70 truncate">user@example.com</p>
          </div>
          <Link to="/settings">
            <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:text-sidebar-accent-foreground">
              <Settings className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
