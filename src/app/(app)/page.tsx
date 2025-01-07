'use client'

// Portfolio page
import { useMemo, useRef } from 'react'

// Icons
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoDocumentAttach } from 'react-icons/io5'

// Motion
import { motion, useScroll, useSpring, useTransform } from 'motion/react'

// Typewrite
import Typewriter from 'typewriter-effect'
import SlideTransition from '@/components/animate/SlideTransition'

// Font
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

// TODO: Split up this entire thing into components
// TODO: Remove borders
// TODO: Shorten long class names with Tailwind utility components

export default function Home() {
  const scrollRef = useRef(null)

  // Scroll
  const { scrollYProgress } = useScroll(
    {
      container: scrollRef,
    },
  )

  // Calculate the viewport width
  const viewportWidth: number = useMemo(() => {
    return window.innerWidth
  }, [])

  // Widths of the hero and the content section
  const initial = 0.55
  const width_hero = useTransform(scrollYProgress, [0, 0.3], [viewportWidth * initial, viewportWidth * (1 - initial)])
  const width_content = useTransform(scrollYProgress, [0, 0.3], [viewportWidth * (1 - initial), viewportWidth * initial])

  // Hero scale
  const scale_hero = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

  // Spring effect
  const [stiffness, damping] = [100, 20]
  const spring_hero = useSpring(width_hero, { stiffness: stiffness, damping: damping })
  const spring_content = useSpring(width_content, { stiffness: stiffness, damping: damping })

  return (
    <main className="w-full h-screen">
      {/* Grouped Header and Sections */}
      <section aria-labelledby="main-content" className="h-full border border-red-500">
        {/* Hero Section */}
        {/* TODO: Add fade in transition for this section */}
        {/* Name */}
        <motion.section
          className="h-screen fixed flex flex-col items-center justify-center border-green-400 border whitespace-nowrap z-[-1]"
          style={{ width: spring_hero, scale: scale_hero }}
        >
          <SlideTransition className="w-fit">
            <p className="text-xl">
              <span className="text-primary">Hey!</span> I&#39;m
            </p>
            <h1
              className={`${montserrat.className} text-stroke text-5xl lg:text-7xl font-black italic text-background mt-1`}>
              JUSTIN <br /> ABUYUAN
            </h1>
            {/* Current position */}
            <section className="w-fit mt-2">
              <h2 className="text-xl">
                An <span className="text-primary">engineering student</span> at the University of Waterloo.
              </h2>
            </section>

            {/* Lil blurb */}
            <section className="w-fit mt-4 text-gray-400">
              {/* TODO: Implement changing typed text */}
              <Typewriter options={{
                strings: 'I like to code stuff and build things for the internet.',
                autoStart: true,
                delay: 10,
              }} />
            </section>

            {/* Social links */}
            <section className="flex flex-row gap-3 w-fit mt-8">
              {/* TODO: Turn these into buttons and add a cool parallax animation when moving mouse inside the container */}
              {/* TODO: Find better icons */}
              <FaLinkedin className="size-8" />
              <FaGithub className="size-8" />
              <IoDocumentAttach className="size-8" />
            </section>
          </SlideTransition>
        </motion.section>

        {/* Portfolio content */}
        {/* TODO: use scroll area to make this show portfolio content */}
        <div ref={scrollRef} className="w-full h-screen flex flex-row justify-end overflow-scroll">
          <motion.section
            className="flex flex-col border-2 border-yellow-500 h-full"
            style={{ width: spring_content }}
          >
            {/* About Section */}
            <section id="about" aria-labelledby="about-heading" className="w-full border min-h-screen">
              <h2 id="about-heading">About Me</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </section>

            {/* Projects Section */}
            <section id="projects" aria-labelledby="projects-heading" className="w-full border min-h-[500px]">
              <h2 id="projects-heading">Projects</h2>
              <p>Nulla maximus semper sodales. Aliquam mauris velit, suscipit ac felis et, euismod accumsan magna.</p>
            </section>

            {/* Experience Section */}
            <section id="experience" aria-labelledby="experience-heading" className="w-full border min-h-[500px]">
              <h2 id="experience-heading">Experience</h2>
              <p>Ut vitae varius nisi. Quisque mollis pretium felis, et dictum augue maximus eu.</p>
            </section>
          </motion.section>
        </div>
      </section>

      {/* TODO: When portfolio is at the bottom, transition to a footer with no hero */}
      {/* Footer */}
      {/*<footer>*/}
      {/*  <section id="contact" aria-labelledby="contact-heading">*/}
      {/*    <h2 id="contact-heading">Get in Touch</h2>*/}
      {/*    <p>Ut ornare id nisi nec tincidunt. Sed fermentum varius magna et maximus. Cras at lacinia velit, nec*/}
      {/*      interdum*/}
      {/*      justo.</p>*/}
      {/*  </section>*/}
      {/*  <div>*/}
      {/*    <p>Footer text</p>*/}
      {/*  </div>*/}
      {/*</footer>*/}
    </main>
  )
}
