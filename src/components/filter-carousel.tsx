"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Skeleton } from "./ui/skeleton";

interface FilterCarouselProps {
  value?: string | null;
  isLoading?: boolean;
  onSelect: (value: string | null) => void;
  data: {
    value: string;
    label: string;
  }[];
}
export function FilterCarousel({
  data,
  isLoading,
  onSelect,
  value
}: FilterCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative w-full">
      {/* Left Fade */}

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 left-12 top-0 z-10 w-12 bg-gradient-to-r from-white to-transparent",
          current === 1 && "hidden"
        )}
      />
      <Carousel
        setApi={setApi}
        opts={{ align: "start", dragFree: true }}
        className="w-full px-12"
      >
        <CarouselContent className="-ml-3">
          {!isLoading ? (
            <>
              <CarouselItem
                onClick={() => onSelect(null)}
                className="basis-auto pl-3"
              >
                <Badge
                  variant={value === null ? "default" : "secondary"}
                  className="cursor-pointer whitespace-nowrap rounded-lg px-3 py-1 text-sm"
                >
                  All
                </Badge>
              </CarouselItem>
              {data.map((item) => {
                return (
                  <CarouselItem
                    onClick={() => onSelect(item.value)}
                    key={item.value}
                    className="basis-auto pl-3"
                  >
                    {/* NOTE: Maybe use the <Link /> Component wrapping the <Badge /> to make it prefetch and make it faster */}
                    <Badge
                      variant={value === item.value ? "default" : "secondary"}
                      className="cursor-pointer select-none whitespace-nowrap rounded-lg px-3 py-1 text-sm"
                    >
                      {item.label}
                    </Badge>
                  </CarouselItem>
                );
              })}
            </>
          ) : (
            Array.from({ length: 14 }).map((_, i) => {
              return (
                <CarouselItem key={i} className="basis-auto pl-3">
                  <Skeleton className="h-full w-[100px] rounded-lg px-3 py-1 text-sm font-semibold">
                    &nbsp;
                  </Skeleton>
                </CarouselItem>
              );
            })
          )}
        </CarouselContent>
        <CarouselPrevious className="left-0 z-20" />
        <CarouselNext className="right-0 z-20" />
      </Carousel>

      {/* Right Fade */}

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 right-12 top-0 z-10 w-12 bg-gradient-to-l from-white to-transparent",
          current === count && "hidden"
        )}
      />
    </div>
  );
}
