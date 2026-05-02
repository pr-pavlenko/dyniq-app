import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { XAxis, YAxis, Bar, BarChart, Line, LineChart, CartesianGrid } from "recharts";
import { Calendar, Download, ArrowUpRight, AlertCircle, CheckCircle2 } from "lucide-react";

const fleetOverview = [
  { day: "Mon", sessions: 35 },
  { day: "Tue", sessions: 39 },
  { day: "Wed", sessions: 42 },
  { day: "Thu", sessions: 37 },
  { day: "Fri", sessions: 45 },
  { day: "Sat", sessions: 31 },
  { day: "Sun", sessions: 29 },
];

const deviceProfiles = {
  "Device #01": {
    location: "Warehouse A",
    uptime: "99.2%",
    uptimeChange: "+0.6%",
    cleaningToday: "14",
    cleaningChange: "+12%",
    areaCleaned: "1,320 m²",
    areaChange: "+9%",
    alerts: "1",
    alertsChange: "-2",
    battery: "Battery trend stable (78% avg)",
    downtime: "0.4 h/day",
    restarts: "2 this week",
    insight: "Device #01 efficiency improved by 12% vs last week.",
    activity: [
      { day: "Mon", sessions: 11, uptime: 98.9, errors: 1 },
      { day: "Tue", sessions: 13, uptime: 99.0, errors: 1 },
      { day: "Wed", sessions: 12, uptime: 99.1, errors: 0 },
      { day: "Thu", sessions: 14, uptime: 99.2, errors: 1 },
      { day: "Fri", sessions: 15, uptime: 99.4, errors: 0 },
      { day: "Sat", sessions: 10, uptime: 99.3, errors: 0 },
      { day: "Sun", sessions: 9, uptime: 99.1, errors: 1 },
    ],
  },
  "Device #02": {
    location: "Office Campus",
    uptime: "98.6%",
    uptimeChange: "-0.3%",
    cleaningToday: "11",
    cleaningChange: "-6%",
    areaCleaned: "940 m²",
    areaChange: "-8%",
    alerts: "3",
    alertsChange: "+1",
    battery: "Battery drop observed (62% avg)",
    downtime: "0.8 h/day",
    restarts: "4 this week",
    insight: "Device #02 efficiency dropped by 8% in the last 3 days.",
    activity: [
      { day: "Mon", sessions: 9, uptime: 98.7, errors: 2 },
      { day: "Tue", sessions: 10, uptime: 98.9, errors: 2 },
      { day: "Wed", sessions: 11, uptime: 98.4, errors: 3 },
      { day: "Thu", sessions: 10, uptime: 98.5, errors: 3 },
      { day: "Fri", sessions: 12, uptime: 98.6, errors: 2 },
      { day: "Sat", sessions: 8, uptime: 98.3, errors: 3 },
      { day: "Sun", sessions: 7, uptime: 98.2, errors: 4 },
    ],
  },
  "Device #03": {
    location: "Retail Mall",
    uptime: "99.7%",
    uptimeChange: "+0.9%",
    cleaningToday: "16",
    cleaningChange: "+15%",
    areaCleaned: "1,510 m²",
    areaChange: "+13%",
    alerts: "0",
    alertsChange: "-1",
    battery: "Battery healthy (84% avg)",
    downtime: "0.2 h/day",
    restarts: "1 this week",
    insight: "Device #03 is the top performer this week.",
    activity: [
      { day: "Mon", sessions: 13, uptime: 99.4, errors: 0 },
      { day: "Tue", sessions: 14, uptime: 99.5, errors: 0 },
      { day: "Wed", sessions: 15, uptime: 99.6, errors: 0 },
      { day: "Thu", sessions: 16, uptime: 99.8, errors: 0 },
      { day: "Fri", sessions: 17, uptime: 99.7, errors: 0 },
      { day: "Sat", sessions: 12, uptime: 99.7, errors: 0 },
      { day: "Sun", sessions: 11, uptime: 99.6, errors: 0 },
    ],
  },
};

const chartConfig = {
  sessions: { label: "Sessions", color: "var(--chart-1)" },
  uptime: { label: "Uptime", color: "var(--chart-2)" },
};

