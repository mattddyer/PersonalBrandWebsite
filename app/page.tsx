"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calendar, Linkedin, Twitter, Instagram, Menu, X } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isJourneyExpanded, setIsJourneyExpanded] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-slate-800/95 backdrop-blur supports-[backdrop-filter]:bg-slate-800/80">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-teal-500 p-2 rounded">
              <span className="font-bold text-white text-sm">SHOOGLE</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium text-white hover:text-teal-400 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium text-white hover:text-teal-400 transition-colors">
              About Me
            </Link>
            <Link href="#journey" className="text-sm font-medium text-white hover:text-teal-400 transition-colors">
              My Journey
            </Link>
            <Link href="#services" className="text-sm font-medium text-white hover:text-teal-400 transition-colors">
              Services
            </Link>
            <Button
              asChild
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-teal-500 hover:text-white hover:border-teal-500"
            >
              <Link href="#contact">CONTACT ME</Link>
            </Button>
          </nav>
          <Button 
            variant="outline" 
            size="icon" 
            className="md:hidden text-white border-white hover:bg-teal-500 hover:text-white hover:border-teal-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <nav className="container flex flex-col py-4 space-y-4">
              <Link 
                href="#" 
                className="text-sm font-medium text-white hover:text-teal-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#about" 
                className="text-sm font-medium text-white hover:text-teal-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Me
              </Link>
              <Link 
                href="#journey" 
                className="text-sm font-medium text-white hover:text-teal-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Journey
              </Link>
              <Link 
                href="#services" 
                className="text-sm font-medium text-white hover:text-teal-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Button
                asChild
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-teal-500 hover:text-white hover:border-teal-500"
              >
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT ME</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-slate-800 py-8 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold tracking-tighter text-white sm:text-4xl xl:text-6xl/none">
                    Your <span className="text-teal-400">Crypto Journey</span> Starts Here
                  </h1>
                  <p className="max-w-[600px] text-slate-300 text-base md:text-xl">
                    I help <span className="text-white font-medium">individuals and businesses</span>{" "}
                    <span className="text-teal-400">use blockchain</span> to{" "}
                    <span className="text-white font-medium">grow</span> their investments and{" "}
                    <span className="text-teal-400">build</span> secure portfolios
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white w-full sm:w-auto">
                    <Link href="#contact">Get Started</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/profile.jpeg"
                width={500}
                height={600}
                alt="Matt Dyer - Crypto Expert"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-lg border border-slate-700"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-8 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">I'm Matt Dyer</h2>
              <div className="space-y-4">
                <p className="max-w-[900px] text-slate-700 text-base md:text-xl/relaxed">
                  I help individuals and businesses navigate the complexities of crypto, providing tailored education
                  and strategic direction to confidently invest in this asset class.
                </p>
                <p className="max-w-[900px] text-slate-700 text-base md:text-xl/relaxed">
                  I once struggled with the complexities of crypto, unsure how to buy, where to start, who to trust, or
                  how to store, bridge, or provide liquidity for my assets. But after navigating that confusion and
                  rising to become the CEO of a leading L1 protocol, I'm uniquely equipped to guide others through the
                  process with clarity and confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section id="journey" className="w-full py-8 md:py-24 lg:py-32 bg-slate-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fxzuZMscaeQXvJ30U7o0jABkcMru5N.png"
                width={600}
                height={400}
                alt="Journey into the Crypto World"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full order-2 lg:order-1"
              />
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tighter text-white sm:text-4xl">My Journey</h2>
                  <div className="space-y-4">
                    <p className="text-slate-300 text-base md:text-lg">
                      After 19 years in a strategic role at a leading tech firm, my curiosity for blockchain's
                      transformative potential led me down the crypto rabbit hole. In October 2020, I left traditional
                      employment to dive into the industry, beginning a relentless pursuit of knowledge to master its
                      complexities and opportunities.
                    </p>
                    <div className={`space-y-4 ${!isJourneyExpanded ? 'hidden' : ''}`}>
                      <p className="text-slate-300 text-base md:text-lg">
                        Within five years, I became CEO of a layer-1 blockchain, served on the investment committee to fund
                        multiple projects building on the layer-1, and founded several crypto ventures under the Zilliqa
                        umbrella. My latest venture, Shoogle, marks my independent journey in the industry.
                      </p>
                      <p className="text-slate-300 text-base md:text-lg">
                        My consultancy background has refined my ability to swiftly adapt and thrive in the dynamic crypto
                        landscape, enhancing my expertise in assessing project legitimacy through sharp questioning and
                        insights drawn from hands-on experience.
                      </p>
                      <p className="text-slate-300 text-base md:text-lg">
                        Over the course of my career, I've shared my crypto expertise in outlets like The New York Times and
                        Decrypt, spoken at top blockchain conferences, participated in a panel at Davos WEF, and cultivated
                        a nuanced understanding of the crypto industry's dynamics and challenges.
                      </p>
                      <p className="text-slate-300 text-base md:text-lg">
                        Today, I leverage my experience and insights to guide individuals and businesses through the crypto
                        and digital asset space. I understand the complexities and apprehensions of investing in this field,
                        offering a blend of strategic education and personalized, hands-on support.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="bg-transparent text-white border-white hover:bg-teal-500 hover:text-white hover:border-teal-500"
                      onClick={() => setIsJourneyExpanded(!isJourneyExpanded)}
                    >
                      {isJourneyExpanded ? 'Show Less' : 'Read More'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-8 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4 mb-8 md:mb-12">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Getting Started</h2>
              <p className="max-w-[900px] text-slate-700 text-base md:text-xl/relaxed">
                Take the first step towards confidently investing in crypto and digital assets.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 md:py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold">Crypto Advisory Intro Call</h3>
                  <p className="text-slate-700 text-base md:text-lg">
                    Book a 30-minute intro call to explore how I can help transform your business or personal investment
                    portfolio. We'll discuss your goals and identify actionable steps to succeed in the crypto space.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                    <Button
                      id="contact"
                      className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white w-full sm:w-auto"
                      asChild
                    >
                      <Link href="https://cal.com/mattdyer/15min?month=2025-05">
                        <Calendar className="h-4 w-4" />
                        Schedule Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.jpg-M5Tf0wf8OcfDAKncFj4HilnzKKO5OF.jpeg"
                width={600}
                height={400}
                alt="Secure Crypto Investment Vault"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full order-1 lg:order-2"
              />
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="w-full py-8 md:py-24 lg:py-32 bg-slate-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold tracking-tighter text-white md:text-4xl/tight">Stay Informed</h2>
              <p className="mx-auto max-w-[600px] text-slate-300 text-base md:text-xl/relaxed">
                Sign up for my Crypto Insights Digest to receive actionable tips and updates on blockchain trends and
                digital asset opportunities.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1 bg-white/10 text-white border-slate-700 placeholder:text-slate-400"
                />
                <Button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white w-full sm:w-auto"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
              <p className="text-xs text-slate-400">I respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-slate-900 py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center px-4 md:px-6">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="bg-teal-500 p-2 rounded">
              <span className="font-bold text-white text-sm">SHOOGLE</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} by Matt Dyer. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/mattddyer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link 
              href="https://x.com/MattDDyer" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-400"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-slate-400 hover:text-teal-400">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
