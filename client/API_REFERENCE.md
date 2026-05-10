# Quick API Reference

## Project Data Model

```typescript
interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  language: string;
  framework?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  stars: number;
  forks: number;
  lastUpdated: string; // e.g., "today", "2 days ago"
  issuesCount: number;
  tags?: string[];
}
```

## Filter States

```typescript
interface FilterState {
  dateRange: 'day' | 'week' | 'month' | 'all';
  frameworks: string[];
  languages: string[];
  levels: string[];
  searchQuery: string;
}
```

## Component Import Examples

```typescript
// Main page
import Discover from './pages/Discover';

// Filters
import { FilterSection } from './components/FilterSection';
import { DateRangeFilter } from './components/filters/DateRangeFilter';
import { FrameworkFilter } from './components/filters/FrameworkFilter';
import { LanguageFilter } from './components/filters/LanguageFilter';
import { LevelFilter } from './components/filters/LevelFilter';

// Cards and States
import { ProjectCard } from './components/ProjectCard';
import { EmptyState } from './components/EmptyState';
import { LoadingState } from './components/LoadingState';
```

## Available Framework Options

React, Next.js, Vue, Angular, Spring Boot, Django, Express

## Available Language Options

JavaScript, TypeScript, Python, Java, Go, Rust, PHP, C#

## Available Level Options

Beginner, Intermediate, Advanced

## Tailwind Classes Used

```
Grid Layout
- grid, md:grid-cols-2, lg:grid-cols-3, lg:grid-cols-4
- gap-4, gap-6, gap-8

Spacing
- px-6, py-4, p-8
- mt-12, mb-4, my-6

Typography
- text-3xl, text-2xl, text-lg, text-sm
- font-semibold, font-medium
- text-primary, text-muted-foreground

Colors
- bg-card, bg-background, bg-accent
- border-border, border-primary
- text-foreground, text-secondary-foreground

Effects
- rounded-lg, rounded-xl, rounded-full
- border, border-b
- shadow-lg, hover:shadow-lg
- transition-all, transition-colors
- opacity-0, opacity-100

Responsive
- hidden, md:flex, lg:flex
- flex-col, sm:flex-row
- w-full, max-w-6xl

Interactive
- hover:bg-primary/90, hover:opacity-70
- focus:outline-none, focus:ring-2
- group-hover:opacity-100
```

## Color Tokens Available

```
Primary
- bg-primary / text-primary-foreground
- bg-primary/50, bg-primary/90

Secondary
- bg-secondary / text-secondary-foreground

Muted
- bg-muted, text-muted-foreground
- bg-muted/30, bg-muted/50

Accent
- bg-accent, text-accent-foreground
- bg-accent/30

Destructive
- bg-destructive, text-destructive-foreground
```

## Common Patterns

### Using a Filter State

```typescript
const [frameworks, setFrameworks] = useState<string[]>([]);

const handleFrameworkChange = (newFrameworks: string[]) => {
  setFrameworks(newFrameworks);
};

<FrameworkFilter 
  value={frameworks} 
  onChange={handleFrameworkChange} 
/>
```

### Filtering Data

```typescript
const filtered = useMemo(() => {
  let result = projects;
  
  if (searchQuery) {
    result = result.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  
  if (frameworks.length > 0) {
    result = result.filter(p => frameworks.includes(p.framework));
  }
  
  return result;
}, [searchQuery, frameworks, projects]);
```

### Conditional Rendering

```typescript
{isLoading && <LoadingState />}
{!isLoading && filteredProjects.length === 0 && <EmptyState />}
{!isLoading && filteredProjects.length > 0 && (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredProjects.map(project => (
      <ProjectCard key={project.id} {...project} />
    ))}
  </div>
)}
```

### Navigation

```typescript
import { Link } from 'react-router';

<Link to="/discover" className="btn btn-primary">
  Start Contributing
</Link>
```

## Button Variants

```typescript
// Primary Button
className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"

// Secondary Button (Outlined)
className="border border-border px-8 py-3 rounded-lg hover:bg-accent transition-colors"

// Accent Button
className="bg-accent text-accent-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
```

## Common Customizations

### Change Primary Color
Edit `theme.css`:
```css
:root {
  --primary: #YOUR_COLOR;
  --primary-foreground: #FOREGROUND_COLOR;
}
```

### Add New Framework Filter Option
In `components/filters/FrameworkFilter.tsx`:
```typescript
const frameworks = [
  'React',
  'Next.js',
  'Vue',
  // Add your framework here:
  'MyFramework',
];
```

### Modify Project Card Layout
Edit `components/ProjectCard.tsx`:
- Change gradient colors in `getLevelColor()`
- Modify badge styles
- Add new fields to project display
- Customize CTA button

### Change Filter Dropdown Styling
All filters in `components/filters/*` use:
- `bg-input-background` for input area
- `hover:bg-accent` for hover state
- `bg-primary` for selected state
- Modify these utility classes to change appearance
