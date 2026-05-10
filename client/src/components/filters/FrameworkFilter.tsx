import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FrameworkFilterProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export function FrameworkFilter({ value, onChange }: FrameworkFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const frameworks = [
    'React',
    'Next.js',
    'Vue',
    'Angular',
    'Spring Boot',
    'Django',
    'Express',
  ];

  const toggleFramework = (framework: string) => {
    if (value.includes(framework)) {
      onChange(value.filter(f => f !== framework));
    } else {
      onChange([...value, framework]);
    }
  };

  const displayText = value.length > 0 
    ? `${value.length} selected`
    : 'Select a project by framework';

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
          {frameworks.map((framework) => (
            <button
              key={framework}
              onClick={() => toggleFramework(framework)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-3 ${
                value.includes(framework)
                  ? 'bg-primary/10 text-foreground'
                  : 'text-foreground hover:bg-accent'
              }`}
            >
              <input
                type="checkbox"
                checked={value.includes(framework)}
                onChange={() => {}}
                className="w-4 h-4 rounded border-border cursor-pointer accent-primary"
              />
              {framework}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
