import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CloudCog,
  Copy,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import Scene from './components/Scene.jsx'

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.65 },
}

const skills = [
  'Zero Trust Architecture',
  'AWS / Azure / GCP',
  'Cloud Security',
  'AI & Agentic Systems',
  'IoT Security',
  'DevSecOps',
  'SIEM / SOAR',
  'Risk & Governance',
]

const stats = [
  ['467', 'Verified credentials'],
  ['46K+', 'LinkedIn followers'],
  ['5,000+', 'Learners mentored'],
  ['70%', 'Risk exposure reduced'],
]

const expertise = [
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Architecture',
    text: 'Enterprise Zero Trust, IAM governance, secure segmentation, incident readiness, architectural hardening, and controls aligned with ISO 27001 and NIST.',
  },
  {
    icon: CloudCog,
    title: 'Multi-Cloud Engineering',
    text: 'Secure and resilient architecture across AWS, Microsoft Azure, Google Cloud, Kubernetes, observability, DevSecOps, and cloud-native governance.',
  },
  {
    icon: Sparkles,
    title: 'AI, GenAI & Research',
    text: 'AI-driven cyber defence, agentic workflows, federated learning, explainable AI, and security research for IoT and cyber-physical systems.',
  },
]

const roles = [
  {
    title: 'Vice President — Cybersecurity Architecture & Resilience',
    organisation: 'Zee Outsourcing Solutions',
    period: 'May 2025 — Present',
    text: 'Leading cybersecurity architecture and resilience initiatives, including Project SentinelX, an AI-driven cyber defence platform focused on architectural hardening, automation, multi-cloud security, and measurable risk reduction.',
  },
  {
    title: 'Assistant Professor / Cluster Head ADP-CS / FYP Coordinator',
    organisation: 'Bahria University Lahore Campus',
    period: 'Academic Leadership',
    text: 'Leading programme coordination, curriculum delivery, quality assurance, final-year project governance, student mentoring, cloud and cybersecurity education, and industry-aligned academic initiatives.',
  },
  {
    title: 'PhD Researcher — IoT & Network Security',
    organisation: 'Universiti Putra Malaysia',
    period: 'Research',
    text: 'Researching trustworthy routing, intrusion detection, federated learning, anomaly detection, and resilient low-power IoT networks, with a focus on practical security outcomes.',
  },
]

const profiles = [
  ['Credly', '467 verified professional credentials', 'https://www.credly.com/users/muhammad-zunnurain-hussain/badges/credly'],
  ['Google Scholar', 'Research publications and citation record', 'https://scholar.google.com/citations?user=Ko_4nfkAAAAJ'],
  ['Microsoft Learn', 'Microsoft and Azure learning profile', 'https://learn.microsoft.com/en-us/users/muhammadzunnurainhussain-8823/'],
  ['Google Cloud Skills', 'Public cloud learning and skill-badge profile', 'https://www.skills.google/public_profiles/455dbcd3-6946-4250-a6a3-4e6657530df4'],
  ['ORCID', 'Persistent academic identity', 'https://orcid.org/0000-0002-6071-1029'],
  ['ResearchGate', 'Research portfolio and collaboration network', 'https://www.researchgate.net/profile/Muhammad-Zunnurain-Hussain'],
]

function SectionTitle({ eyebrow, title, copy }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[.28em] text-teal-300">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">{title}</h2>
      {copy && <p className="mt-4 leading-7 text-slate-400">{copy}</p>}
    </div>
  )
}

