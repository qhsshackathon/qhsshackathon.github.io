'use client'

import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Camera,
  BriefcaseBusiness,
  Clock3,
  Code2,
  Cpu,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Plus,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  X,
  Zap,
} from 'lucide-react'

const members = [
  { name: 'Qinghan Cheng', role: 'President', bio: "Hi guys, my name is Qinghan Cheng. I'm very excited to be the President of Hackathon for the 2026-2027 school year! Let's hope we have a nice year together. Fun fact: I like to draw.", image: 'https://qhsshackathon.github.io/QinghanHeadshot.png?auto=format&fit=crop&w=500&q=80' },
  { name: 'Sehaj Singh', role: 'Programming Director', bio: 'Really excited for the hackathon and the new hack hardware part of hack this year. Fun fact: I like Cha', image: 'https://qhsshackathon.github.io/SehajHeadshot.png?auto=format&fit=crop&w=500&q=80' },
  { name: 'Caleb Castillo', role: 'Social Media Director', bio: "Hey guys! Glad to be the Social Media Director this year! I've already been hard at work managing the club fair posts, along with the discord server!.", image: 'https://qhsshackathon.github.io/CalebHeadshot.jpeg?auto=format&fit=crop&w=500&q=80' },
  { name: 'Riddota Raha', role: 'Outreach Director', bio: "Heyy, I’m Riddota and I’m your Outreach Lead this year! Lets work together to make sure the Hackathon is lots of fun!", image: 'https://qhsshackathon.github.io/RiddotaHeadshot.png?auto=format&fit=crop&w=500&q=80' },
]

