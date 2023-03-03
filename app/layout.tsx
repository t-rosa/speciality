import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import type { PropsWithChildren } from "react";

export const metadata = {
  title: "Speciality",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fr">
      <head />
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
