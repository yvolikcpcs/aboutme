export const Skeleton = ({ className }: { className?: string }) => (
  <div className={`bg-gray-200 animate-pulse rounded-md ${className}`} />
);

export const Skeleton = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-12">
      {/* Header Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
        <div className="flex gap-4 mt-6">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-24" />
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Skills Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-8 w-40" />
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Skeleton key={i} className="h-8 w-24 rounded-full" />
          ))}
        </div>
      </div>

      {/* Experience Skeleton */}
      <div className="space-y-8">
        <Skeleton className="h-8 w-48" />
        {[1, 2].map((i) => (
          <div key={i} className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2 w-full">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-5 w-1/4" />
              </div>
              <Skeleton className="h-5 w-32" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};