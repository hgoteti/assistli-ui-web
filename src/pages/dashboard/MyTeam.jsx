import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Progress } from "@/components/ui/progress"

export default function MyTeam() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Team Lead",
      email: "john@example.com",
      avatar: "/avatars/john.png",
      activeTickets: 12,
      resolvedToday: 5,
      status: "Active",
    },
    {
      name: "Jane Smith",
      role: "Senior Support",
      email: "jane@example.com",
      avatar: "/avatars/jane.png",
      activeTickets: 8,
      resolvedToday: 3,
      status: "In Meeting",
    },
    // Add more team members
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">My Team</h2>
        <p className="text-muted-foreground">Overview of your team's performance</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Size</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">2 members on leave</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">12 high priority</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">+5 from yesterday</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Current status and performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {teamMembers.map((member) => (
              <div key={member.email} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <HoverCard>
                    <HoverCardTrigger>
                      <Avatar>
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                        <p className="text-sm">{member.email}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <div>
                    <p className="text-sm font-medium">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{member.activeTickets} Active</p>
                    <p className="text-sm text-muted-foreground">{member.resolvedToday} Resolved</p>
                  </div>
                  <Badge variant={member.status === "Active" ? "success" : "secondary"}>
                    {member.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Workload Distribution</CardTitle>
          <CardDescription>Current ticket allocation per team member</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.email} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.activeTickets} tickets</p>
                </div>
                <Progress value={member.activeTickets * 5} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 