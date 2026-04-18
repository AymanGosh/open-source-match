import { Code, Briefcase } from 'lucide-react';

export function Benefits() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Built for developers and teams</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A win-win platform that helps developers grow while giving teams better hiring insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl p-8 md:p-10 border border-border">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6">
              <Code className="w-6 h-6" />
            </div>

            <h3 className="text-2xl mb-4">For Developers</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                <span>Gain real-world coding experience on production projects</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                <span>Build a verifiable portfolio with actual open-source contributions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                <span>Learn from experienced maintainers and collaborative workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                <span>Progress from simple tasks to complex features at your own pace</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                <span>Stand out to employers with measurable, real contributions</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-2xl p-8 md:p-10 border border-border">
            <div className="w-12 h-12 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6" />
            </div>

            <h3 className="text-2xl mb-4">For Hiring Teams</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
                <span>Evaluate candidates based on real code contributions, not just resumes</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
                <span>See how developers collaborate, communicate, and solve problems</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
                <span>Access a pool of motivated developers with proven experience</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
                <span>Review verified contribution history and code quality metrics</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
                <span>Make better hiring decisions with objective, measurable data</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}