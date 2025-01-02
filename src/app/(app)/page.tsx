'use client'

// Portfolio page

// Icons
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoDocumentTextOutline } from 'react-icons/io5'

// Motion
import SlideTransition from '@/components/animate/SlideTransition'
import { useScroll } from 'motion/react'

// TODO: Split up this entire thing into components
// TODO: Remove borders
// TODO: Shorten long class names with Tailwind utility components

export default function Home() {
  // Scroll
  const { scrollYProgress } = useScroll()

  return (
    <main className="w-full min-h-screen">
      {/* Grouped Header and Sections */}
      <section aria-labelledby="main-content">
        {/* Hero Section */}
        {/* TODO: Add fade in transition for this section */}
        <header className="flex flex-row min-h-screen border-red-500 border">
          {/* Name */}
          <section className="w-[60%] pl-28 flex flex-col justify-center min-h-screen border-green-400 border">
            <SlideTransition className="w-fit mb-2 border">
              <p>Hey! I&#39;m</p>
              <h1 className="text-6xl">Justin Abuyuan.</h1>
              {/* Current position */}
              <section className="w-fit border">
                <h2 className="text-xl">An engineering student at the University of Waterloo.</h2>
              </section>

              {/* Lil blurb */}
              <section className="w-fit mt-5 border">
                {/* TODO: Implement changing typed text */}
                I like to code stuff and build things for the internet.
              </section>

              {/* Social links */}
              <section className="flex flex-row gap-3 w-fit mt-8 border">
                {/* TODO: Turn these into buttons and add a cool parallax animation when moving mouse inside the container */}
                {/* TODO: Find better icons */}
                <FaLinkedin className="size-8" />
                <FaGithub className="size-8" />
                <IoDocumentTextOutline className="size-8" />
              </section>
            </SlideTransition>
          </section>

          {/* Hero animation */}
          {/* TODO: Node animation here */}
          <section className="pl-20 flex-grow flex flex-col justify-center border border-yellow-500">
            <section className="w-fit text-xl border uppercase">
              <p>Projects</p>
              <p>Experience</p>
              <p>Contact</p>
            </section>
          </section>
        </header>

        {/*  /!* About Section *!/*/}
        {/*  <section id="about" aria-labelledby="about-heading">*/}
        {/*    <h2 id="about-heading">About Me</h2>*/}
        {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
        {/*  </section>*/}

        {/*  /!* Projects Section *!/*/}
        {/*  <section id="projects" aria-labelledby="projects-heading">*/}
        {/*    <h2 id="projects-heading">Projects</h2>*/}
        {/*    <p>Nulla maximus semper sodales. Aliquam mauris velit, suscipit ac felis et, euismod accumsan magna.</p>*/}
        {/*  </section>*/}

        {/*  /!* Experience Section *!/*/}
        {/*  <section id="experience" aria-labelledby="experience-heading">*/}
        {/*    <h2 id="experience-heading">Experience</h2>*/}
        {/*    <p>Ut vitae varius nisi. Quisque mollis pretium felis, et dictum augue maximus eu.</p>*/}
        {/*  </section>*/}
      </section>

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
