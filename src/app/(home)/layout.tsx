import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return <HomeLayout>{children}</HomeLayout>;
}
