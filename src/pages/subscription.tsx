import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Crown, Zap, Rocket, Star, Shield, Clock, Users, Sparkles, TrendingUp, CreditCard, Calendar, ArrowRight, Info } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "For evaluating the dashboard and chatbot UI",
    icon: Zap,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    features: [
      { text: "1,000 AI requests/month", included: true },
      { text: "Basic chatbot", included: true },
      { text: "Text generation", included: true },
      { text: "Email support", included: true },
      { text: "API access", included: false },
      { text: "Custom models", included: false },
      { text: "Priority support", included: false },
      { text: "Advanced analytics", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    description: "For professionals and growing teams",
    icon: Rocket,
    color: "from-primary/30 to-purple-500/30",
    borderColor: "border-primary/50",
    iconBg: "bg-primary/20",
    iconColor: "text-primary",
    features: [
      { text: "50,000 AI requests/month", included: true },
      { text: "Advanced chatbot", included: true },
      { text: "All content tools", included: true },
      { text: "Priority email support", included: true },
      { text: "Full API access", included: true },
      { text: "Custom integrations", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom models", included: false },
    ],
    cta: "Upgrade Now",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "For large teams and organizations",
    icon: Crown,
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
    features: [
      { text: "Unlimited AI requests", included: true },
      { text: "Custom AI models", included: true },
      { text: "White-label solution", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Custom integrations", included: true },
      { text: "Advanced security", included: true },
      { text: "SLA guarantee", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

const usageStats = [
  {
    label: "Current Plan",
    value: "Professional",
    icon: Star,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    label: "Requests Used",
    value: "32,450 / 50,000",
    icon: TrendingUp,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    label: "Next Billing",
    value: "Dec 18, 2025",
    icon: Calendar,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    label: "Total Spent",
    value: "$294",
    icon: CreditCard,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
]

const features = [
  {
    title: "Responsive UI",
    description: "Layout and components scale for common desktop and mobile breakpoints",
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Security section",
    description: "Placeholder copy for policies—wire to your auth, hosting, and compliance docs",
    icon: Shield,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Support block",
    description: "Template area for help links or contact options you configure",
    icon: Clock,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Team seats",
    description: "Illustrative plan limits—replace with your billing model",
    icon: Users,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
]

const Subscription = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Choose a Plan</h1>
        <p className="text-sm sm:text-base text-white/50 mt-1">Scale your AI capabilities with plans designed for every stage of your journey</p>
      </div>

      {/* Current Usage Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {usageStats.map((stat, index) => (
          <Card key={index} className="hover:border-primary/50 transition-all">
            <CardContent className="">
              <div className="flex items-center gap-3">
                <div className={`p-2 sm:p-3 rounded-xl ${stat.bg} border border-primary/20`}>
                  <stat.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-base sm:text-lg font-bold text-white mt-0.5">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-9 gap-6">
        {pricingPlans.map((plan, index) => (
          <Card key={index} className={`relative overflow-hidden hover:border-primary/50 transition-all duration-300 ${plan.popular ? "border-primary/50 shadow-lg shadow-primary/20 lg:scale-105" : "" }`}>
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-linear-to-r from-primary to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">MOST POPULAR</div>
            )}

            <CardHeader className="text-center space-y-4">
              <div className={`mx-auto p-4 rounded-2xl ${plan.iconBg} border ${plan.borderColor} w-fit`}>
                <plan.icon className={`h-8 w-8 ${plan.iconColor}`} />
              </div>

              <div>
                <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                <p className="text-sm text-white/50">{plan.description}</p>
              </div>

              <div className="flex items-end justify-center gap-1">
                <span className="text-4xl sm:text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-white/50 mb-2 text-sm sm:text-base">{plan.period}</span>
              </div>

              <Button
                className={`w-full ${plan.popular
                    ? "bg-linear-to-r from-primary to-purple-500 text-white hover:from-purple-500 hover:to-primary"
                    : ""
                  }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardHeader>

            <CardContent>
              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 p-1 rounded-full ${feature.included
                          ? "bg-primary/20 border border-primary/30"
                          : "bg-white/5 border border-white/10"
                        }`}
                    >
                      <Check className={`h-3 w-3 ${feature.included ? "text-primary" : "text-white/40"}`}/>
                    </div>
                    <span className={`text-sm ${feature.included ? "text-slate-200" : "text-white/50" }`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Grid */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">Why Choose Our Platform?</CardTitle>
          <p className="text-white/50 mt-2">Everything you need to power your AI applications</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/40 transition-all">
                <div className={`mx-auto w-fit p-4 rounded-xl ${feature.bg} border border-primary/20`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-white/50">{feature.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-white">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 mt-1">
                  <Info className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Can I change plans anytime?</h4>
                  <p className="text-sm text-white/50">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 mt-1">
                  <Info className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">What payment methods do you accept?</h4>
                  <p className="text-sm text-white/50">We accept all major credit cards, PayPal, and wire transfers for enterprise plans.</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 mt-1">
                  <Info className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Is there a free trial?</h4>
                  <p className="text-sm text-white/50">Our Starter plan is free forever. Professional and Enterprise plans offer 14-day trials.</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 mt-1">
                  <Info className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">What happens if I exceed my limit?</h4>
                  <p className="text-sm text-white/50">You'll be notified and can upgrade your plan or purchase additional requests as needed.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card className="bg-linear-to-r from-primary/10 to-purple-500/10 border-primary/30">
        <CardContent className="py-6 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to Get Started?</h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto px-4">
            Illustrative pricing UI—replace copy and limits with your product rules.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-linear-to-r from-primary to-purple-500 hover:from-purple-500 text-white hover:to-primary w-full sm:w-auto"><Sparkles className="h-5 w-5" /> Start trial</Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">Contact Sales</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Subscription;