const gallery = [
  ['Midnight builds', 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80'],
  ['Demo day energy', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80'],
  ['Mentor office hours', 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80'],
  ['Teams in flow', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80'],
  ['Shipping together', 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80'],
  ['Big ideas, small bugs', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80'],
  ['The final pitch', 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80'],
  ['After the awards', 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80'],
]

const formatSteps = [
  ['01', 'Ideate & Build', 'Teams of 2 to 4 build around our parent-teacher connection theme, choosing between communication, beginner software, advanced software, or hardware tracks.'],
  ['02', 'Create Presentation / Demo', 'Prepare your project, software output, hardware integration, or 4-minute video showcase to demonstrate your vision effectively.'],
  ['03', 'Presentations + prizes', 'Every team presents with its code or project on screen, explains its choices, and answers judge questions to win sectional awards.'],
]

const tracks = [
  ['BEST COMMUNICATION', 'Best Communication Award', 'Evaluated based on a ~4-minute video. Focused on how evenly members spread their speaking sections and how deep and feasible the project is.'],
  ['BEGINNER SOFTWARE', 'Beginner Software Award', 'For teams focusing on innovation and pitch over heavy code. Create presentations, sketches, or mockups that enable parent-teacher connection effectively.'],
  ['ADVANCED SOFTWARE', 'Advanced Software Award', 'Based on actual coding implementation and functional software output. Evaluated on how much actual code was written and how well it functions as a product.'],
  ['HARDWARE', 'Hardware Award', 'Recognizes teams integrating the digital and physical worlds using 3D modeling or CAD. Evaluated on hardware-software interaction, creativity, and effectiveness.'],
]

const awards = ['Best Communication Award', 'Beginner Software Award', 'Advanced Software Award', 'Hardware Award']

const rubric = [
  ['It works / Feasibility', '25', 'The project runs live or demonstrates strong practical feasibility.'],
  ['Vision & Justification', '25', 'Why this parent-teacher problem, why this approach, and how deeply it addresses the connection gap.'],
  ['Implementation', '20', 'Quality of code, presentation, video delivery, or hardware build.'],
  ['Theme fit', '15', 'How directly the project boosts parent-teacher involvement.'],
  ['Presentation', '15', 'Clear breakdown, on-time delivery, and effective demo.'],
]

const schedule = [
  ['08:00', 'Check-in + breakfast', 'Grab a badge, meet your team, and get your first caffeine fix.'],
  ['09:00', 'Opening ceremony', 'Rules, prompts, prizes, and the official countdown.'],
  ['10:00', 'Build begins', 'Turn your parent-teacher connection ideas into reality.'],
  ['15:00', 'Presentations + judging', 'Presentations, video reviews, and judge evaluations.'],
  ['17:00', 'Showcase + awards', 'Celebrate every launch and award our category winners.'],
]

const faqs = [
  ['Who can participate?', 'Any student with a drive to build and willingness to learn. No prior experience required.'],
  ['Do I need experience?', 'Not at all. We have beginner software tracks, communication tracks, and flexible judging criteria.'],
  ['Do I need a team?', 'Come solo or bring up to three friends. We can also make balanced groups based on experience levels.'],
  ['What should I bring?', 'A laptop, charger, water bottle, and anything that helps you think. We provide food, Wi-Fi, and good energy.'],
  ['Is it free?', 'Yes. Registration is completely free thanks to our community sponsors.'],
  ['What are the awards?', 'We feature 4 distinct awards: Best Communication, Beginner Software, Advanced Software, and Hardware.'],
]

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label"><span />{children}</p>
}

function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Target: January 20, 2027, at 08:00:00 EST/EDT
    const targetDate = new Date('2027-01-20T08:00:00-05:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTime({ days, hours, minutes, seconds })
      } else {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="countdown" aria-label="Countdown to event">
      <span><b>{String(time.days).padStart(2, '0')}</b><small>days</small></span><i>:</i>
      <span><b>{String(time.hours).padStart(2, '0')}</b><small>hrs</small></span><i>:</i>
      <span><b>{String(time.minutes).padStart(2, '0')}</b><small>min</small></span><i>:</i>
      <span><b>{String(time.seconds).padStart(2, '0')}</b><small>sec</small></span>
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [member, setMember] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setMember((value) => (value + 1) % members.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main>
      <nav className="nav"><a href="#top" className="brand"><span className="brand-mark">&gt;_</span> QHSS HACKATHON</a><div className={`nav-links ${menuOpen ? 'open' : ''}`}><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#people" onClick={() => setMenuOpen(false)}>People</a><a href="#format" onClick={() => setMenuOpen(false)}>Format</a><a href="#sponsors" onClick={() => setMenuOpen(false)}>Sponsors</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></div><a href="#register" className="nav-cta">Register <ArrowUpRight size={15} /></a><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button></nav>

      <section className="hero section-pad" id="top"><div className="hero-orbit" /><div className="hero-grid" /><div className="hero-copy"><div className="eyebrow"><span className="live-dot" />QHSS WINTER HACKATHON / 2026-2027</div><h1>Parent-Teacher<br /><em>Connection.</em><span className="cursor">_</span></h1><p className="hero-sub">Build ideas, products, and visions to bridge the school-home gap.</p><div className="hero-actions"><a className="button primary" href="#register">Register now <ArrowUpRight size={17} /></a><a className="button secondary" href="#about">Explore the event <ArrowDown size={16} /></a></div><div className="hero-meta"><span><CalendarDays size={15} /> JAN 20, 2027 / 08:00 EDT</span><span><MapPin size={15} /> QHSS / JAMAICA</span><span><Clock3 size={15} /> 5-HOURS OF BUILDING</span></div></div><div className="countdown-wrap"><span className="countdown-label">EVENT STARTS IN</span><Countdown /></div></section>

      <section className="section-pad about" id="about"><div className="section-heading"><SectionLabel>01 / ABOUT</SectionLabel><h2>Bridging the gap<br /><span>between school and home.</span></h2></div><div className="about-content"><div className="about-intro"><p className="large-copy">Even in the world of digital media, the connection between our teachers and parents is still lacking regarding what's going on in school and our active day-to-day performance.</p><p><strong>The Goal:</strong> Make an idea, product, and vision on how we can boost that connection between parents and teachers to become more involved. Hosted by QHSS Hack Club and the Hackathon Committee, we bring together high school builders of every skill level for one unforgettable day of learning, collaboration, and shipping. No grades. No gatekeeping. Just a room full of people who want to see what is possible.</p><a className="text-link" href="#register">Get in the room <ArrowRight size={16} /></a></div><div className="stat-grid"><div><b>100<span>+</span></b><small>hackers</small></div><div><b>5</b><small>hours</small></div><div><b>4</b><small>award tracks</small></div><div><b>3</b><small>winners crowned</small></div></div></div><div className="beginner-card"><div className="icon-box"><Terminal /></div><div><SectionLabel>WINTER HACKATHON</SectionLabel><h3>Topic: Parent-Teacher Connection</h3><p>Build solutions ranging from communication videos and beginner sketches to advanced software and hardware integrations.</p></div><ArrowUpRight className="corner-arrow" /></div></section>

      <section className="section-pad people-section" id="people"><div className="section-heading split"><div><SectionLabel>02 / THE CREW</SectionLabel><h2>Meet the people<br /><span>behind the magic.</span></h2></div><div className="carousel-controls"><button onClick={() => setMember((member - 1 + members.length) % members.length)} aria-label="Previous member"><ArrowLeft /></button><button onClick={() => setMember((member + 1) % members.length)} aria-label="Next member"><ArrowRight /></button></div></div><div className="member-card"><div className="member-image-wrap"><img src={members[member].image} alt={members[member].name} /><span className="image-tag">QHSS / 2026-27</span></div><div className="member-info"><span className="member-number">0{member + 1} / 0{members.length}</span><div><p className="role">{members[member].role}</p><h3>{members[member].name}</h3><p>{members[member].bio}</p></div><div className="dots">{members.map((_, index) => <button key={index} className={index === member ? 'active' : ''} onClick={() => setMember(index)} aria-label={`Show member ${index + 1}`} />)}</div></div></div></section>

      <section className="section-pad format-section" id="format"><div className="section-heading"><SectionLabel>03 / THE FORMAT</SectionLabel><h2>Make something<br /><span>worth showing.</span></h2></div><div className="format-steps">{formatSteps.map(([number, title, description]) => <article className="format-step" key={title}><span className="format-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div><div className="tracks-heading"><SectionLabel>AWARD CATEGORIES & TRACKS</SectionLabel><p>Every team picks a focus area. Whichever track you choose, your presentation has to explain how the project answers the parent-teacher connection theme.</p></div><div className="track-grid">{tracks.map(([name, title, description]) => <article className="track-card" key={name}><span className="track-name">{name}</span><h3>{title}</h3><p>{description}</p></article>)}</div><div className="judging-grid"><div><SectionLabel>JUDGING</SectionLabel><h3>Structured evaluation<br /><span>for every track.</span></h3><p>Judges score every team out of 100 on the rubric below.</p><div className="award-list"><p>Featured Awards</p>{awards.map((award) => <span key={award}>{award}</span>)}</div></div><div className="rubric"><div className="rubric-row rubric-head"><span>Category</span><span>Points</span><span>What judges look for</span></div>{rubric.map(([category, points, criteria]) => <div className="rubric-row" key={category}><strong>{category}</strong><b>{points}</b><span>{criteria}</span></div>)}</div></div></section>

      <section className="section-pad gallery-section" id="gallery">
        <div className="section-heading">
          <SectionLabel>04 / GALLERY</SectionLabel>
          <h2>Moments from<br /><span>past hackathons.</span></h2>
        </div>
        <div className="gallery-grid">
          {gallery.map(([caption, url], index) => (
            <div className="gallery-item" key={caption} onClick={() => setLightbox(index)}>
              <img src={url} alt={caption} />
              <div className="gallery-overlay">
                <Camera size={20} />
                <span>{caption}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad schedule-section" id="schedule">
        <div className="section-heading">
          <SectionLabel>05 / SCHEDULE</SectionLabel>
          <h2>How the day<br /><span>will unfold.</span></h2>
        </div>
        <div className="schedule-list">
          {schedule.map(([time, title, description]) => (
            <div className="schedule-item" key={time}>
              <span className="schedule-time"><Clock3 size={15} /> {time}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad sponsor-cta" id="sponsors"><div className="section-heading"><SectionLabel>06 / FOR SPONSORS</SectionLabel><h2>Put your brand<br /><span>in the future.</span></h2></div><div className="sponsor-cta-body"><p className="large-copy">The next generation is already building solutions for real-world school and community challenges. Support our hackers today.</p><a className="button primary" href="mailto:hack.athon.qhss@gmail.com">Become a sponsor <ArrowUpRight size={17} /></a></div></section>

      <section className="section-pad faq-section" id="faq"><div className="section-heading split"><div><SectionLabel>07 / QUESTIONS, ANSWERED</SectionLabel><h2>Good to<br /><span>know.</span></h2></div><MessageCircle className="faq-icon" /></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>0{index + 1}</span>{question}{openFaq === index ? <Minus /> : <Plus />}</button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>

      <footer className="footer section-pad" id="register"><div className="footer-top"><div><a href="#top" className="brand"><span className="brand-mark">&gt;_</span> QHSS HACKATHON</a><p>Make something worth<br />talking about.</p></div><div className="footer-register"><SectionLabel>READY TO SHIP?</SectionLabel><h2>Your next idea<br /><span>starts here.</span></h2><a className="button primary" href="mailto:hack.athon.qhss@gmail.com">Register your interest <ArrowUpRight size={17} /></a></div></div><div className="footer-bottom"><span>© 2026 QHSS HACK CLUB AND HACKATHON COMMITTEE</span><span>JAMAICA, NY / USA</span><div className="socials"><a href="https://github.com" aria-label="GitHub"><Code2 /></a><a href="https://instagram.com/qhsshackathon/" aria-label="Instagram"><Camera /></a><a href="https://linkedin.com" aria-label="LinkedIn"><BriefcaseBusiness /></a><a href="mailto:hack.athon.qhss@gmail.com" aria-label="Email"><Mail /></a></div></div></footer>

      {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close gallery"><X /></button><img src={gallery[lightbox][1]} alt={gallery[lightbox][0]} onClick={(event) => event.stopPropagation()} /><p>{gallery[lightbox][0]}</p></div>}
    </main>
  )
}