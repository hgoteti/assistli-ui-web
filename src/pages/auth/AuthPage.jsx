import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FaGoogle, FaSlack, FaMicrosoft } from "react-icons/fa"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"

export default function AuthPage() {
  const [flow, setFlow] = useState('login') // 'login', 'forgot-password', 'login-otp'
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState('forward')

  const handleFlowChange = (newFlow, dir = 'forward') => {
    setIsTransitioning(true)
    setDirection(dir)
    setTimeout(() => {
      setFlow(newFlow)
      setIsTransitioning(false)
    }, 300) // Increased from 200 to 300
  }

  const getSlideClass = () => {
    if (!isTransitioning) return 'translate-x-0'
    return direction === 'forward' ? '-translate-x-full' : 'translate-x-full'
  }

  const getEnterClass = () => {
    if (isTransitioning) return direction === 'forward' ? 'translate-x-full' : '-translate-x-full'
    return 'translate-x-0'
  }

  const renderLogin = () => (
    <div className={`h-full flex flex-col transition-transform duration-300 ease-in-out ${getEnterClass()}`}>
      <CardHeader>
        <CardTitle>Welcome back</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-4">
          <div className="space-y-2">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </div>
          
          <div className="pt-4 flex justify-center">
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
        </div>
      </CardContent>
      <CardFooter className="py-6">
        <div className="w-full text-sm text-center space-x-2">
          <button onClick={() => handleFlowChange('forgot-password')} className="text-primary hover:underline">
            Forgot password?
          </button>
          <span>·</span>
          <button onClick={() => handleFlowChange('login-otp')} className="text-primary hover:underline">
            Login with OTP
          </button>
        </div>
      </CardFooter>
    </div>
  )

  const renderForgotPassword = () => (
    <div className={`h-full flex flex-col transition-transform duration-300 ease-in-out ${getEnterClass()}`}>
      <div className="absolute top-4 left-4">
        <Button variant="ghost" size="icon" onClick={() => handleFlowChange('login', 'back')}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      <CardHeader>
        <CardTitle>Reset password</CardTitle>
        <CardDescription>Enter your email to reset your password</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-4">
          <Input type="email" placeholder="Email" />
          <div className="pt-[60px] flex justify-center">
            <Button className="w-32">Send link</Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="py-6">
        <div className="w-full text-sm text-center">
          <button onClick={() => handleFlowChange('login-otp')} className="text-primary hover:underline">
            Login with OTP
          </button>
        </div>
      </CardFooter>
    </div>
  )

  const renderLoginOTP = () => (
    <div className={`h-full flex flex-col transition-transform duration-300 ease-in-out ${getEnterClass()}`}>
      <div className="absolute top-4 left-4">
        <Button variant="ghost" size="icon" onClick={() => handleFlowChange('login', 'back')}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      <CardHeader>
        <CardTitle>Login with OTP</CardTitle>
        <CardDescription>We'll send a code to your email</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-4">
          <Input type="email" placeholder="Email" />
          <div className="pt-[60px] flex justify-center">
            <Button className="w-32">Send OTP</Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="py-6">
        <div className="w-full text-sm text-center">
          <button onClick={() => handleFlowChange('login', 'back')} className="text-primary hover:underline">
            Back to login
          </button>
        </div>
      </CardFooter>
    </div>
  )

  const renderFlow = {
    'login': renderLogin,
    'forgot-password': renderForgotPassword,
    'login-otp': renderLoginOTP
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-[400px] h-[450px] relative overflow-hidden">
        {renderFlow[flow]()}
      </Card>
    </div>
  )
} 