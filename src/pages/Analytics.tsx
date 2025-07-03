
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, Clock, Target, CheckSquare } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";

const Analytics = () => {
  const stats = [
    {
      title: "Completed Tasks",
      value: "127",
      change: "+12%",
      icon: CheckSquare,
      color: "text-primary"
    },
    {
      title: "Productivity Score",
      value: "87%",
      change: "+5%",
      icon: TrendingUp,
      color: "text-secondary"
    },
    {
      title: "Team Members",
      value: "8",
      change: "+2",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Avg. Completion Time",
      value: "2.4 days",
      change: "-0.5",
      icon: Clock,
      color: "text-secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="bg-card border-b border-border px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-foreground animate-fade-in">Analytics</h1>
            </div>
          </header>

          <main className="flex-1 p-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={stat.title} className="hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <p className="text-xs text-secondary">{stat.change} from last month</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="hover-lift animate-slide-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span>Task Completion Trends</span>
                  </CardTitle>
                  <CardDescription>Your productivity over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    Chart visualization will be implemented here
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift animate-slide-in" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-secondary" />
                    <span>Goals Progress</span>
                  </CardTitle>
                  <CardDescription>Track your monthly and weekly goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Monthly Goal</span>
                        <span className="text-primary">75%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Weekly Goal</span>
                        <span className="text-secondary">90%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
