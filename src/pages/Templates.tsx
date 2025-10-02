import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Type, Image, Film, Layout, Maximize2 } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "Podcast Clips",
    description: "Auto-generated clips with animated captions and speaker highlights",
    features: ["Auto Captions", "Speaker Detection", "Engagement Overlays"],
    icon: Type,
    color: "text-blue-500",
  },
  {
    id: 2,
    name: "Logo Branding",
    description: "Add your logo watermark to all clips with customizable positioning",
    features: ["Logo Placement", "Opacity Control", "Brand Colors"],
    icon: Image,
    color: "text-purple-500",
  },
  {
    id: 3,
    name: "Intro/Outro Pack",
    description: "Professional intro and outro sequences for consistent branding",
    features: ["Custom Text", "Transitions", "Audio Sync"],
    icon: Film,
    color: "text-pink-500",
  },
  {
    id: 4,
    name: "Retention Hooks",
    description: "Add retention overlays like progress bars and countdown timers",
    features: ["Progress Bars", "Timers", "Engagement Widgets"],
    icon: Sparkles,
    color: "text-orange-500",
  },
  {
    id: 5,
    name: "Profile Overlay",
    description: "Social media profile callouts and follow CTAs",
    features: ["Handle Display", "QR Codes", "CTA Buttons"],
    icon: Layout,
    color: "text-green-500",
  },
  {
    id: 6,
    name: "Split-Screen",
    description: "Combine multiple angles or add reaction footage",
    features: ["Multi-Angle", "Picture-in-Picture", "Custom Layouts"],
    icon: Maximize2,
    color: "text-cyan-500",
  },
];

export default function Templates() {
  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Templates</h1>
        <p className="text-muted-foreground">Pre-configured styles for your video repurposing workflows</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
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
  );
}
