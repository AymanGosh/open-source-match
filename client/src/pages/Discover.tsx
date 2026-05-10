import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FilterSection } from '../components/FilterSection';
import { ProjectCard } from '../components/ProjectCard';
import { EmptyState } from '../components/EmptyState';
import { LoadingState } from '../components/LoadingState';

// Mock data - replace with actual API calls
const mockProjects = [
  {
    id: '1',
    name: 'React Documentation',
    description: 'Official React documentation and tutorials for building user interfaces',
    url: 'https://github.com/facebook/react',
    language: 'JavaScript',
    framework: 'React',
    level: 'Beginner',
    stars: 205000,
    forks: 42000,
    lastUpdated: 'today',
    issuesCount: 234,
    tags: ['documentation', 'beginner-friendly', 'javascript'],
  },
  {
    id: '2',
    name: 'Vue.js',
    description: 'The Progressive JavaScript Framework for building user interfaces',
    url: 'https://github.com/vuejs/vue',
    language: 'TypeScript',
    framework: 'Vue',
    level: 'Beginner',
    stars: 207000,
    forks: 33000,
    lastUpdated: '2 days ago',
    issuesCount: 456,
    tags: ['framework', 'beginner-friendly', 'typescript'],
  },
  {
    id: '3',
    name: 'Next.js',
    description: 'The React Framework for Production. Build full-stack applications with ease',
    url: 'https://github.com/vercel/next.js',
    language: 'TypeScript',
    framework: 'Next.js',
    level: 'Intermediate',
    stars: 122000,
    forks: 25000,
    lastUpdated: 'today',
    issuesCount: 789,
    tags: ['framework', 'fullstack', 'typescript'],
  },
  {
    id: '4',
    name: 'Django',
    description: 'The Web framework for perfectionists with deadlines',
    url: 'https://github.com/django/django',
    language: 'Python',
    framework: 'Django',
    level: 'Intermediate',
    stars: 76000,
    forks: 31000,
    lastUpdated: '1 day ago',
    issuesCount: 654,
    tags: ['web-framework', 'python', 'beginner-friendly'],
  },
  {
    id: '5',
    name: 'Express.js',
    description: 'Fast, unopinionated, minimalist web framework for Node.js',
    url: 'https://github.com/expressjs/express',
    language: 'JavaScript',
    framework: 'Express',
    level: 'Beginner',
    stars: 64000,
    forks: 16000,
    lastUpdated: '5 days ago',
    issuesCount: 234,
    tags: ['web-framework', 'nodejs', 'javascript'],
  },
  {
    id: '6',
    name: 'Spring Boot',
    description: 'Spring Boot makes it easy to create stand-alone production-grade Spring applications',
    url: 'https://github.com/spring-projects/spring-boot',
    language: 'Java',
    framework: 'Spring Boot',
    level: 'Intermediate',
    stars: 74000,
    forks: 41000,
    lastUpdated: '3 days ago',
    issuesCount: 567,
    tags: ['java', 'web-framework', 'spring'],
  },
  {
    id: '7',
    name: 'Angular',
    description: 'Platform for building mobile and desktop web applications',
    url: 'https://github.com/angular/angular',
    language: 'TypeScript',
    framework: 'Angular',
    level: 'Advanced',
    stars: 96000,
    forks: 25000,
    lastUpdated: '1 day ago',
    issuesCount: 890,
    tags: ['framework', 'typescript', 'enterprise'],
  },
  {
    id: '8',
    name: 'Rust Programming Language',
    description: 'Empowering everyone to build reliable and efficient software',
    url: 'https://github.com/rust-lang/rust',
    language: 'Rust',
    level: 'Advanced',
    stars: 95000,
    forks: 12000,
    lastUpdated: 'today',
    issuesCount: 1234,
    tags: ['systems-programming', 'rust', 'performance'],
  },
  {
    id: '9',
    name: 'Awesome Python',
    description: 'A curated list of awesome Python frameworks, libraries, and tools',
    url: 'https://github.com/vinta/awesome-python',
    language: 'Python',
    level: 'Beginner',
    stars: 192000,
    forks: 29000,
    lastUpdated: '2 days ago',
    issuesCount: 45,
    tags: ['python', 'resources', 'beginner-friendly'],
  },
  {
    id: '10',
    name: 'Go Standard Library',
    description: 'The Go programming language',
    url: 'https://github.com/golang/go',
    language: 'Go',
    level: 'Intermediate',
    stars: 120000,
    forks: 18000,
    lastUpdated: 'today',
    issuesCount: 2345,
    tags: ['go', 'systems', 'stdlib'],
  },
  {
    id: '11',
    name: 'PHP Laravel',
    description: 'The PHP Framework for Web Artisans',
    url: 'https://github.com/laravel/framework',
    language: 'PHP',
    level: 'Beginner',
    stars: 31000,
    forks: 12500,
    lastUpdated: '1 day ago',
    issuesCount: 456,
    tags: ['php', 'web-framework', 'beginner-friendly'],
  },
  {
    id: '12',
    name: 'C# Roslyn',
    description: 'The .NET compiler platform "Roslyn"',
    url: 'https://github.com/dotnet/roslyn',
    language: 'C#',
    level: 'Advanced',
    stars: 18000,
    forks: 4000,
    lastUpdated: '3 days ago',
    issuesCount: 1234,
    tags: ['csharp', 'compiler', 'dotnet'],
  },
];

