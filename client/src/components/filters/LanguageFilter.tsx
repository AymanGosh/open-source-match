import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface LanguageFilterProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export function LanguageFilter({ value, onChange }: LanguageFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    'JavaScript',
    'TypeScript',
    'Python',
    'Java',
    'Go',
    'Rust',
    'PHP',
    'C#',
  ];

  const toggleLanguage = (language: string) => {
    if (value.includes(language)) {
      onChange(value.filter(l => l !== language));
    } else {
      onChange([...value, language]);
    }
  };

  const displayText = value.length > 0 
    ? `${value.length} selected`
    : 'Select programming language';

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2.5 bg-input-background border border-border rounded-lg text-foreground flex items-center justify-between hover:bg-accent transition-colors text-sm"
      >
        <span className="text-muted-foreground text-left">{displayText}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-10 overflow-hidden">
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => toggleLanguage(language)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-3 ${
                value.includes(language)
                  ? 'bg-primary/10 text-foreground'
                  : 'text-foreground hover:bg-accent'
              }`}
            >
              <input
                type="checkbox"
                checked={value.includes(language)}
                onChange={() => {}}
                className="w-4 h-4 rounded border-border cursor-pointer accent-primary"
              />
              {language}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
