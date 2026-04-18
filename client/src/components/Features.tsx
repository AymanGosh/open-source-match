import { Target, TrendingUp, Award } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Smart Matching',
    description: 'Our algorithm matches you with repositories based on your skills, interests, and experience level. Find projects that fit your learning goals.',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: TrendingUp,
    title: 'Guided Learning Path',
    description: 'Progress through carefully curated tasks from simple documentation fixes to complex feature development. Learn by doing, with real impact.',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: Award,
    title: 'Experience Tracking',
    description: 'Build a verified portfolio of contributions. Track your growth, showcase your work, and demonstrate real-world experience to potential employers.',
    gradient: 'from-orange-500/20 to-red-500/20'
  }
];

export function Features() {
  return (
    <section className="px-6 py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Everything you need to succeed</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Features designed to help you gain real experience and build a meaningful portfolio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7 text-foreground" />
              </div>

              <h3 className="text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}