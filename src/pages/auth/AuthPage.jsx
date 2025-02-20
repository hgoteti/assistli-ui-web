import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FaGoogle, FaSlack, FaMicrosoft } from "react-icons/fa"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"

export default function AuthPage() {
  const [flow, setFlow] = useState('login') // 'login', 'forgot-password', 'login-otp'

  const renderLogin = () => (
    <>
      <CardHeader>
        <CardTitle>Welcome back</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>
        
        <div className="flex justify-center">
          <Button className="w-32">Sign in</Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <a href="#" className="p-2 hover:opacity-80">
            <FaGoogle className="h-6 w-6" />
          </a>
          <a href="#" className="p-2 hover:opacity-80">
            <FaSlack className="h-6 w-6" />
          </a>
          <a href="#" className="p-2 hover:opacity-80">
            <FaMicrosoft className="h-6 w-6" />
          </a>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full text-sm text-center space-x-2">
          <button onClick={() => setFlow('forgot-password')} className="text-primary hover:underline">
            Forgot password?
          </button>
          <span>·</span>
          <button onClick={() => setFlow('login-otp')} className="text-primary hover:underline">
            Login with OTP
          </button>
        </div>
      </CardFooter>
    </>
  )

  const renderForgotPassword = () => (
    <>
      <CardHeader>
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-2" onClick={() => setFlow('login')}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
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
          <button onClick={() => setFlow('login')} className="text-primary hover:underline">
            Back to login
          </button>
          <span>·</span>
          <button onClick={() => setFlow('login-otp')} className="text-primary hover:underline">
            Login with OTP
          </button>
        </div>
      </CardFooter>
    </>
  )

  const renderLoginOTP = () => (
    <>
      <CardHeader>
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-2" onClick={() => setFlow('login')}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div>
            <CardTitle>Login with OTP</CardTitle>
            <CardDescription>We'll send a code to your email</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input type="email" placeholder="Email" />
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button className="w-32 mx-auto">Send OTP</Button>
        <div className="text-sm text-center">
          <button onClick={() => setFlow('login')} className="text-primary hover:underline">
            Back to login
          </button>
        </div>
      </CardFooter>
    </>
  )

  const renderFlow = {
    'login': renderLogin,
    'forgot-password': renderForgotPassword,
    'login-otp': renderLoginOTP
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-[400px] h-[450px]">
        {renderFlow[flow]()}
      </Card>
    </div>
  )
} 