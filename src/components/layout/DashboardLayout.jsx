import { useState, Suspense } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, Search, Sun, Moon } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import Sidebar from "./Sidebar"
import { DashboardSkeleton } from "@/components/skeletons/DashboardSkeleton"
import { TicketsSkeleton } from "@/components/skeletons/TicketsSkeleton"
import { UsersSkeleton } from "@/components/skeletons/UsersSkeleton"
import { TableSkeleton } from "@/components/skeletons/TableSkeleton"

function LoadingFallback() {
  const location = useLocation()
  const path = location.pathname

  if (path === '/dashboard') {
    return <DashboardSkeleton />
  }
  
  if (path === '/dashboard/my-tickets' || path === '/dashboard/all-tickets') {
    return <TicketsSkeleton />
  }

  if (path === '/dashboard/users') {
    return <UsersSkeleton />
  }

  // Default to TableSkeleton for other pages
  return <TableSkeleton />
}

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${
        sidebarOpen ? 'pl-64' : 'pl-0'
      }`}>
        {/* Top Navigation */}
        <div className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="relative w-96">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="w-full pl-8"
              />
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Page Content */}
        <main className="p-6">
          <Suspense fallback={<LoadingFallback />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  )
} 