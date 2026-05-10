import { Search } from 'lucide-react';
import { DateRangeFilter } from './filters/DateRangeFilter';
import { FrameworkFilter } from './filters/FrameworkFilter';
import { LanguageFilter } from './filters/LanguageFilter';
import { LevelFilter } from './filters/LevelFilter';

interface FilterSectionProps {
  dateRange: string;
  frameworks: string[];
  languages: string[];
  levels: string[];
  searchQuery: string;
  onDateRangeChange: (value: string) => void;
  onFrameworksChange: (value: string[]) => void;
  onLanguagesChange: (value: string[]) => void;
  onLevelsChange: (value: string[]) => void;
  onSearchChange: (value: string) => void;
}

export function FilterSection({
  dateRange,
  frameworks,
  languages,
  levels,
  searchQuery,
  onDateRangeChange,
  onFrameworksChange,
  onLanguagesChange,
  onLevelsChange,
  onSearchChange,
}: FilterSectionProps) {
  return (
    <div className="bg-card border-b border-border sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-6 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search repositories, topics, or keywords..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DateRangeFilter value={dateRange} onChange={onDateRangeChange} />
          <FrameworkFilter value={frameworks} onChange={onFrameworksChange} />
          <LanguageFilter value={languages} onChange={onLanguagesChange} />
          <LevelFilter value={levels} onChange={onLevelsChange} />
        </div>

        {/* Active Filters Display */}
        {(dateRange !== 'all' || frameworks.length > 0 || languages.length > 0 || levels.length > 0) && (
          <div className="flex flex-wrap gap-2">
            {dateRange !== 'all' && (
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm">
                <span>Date: {dateRange === 'day' ? 'Last 24h' : dateRange === 'week' ? 'Last week' : 'Last month'}</span>
                <button
                  onClick={() => onDateRangeChange('all')}
                  className="ml-1 hover:opacity-70 transition-opacity"
                >
                  ✕
                </button>
              </div>
            )}
            {frameworks.map((framework) => (
              <div key={framework} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm">
                <span>{framework}</span>
                <button
                  onClick={() => onFrameworksChange(frameworks.filter(f => f !== framework))}
                  className="ml-1 hover:opacity-70 transition-opacity"
                >
                  ✕
                </button>
              </div>
            ))}
            {languages.map((language) => (
              <div key={language} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm">
                <span>{language}</span>
                <button
                  onClick={() => onLanguagesChange(languages.filter(l => l !== language))}
                  className="ml-1 hover:opacity-70 transition-opacity"
                >
                  ✕
                </button>
              </div>
            ))}
            {levels.map((level) => (
              <div key={level} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm">
                <span>{level}</span>
                <button
                  onClick={() => onLevelsChange(levels.filter(l => l !== level))}
                  className="ml-1 hover:opacity-70 transition-opacity"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              onClick={() => {
                onDateRangeChange('all');
                onFrameworksChange([]);
                onLanguagesChange([]);
                onLevelsChange([]);
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Clear all
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
