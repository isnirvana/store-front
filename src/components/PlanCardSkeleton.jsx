function PlanCardSkeleton() {
  return (
    <div className="relative overflow-hidden flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
      {/* Shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-linear-to-r from-transparent via-white/40 dark:via-white/10 to-transparent" />

      {/* Icon skeleton */}
      <div className="size-14 rounded-full bg-gray-200 dark:bg-gray-700 shrink-0" />

      {/* Content */}
      <div className="flex-1 space-y-3">
        {/* Top row */}
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <div className="h-5 w-16 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-3 w-24 rounded bg-gray-200 dark:bg-gray-700" />
          </div>

          <div className="h-5 w-14 rounded bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          <div className="h-3 w-28 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-8 w-20 rounded-lg bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  );
}

export default PlanCardSkeleton;
