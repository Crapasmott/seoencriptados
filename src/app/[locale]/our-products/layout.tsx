"use client";

import { ReactNode } from "react";
import BannerOurSims from "./components/BannerOurProductsMobile";
import { useParams, usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  const { locale, productId } = useParams();

  const skipLayoutPaths = `/${locale}/our-products/${productId}`;


  if (
    skipLayoutPaths === pathname ||
    pathname.includes("/sim-more-info")
  ) {
    return children;
  }

  return (
    <div
      className="flex flex-col min-h-screen bg-[#EBF5FA]
  "
    >
      <BannerOurSims />
      <div className="">{children}</div>
    </div>
  );
}
