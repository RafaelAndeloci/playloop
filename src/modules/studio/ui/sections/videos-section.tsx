"use client";

import { DEFAULT_LIMIT } from "@/constants";
import { trpc } from "@/trpc/client";

interface VideosSectionProps {}
export function VideosSection({}: VideosSectionProps) {
  const [data] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    {
      limit: DEFAULT_LIMIT
    },
    { getNextPageParam: (lastPage) => lastPage.nextCursor }
  );

  return <div>{JSON.stringify(data, null, 2)}</div>;
}
