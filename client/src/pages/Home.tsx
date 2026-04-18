import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { ExampleRepos } from '../components/ExampleRepos';
import { Features } from '../components/Features';
import { Benefits } from '../components/Benefits';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <ExampleRepos />
      <Features />
      <Benefits />
      <Footer />
    </div>
  );
}