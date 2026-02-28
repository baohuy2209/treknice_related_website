// providers/SessionProvider.tsx
"use client";

import { User } from "@/lib/generated/prisma/client";
import { createContext, useContext } from "react";

const SessionContext = createContext<Omit<User, "passwordHash"> | null>(null);

export function SessionProvider({
  user,
  children,
}: {
  user: Omit<User, "passwordHash"> | null;
  children: React.ReactNode;
}) {
  return (
    <SessionContext.Provider value={user}>{children}</SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  // if (!context) {
  //     throw new Error("useSession must be used inside SessionProvider");
  // }
  return context;
}
