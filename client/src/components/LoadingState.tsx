export function LoadingState() {
  return (
    <div className="space-y-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-xl p-6 animate-pulse"
        >
          <div className="space-y-4">
            <div className="h-6 bg-muted/50 rounded w-1/3"></div>
            <div className="h-4 bg-muted/50 rounded w-full"></div>
            <div className="h-4 bg-muted/50 rounded w-5/6"></div>
            <div className="flex gap-4 pt-4">
              <div className="h-8 bg-muted/50 rounded w-20"></div>
              <div className="h-8 bg-muted/50 rounded w-20"></div>
              <div className="h-8 bg-muted/50 rounded w-20"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
