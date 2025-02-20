import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

const columns = [
  {
    accessorKey: "id",
    header: "Ticket ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "assignee",
    header: "Assignee",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status")
      return (
        <Badge variant={
          status === "Open" ? "default" :
          status === "In Progress" ? "secondary" :
          "success"
        }>
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = row.getValue("priority")
      return (
        <Badge variant={
          priority === "High" ? "destructive" :
          priority === "Medium" ? "warning" :
          "default"
        }>
          {priority}
        </Badge>
      )
    },
  },
  {
    accessorKey: "created",
    header: "Created",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
]

const data = [
  {
    id: "TK-1234",
    title: "Unable to access dashboard",
    assignee: "John Doe",
    status: "Open",
    priority: "High",
    created: "2024-01-15",
    department: "IT Support",
  },
  {
    id: "TK-1235",
    title: "Login issues on mobile",
    assignee: "Jane Smith",
    status: "In Progress",
    priority: "Medium",
    created: "2024-01-14",
    department: "Mobile Team",
  },
  // Add more sample data
]

export default function AllTickets() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">All Tickets</h2>
        <p className="text-muted-foreground">View and manage all support tickets</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tickets Overview</CardTitle>
          <CardDescription>Comprehensive list of all support tickets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <Input
              placeholder="Search tickets..."
              className="max-w-sm"
            />
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="it">IT Support</SelectItem>
                <SelectItem value="mobile">Mobile Team</SelectItem>
                <SelectItem value="web">Web Team</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  )
} 