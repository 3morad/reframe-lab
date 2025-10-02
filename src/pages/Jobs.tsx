import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Download, Play, Clock, CheckCircle2, XCircle, Loader2 } from "lucide-react";

type JobStatus = "pending" | "processing" | "finished" | "failed";

interface Job {
  id: number;
  name: string;
  workflow: string;
  clipCount: number;
  status: JobStatus;
  progress?: number;
  createdAt: string;
  clips?: Array<{ id: number; thumbnail: string; duration: string }>;
}

const mockJobs: Job[] = [
  {
    id: 1,
    name: "Podcast Episode #42",
    workflow: "Long → Short",
    clipCount: 12,
    status: "finished",
    createdAt: "2 hours ago",
    clips: [
      { id: 1, thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop", duration: "0:45" },
      { id: 2, thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop", duration: "1:20" },
      { id: 3, thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop", duration: "0:58" },
    ],
  },
  {
    id: 2,
    name: "TikTok Compilation",
    workflow: "Short → Short",
    clipCount: 5,
    status: "processing",
    progress: 67,
    createdAt: "15 minutes ago",
  },
  {
    id: 3,
    name: "Tutorial Series",
    workflow: "Long → Short",
    clipCount: 8,
    status: "pending",
    createdAt: "30 minutes ago",
  },
  {
    id: 4,
    name: "Interview Highlights",
    workflow: "Long → Short",
    clipCount: 15,
    status: "failed",
    createdAt: "1 day ago",
  },
];

const statusConfig = {
  pending: { icon: Clock, color: "text-yellow-500", bg: "bg-yellow-50", label: "Pending" },
  processing: { icon: Loader2, color: "text-blue-500", bg: "bg-blue-50", label: "Processing" },
  finished: { icon: CheckCircle2, color: "text-green-500", bg: "bg-green-50", label: "Finished" },
  failed: { icon: XCircle, color: "text-red-500", bg: "bg-red-50", label: "Failed" },
};

export default function Jobs() {
  const [jobs] = useState<Job[]>(mockJobs);

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Jobs</h1>
        <p className="text-muted-foreground">Track your video repurposing jobs and download finished clips</p>
      </div>

      <div className="space-y-6">
        {jobs.map((job) => {
          const StatusIcon = statusConfig[job.status].icon;
          
          return (
            <Card key={job.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl">{job.name}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {job.workflow}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center gap-4">
                      <span>{job.clipCount} clips</span>
                      <span>•</span>
                      <span>{job.createdAt}</span>
                    </CardDescription>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${statusConfig[job.status].bg}`}>
                    <StatusIcon className={`h-4 w-4 ${statusConfig[job.status].color} ${job.status === 'processing' ? 'animate-spin' : ''}`} />
                    <span className={`text-sm font-medium ${statusConfig[job.status].color}`}>
                      {statusConfig[job.status].label}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {job.status === "processing" && job.progress && (
                  <div className="space-y-2 mb-4">
                    <Progress value={job.progress} className="h-2" />
                    <p className="text-sm text-muted-foreground">Processing... {job.progress}%</p>
                  </div>
                )}

                {job.status === "finished" && job.clips && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {job.clips.map((clip) => (
                        <div key={clip.id} className="group relative rounded-lg overflow-hidden border border-border hover:shadow-md transition-shadow">
                          <img 
                            src={clip.thumbnail} 
                            alt={`Clip ${clip.id}`}
                            className="w-full aspect-video object-cover"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                              <Play className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                            {clip.duration}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download All
                      </Button>
                    </div>
                  </div>
                )}

                {job.status === "failed" && (
                  <div className="text-sm text-muted-foreground">
                    Job failed to process. Please try again or contact support.
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
