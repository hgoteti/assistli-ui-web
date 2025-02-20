import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function UsersSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="h-8 w-[200px]" />
          <Skeleton className="h-4 w-[300px] mt-2" />
        </div>
        <Skeleton className="h-10 w-[100px]" /> {/* Add User button */}
      </div>

      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-[140px]" />
          <Skeleton className="h-4 w-[180px] mt-2" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4 mb-6">
              <Skeleton className="h-10 w-[200px]" />
              <Skeleton className="h-10 w-[160px]" />
              <Skeleton className="h-10 w-[160px]" />
            </div>
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-10 w-10 rounded-full" /> {/* Avatar */}
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[150px]" />
                      <Skeleton className="h-3 w-[200px]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-6 w-[80px]" />
                    <Skeleton className="h-6 w-[100px]" />
                    <Skeleton className="h-8 w-8 rounded-md" /> {/* Action button */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 