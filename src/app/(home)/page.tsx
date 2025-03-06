import { HydrateClient, trpc } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { PageClient } from "./client";

export default async function Home() {
  void trpc.hello.prefetch({ text: "Rafael" });

  return (
    <HydrateClient>
      <Suspense fallback={<div>loading...</div>}>
        <ErrorBoundary fallback={<p>Error</p>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
