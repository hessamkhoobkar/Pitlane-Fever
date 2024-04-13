import { Skeleton } from "@/components/ui/skeleton";

export default function StandingItemSkeleton({ index }: { index: number }) {
  return (
    <div
      className={`relative flex w-full items-center gap-4 bg-platform p-4 ps-2 ${index === 0 ? "h-24 rounded-t-2xl" : "h-16"}`}
    >
      <div className={index === 0 ? "h-16 w-32" : "h-16 w-16"}>
        <img
          className={`animate-pulse ${index === 0 ? "absolute bottom-0 left-0 h-32 w-32" : "h-16 w-16"}`}
          src="./imgs/drivers/loading.png"
          alt="loading driver image"
        />
      </div>

      <div className="flex grow flex-col gap-2">
        <Skeleton className="h-5 w-32 rounded-full" />
        <Skeleton className="h-3 w-16 rounded-full" />
      </div>

      <div className="flex grow flex-col items-end gap-2">
        <Skeleton className="h-5 w-24 rounded-full" />
        <Skeleton className="h-3 w-16 rounded-full" />
      </div>
    </div>
  );
}
