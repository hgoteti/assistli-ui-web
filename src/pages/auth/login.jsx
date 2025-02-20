import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FaGoogle, FaSlack } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Button variant="outline" className="w-full" onClick={() => {}}>
              <FaGoogle className="mr-2" /> Continue with Google
            </Button>
            <Button variant="outline" className="w-full" onClick={() => {}}>
              <FaSlack className="mr-2" /> Continue with Slack
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="space-y-2">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button className="w-full">Sign in</Button>
          <div className="text-sm text-center space-x-2">
            <Link to="/auth/forgot-password" className="text-primary hover:underline">
              Forgot password?
            </Link>
            <span>·</span>
            <Link to="/auth/login-otp" className="text-primary hover:underline">
              Login with OTP
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
} 