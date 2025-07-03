
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, UserPlus, Settings, Mail, MoreVertical } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      tasksCompleted: 24,
      initials: "JD"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Manager",
      status: "Active",
      tasksCompleted: 18,
      initials: "JS"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Member",
      status: "Away",
      tasksCompleted: 12,
      initials: "MJ"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      role: "Member",
      status: "Active",
      tasksCompleted: 15,
      initials: "SW"
    }
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 animate-fade-in">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between animate-slide-in">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                <Users className="h-8 w-8 text-primary" />
                Team Management
              </h1>
              <p className="text-secondary mt-1">Manage your team members and their roles</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift">
              <UserPlus className="h-4 w-4 mr-2" />
              Invite Member
            </Button>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <Card className="bg-card border-border hover-lift">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-secondary">Total Members</p>
                    <p className="text-2xl font-bold text-foreground">4</p>
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover-lift">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-secondary">Active Now</p>
                    <p className="text-2xl font-bold text-foreground">3</p>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover-lift">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-secondary">Tasks Completed</p>
                    <p className="text-2xl font-bold text-foreground">69</p>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">Total</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover-lift">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-secondary">Pending Invites</p>
                    <p className="text-2xl font-bold text-foreground">2</p>
                  </div>
                  <Mail className="h-8 w-8 text-secondary" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Members */}
          <Card className="bg-card border-border animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="text-foreground">Team Members</CardTitle>
              <CardDescription className="text-secondary">
                View and manage your team members
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div 
                    key={member.id} 
                    className="flex items-center justify-between p-4 rounded-lg bg-background border border-border hover-lift animate-slide-in"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-foreground">{member.name}</h3>
                        <p className="text-sm text-secondary">{member.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <Badge 
                          variant={member.role === 'Admin' ? 'default' : 'secondary'}
                          className={member.role === 'Admin' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}
                        >
                          {member.role}
                        </Badge>
                        <p className="text-xs text-secondary mt-1">{member.tasksCompleted} tasks</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${member.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                        <span className="text-sm text-secondary">{member.status}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-secondary hover:text-foreground">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Team;