export default function App() {
  const [copied, setCopied] = useState(false)
  const [menu, setMenu] = useState(false)
  const nav = ['about', 'impact', 'expertise', 'experience', 'profiles', 'contact']

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(
        'Hello Dr. Hussain, I reviewed your portfolio and would like to discuss a cybersecurity, cloud, AI, speaking, consulting, or research collaboration.',
      )
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Scene />
      <div className="grid-overlay pointer-events-none fixed inset-0 z-[1]" />

      <header className="glass-nav fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#home" className="font-black tracking-[.2em] text-teal-300">MZH</a>
          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <a key={item} href={`#${item}`} className="text-xs font-semibold uppercase tracking-widest text-slate-300 transition hover:text-teal-300">
                {item}
              </a>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setMenu((value) => !value)} aria-label="Toggle navigation">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        {menu && (
          <nav className="border-t border-white/10 px-5 py-4 md:hidden">
            {nav.map((item) => (
              <a key={item} onClick={() => setMenu(false)} href={`#${item}`} className="block py-2 text-sm capitalize text-slate-300">
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <section id="home" className="flex min-h-screen items-center pt-24">
          <motion.div {...reveal} className="max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/25 bg-teal-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-teal-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-teal-300" /> Cybersecurity • Multi-Cloud • AI Leadership
            </div>
            <h1 className="max-w-5xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              Muhammad <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-violet-400 bg-clip-text text-transparent">Zunnurain Hussain</span>
            </h1>
            <p className="mt-6 max-w-4xl text-lg font-medium leading-8 text-slate-300 md:text-xl">
              Cybersecurity Architect & AI Leader • Zero Trust • Multi-Cloud (AWS, Azure, GCP) • IEEE Senior Member • Educator & Researcher
            </p>
            <p className="mt-5 max-w-3xl leading-7 text-slate-400">
              I help organisations align cybersecurity with business growth by combining resilient architecture, AI-driven defence, multi-cloud governance, research, and talent development.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-xl bg-teal-300 px-6 py-3 font-bold text-slate-950 shadow-glow transition hover:-translate-y-1">Let’s collaborate</a>
              <a href="#experience" className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-bold transition hover:border-teal-300/40 hover:bg-white/10">Explore experience</a>
            </div>
            <div className="mt-12 flex flex-wrap gap-5 text-sm text-slate-400">
              <span className="flex items-center gap-2"><BriefcaseBusiness size={17} className="text-teal-300" /> Executive + Academic Leadership</span>
              <span className="flex items-center gap-2"><Award size={17} className="text-teal-300" /> IEEE Senior Member</span>
              <span className="flex items-center gap-2"><GraduationCap size={17} className="text-teal-300" /> 5,000+ Learners Mentored</span>
            </div>
          </motion.div>
        </section>

        <motion.section {...reveal} id="about" className="scroll-mt-24 py-24">
          <SectionTitle
            eyebrow="01 // Profile"
            title="Security leadership grounded in execution, research, and education"
            copy="A multidisciplinary profile spanning enterprise cybersecurity architecture, cloud transformation, AI, higher education, research, consulting, and technical programme leadership."
          />
          <div className="grid gap-6 lg:grid-cols-[1.3fr_.7fr]">
            <div className="glass-card rounded-3xl p-7 md:p-9">
              <p className="text-lg leading-8 text-slate-300">
                Organisations lose value when security strategy fails to keep pace with cloud and AI adoption. My work focuses on closing that gap through Zero Trust architecture, multi-cloud security, cyber resilience, intelligent threat detection, secure IoT research, and practical capability building.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Core capabilities</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => <span key={skill} className="rounded-lg border border-white/10 bg-slate-950/55 px-3 py-2 text-xs text-slate-300">{skill}</span>)}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section {...reveal} id="impact" className="scroll-mt-24 py-24">
          <SectionTitle eyebrow="02 // Impact" title="A measurable professional footprint" copy="Selected figures from the uploaded professional and credential profiles." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <article key={label} className="glass-card rounded-3xl p-7">
                <p className="text-4xl font-black text-teal-300">{value}</p>
                <p className="mt-3 text-sm font-semibold text-slate-300">{label}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section {...reveal} id="expertise" className="scroll-mt-24 py-24">
          <SectionTitle eyebrow="03 // Expertise" title="Architecture, intelligence, and resilience" copy="Focused capabilities for enterprises, universities, research groups, and technology communities." />
          <div className="grid gap-6 md:grid-cols-3">
            {expertise.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="glass-card group rounded-3xl p-7 transition hover:-translate-y-2 hover:border-teal-300/30">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-300/10 text-teal-300"><Icon /></div>
                <p className="text-xs font-bold tracking-widest text-slate-500">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section {...reveal} id="experience" className="scroll-mt-24 py-24">
          <SectionTitle eyebrow="04 // Experience" title="Executive leadership, academic impact, and applied research" />
          <div className="space-y-5">
            {roles.map(({ title, organisation, period, text }, index) => (
              <article key={title} className="glass-card rounded-3xl p-7 md:flex md:gap-8">
                <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-teal-300/20 bg-teal-300/10 text-teal-300 md:mb-0">
                  {index === 2 ? <BookOpen /> : <BriefcaseBusiness />}
                </div>
                <div className="w-full">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold">{title}</h3>
                      <p className="mt-1 font-semibold text-teal-300">{organisation}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-400">{period}</span>
                  </div>
                  <p className="mt-4 max-w-4xl leading-7 text-slate-400">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section {...reveal} id="profiles" className="scroll-mt-24 py-24">
          <SectionTitle eyebrow="05 // Profiles" title="Verified professional and academic footprint" copy="Direct links to credential, cloud-learning, and research profiles." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profiles.map(([name, description, link]) => (
              <a key={name} href={link} target="_blank" rel="noreferrer" className="glass-card group rounded-2xl p-6 transition hover:-translate-y-1 hover:border-teal-300/35">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold group-hover:text-teal-300">{name}</h3>
                    <p className="mt-2 text-sm text-slate-400">{description}</p>
                  </div>
                  <ArrowUpRight size={18} className="shrink-0 text-slate-500 group-hover:text-teal-300" />
                </div>
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section {...reveal} id="contact" className="scroll-mt-24 py-24">
          <div className="glass-card overflow-hidden rounded-[2rem] p-7 md:p-10">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <SectionTitle
                  eyebrow="06 // Contact"
                  title="Build something secure, intelligent, and impactful"
                  copy="Open to executive cybersecurity leadership, consulting, speaking, academic collaboration, research partnerships, curriculum development, and cloud or AI security initiatives."
                />
                <div className="flex flex-wrap gap-3">
                  <a href="mailto:engrrhusain@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-teal-300 px-5 py-3 font-bold text-slate-950"><Mail size={18} /> Email</a>
                  <a href="https://www.linkedin.com/in/muhammad-zunnurain-hussain-50641b61" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-bold"><Linkedin size={18} /> LinkedIn</a>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/65 p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Quick outreach message</p>
                <p className="mt-4 font-mono text-sm leading-7 text-slate-400">“Hello Dr. Hussain, I reviewed your portfolio and would like to discuss a cybersecurity, cloud, AI, speaking, consulting, or research collaboration.”</p>
                <button onClick={copyMessage} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-bold hover:border-teal-300/30"><Copy size={16} />{copied ? 'Message copied' : 'Copy message'}</button>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Muhammad Zunnurain Hussain.</p>
          <div className="flex gap-4">
            <a href="https://github.com/mzunnurainhussain" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="mailto:engrrhusain@gmail.com" aria-label="Email"><Mail size={18} /></a>
            <a href="https://www.linkedin.com/in/muhammad-zunnurain-hussain-50641b61" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
