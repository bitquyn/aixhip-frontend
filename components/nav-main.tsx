"use client"

import { LucideIcon } from "lucide-react"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar"

interface NavMainProps {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}

export function NavMain({ items }: NavMainProps) {
  return (
    <div className="flex flex-col gap-4">
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild data-active={item.isActive}>
              <a href={item.url}>
                <item.icon className="size-4" />
                {item.title}
              </a>
            </SidebarMenuButton>
            {item.items?.length ? (
              <SidebarMenu>
                {item.items.map((subItem) => (
                  <SidebarMenuItem key={subItem.title}>
                    <SidebarMenuButton asChild>
                      <a href={subItem.url}>{subItem.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            ) : null}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </div>
  )
}
