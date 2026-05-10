import { Search } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="bg-muted/30 p-6 rounded-2xl mb-6">
        <Search className="w-12 h-12 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold mb-2">No projects found</h3>
      <p className="text-muted-foreground text-center max-w-md mb-6">
        Try adjusting your filters or search query to find more beginner-friendly open-source projects.
      </p>
      <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
        Reset Filters
      </button>
    </div>
  );
}
