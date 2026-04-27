import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { XAxis, YAxis, Bar, BarChart, Line, LineChart, Area, AreaChart, CartesianGrid } from "recharts";
import { DollarSign, TrendingUp, Download, Calendar, Activity, CreditCard, Server, AlertCircle, CheckCircle2, ArrowUpRight, Cpu } from "lucide-react";

// Revenue Trend Data
const revenueData = [
  { month: "Jan", revenue: 45000, expenses: 28000, profit: 17000 },
  { month: "Feb", revenue: 52000, expenses: 30000, profit: 22000 },
  { month: "Mar", revenue: 61000, expenses: 32000, profit: 29000 },
  { month: "Apr", revenue: 58000, expenses: 31000, profit: 27000 },
  { month: "May", revenue: 72000, expenses: 35000, profit: 37000 },
  { month: "Jun", revenue: 85000, expenses: 38000, profit: 47000 },
  { month: "Jul", revenue: 98000, expenses: 42000, profit: 56000 },
]

// API Usage Data
const apiUsageData = [
  { day: "Mon", requests: 12500, errors: 45, latency: 120 },
  { day: "Tue", requests: 15800, errors: 32, latency: 115 },
  { day: "Wed", requests: 18200, errors: 28, latency: 108 },
  { day: "Thu", requests: 16900, errors: 38, latency: 125 },
  { day: "Fri", requests: 21500, errors: 42, latency: 118 },
  { day: "Sat", requests: 14200, errors: 25, latency: 95 },
  { day: "Sun", requests: 11800, errors: 18, latency: 88 },
]

// System Performance
const systemPerformance = [
  { time: "00:00", cpu: 45, memory: 62, disk: 38 },
  { time: "04:00", cpu: 32, memory: 58, disk: 40 },
  { time: "08:00", cpu: 68, memory: 72, disk: 45 },
  { time: "12:00", cpu: 85, memory: 78, disk: 52 },
  { time: "16:00", cpu: 92, memory: 85, disk: 58 },
  { time: "20:00", cpu: 78, memory: 75, disk: 48 },
]

// Subscription Metrics
const subscriptionMetrics = [
  { month: "Jan", new: 245, churned: 82, net: 163 },
  { month: "Feb", new: 320, churned: 95, net: 225 },
  { month: "Mar", new: 410, churned: 78, net: 332 },
  { month: "Apr", new: 385, churned: 102, net: 283 },
  { month: "May", new: 520, churned: 88, net: 432 },
  { month: "Jun", new: 680, churned: 115, net: 565 },
]

// Top Features Usage
const featureUsage = [
  { feature: "Text Generation", usage: 8500, growth: 24 },
  { feature: "Image Creation", usage: 6200, growth: 18 },
  { feature: "Code Assistant", usage: 5800, growth: 32 },
  { feature: "Voice Synthesis", usage: 4100, growth: 15 },
  { feature: "Translation", usage: 3200, growth: 12 },
]

