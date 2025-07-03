
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const events = [
    {
      id: '1',
      title: 'Team Meeting',
      date: '2024-01-15',
      time: '10:00 AM',
      type: 'meeting',
      color: 'bg-primary'
    },
    {
      id: '2',
      title: 'Project Deadline',
      date: '2024-01-18',
      time: '11:59 PM',
      type: 'deadline',
      color: 'bg-destructive'
    },
    {
      id: '3',
      title: 'Client Presentation',
      date: '2024-01-20',
      time: '2:00 PM',
      type: 'presentation',
      color: 'bg-secondary'
    }
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-border"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = new Date().getDate() === day && 
                     new Date().getMonth() === currentDate.getMonth() && 
                     new Date().getFullYear() === currentDate.getFullYear();
      
      days.push(
        <div key={day} className={`h-24 border border-border p-1 hover:bg-muted/50 transition-colors ${isToday ? 'bg-primary/10' : ''}`}>
          <div className={`text-sm font-medium ${isToday ? 'text-primary' : 'text-foreground'}`}>
            {day}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="bg-card border-b border-border px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-foreground animate-fade-in">Calendar</h1>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground animate-scale-in">
                <Plus className="h-4 w-4 mr-2" />
                New Event
              </Button>
            </div>
          </header>

          <main className="flex-1 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Calendar */}
              <div className="lg:col-span-3">
                <Card className="hover-lift animate-fade-in">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center space-x-2">
                        <CalendarIcon className="h-5 w-5 text-primary" />
                        <span>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => navigateMonth('prev')}
                          className="hover:bg-secondary/20"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => navigateMonth('next')}
                          className="hover:bg-secondary/20"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-7 gap-0 mb-4">
                      {dayNames.map(day => (
                        <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground border border-border bg-muted/50">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-0">
                      {renderCalendar()}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Upcoming Events */}
              <div className="space-y-6">
                <Card className="hover-lift animate-slide-in">
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Your scheduled events and deadlines</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {events.map((event, index) => (
                      <div key={event.id} className="flex items-start space-x-3 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className={`w-3 h-3 rounded-full ${event.color} mt-1.5`}></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">{event.title}</p>
                          <p className="text-xs text-muted-foreground">{event.date} at {event.time}</p>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {event.type}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="hover-lift animate-slide-in" style={{ animationDelay: "0.2s" }}>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start hover:bg-primary/10">
                      <Plus className="h-4 w-4 mr-2" />
                      Schedule Meeting
                    </Button>
                    <Button variant="outline" className="w-full justify-start hover:bg-secondary/10">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      Set Deadline
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
