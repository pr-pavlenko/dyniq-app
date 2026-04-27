import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Search, Bell, User, Settings, LogOut, HelpCircle, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "@/lib/auth";

const Header = () => {
  const navigate = useNavigate()
  const user = getCurrentUser()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 bg-linear-to-r from-primary to-sidebar-primary backdrop-blur mx-5 md:mx-10 rounded-b-2xl px-4 md:px-6">
      <div className="flex items-center gap-4 flex-1">
        <SidebarTrigger />
        <div className="relative w-full max-w-md hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input type="search" placeholder="Search devices, sites, alerts..." className="pl-9 h-9" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Search className="size-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative group">
              <Bell className="size-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <span className="absolute top-1.5 right-1.5 size-2 bg-destructive rounded-full animate-pulse" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Dyniq alerts</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[300px] overflow-y-auto">
              <DropdownMenuItem><div className="flex flex-col gap-1"><p className="text-sm font-medium">Prototype #001 completed cleaning</p><p className="text-xs text-muted-foreground">12 minutes ago</p></div></DropdownMenuItem>
              <DropdownMenuItem><div className="flex flex-col gap-1"><p className="text-sm font-medium">AI scan generated a recommendation</p><p className="text-xs text-muted-foreground">44 minutes ago</p></div></DropdownMenuItem>
              <DropdownMenuItem><div className="flex flex-col gap-1"><p className="text-sm font-medium">Maintenance window scheduled</p><p className="text-xs text-muted-foreground">3 hours ago</p></div></DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full group">
              <div className="flex items-center justify-center size-8 rounded-full bg-sidebar-accent border border-sidebar-accent transition-all duration-300 group-hover:shadow-lg">
                <UserCircle className="size-5 text-white transition-transform duration-300" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">{user?.name ?? "Dyniq Operator"}</p>
                <p className="text-xs text-muted-foreground">{user?.email ?? "demo@dyniq.ai"}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><User /> Profile</DropdownMenuItem>
            <DropdownMenuItem><Settings /> Settings</DropdownMenuItem>
            <DropdownMenuItem><HelpCircle /> Help & Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive" onClick={handleLogout}>
              <LogOut className="text-destructive" /> Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Header;
