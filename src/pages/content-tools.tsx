import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck, BatteryCharging, Camera, Droplets, MapPin, RadioTower, Settings2, Wrench } from "lucide-react";

const devices = [
  {
    id: "DYN-EST-001",
    name: "Dyniq Device #001",
    system: "Eraser EST",
    site: "Pilot Facility A",
    status: "Online",
    battery: "86%",
    cycles: 54,
    lastPhoto: "AI image scan ready",
    imageUrl: "https://via.placeholder.com/800x400/0e4f1f/ffffff?text=Eraser+EST",
  },
  {
    id: "DYN-ERS-002",
    name: "Dyniq Device #002",
    system: "Eraser",
    site: "Pilot Facility B",
    status: "Online",
    battery: "72%",
    cycles: 41,
    lastPhoto: "Needs left-edge review",
    imageUrl: "https://via.placeholder.com/800x400/0c3f19/ffffff?text=Eraser",
  },
  {
    id: "DYN-MES-003",
    name: "Dyniq Device #003",
    system: "MES",
    site: "Pilot Facility C",
    status: "Standby",
    battery: "100%",
    cycles: 33,
    lastPhoto: "No active scan",
    imageUrl: "https://via.placeholder.com/800x400/14632a/ffffff?text=MES",
  },
];

const ContentTools = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-primary font-medium">Dyniq Devices</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Device fleet</h1>
          <p className="text-white/50 mt-1">MVP page for connected prototypes, pilot sites, photo scans and maintenance state.</p>
        </div>
        <Button className="bg-linear-to-r from-primary to-sidebar-primary text-white border-0"><RadioTower className="size-4" /> Add device</Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {devices.map((device) => (
          <Card key={device.id} className="overflow-hidden border-white/10 bg-card/80">
            <img src={device.imageUrl} alt={device.system} className="h-44 w-full object-cover" loading="lazy" />
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <CardTitle className="text-white">{device.name}</CardTitle>
                  <p className="mt-1 text-sm text-white/50">{device.id}</p>
                </div>
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">{device.status}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-xl border border-primary/20 bg-primary/10 px-3 py-2">
                <p className="text-xs text-white/60">System</p>
                <p className="font-semibold text-white">{device.system}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60"><MapPin className="size-4 text-primary" /> {device.site}</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3"><BatteryCharging className="mb-2 size-4 text-primary" /><p className="text-xs text-white/40">Battery</p><p className="font-semibold text-white">{device.battery}</p></div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3"><Droplets className="mb-2 size-4 text-primary" /><p className="text-xs text-white/40">Cycles</p><p className="font-semibold text-white">{device.cycles}</p></div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3"><Camera className="mb-2 size-4 text-primary" /><p className="text-xs text-white/40">Latest image analysis</p><p className="font-semibold text-white">{device.lastPhoto}</p></div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 border-primary/50 text-slate-200 hover:bg-primary/10 hover:border-primary"><Settings2 className="size-4" /> Configure</Button>
                <Button variant="outline" className="flex-1 border-primary/50 text-slate-200 hover:bg-primary/10 hover:border-primary"><Wrench className="size-4" /> Service</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-white/10 bg-card/80">
        <CardContent className="flex items-start gap-3 p-5">
          <BadgeCheck className="mt-1 size-5 text-primary" />
          <div>
            <h3 className="font-semibold text-white">Backend-ready structure</h3>
            <p className="mt-1 text-sm text-white/50">This page is prepared for future API fields: device_id, site_id, status, battery, cycles_count, latest_scan_status, maintenance_status.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentTools;
