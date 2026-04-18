import { Star, GitFork, Circle } from 'lucide-react';

const repositories = [
  {
    name: 'react-toolkit',
    owner: 'awesome-org',
    description: 'A collection of reusable React components and hooks for modern web applications',
    stars: 1243,
    forks: 187,
    language: 'TypeScript',
    languageColor: '#3178c6',
    goodFirstIssues: 8,
    tags: ['React', 'TypeScript', 'Components']
  },
  {
    name: 'python-data-parser',
    owner: 'data-tools',
    description: 'Fast and flexible data parsing library for CSV, JSON, and XML formats',
    stars: 892,
    forks: 134,
    language: 'Python',
    languageColor: '#3572A5',
    goodFirstIssues: 12,
    tags: ['Python', 'Data', 'Parser']
  },
  {
    name: 'express-api-boilerplate',
    owner: 'backend-starters',
    description: 'Production-ready Express.js API template with authentication and best practices',
    stars: 2156,
    forks: 421,
    language: 'JavaScript',
    languageColor: '#f1e05a',
    goodFirstIssues: 6,
    tags: ['Node.js', 'Express', 'API']
  }
];

export function ExampleRepos() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Matched to your skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse beginner-friendly repositories that match your technology preferences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all cursor-pointer group"
            >
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{repo.owner}</div>
                  <h3 className="text-lg group-hover:text-primary transition-colors">{repo.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{repo.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {repo.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{repo.forks}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Circle className="w-2 h-2" style={{ fill: repo.languageColor, color: repo.languageColor }} />
                      <span>{repo.language}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 text-green-600 text-sm px-3 py-2 rounded-lg">
                  {repo.goodFirstIssues} good first issues available
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}