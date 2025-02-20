import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { ChevronLeft } from "lucide-react"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-[400px] h-[450px]">
        <CardHeader>
          <div className="flex items-center">
            <Link to="/auth/login">
              <Button variant="ghost" size="icon" className="mr-2">
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <CardTitle>Reset password</CardTitle>
              <CardDescription>Enter your email to reset your password</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input type="email" placeholder="Email" />
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button className="w-32 mx-auto">Send reset link</Button>
          <div className="text-sm text-center space-x-2">
            <Link to="/auth/login" className="text-primary hover:underline">
              Back to login
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