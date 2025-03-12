"use client";

import { FilterCarousel } from "@/components/filter-carousel";
import { trpc } from "@/trpc/client";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface CategoriesSectionProps {
  categoryId?: string;
}

export function CategoriesSection({ categoryId }: CategoriesSectionProps) {
  return (
    <Suspense
      fallback={<FilterCarousel isLoading onSelect={() => {}} data={[]} />}
    >
      <ErrorBoundary fallback={<p>Error...</p>}>
        <CategoriesSectionSuspense
          categoryId={categoryId}
        ></CategoriesSectionSuspense>
      </ErrorBoundary>
    </Suspense>
  );
}

export function CategoriesSectionSuspense({
  categoryId
}: CategoriesSectionProps) {
  const router = useRouter();
  const [categories, _] = trpc.categories.getMany.useSuspenseQuery();

  const data = categories.map(({ name, id }) => ({
    value: id,
    label: name
  }));

  function onSelect(value: string | null) {
    //NOTE: Maybe use the <Link /> Component wrapping the <Badge /> to make it prefetch and make it faster
    const url = new URL(window.location.href);

    if (value) {
      url.searchParams.set("categoryId", value);
    } else {
      url.searchParams.delete("categoryId");
    }

    router.push(url.toString());
  }

  return (
    <FilterCarousel
      value={categoryId}
      data={data}
      isLoading={_.isLoading}
      onSelect={onSelect}
    />
  );
}
