"use client"

import * as React from "react"
import Image from "next/image"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  Search,
  BarChart2,
  Bell,
  Coins,
  MessageSquare
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar"

const data = {
  navMain: [
    {
      title: "Meta Search",
      url: "/meta-search",
      icon: Search,
    },
    {
      title: "Sentiment Tracking",
      url: "/sentiment-tracking",
      icon: BarChart2,
    },
    {
      title: "Smart Alert",
      url: "/smart-alert",
      icon: Bell,
    },
    {
      title: "Token Mindshare",
      url: "/token-mindshare",
      icon: Coins,
    },
    {
      title: "Narrative Mindshare",
      url: "/narrative-mindshare",
      icon: MessageSquare,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex size-8 items-center justify-center rounded-full">
                  <Image src="/logo.png" alt="logo" width="40" height="40"/>
           
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-bold">aixhip</span>
                  <span className="truncate text-xs font-mono">growllllllllll</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
