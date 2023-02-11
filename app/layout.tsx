import type { PropsWithChildren } from "react";

import { Toaster } from "@/components/ui/toaster";

import "@/styles/globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