// Key Metrics
const keyMetrics = [
  {
    title: "Monthly Revenue",
    value: "$98,000",
    change: "+15.3%",
    trend: "up",
    icon: DollarSign,
    subtext: "$56K profit margin",
    color: "green-500"
  },
  {
    title: "API Requests",
    value: "2.4M",
    change: "+28.7%",
    trend: "up",
    icon: Activity,
    subtext: "110K requests/day",
    color: "blue-500"
  },
  {
    title: "Active Subscriptions",
    value: "4,820",
    change: "+12.4%",
    trend: "up",
    icon: CreditCard,
    subtext: "565 new this month",
    color: "purple-500"
  },
  {
    title: "System Uptime",
    value: "99.97%",
    change: "+0.02%",
    trend: "up",
    icon: Server,
    subtext: "2.5 hours downtime",
    color: "emerald-500"
  },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--chart-2)",
  },
  profit: {
    label: "Profit",
    color: "var(--chart-3)",
  },
  requests: {
    label: "Requests",
    color: "var(--chart-1)",
  },
  cpu: {
    label: "CPU",
    color: "var(--chart-1)",
  },
  memory: {
    label: "Memory",
    color: "var(--chart-2)",
  },
  new: {
    label: "New",
    color: "var(--chart-1)",
  },
  churned: {
    label: "Churned",
    color: "var(--chart-2)",
  },
}
const colorConfig = {
  "green-500": {
    bg: "bg-gradient-to-br from-green-500/20 to-green-500/5",
    border: "border-green-500/30",
    text: "text-green-500",
  },
  "blue-500": {
    bg: "bg-gradient-to-br from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/30",
    text: "text-blue-500",
  },
  "purple-500": {
    bg: "bg-gradient-to-br from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/30",
    text: "text-purple-500",
  },
  "emerald-500": {
    bg: "bg-gradient-to-br from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/30",
    text: "text-emerald-500",
  },
}
const Analytics = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Analytics Dashboard</h1>
          <p className="text-sm sm:text-base text-white/50 mt-1">Real-time business intelligence and performance metrics</p>
        </div>
        <div className="flex gap-2">
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

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => {
          const colors = colorConfig[metric.color as keyof typeof colorConfig];
          return (
            <Card key={index} className="relative overflow-hidden hover:border-primary/50 transition-all duration-300 backdrop-blur-sm group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-white/50 uppercase tracking-wider">{metric.title}</p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">{metric.value}</p>
                  </div>
                  <div className={`p-2 sm:p-3 rounded-xl ${colors.bg} ${colors.border} border group-hover:scale-110 transition-transform`}>
                    <metric.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${colors.text}`} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white/50">{metric.subtext}</p>
                  <div className={`flex items-center gap-1 ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    <ArrowUpRight className="h-3 w-3" />
                    <span className="text-sm font-semibold">{metric.change}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Revenue Trend */}
      <Card className="">
        <CardHeader>
          <div className="flex flex-wrap gap-2 items-center justify-between">
            <div>
              <CardTitle className="text-white">Revenue & Profit Analysis</CardTitle>
              <p className="text-sm text-white/50 mt-1">Monthly financial performance overview</p>
            </div>
            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-chart-1 shadow-[0_0_8px_rgba(139,92,246,0.6)]"></div>
                <span className="text-white/50">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-chart-2 shadow-[0_0_8px_rgba(236,72,153,0.6)]"></div>
                <span className="text-white/50">Expenses</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-chart-3 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                <span className="text-white/50">Profit</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="p-4 rounded-xl bg-linear-to-br from-primary/10 to-transparent border border-primary/10 shadow-inner">
            <ChartContainer config={chartConfig} className="h-[350px] w-full">
              <AreaChart data={revenueData} margin={{ left: 0, right: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--chart-3)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="var(--chart-3)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} width={60} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area type="monotone" dataKey="revenue" stroke="var(--chart-1)" strokeWidth={3} fill="url(#colorRevenue)" dot={{ fill: "var(--chart-1)", r: 5, strokeWidth: 2, stroke: "#1e293b" }} />
                <Area type="monotone" dataKey="expenses" stroke="var(--chart-2)" strokeWidth={3} fill="url(#colorExpenses)" dot={{ fill: "var(--chart-2)", r: 5, strokeWidth: 2, stroke: "#1e293b" }} />
                <Area type="monotone" dataKey="profit" stroke="var(--chart-3)" strokeWidth={3} fill="url(#colorProfit)" dot={{ fill: "var(--chart-3)", r: 5, strokeWidth: 2, stroke: "#1e293b" }} />
              </AreaChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      {/* API Usage & System Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* API Usage */}
        <Card >
          <CardHeader>
            <CardTitle className="text-white">API Request Analytics</CardTitle>
            <p className="text-sm text-white/50 mt-1">Weekly API usage and error tracking</p>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-xl bg-linear-to-br from-blue-500/10 to-transparent border border-blue-500/10 shadow-inner">
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <BarChart data={apiUsageData} margin={{ left: 0, right: 0 }}>
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={1} />
                      <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0.6} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                  <XAxis dataKey="day" stroke="#64748b" fontSize="var(--chart-bottom-font-size)" tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="requests" fill="url(#barGradient)" radius={[12, 12, 12, 12]} />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* System Performance */}
        <Card className="">
          <CardHeader>
            <CardTitle className="text-white">System Resource Usage</CardTitle>
            <p className="text-sm text-white/50 mt-1">Real-time infrastructure monitoring</p>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-xl bg-linear-to-br from-pink-500/10 to-transparent border border-pink-500/10 shadow-inner">
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <LineChart data={systemPerformance} margin={{ left: 0, right: 0 }}>
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                  <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} width={40} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="cpu" stroke="var(--chart-1)" strokeWidth={3} dot={{ fill: "var(--chart-1)", r: 5, strokeWidth: 2, stroke: "#1e293b" }} activeDot={{ r: 7, strokeWidth: 2 }} />
                  <Line type="monotone" dataKey="memory" stroke="var(--chart-2)" strokeWidth={3} dot={{ fill: "var(--chart-2)", r: 5, strokeWidth: 2, stroke: "#1e293b" }} activeDot={{ r: 7, strokeWidth: 2 }} />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subscription Metrics & Feature Usage */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        {/* Subscription Metrics */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-white">Subscription Growth Metrics</CardTitle>
            <p className="text-sm text-white/50 mt-1">New subscriptions vs churn rate analysis</p>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-xl bg-linear-to-br from-green-500/10 to-transparent border border-green-500/10 shadow-inner">
              <ChartContainer config={chartConfig} className="h-[280px] w-full">
                <BarChart data={subscriptionMetrics} margin={{ left: 0, right: 0 }} barGap={8}>
                  <defs>
                    <linearGradient id="newGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={1} />
                      <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0.5} />
                    </linearGradient>
                    <linearGradient id="churnGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--chart-2)" stopOpacity={1} />
                      <stop offset="100%" stopColor="var(--chart-2)" stopOpacity={0.5} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                  <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" hide />
                  <ChartTooltip content={<ChartTooltipContent hideIndicator />} />
                  <Bar dataKey="new" fill="url(#newGradient)" radius={[10, 10, 10, 10]} />
                  <Bar dataKey="churned" fill="url(#churnGradient)" radius={[10, 10, 10, 10]} />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Features */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-white">Top Features</CardTitle>
            <p className="text-sm text-white/50 mt-1">Most used platform features</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-7">
              {featureUsage.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-200 font-medium">{feature.feature}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-white/50">{feature.usage.toLocaleString()}</span>
                      <div className="flex items-center gap-1 text-green-500">
                        <TrendingUp className="h-3 w-3" />
                        <span className="text-xs font-semibold">{feature.growth}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2 border border-primary/20 shadow-inner">
                    <div className="bg-linear-to-r from-primary via-primary to-sidebar-primary-foreground h-2 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                      style={{ width: `${(feature.usage / 8500) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Health Status */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-green-500/20 bg-green-500/5">
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                  <p className="text-xs sm:text-sm font-medium text-slate-300">System Status</p>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">Operational</p>
                <p className="text-sm text-white/50 mt-1">All systems running smoothly</p>
              </div>
              <div className="p-2 sm:p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <Server className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-500/20 bg-blue-500/5">
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                  <p className="text-xs sm:text-sm font-medium text-slate-300">API Health</p>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">Excellent</p>
                <p className="text-sm text-white/50 mt-1">99.97% uptime this month</p>
              </div>
              <div className="p-2 sm:p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-yellow-500/20 bg-yellow-500/5 sm:col-span-2 lg:col-span-1">
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                  <p className="text-xs sm:text-sm font-medium text-slate-300">Active Alerts</p>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">2 Minor</p>
                <p className="text-sm text-white/50 mt-1">High memory usage detected</p>
              </div>
              <div className="p-2 sm:p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Analytics;