const Analytics = () => {
  const [selectedDevice, setSelectedDevice] = useState<keyof typeof deviceProfiles>("Device #01");
  const activeDevice = useMemo(() => deviceProfiles[selectedDevice], [selectedDevice]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Analytics Dashboard</h1>
          <p className="text-sm sm:text-base text-white/50 mt-1">Fleet performance, AI insights, and cleaning outcomes</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="min-w-[190px]">
            <select
              value={selectedDevice}
              onChange={(event) => setSelectedDevice(event.target.value as keyof typeof deviceProfiles)}
              className="w-full h-10 rounded-md border border-primary/50 bg-slate-950 px-3 text-sm text-slate-200"
              aria-label="Select device"
            >
              {Object.keys(deviceProfiles).map((deviceName) => (
                <option key={deviceName} value={deviceName}>
                  {deviceName}
                </option>
              ))}
            </select>
          </div>
          <Button variant="outline" className="border-primary/50 text-slate-200 hover:bg-primary/10 hover:border-primary">
            <Calendar className="h-4 w-4 " />
            <span className="hidden sm:inline">Last 7 days</span>
          </Button>
          <Button className="bg-linear-to-r from-primary to-sidebar-primary hover:from-sidebar-primary hover:to-primary text-white border-0">
            <Download className="h-4 w-4 " />
            <span className="hidden sm:inline">Export Data</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <Card><CardHeader><p className="text-xs text-white/50 uppercase">Total devices</p><p className="text-3xl font-bold text-white">3</p></CardHeader><CardContent><p className="text-sm text-white/50">Selected: {selectedDevice} · {activeDevice.location}</p></CardContent></Card>
        <Card><CardHeader><p className="text-xs text-white/50 uppercase">Uptime</p><p className="text-3xl font-bold text-white">{activeDevice.uptime}</p></CardHeader><CardContent><p className="text-sm text-green-500">{activeDevice.uptimeChange} vs last week</p></CardContent></Card>
        <Card><CardHeader><p className="text-xs text-white/50 uppercase">Cleaning sessions today</p><p className="text-3xl font-bold text-white">{activeDevice.cleaningToday}</p></CardHeader><CardContent><p className="text-sm text-green-500">{activeDevice.cleaningChange} vs last week</p></CardContent></Card>
        <Card><CardHeader><p className="text-xs text-white/50 uppercase">Area cleaned</p><p className="text-3xl font-bold text-white">{activeDevice.areaCleaned}</p></CardHeader><CardContent><p className="text-sm text-green-500">{activeDevice.areaChange} vs last week</p></CardContent></Card>
        <Card><CardHeader><p className="text-xs text-white/50 uppercase">AI alerts</p><p className="text-3xl font-bold text-white">{activeDevice.alerts}</p></CardHeader><CardContent><p className="text-sm text-yellow-500">{activeDevice.alertsChange} vs last week</p></CardContent></Card>
        <Card><CardHeader><p className="text-xs text-white/50 uppercase">Device health snapshot</p><p className="text-lg font-semibold text-white">{activeDevice.battery}</p></CardHeader><CardContent><p className="text-sm text-white/50">Downtime: {activeDevice.downtime} · Restarts: {activeDevice.restarts}</p></CardContent></Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white">Activity over time</CardTitle>
              <p className="text-sm text-white/50 mt-1">Cleaning sessions trend for {selectedDevice}</p>
            </div>
            <div className="flex items-center gap-1 text-green-500 text-sm font-semibold">
              <ArrowUpRight className="h-4 w-4" />
              Live trend
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="p-4 rounded-xl bg-linear-to-br from-primary/10 to-transparent border border-primary/10 shadow-inner">
            <ChartContainer config={chartConfig} className="h-[320px] w-full">
              <LineChart data={activeDevice.activity} margin={{ left: 0, right: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                <XAxis dataKey="day" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} width={50} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="sessions" stroke="var(--chart-1)" strokeWidth={3} dot={{ fill: "var(--chart-1)", r: 5, strokeWidth: 2, stroke: "#1e293b" }} />
              </LineChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-white">Fleet vs selected device</CardTitle>
            <p className="text-sm text-white/50 mt-1">Compare this device with total fleet sessions</p>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[280px] w-full">
              <BarChart data={fleetOverview} margin={{ left: 0, right: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                <XAxis dataKey="day" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis hide />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="sessions" fill="var(--chart-1)" radius={[10, 10, 10, 10]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="border-yellow-500/20 bg-yellow-500/5">
          <CardHeader>
            <CardTitle className="text-white">AI insight</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
              <p className="text-slate-200">{activeDevice.insight}</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <p className="text-slate-200">Recommendation: schedule preventive maintenance if error trend increases for 2 days.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
