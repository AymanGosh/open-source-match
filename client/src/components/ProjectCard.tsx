import { ExternalLink, Star, GitFork, AlertCircle } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  url: string;
  language: string;
  framework?: string;
  level: string;
  stars: number;
  forks: number;
  lastUpdated: string;
  issuesCount: number;
  tags?: string[];
}

export function ProjectCard({
  name,
  description,
  url,
  language,
  framework,
  level,
  stars,
  forks,
  lastUpdated,
  issuesCount,
  tags,
}: ProjectCardProps) {
  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-green-500/20 text-green-700 dark:text-green-400';
      case 'intermediate':
        return 'bg-blue-500/20 text-blue-700 dark:text-blue-400';
      case 'advanced':
        return 'bg-purple-500/20 text-purple-700 dark:text-purple-400';
      default:
        return 'bg-gray-500/20 text-gray-700 dark:text-gray-400';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg font-semibold text-primary hover:underline group-hover:text-primary/90 transition-colors"
          >
            {name}
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
      </div>

      {/* Level Badge */}
      <div className="mb-4">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(level)}`}>
          {level}
        </span>
      </div>

      {/* Framework and Language */}
      <div className="flex flex-wrap gap-2 mb-4">
        {language && (
          <span className="px-2.5 py-1 bg-secondary/30 text-secondary-foreground text-xs rounded-md">
            {language}
          </span>
        )}
        {framework && (
          <span className="px-2.5 py-1 bg-accent/30 text-accent-foreground text-xs rounded-md">
            {framework}
          </span>
        )}
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground py-2 border-y border-border">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4" />
          <span>{stars}</span>
        </div>
        <div className="flex items-center gap-1">
          <GitFork className="w-4 h-4" />
          <span>{forks}</span>
        </div>
        <div className="flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          <span>{issuesCount} issues</span>
        </div>
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-1 bg-muted/50 text-foreground text-xs rounded">
              #{tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="px-2 py-1 bg-muted/50 text-foreground text-xs rounded">
              +{tags.length - 3} more
            </span>
          )}
        </div>
      )}

      {/* Last Updated */}
      <div className="mt-auto text-xs text-muted-foreground">
        Updated {lastUpdated}
      </div>

      {/* CTA Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-center text-sm font-medium"
      >
        View Repository
      </a>
    </div>
  );
}
