import { UserRole } from "@/types/auth";
import {
  Building2,
  CreditCard,
  FileText,
  House,
  Layers,
  Users,
} from "lucide-react";

export const sidebarItems = {
  TENANT: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: House,
    },
    {
      title: "Browse Properties",
      href: "/properties",
      icon: Building2,
    },
    {
      title: "Rental Requests",
      href: "/dashboard/requests",
      icon: FileText,
    },
    {
      title: "Agreements",
      href: "/dashboard/agreements",
      icon: FileText,
    },
    {
      title: "Payments",
      href: "/dashboard/payments",
      icon: CreditCard,
    },
  ],

  LANDLORD: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: House,
    },
    {
      title: "My Properties",
      href: "/dashboard/properties",
      icon: Building2,
    },
    {
      title: "Rental Requests",
      href: "/dashboard/requests",
      icon: FileText,
    },
    {
      title: "Agreements",
      href: "/dashboard/agreements",
      icon: FileText,
    },
    {
      title: "Payments",
      href: "/dashboard/payments",
      icon: CreditCard,
    },
  ],

  ADMIN: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: House,
    },
    {
      title: "Users",
      href: "/dashboard/users",
      icon: Users,
    },
    {
      title: "Properties",
      href: "/dashboard/properties",
      icon: Building2,
    },
    {
      title: "Categories",
      href: "/dashboard/categories",
      icon: Layers,
    },
    {
      title: "Payments",
      href: "/dashboard/payments",
      icon: CreditCard,
    },
  ],
} satisfies Record<
  UserRole,
  {
    title: string;
    href: string;
    icon: React.ElementType;
  }[]
>;
