import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Type, Image, Film, Layout, Maximize2, Frame, Wand2, Mic, Video as VideoIcon } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "Podcast Clips",
    description: "Auto-generated clips with animated captions and speaker highlights",
    features: ["Auto Captions", "Speaker Detection", "Engagement Overlays"],
    icon: Type,
    color: "text-blue-500",
    category: "Standard",
  },
  {
    id: 2,
    name: "Logo Branding",
    description: "Add your logo watermark to all clips with customizable positioning",
    features: ["Logo Placement", "Opacity Control", "Brand Colors"],
    icon: Image,
    color: "text-purple-500",
    category: "Standard",
  },
  {
    id: 3,
    name: "Intro/Outro Pack",
    description: "Professional intro and outro sequences for consistent branding",
    features: ["Custom Text", "Transitions", "Audio Sync"],
    icon: Film,
    color: "text-pink-500",
    category: "Standard",
  },
  {
    id: 4,
    name: "Retention Hooks",
    description: "Add retention overlays like progress bars and countdown timers",
    features: ["Progress Bars", "Timers", "Engagement Widgets"],
    icon: Sparkles,
    color: "text-orange-500",
    category: "Standard",
  },
  {
    id: 5,
    name: "Profile Overlay",
    description: "Social media profile callouts with avatar, handle, and verification badge",
    features: ["Handle Display", "QR Codes", "CTA Buttons"],
    icon: Layout,
    color: "text-green-500",
    category: "Standard",
  },
  {
    id: 6,
    name: "Split-Screen",
    description: "Combine with stock footage or UGC reaction videos",
    features: ["Multi-Angle", "Picture-in-Picture", "Custom Layouts"],
    icon: Maximize2,
    color: "text-cyan-500",
    category: "Standard",
  },
  {
    id: 7,
    name: "Custom Border/BG",
    description: "Add stylish borders and background patterns to your clips",
    features: ["Border Styles", "Gradient BG", "Custom Colors"],
    icon: Frame,
    color: "text-indigo-500",
    category: "Standard",
  },
  {
    id: 8,
    name: "Cover/Thumbnail",
    description: "Auto-generate eye-catching thumbnails for each clip",
    features: ["AI Thumbnails", "Text Overlays", "Export PNG"],
    icon: Image,
    color: "text-rose-500",
    category: "Standard",
  },
  {
    id: 9,
    name: "AI Podcast Clipper",
    description: "AI detects the most engaging moments in podcast episodes",
    features: ["Moment Detection", "Smart Cuts", "Engagement Scoring"],
    icon: Mic,
    color: "text-violet-500",
    category: "AI-Powered",
  },
  {
    id: 10,
    name: "AI Vlog Clipper",
    description: "Automatically identify and extract vlog highlights",
    features: ["Scene Detection", "Energy Analysis", "Auto-Trim"],
    icon: VideoIcon,
    color: "text-amber-500",
    category: "AI-Powered",
  },
  {
    id: 11,
    name: "AI Streamer Highlights",
    description: "Capture the most hype moments from gaming or live streams",
    features: ["Highlight Detection", "Reaction Tracking", "Peak Moments"],
    icon: Sparkles,
    color: "text-red-500",
    category: "AI-Powered",
  },
  {
    id: 12,
    name: "AI UGC Generator",
    description: "Generate UGC-style videos with AI-powered scene selection",
    features: ["Style Transfer", "UGC Templates", "Authentic Feel"],
    icon: Wand2,
    color: "text-teal-500",
    category: "AI-Powered",
  },
];

export default function Templates() {
  const standardTemplates = templates.filter(t => t.category === "Standard");
  const aiTemplates = templates.filter(t => t.category === "AI-Powered");

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Templates</h1>
        <p className="text-muted-foreground">Pre-configured styles and AI-powered workflows for video repurposing</p>
      </div>

      {/* Standard Templates */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Standard Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standardTemplates.map((template) => (
            <Card key={template.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className={`p-3 rounded-lg bg-muted ${template.color}`}>
                    <template.icon className="h-6 w-6" />
                  </div>
                </div>
                <CardTitle className="text-lg">{template.name}</CardTitle>
                <CardDescription className="text-sm">{template.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {template.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    Use Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* AI-Powered Templates */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">AI-Powered Templates</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiTemplates.map((template) => (
            <Card key={template.id} className="hover:shadow-lg transition-shadow border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className={`p-3 rounded-lg bg-primary/10 ${template.color}`}>
                    <template.icon className="h-6 w-6" />
                  </div>
                </div>
                <CardTitle className="text-lg">{template.name}</CardTitle>
                <CardDescription className="text-sm">{template.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {template.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full">
                    Use Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
