import { Badge } from "@/components/ui/badge"
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
]

const data = [
  {
    id: "TK-1234",
    title: "Unable to access dashboard",
    status: "Open",
    priority: "High",
    created: "2024-01-15",
  },
  {
    id: "TK-1235",
    title: "Login issues on mobile",
    status: "In Progress",
    priority: "Medium",
    created: "2024-01-14",
  },
  // Add more sample data as needed
]

export default function MyTickets() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">My Tickets</h2>
          <p className="text-muted-foreground">Manage your support tickets</p>
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tickets</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Tickets</CardTitle>
          <CardDescription>View and manage your assigned tickets</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  )
} 