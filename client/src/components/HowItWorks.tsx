import { FileText, TestTube, Bug, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Start with simple tasks like improving README files, fixing typos, and adding examples.',
    level: 'Beginner',
    color: 'bg-green-500/10 text-green-600'
  },
  {
    icon: TestTube,
    title: 'Testing',
    description: 'Add unit tests, write test cases, and improve code coverage for existing features.',
    level: 'Intermediate',
    color: 'bg-blue-500/10 text-blue-600'
  },
  {
    icon: Bug,
    title: 'Bug Fixes',
    description: 'Tackle real bugs marked as "good first issue" and learn debugging in production code.',
    level: 'Intermediate',
    color: 'bg-orange-500/10 text-orange-600'
  },
  {
    icon: Sparkles,
    title: 'Features',
    description: 'Build new features, implement enhancements, and contribute meaningful functionality.',
    level: 'Advanced',
    color: 'bg-purple-500/10 text-purple-600'
  }
];

export function HowItWorks() {
  return (
    <section className="px-6 py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Your learning path, step by step</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We guide you through a structured progression from simple contributions to complex features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-border relative">
              <div className={`w-12 h-12 rounded-lg ${step.color} flex items-center justify-center mb-4`}>
                <step.icon className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg">{step.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {step.level}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-background rounded-full border-2 border-border flex items-center justify-center">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}