import Hero from '@/components/layout/Hero'
import FeatureList from '@/components/features/FeatureList'
import SignupForm from '@/components/features/SignupForm'
import Testimonials from '@/components/features/Testimonials'

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <FeatureList />
      <SignupForm />
      <Testimonials />
    </div>
  )
} 