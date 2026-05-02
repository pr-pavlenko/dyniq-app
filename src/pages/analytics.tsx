import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { XAxis, YAxis, Bar, BarChart, Line, LineChart, CartesianGrid } from "recharts";
import { Calendar, Download, ArrowUpRight, AlertCircle, CheckCircle2 } from "lucide-react";

const fleetOverview = [
  { day: "Mon", runtimeHours: 68 },
  { day: "Tue", runtimeHours: 72 },
  { day: "Wed", runtimeHours: 75 },
  { day: "Thu", runtimeHours: 70 },
  { day: "Fri", runtimeHours: 78 },
  { day: "Sat", runtimeHours: 62 },
  { day: "Sun", runtimeHours: 59 },
];

const deviceProfiles = {
  "Device #01": {
    location: "Warehouse A",
    uptime: "99.2%",
    uptimeChange: "+0.6%",
    avgCycleTime: "27 min",
    avgCycleTimeChange: "-4%",
    areaCleaned: "1,320 m²",
    areaChange: "+9%",
    alerts: "1",
    alertsChange: "-2",
    batteryPercent: 78,
    downtime: "0.4 h/day",
    restarts: "2 this week",
    bladeLifePercent: 64,
    bladeForecast: "~3 weeks (21 days)",
    engine: { current: "7.8 A", rpm: "1,420", temp: "61°C", vibration: "1.2 mm/s" },
    insight: "Device #01 runs stable. CC blade wear is normal and should last around 3 weeks.",
    activity: [
      { day: "Mon", runtimeHours: 23, uptime: 98.9 },
      { day: "Tue", runtimeHours: 24, uptime: 99.0 },
      { day: "Wed", runtimeHours: 23.5, uptime: 99.1 },
      { day: "Thu", runtimeHours: 24, uptime: 99.2 },
      { day: "Fri", runtimeHours: 24, uptime: 99.4 },
      { day: "Sat", runtimeHours: 22, uptime: 99.3 },
      { day: "Sun", runtimeHours: 21.5, uptime: 99.1 },
    ],
    parts: [
      { label: "Blade", status: "Attention", color: "bg-yellow-500", top: "46%", left: "53%" },
      { label: "Motor", status: "OK", color: "bg-green-500", top: "30%", left: "70%" },
      { label: "Belt Contact", status: "OK", color: "bg-green-500", top: "55%", left: "35%" },
    ],
  },
  "Device #02": {
    location: "Office Campus",
    uptime: "98.6%",
    uptimeChange: "-0.3%",
    avgCycleTime: "33 min",
    avgCycleTimeChange: "+7%",
    areaCleaned: "940 m²",
    areaChange: "-8%",
    alerts: "3",
    alertsChange: "+1",
    batteryPercent: 62,
    downtime: "0.8 h/day",
    restarts: "4 this week",
    bladeLifePercent: 38,
    bladeForecast: "~10 days",
    engine: { current: "9.4 A", rpm: "1,355", temp: "73°C", vibration: "2.6 mm/s" },
    insight: "Device #02 shows blade degradation and higher motor vibration. Plan blade replacement in ~10 days.",
    activity: [
      { day: "Mon", runtimeHours: 20, uptime: 98.7 },
      { day: "Tue", runtimeHours: 21, uptime: 98.9 },
      { day: "Wed", runtimeHours: 21.5, uptime: 98.4 },
      { day: "Thu", runtimeHours: 21, uptime: 98.5 },
      { day: "Fri", runtimeHours: 22, uptime: 98.6 },
      { day: "Sat", runtimeHours: 19, uptime: 98.3 },
      { day: "Sun", runtimeHours: 18, uptime: 98.2 },
    ],
    parts: [
      { label: "Blade", status: "Problem", color: "bg-red-500", top: "46%", left: "53%" },
      { label: "Motor", status: "Attention", color: "bg-yellow-500", top: "30%", left: "70%" },
      { label: "Belt Contact", status: "Attention", color: "bg-yellow-500", top: "55%", left: "35%" },
    ],
  },
  "Device #03": {
    location: "Retail Mall",
    uptime: "99.7%",
    uptimeChange: "+0.9%",
    avgCycleTime: "24 min",
    avgCycleTimeChange: "-6%",
    areaCleaned: "1,510 m²",
    areaChange: "+13%",
    alerts: "0",
    alertsChange: "-1",
    batteryPercent: 84,
    downtime: "0.2 h/day",
    restarts: "1 this week",
    bladeLifePercent: 82,
    bladeForecast: "~5 weeks (35 days)",
    engine: { current: "7.1 A", rpm: "1,460", temp: "57°C", vibration: "0.9 mm/s" },
    insight: "Device #03 is top performer. Blade and motor are in excellent health for the next month.",
    activity: [
      { day: "Mon", runtimeHours: 24, uptime: 99.4 },
      { day: "Tue", runtimeHours: 24, uptime: 99.5 },
      { day: "Wed", runtimeHours: 24, uptime: 99.6 },
      { day: "Thu", runtimeHours: 24, uptime: 99.8 },
      { day: "Fri", runtimeHours: 24, uptime: 99.7 },
      { day: "Sat", runtimeHours: 23, uptime: 99.7 },
      { day: "Sun", runtimeHours: 22, uptime: 99.6 },
    ],
    parts: [
      { label: "Blade", status: "OK", color: "bg-green-500", top: "46%", left: "53%" },
      { label: "Motor", status: "OK", color: "bg-green-500", top: "30%", left: "70%" },
      { label: "Belt Contact", status: "OK", color: "bg-green-500", top: "55%", left: "35%" },
    ],
  },
};

