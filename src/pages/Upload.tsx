import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Youtube, Video, Cloud, Upload as UploadIcon, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Upload() {
  const [workflow, setWorkflow] = useState("long-to-short");
  const [clipCount, setClipCount] = useState([5]);
  const [clipLength, setClipLength] = useState("30");
  const [aiMode, setAiMode] = useState("none");
  const [customPrompt, setCustomPrompt] = useState("");
  const [templates, setTemplates] = useState({
    logo: false,
    intro: false,
    cover: false,
    captions: true,
    retention: false,
    profile: false,
    splitScreen: false,
    border: false,
  });
  const { toast } = useToast();

  const handleSubmit = () => {
    toast({
      title: "Job created!",
      description: `Processing ${clipCount[0]} clips with ${workflow} workflow.`,
    });
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Create New Job</h1>
        <p className="text-muted-foreground">Upload your video and configure the repurposing settings</p>
      </div>

      <div className="space-y-6">
        {/* Upload Source */}
        <Card>
          <CardHeader>
            <CardTitle>1. Upload Source</CardTitle>
            <CardDescription>Choose where your video is coming from</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="youtube" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="youtube" className="flex items-center gap-2">
                  <Youtube className="h-4 w-4" />
                  YouTube
                </TabsTrigger>
                <TabsTrigger value="tiktok" className="flex items-center gap-2">
                  <Video className="h-4 w-4" />
                  TikTok
                </TabsTrigger>
                <TabsTrigger value="drive" className="flex items-center gap-2">
                  <Cloud className="h-4 w-4" />
                  Drive
                </TabsTrigger>
                <TabsTrigger value="local" className="flex items-center gap-2">
                  <UploadIcon className="h-4 w-4" />
                  Local
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="youtube" className="mt-4">
                <div className="space-y-2">
                  <Label htmlFor="youtube-url">YouTube URL</Label>
                  <Input id="youtube-url" placeholder="https://youtube.com/watch?v=..." />
                </div>
              </TabsContent>
              
              <TabsContent value="tiktok" className="mt-4">
                <div className="space-y-2">
                  <Label htmlFor="tiktok-url">TikTok URL</Label>
                  <Input id="tiktok-url" placeholder="https://tiktok.com/@username/video/..." />
                </div>
              </TabsContent>
              
              <TabsContent value="drive" className="mt-4">
                <div className="space-y-2">
                  <Label htmlFor="drive-url">Google Drive Link</Label>
                  <Input id="drive-url" placeholder="https://drive.google.com/file/d/..." />
                </div>
              </TabsContent>
              
              <TabsContent value="local" className="mt-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <UploadIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">Drag and drop or click to upload</p>
                  <p className="text-xs text-muted-foreground">MP4, MOV, AVI up to 2GB</p>
                  <Input type="file" className="hidden" accept="video/*" />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Workflow Selection */}
        <Card>
          <CardHeader>
            <CardTitle>2. Choose Workflow</CardTitle>
            <CardDescription>Select how you want to repurpose your content</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={workflow} onValueChange={setWorkflow} className="grid grid-cols-2 gap-4">
              <div>
                <RadioGroupItem value="long-to-short" id="long-to-short" className="peer sr-only" />
                <Label
                  htmlFor="long-to-short"
                  className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-card p-4 hover:bg-muted cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                >
                  <span className="text-lg font-semibold">Long → Short</span>
                  <span className="text-sm text-muted-foreground text-center mt-2">
                    Extract short clips from long-form content
                  </span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="short-to-short" id="short-to-short" className="peer sr-only" />
                <Label
                  htmlFor="short-to-short"
                  className="flex flex-col items-center justify-between rounded-lg border-2 border-muted bg-card p-4 hover:bg-muted cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                >
                  <span className="text-lg font-semibold">Short → Short</span>
                  <span className="text-sm text-muted-foreground text-center mt-2">
                    Optimize existing short-form content
                  </span>
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Clip Settings */}
        <Card>
          <CardHeader>
            <CardTitle>3. Clip Settings</CardTitle>
            <CardDescription>Configure your clip generation preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Number of Clips ({clipCount[0]} clips)</Label>
              <Slider
                value={clipCount}
                onValueChange={setClipCount}
                max={1000}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>1 clip</span>
                <span>1000 clips</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Clip Length Preset</Label>
              <RadioGroup value={clipLength} onValueChange={setClipLength} className="grid grid-cols-3 gap-4">
                <div>
                  <RadioGroupItem value="15" id="15s" className="peer sr-only" />
                  <Label
                    htmlFor="15s"
                    className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-card p-4 hover:bg-muted cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                  >
                    <span className="text-2xl font-bold">15s</span>
                    <span className="text-xs text-muted-foreground mt-1">Short</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="30" id="30s" className="peer sr-only" />
                  <Label
                    htmlFor="30s"
                    className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-card p-4 hover:bg-muted cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                  >
                    <span className="text-2xl font-bold">30s</span>
                    <span className="text-xs text-muted-foreground mt-1">Medium</span>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="60" id="60s" className="peer sr-only" />
                  <Label
                    htmlFor="60s"
                    className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-card p-4 hover:bg-muted cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                  >
                    <span className="text-2xl font-bold">60s</span>
                    <span className="text-xs text-muted-foreground mt-1">Long</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* AI Options */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <CardTitle>4. AI-Powered Features</CardTitle>
            </div>
            <CardDescription>Let AI intelligently select the best moments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>AI Clipping Mode</Label>
              <Select value={aiMode} onValueChange={setAiMode}>
                <SelectTrigger>
                  <SelectValue placeholder="Select AI mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None (Manual)</SelectItem>
                  <SelectItem value="podcast">Podcast Clipping</SelectItem>
                  <SelectItem value="vlog">Vlog Clipping</SelectItem>
                  <SelectItem value="streamer">Streamer Highlights</SelectItem>
                  <SelectItem value="ugc">AI UGC Generation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {aiMode !== "none" && (
              <div className="space-y-2">
                <Label htmlFor="custom-prompt">Custom AI Prompt (Optional)</Label>
                <Textarea
                  id="custom-prompt"
                  placeholder="e.g., Focus on moments with high energy and laughter..."
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  rows={3}
                />
                <p className="text-xs text-muted-foreground">
                  Customize how AI selects clips from your video
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Template Settings */}
        <Card>
          <CardHeader>
            <CardTitle>5. Template Style</CardTitle>
            <CardDescription>Customize your video output with these options</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="logo"
                  checked={templates.logo}
                  onCheckedChange={(checked) => setTemplates({ ...templates, logo: checked as boolean })}
                />
                <Label htmlFor="logo" className="text-sm font-medium cursor-pointer">
                  Logo/Watermark
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="intro"
                  checked={templates.intro}
                  onCheckedChange={(checked) => setTemplates({ ...templates, intro: checked as boolean })}
                />
                <Label htmlFor="intro" className="text-sm font-medium cursor-pointer">
                  Intro/Outro
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="cover"
                  checked={templates.cover}
                  onCheckedChange={(checked) => setTemplates({ ...templates, cover: checked as boolean })}
                />
                <Label htmlFor="cover" className="text-sm font-medium cursor-pointer">
                  Cover/Thumbnail
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="captions"
                  checked={templates.captions}
                  onCheckedChange={(checked) => setTemplates({ ...templates, captions: checked as boolean })}
                />
                <Label htmlFor="captions" className="text-sm font-medium cursor-pointer">
                  Auto Captions
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="retention"
                  checked={templates.retention}
                  onCheckedChange={(checked) => setTemplates({ ...templates, retention: checked as boolean })}
                />
                <Label htmlFor="retention" className="text-sm font-medium cursor-pointer">
                  Retention Overlay
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="profile"
                  checked={templates.profile}
                  onCheckedChange={(checked) => setTemplates({ ...templates, profile: checked as boolean })}
                />
                <Label htmlFor="profile" className="text-sm font-medium cursor-pointer">
                  Profile Overlay
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="splitScreen"
                  checked={templates.splitScreen}
                  onCheckedChange={(checked) => setTemplates({ ...templates, splitScreen: checked as boolean })}
                />
                <Label htmlFor="splitScreen" className="text-sm font-medium cursor-pointer">
                  Split-Screen
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="border"
                  checked={templates.border}
                  onCheckedChange={(checked) => setTemplates({ ...templates, border: checked as boolean })}
                />
                <Label htmlFor="border" className="text-sm font-medium cursor-pointer">
                  Custom Border/BG
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button size="lg" onClick={handleSubmit} className="px-8">
            Create Job
          </Button>
        </div>
      </div>
    </div>
  );
}
