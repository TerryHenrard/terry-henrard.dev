"use client";

import { Card, CardContent } from "@/core/components/ui/card";
import Chat from "@/features/ai/components/chat";

export default function Home() {
  return (
    <main className="container mx-auto py-4 h-[calc(100vh-4rem)]">
      <div className="relative z-10 h-full">
        <Card className="h-full bg-transparent border-0 shadow-none">
          <CardContent className="h-full ">
            <Chat />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
