import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, Github, Mail } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-md space-y-6">
        {/* Logo */}
        <div className="flex justify-center animate-scale-in">
          <Link to="/" className="flex items-center space-x-2">
            <CheckSquare className="h-10 w-10 text-primary" />
            <span className="text-2xl font-bold text-foreground">Purple Pixel Planner</span>
          </Link>
        </div>

        {/* Login Card */}
        <Card className="bg-card border-border animate-slide-in hover-lift" style={{ animationDelay: "0.2s" }}>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-foreground">Welcome Back</CardTitle>
            <CardDescription className="text-secondary">
              Sign in to your Purple Pixel Planner account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* OAuth Buttons */}
            <div className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full border-border text-foreground hover:bg-secondary/20"
                disabled
              >
                <Github className="mr-2 h-4 w-4" />
                Continue with GitHub
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-border text-foreground hover:bg-secondary/20"
                disabled
              >
                <Mail className="mr-2 h-4 w-4" />
                Continue with Google
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-secondary">Or continue with email</span>
              </div>
            </div>

            {/* Login Form */}
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-background border-border text-foreground"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-foreground">Password</Label>
                  <Button variant="link" className="text-primary hover:underline p-0 h-auto">
                    Forgot password?
                  </Button>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  className="bg-background border-border text-foreground"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled
              >
                Sign In
              </Button>
            </form>

            <div className="text-center">
              <p className="text-sm text-secondary">
                Don't have an account?{" "}
                <Link 
                  to="/signup" 
                  className="text-primary hover:underline font-medium"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Note */}
        <div className="text-center">
          <p className="text-xs text-secondary animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Authentication will be enabled once backend is connected
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