export default function Discover() {
  const [dateRange, setDateRange] = useState('all');
  const [frameworks, setFrameworks] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [levels, setLevels] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Filter projects based on selected criteria
  const filteredProjects = useMemo(() => {
    let result = mockProjects;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (project) =>
          project.name.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Apply framework filter
    if (frameworks.length > 0) {
      result = result.filter((project) => frameworks.includes(project.framework || ''));
    }

    // Apply language filter
    if (languages.length > 0) {
      result = result.filter((project) => languages.includes(project.language));
    }

    // Apply level filter
    if (levels.length > 0) {
      result = result.filter((project) => levels.includes(project.level));
    }

    // Apply date range filter (simulated - in real app, would check lastUpdated)
    // For demo purposes, we'll just show all for now

    return result;
  }, [dateRange, frameworks, languages, levels, searchQuery]);

  const resetFilters = () => {
    setDateRange('all');
    setFrameworks([]);
    setLanguages([]);
    setLevels([]);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="px-6 py-4 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-6 py-12 bg-card/50 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">Find Your Next Project</h1>
          <p className="text-lg text-muted-foreground">
            Discover beginner-friendly open-source repositories matching your skills and interests
          </p>
        </div>
      </div>

      {/* Filters */}
      <FilterSection
        dateRange={dateRange}
        frameworks={frameworks}
        languages={languages}
        levels={levels}
        searchQuery={searchQuery}
        onDateRangeChange={setDateRange}
        onFrameworksChange={setFrameworks}
        onLanguagesChange={setLanguages}
        onLevelsChange={setLevels}
        onSearchChange={setSearchQuery}
      />

      {/* Results Section */}
      <div className="px-6 py-12 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Results Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {filteredProjects.length} Projects Found
              </h2>
              <p className="text-muted-foreground">
                {filteredProjects.length === mockProjects.length
                  ? 'Showing all available projects'
                  : `Filtered from ${mockProjects.length} total projects`}
              </p>
            </div>
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-accent transition-colors"
            >
              Reset Filters
            </button>
          </div>

          {/* Loading State */}
          {isLoading && <LoadingState />}

          {/* Empty State */}
          {!isLoading && filteredProjects.length === 0 && (
            <EmptyState />
          )}

          {/* Projects Grid */}
          {!isLoading && filteredProjects.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          )}

          {/* Pagination Info */}
          {!isLoading && filteredProjects.length > 0 && (
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Showing all {filteredProjects.length} results
              </p>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
