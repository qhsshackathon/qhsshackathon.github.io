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
  ['01', 'Showcase', 'The games and event software built by the Hackathon Software department go on display, alongside games from Hack Software and builds from Hack Hardware. It is where the whole club’s semester of work gets seen.'],
  ['02', 'Build', 'Teams of 2 to 4 build around the Winter Hackathon topic—Parent-Teacher Connection—across four award categories. The build window follows the familiar hackathon format unless the board changes it: around 5 hours.'],
  ['03', 'Presentations + prizes', 'Every team submits an ~4-minute video and presents their work, explains their choices, and answers judge questions. Scores are tallied and prizes go out at the end.'],
]

const tracks = [
  [
    'COMMUNICATION',
    'Best Communication Award',
    'It will be evaluated based on the video. The video will be approximately 4 minutes. The award will be based on how evenly they spread their section in the video and how deeply and feasible their project is.',
  ],
  [
    'SOFTWARE: BEGINNER',
    'Beginner Software Award',
    'This award is based on how impressive a team’s innovation is as an idea and a pitch instead of coding or implementation capacity, demonstrating how a team’s innovation and use of software allowed for an effective project. Intended for teams who create a presentation, sketch, or anything that enables parent-teacher connection effectively without heavy software/systems.',
  ],
  [
    'SOFTWARE: ADVANCED',
    'Advanced Software Award',
    'This sectional award is based on how well you build the software—actual coding implementation and software output that works as a product, not just a pitch. Fundamentally: how much actual code did you write, how well can it work as a product, and is it an effective software implementation of your idea?',
  ],
  [
    'HARDWARE',
    'Hardware Award',
    'This award recognizes teams that put together the digital and physical world—most effectively integrating 3D modeling or CAD to build or demonstrate their solution. Evaluated on how easily the hardware interacts with software, creativity, and effectiveness.',
  ],
]

const awards = [
  'Best Communication Award',
  'Beginner Software Award',
  'Advanced Software Award',
  'Hardware Award',
]

const rubric = [
  ['It works', '25', 'The project runs live or functions as a clear, cohesive prototype.'],
  ['Justification', '25', 'Why this problem, why this approach, and what the team would change with more time.'],
  ['Implementation / Craft', '20', 'Code quality, CAD/3D design, or pitch depth—and every member can explain their part.'],
  ['Theme fit', '15', 'How directly the project boosts parent-teacher connection and day-to-day involvement.'],
  ['Presentation', '15', 'Evenly distributed ~4-minute video/demo, clear delivery, and strong answers to questions.'],
]

const schedule = [
  ['08:00', 'Check-in + breakfast', 'Grab a badge, meet your team, and get your first caffeine fix.'],
  ['09:00', 'Opening ceremony', 'Rules, prompts, prizes, and the official countdown.'],
  ['10:00', 'Build begins', 'Turn the blank canvas into something useful, weird, or both.'],
  ['15:00', 'Presentations + judging', 'Four minutes to present, two minutes for judge questions.'],
  ['17:00', 'Showcase + awards', 'See the semester’s work, celebrate every launch, and award the winners.'],
]

const faqs = [
  ['Who can participate?', 'Any student with a drive to build and willingness to learn. No prior experience required.'],
  ['Do I need experience?', 'Not at all. With tracks like the Beginner Software Award and Best Communication Award, you can compete with a strong concept, sketch, or pitch—or dive into full code and CAD hardware.'],
  ['Do I need a team?', 'Come solo or bring up to three friends. We can also make balanced groups based on experience levels.'],
  ['What should I bring?', 'A laptop, charger, water bottle, and anything that helps you think. We provide food, Wi-Fi, and good energy.'],
  ['Is it free?', 'Yes. Registration is completely free thanks to our community sponsors.'],
  ['What are the prizes?', 'Awards across Communication, Beginner Software, Advanced Software, and Hardware—plus gear and bragging rights for a year.'],
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
