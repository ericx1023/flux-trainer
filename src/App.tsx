import React from 'react';
import { Camera, Brain, ArrowRight } from 'lucide-react';
import Hero from './components/layout/Hero';
import FeatureList from './components/features/FeatureList';
import SignupForm from './components/features/SignupForm';
import Testimonials from './components/features/Testimonials';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <FeatureList />
        <SignupForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;