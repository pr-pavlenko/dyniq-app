import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";
import { LayoutDashboard, Bot, Settings2, Activity, Gem, RadioTower } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import UpdateImg from "@/assets/update1.svg";
import { getCurrentUser } from "@/lib/auth";

const SIDEBAR_WIDTH_ICON = "6rem"

const menuItems = [
  { title: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { title: "Devices", path: "/content-tools", icon: RadioTower },
  { title: "AI Assistant", path: "/chatbot", icon: Bot },
  { title: "Analytics", path: "/analytics", icon: Activity },
  { title: "Settings", path: "/settings", icon: Settings2 },
];

const LeftSidebar = () => {
  const location = useLocation()
  const { setOpenMobile, isMobile } = useSidebar()
  const user = getCurrentUser()

  const handleMenuClick = () => {
    if (isMobile) setOpenMobile(false)
  }

  return (
    <Sidebar collapsible="icon" style={{ "--sidebar-width": SIDEBAR_WIDTH_ICON } as React.CSSProperties}>
      <SidebarHeader>
        <div className="hidden xl:flex items-center gap-2 px-2 py-3">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/20 text-lg font-bold text-white">D</div>
        </div>
        <div className="xl:hidden flex items-center justify-center gap-2 px-2 py-3">
          <div className="text-xl font-bold text-white">Dyniq</div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title} isActive={location.pathname === item.path}>
                    <Link to={item.path} onClick={handleMenuClick}>
                      <item.icon />
                      <span className="xl:hidden">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="hidden xl:block px-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="size-10 rounded-full hover:bg-sidebar-accent">
                <div className="flex items-center justify-center size-10 rounded-full bg-sidebar-foreground">
                  <Gem className="size-5 text-white" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="end" className="w-72">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">{user?.name ?? "Dyniq Operator"}</p>
                  <p className="text-xs text-muted-foreground">{user?.email ?? "demo@dyniq.ai"}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="p-3">
                <div className="bg-linear-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-lg p-4 text-center">
                  <img src={UpdateImg} alt="Dyniq MVP" className="h-24 mx-auto mb-3 animate-float block" />
                  <h5 className="font-semibold text-sm mb-1">Dyniq MVP</h5>
                  <p className="text-xs text-muted-foreground mb-3">Prototype dashboard for pilots and device telemetry.</p>
                  <Button className="w-full bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0" size="sm" asChild>
                    <Link to="/settings">Open Settings</Link>
                  </Button>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="xl:hidden px-3 pb-3">
          <Card className="p-4 text-center">
            <img src={UpdateImg} alt="Dyniq MVP" className="h-20 mx-auto mb-3 animate-float block" />
            <div>
              <h5 className="font-semibold text-sm mb-1">Dyniq MVP</h5>
              <p className="text-xs text-muted-foreground mb-3">Prototype dashboard for pilots and device telemetry.</p>
            </div>
            <Button className="w-full bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0" size="sm" asChild>
              <Link to="/settings" onClick={handleMenuClick}>Open Settings</Link>
            </Button>
          </Card>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

export default LeftSidebar;
