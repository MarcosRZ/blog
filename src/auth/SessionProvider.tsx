"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

type SupabaseContext = {
  session: Session | null;
};

const Context = createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const supabase = createClientComponentClient();
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {

      supabase.auth.getSession().then(({data: { session }}) => setSession(session))

      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  return (
    <Context.Provider value={{ session }}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useSessionSubscription = () => {
  let context = useContext(Context);

  if (context === undefined) {
    throw new Error("useSessionSubscription must be used inside SupabaseProvider");
  }

  return context;
};