
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, CheckCircle, AlertCircle, Users, Calendar, Settings } from "lucide-react";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "task",
      title: "Task Completed",
      message: "Design homepage mockup has been completed by Jane Smith",
      time: "2 minutes ago",
      read: false,
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      id: 2,
      type: "team",
      title: "New Team Member",
      message: "Mike Johnson joined your team as a developer",
      time: "1 hour ago",
      read: false,
      icon: Users,
      color: "text-secondary"
    },
    {
      id: 3,
      type: "deadline",
      title: "Deadline Reminder",
      message: "Project Alpha deadline is approaching (Due tomorrow)",
      time: "3 hours ago",
      read: true,
      icon: AlertCircle,
      color: "text-red-500"
    },
    {
      id: 4,
      type: "meeting",
      title: "Meeting Scheduled",
      message: "Weekly standup meeting scheduled for tomorrow at 10 AM",
      time: "5 hours ago",
      read: true,
      icon: Calendar,
      color: "text-primary"
    },
    {
      id: 5,
      type: "task",
      title: "Task Assigned",
      message: "You have been assigned to Backend API Development",
      time: "1 day ago",
      read: true,
      icon: CheckCircle,
      color: "text-secondary"
    }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between animate-slide-in">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                <Bell className="h-8 w-8 text-primary" />
                Notifications
                {unreadCount > 0 && (
                  <Badge className="bg-primary text-primary-foreground ml-2">
                    {unreadCount}
                  </Badge>
                )}
              </h1>
              <p className="text-secondary mt-1">Stay updated with your team and tasks</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" className="border-border text-foreground hover:bg-secondary/20">
                Mark All Read
              </Button>
              <Button variant="ghost" className="text-secondary hover:text-foreground">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Notification Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <Card className="bg-card border-border hover-lift">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-secondary">Total</p>
                    <p className="text-2xl font-bold text-foreground">{notifications.length}</p>
                  </div>
                  <Bell className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover-lift">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-secondary">Unread</p>
                    <p className="text-2xl font-bold text-primary">{unreadCount}</p>
                  </div>
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover-lift">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-secondary">Read</p>
                    <p className="text-2xl font-bold text-secondary">{notifications.length - unreadCount}</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notifications List */}
          <Card className="bg-card border-border animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="text-foreground">Recent Notifications</CardTitle>
              <CardDescription className="text-secondary">
                Your latest updates and alerts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification, index) => {
                  const IconComponent = notification.icon;
                  return (
                    <div 
                      key={notification.id}
                      className={`flex items-start space-x-4 p-4 rounded-lg border transition-colors hover-lift animate-slide-in ${
                        notification.read 
                          ? 'bg-background border-border' 
                          : 'bg-primary/5 border-primary/20'
                      }`}
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <div className={`flex-shrink-0 ${notification.color}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-semibold text-foreground">
                            {notification.title}
                          </h3>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          )}
                        </div>
                        <p className="text-sm text-secondary mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-secondary mt-2">
                          {notification.time}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-secondary hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ×
                      </Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Notifications;
