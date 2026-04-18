import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="px-6 py-20 md:py-32 max-w-6xl mx-auto">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl tracking-tight max-w-4xl mx-auto">
            Bridge the gap from graduate to <span className="text-primary/80">real-world developer</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Gain practical experience by contributing to beginner-friendly open-source projects.
            Build your portfolio with real commits, not just courses.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 group">
            Start Contributing
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-border px-8 py-3 rounded-lg hover:bg-accent transition-colors">
            See How It Works
          </button>
        </div>

        <div className="pt-8 flex flex-wrap gap-8 justify-center items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>1,200+ developers matched</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span>450+ active repositories</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <span>5,800+ contributions made</span>
          </div>
        </div>
      </div>
    </section>
  );
}