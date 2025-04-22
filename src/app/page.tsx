"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function Home() {
  const [rollResult, setRollResult] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    setTimeout(() => {
      const result = Math.floor(Math.random() * 6) + 1;
      setRollResult(result);
      setIsRolling(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-muted">
      <h1 className="text-2xl font-bold mb-4">Dice Roller</h1>
      <div className="relative w-48 h-48 rounded-lg bg-background shadow-md flex items-center justify-center">
        {isRolling ? (
          <Icons.spinner className="animate-spin h-16 w-16 text-foreground" />
        ) : (
          <span className="text-6xl font-bold text-foreground">{rollResult}</span>
        )}
      </div>
      <Button
        className="mt-8 bg-primary text-primary-foreground hover:bg-primary/80"
        onClick={rollDice}
        disabled={isRolling}
      >
        {isRolling ? "Rolling..." : "Roll Dice"}
      </Button>
    </div>
  );
}
