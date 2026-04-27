import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { XAxis, YAxis, Area, AreaChart, Bar, BarChart } from "recharts";
import { Activity, AlertTriangle, Bot, CheckCircle2, Droplets, Factory, Gauge, MapPin, RadioTower, Sparkles, Timer, Wind, Wrench } from "lucide-react";
import { getCurrentUser } from "@/lib/auth";

const deviceStats = [
  { title: "Active devices", value: "3", icon: RadioTower, subtext: "2 online, 1 standby" },
  { title: "Cleaning cycles", value: "128", icon: Droplets, subtext: "Last 30 days" },
  { title: "Avg. contamination", value: "18%", icon: Gauge, subtext: "Down 42% after cleaning" },
  { title: "AI confidence", value: "91%", icon: Bot, subtext: "Image + sensor analysis" },
]

const cleaningTrend = [
  { day: "Mon", before: 74, after: 29 },
  { day: "Tue", before: 68, after: 23 },
  { day: "Wed", before: 81, after: 31 },
  { day: "Thu", before: 63, after: 20 },
  { day: "Fri", before: 77, after: 24 },
  { day: "Sat", before: 59, after: 18 },
  { day: "Sun", before: 72, after: 26 },
]

const usageData = [
  { site: "Pilot A", cycles: 42 },
  { site: "Pilot B", cycles: 36 },
  { site: "Lab", cycles: 31 },
  { site: "Demo", cycles: 19 },
]

const devices = [
  { name: "Dyniq Prototype #001", site: "Pilot Facility A", status: "Online", lastRun: "12 min ago", waterSaved: "38 gal", issue: "No issues" },
  { name: "Dyniq Prototype #002", site: "Pilot Facility B", status: "Online", lastRun: "44 min ago", waterSaved: "27 gal", issue: "Filter check soon" },
  { name: "Dyniq Lab Unit", site: "Internal testing", status: "Standby", lastRun: "3 hr ago", waterSaved: "14 gal", issue: "No issues" },
]

const aiInsights = [
  "Surface residue pattern suggests another pass only on the left edge zone.",
  "Water pressure is stable. Recommended cleaning time can be reduced by 11%.",
  "Prototype #002 should be inspected after 8 more cycles for filter performance.",
]

const chartConfig = {
  before: { label: "Before cleaning", color: "var(--chart-1)" },
  after: { label: "After cleaning", color: "var(--chart-2)" },
  cycles: { label: "Cycles", color: "var(--chart-1)" },
}

const Dashboard = () => {
  const user = getCurrentUser()

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-primary font-medium">Dyniq MVP Dashboard</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Cleaning intelligence overview</h1>
          <p className="text-white/50 mt-1 text-sm sm:text-base">
            Вітаю, {user?.name}. Це тестовий кабінет для AI device monitoring, pilot sites і cleaning analytics.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-primary/50 text-slate-200 hover:bg-primary/10 hover:border-primary">
            <Timer className="h-4 w-4" /> Last 7 days
          </Button>
          <Button className="bg-linear-to-r from-primary to-sidebar-primary text-white border-0">
            <Sparkles className="h-4 w-4" /> Run AI scan
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {deviceStats.map((item) => (
          <Card key={item.title} className="relative overflow-hidden border-white/10 bg-card/80">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-white/50">{item.title}</p>
                  <h3 className="mt-2 text-3xl font-bold text-white">{item.value}</h3>
                  <p className="mt-1 text-xs text-white/40">{item.subtext}</p>
                </div>
                <div className="rounded-2xl bg-primary/15 p-3 text-primary">
                  <item.icon className="size-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-white/10 bg-card/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white"><Activity className="size-5 text-primary" /> Contamination reduction</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[320px] w-full">
              <AreaChart data={cleaningTrend} accessibilityLayer>
                <XAxis dataKey="day" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area dataKey="before" type="monotone" fill="var(--chart-1)" fillOpacity={0.2} stroke="var(--chart-1)" />
                <Area dataKey="after" type="monotone" fill="var(--chart-2)" fillOpacity={0.2} stroke="var(--chart-2)" />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-card/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white"><Factory className="size-5 text-primary" /> Pilot sites</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[320px] w-full">
              <BarChart data={usageData} accessibilityLayer>
                <XAxis dataKey="site" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="cycles" fill="var(--chart-1)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-white/10 bg-card/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white"><RadioTower className="size-5 text-primary" /> Devices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {devices.map((device) => (
              <div key={device.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white">{device.name}</h3>
                      <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs text-primary">{device.status}</span>
                    </div>
                    <p className="mt-1 flex items-center gap-1 text-sm text-white/50"><MapPin className="size-3" /> {device.site}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm sm:min-w-[360px]">
                    <div><p className="text-white/40">Last run</p><p className="text-white">{device.lastRun}</p></div>
                    <div><p className="text-white/40">Saved</p><p className="text-white">{device.waterSaved}</p></div>
                    <div><p className="text-white/40">Status</p><p className="text-white">{device.issue}</p></div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-card/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white"><Bot className="size-5 text-primary" /> AI recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {aiInsights.map((insight, index) => (
              <div key={insight} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="mt-0.5">
                  {index === 2 ? <AlertTriangle className="size-5 text-amber-400" /> : <CheckCircle2 className="size-5 text-primary" />}
                </div>
                <p className="text-sm text-white/70">{insight}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
              <div className="flex items-center gap-2 font-medium text-white"><Wind className="size-4 text-primary" /> Next MVP feature</div>
              <p className="mt-2 text-sm text-white/60">Add real device telemetry API: cycles, contamination score, water usage, photo analysis and maintenance alerts.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-white/10 bg-card/80">
        <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Wrench className="mt-1 size-5 text-primary" />
            <div>
              <h3 className="font-semibold text-white">MVP note</h3>
              <p className="text-sm text-white/50">Поки що всі дані mock. Авторизація працює локально через localStorage. Наступний крок — підключити api.dyniq.ai.</p>
            </div>
          </div>
          <Button variant="outline" className="border-primary/50 text-slate-200 hover:bg-primary/10 hover:border-primary">Open API plan</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard;