const chartConfig = {
  runtimeHours: { label: "Runtime Hours", color: "var(--chart-1)" },
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
          <p className="text-sm sm:text-base text-white/50 mt-1">Conveyor cleaner health, reliability, and predictive maintenance</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="min-w-[190px]">
            <select value={selectedDevice} onChange={(event) => setSelectedDevice(event.target.value as keyof typeof deviceProfiles)} className="w-full h-10 rounded-md border border-primary/50 bg-slate-950 px-3 text-sm text-slate-200" aria-label="Select device">
              {Object.keys(deviceProfiles).map((deviceName) => <option key={deviceName} value={deviceName}>{deviceName}</option>)}
            </select>
          </div>
          <Button variant="outline" className="border-primary/50 text-slate-200 hover:bg-primary/10 hover:border-primary"><Calendar className="h-4 w-4 " /><span className="hidden sm:inline">Last 7 days</span></Button>
          <Button className="bg-linear-to-r from-primary to-sidebar-primary hover:from-sidebar-primary hover:to-primary text-white border-0"><Download className="h-4 w-4 " /><span className="hidden sm:inline">Export Data</span></Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <Card><CardHeader><p className="text-xs text-white/50 uppercase">Total devices</p><p className="text-3xl font-bold text-white">3</p></CardHeader><CardContent><p className="text-sm text-white/50">Selected: {selectedDevice} · {activeDevice.location}</p></CardContent></Card>
        <Card><CardHeader><p className="text-xs text-white/50 uppercase">Uptime</p><p className="text-3xl font-bold text-white">{activeDevice.uptime}</p></CardHeader><CardContent><p className="text-sm text-green-500">{activeDevice.uptimeChange} vs last week</p></CardContent></Card>
        <Card><CardHeader><p className="text-xs text-white/50 uppercase">Average work cycle time</p><p className="text-3xl font-bold text-white">{activeDevice.avgCycleTime}</p></CardHeader><CardContent><p className="text-sm text-green-500">{activeDevice.avgCycleTimeChange} vs last week</p></CardContent></Card>
        <Card><CardHeader><p className="text-xs text-white/50 uppercase">Area cleaned</p><p className="text-3xl font-bold text-white">{activeDevice.areaCleaned}</p></CardHeader><CardContent><p className="text-sm text-green-500">{activeDevice.areaChange} vs last week</p></CardContent></Card>
        <Card><CardHeader><p className="text-xs text-white/50 uppercase">AI alerts</p><p className="text-3xl font-bold text-white">{activeDevice.alerts}</p></CardHeader><CardContent><p className="text-sm text-yellow-500">{activeDevice.alertsChange} vs last week</p></CardContent></Card>
        <Card><CardHeader><p className="text-xs text-white/50 uppercase">CC blade life</p><p className="text-3xl font-bold text-white">{activeDevice.bladeLifePercent}%</p></CardHeader><CardContent><p className="text-sm text-white/50">Estimated replacement in {activeDevice.bladeForecast}</p></CardContent></Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle className="text-white">Activity over time</CardTitle><p className="text-sm text-white/50 mt-1">Daily runtime trend for {selectedDevice}</p></CardHeader>
          <CardContent>
            <div className="p-4 rounded-xl bg-linear-to-br from-primary/10 to-transparent border border-primary/10 shadow-inner">
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <LineChart data={activeDevice.activity} margin={{ left: 0, right: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                  <XAxis dataKey="day" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} width={50} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="runtimeHours" stroke="var(--chart-1)" strokeWidth={3} dot={{ fill: "var(--chart-1)", r: 5, strokeWidth: 2, stroke: "#1e293b" }} />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-white">Power and wear status</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm text-slate-200 mb-1"><span>Battery</span><span>{activeDevice.batteryPercent}%</span></div>
              <div className="h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-linear-to-r from-emerald-500 to-green-400" style={{ width: `${activeDevice.batteryPercent}%` }} /></div>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm text-slate-200 mb-1"><span>CC Blade Life</span><span>{activeDevice.bladeLifePercent}%</span></div>
              <div className="h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-linear-to-r from-yellow-500 to-orange-500" style={{ width: `${activeDevice.bladeLifePercent}%` }} /></div>
            </div>
            <p className="text-sm text-white/50">Downtime: {activeDevice.downtime} · Restarts: {activeDevice.restarts}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-white">Cleaner visual status map</CardTitle><p className="text-sm text-white/50 mt-1">Hotspots: OK / Attention / Problem</p></CardHeader>
          <CardContent>
            <div className="relative rounded-xl border border-primary/20 bg-slate-950/40 p-3 overflow-hidden">
              <img src="/MES-cleaner.png" alt="Conveyor cleaner" className="w-full max-h-[260px] object-contain" />
              {activeDevice.parts.map((part) => (
                <div key={part.label} className="absolute" style={{ top: part.top, left: part.left }}>
                  <div className={`h-3 w-3 rounded-full ring-2 ring-white ${part.color}`} />
                  <p className="text-[10px] mt-1 text-white bg-black/60 px-1 rounded">{part.label}: {part.status}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-white">Conveyor electric engine stats</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between text-slate-200"><span>Current draw</span><span>{activeDevice.engine.current}</span></div>
            <div className="flex items-center justify-between text-slate-200"><span>Motor RPM</span><span>{activeDevice.engine.rpm}</span></div>
            <div className="flex items-center justify-between text-slate-200"><span>Motor temperature</span><span>{activeDevice.engine.temp}</span></div>
            <div className="flex items-center justify-between text-slate-200"><span>Vibration</span><span>{activeDevice.engine.vibration}</span></div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-white">Fleet runtime overview</CardTitle><p className="text-sm text-white/50 mt-1">Daily runtime for all devices</p></CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[280px] w-full">
              <BarChart data={fleetOverview} margin={{ left: 0, right: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                <XAxis dataKey="day" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis hide />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="runtimeHours" fill="var(--chart-1)" radius={[10, 10, 10, 10]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="border-yellow-500/20 bg-yellow-500/5">
          <CardHeader><CardTitle className="text-white">AI insight</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3"><AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" /><p className="text-slate-200">{activeDevice.insight}</p></div>
            <div className="flex items-start gap-3"><ArrowUpRight className="h-5 w-5 text-yellow-500 mt-0.5" /><p className="text-slate-200">Forecast: CC blade should be replaced in {activeDevice.bladeForecast} based on wear trend.</p></div>
            <div className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" /><p className="text-slate-200">Recommendation: prepare spare blade kit and schedule maintenance window before forecasted end-of-life.</p></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
