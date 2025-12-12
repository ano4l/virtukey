import { useEffect, useState } from 'react'
import { Link, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { CodeIcon, BrainIcon, SparklesIcon, KeyIcon, RocketIcon, LinkIcon, CpuIcon, ZapIcon, UsersIcon, ToolIcon, ChartIcon, HandshakeIcon, PaletteIcon, TargetIcon } from './components/Icons'

const services = [
  {
    title: 'Custom Software',
    description:
      'Tailored platforms, internal tools, and data-rich experiences that match your operating model.',
  },
  {
    title: 'Web & Mobile Apps',
    description:
      'Product-grade experiences across web and mobile with performance, reliability, and accessibility baked in.',
  },
  {
    title: 'CRM Systems',
    description:
      'Engagement tools, pipeline visibility, and automated communications rooted in our CRM origins.',
  },
  {
    title: 'Payment Integrations',
    description:
      'Secure checkout, subscription flows, payouts, and compliance-ready reporting built around your workflows.',
  },
  {
    title: 'API Automation',
    description:
      'Connect SaaS, data sources, and internal systems to reduce manual ops and increase signal quality.',
  },
  {
    title: 'Enterprise Tools',
    description:
      'Dashboards, governance, and reliability patterns for teams that need clarity and control at scale.',
  },
]

const caseStudies = [
  {
    title: 'Integrated Member Platform',
    meta: 'CRM + Payments + Engagement',
    summary:
      'Unified member experience with role-based access, subscription billing, and automated outreach.',
  },
  {
    title: 'Operational API Layer',
    meta: 'Automation + Reporting',
    summary:
      'Bridged finance, logistics, and analytics stacks with resilient event-driven pipelines and observability.',
  },
  {
    title: 'Productized Client Portal',
    meta: 'Web App + AI Assist',
    summary:
      'Client-facing portal with guided workflows, secure document exchange, and AI-supported support flows.',
  },
]

const highlights = [
  'Hybrid expertise: business systems + custom engineering.',
  'Design-first delivery: structured, content-forward interfaces.',
  'Integration fluency: APIs, data, payments, identity, messaging.',
  'Measured rollout: pilots, observability, and guardrails by default.',
]

const metrics = [
  { value: '120+', label: 'Projects & pilots delivered' },
  { value: '30', label: 'Markets supported across clients' },
  { value: '45%', label: 'Average efficiency gain post-integration' },
  { value: '24h', label: 'Response SLA for active projects' },
]

const process = [
  { title: 'Discover', detail: 'Objectives, systems map, risk and dependency assessment.' },
  { title: 'Design', detail: 'Information architecture, UX flows, data contracts, edge cases.' },
  { title: 'Build', detail: 'Composable services, frontends, automation, QA, observability.' },
  { title: 'Integrate', detail: 'APIs, identity, payments, events, and rollout plans with guardrails.' },
  { title: 'Support', detail: 'Runbooks, incident paths, and iteration based on telemetry.' },
]

const stacks = [
  'TypeScript',
  'React / Next',
  'Node.js',
  'Python',
  'Postgres',
  'Supabase',
  'Prisma',
  'Redis',
  'AWS',
  'Azure',
  'GCP',
  'Stripe',
  'Shopify',
  'Salesforce',
  'HubSpot',
  'Auth0',
  'Clerk',
  'Segment',
  'Kafka',
  'Snowflake',
]

const engagement = [
  {
    title: 'Project Delivery',
    body: 'Defined scope, milestones, and delivery to production with clean handoff.',
  },
  {
    title: 'Product Partnership',
    body: 'Co-build with your team, establish delivery rituals, and ship as one squad.',
  },
  {
    title: 'Advisory & Strategy',
    body: 'Architecture, integration strategy, and vendor selection to steer investments.',
  },
]

const insights = [
  {
    title: 'Designing systems for resilience',
    detail: 'Instrument first, decide with telemetry, and build rollback-ready releases.',
  },
  {
    title: 'APIs as products',
    detail: 'Think contracts, lifecycle, and developer ergonomics to reduce breakage.',
  },
  {
    title: 'AI with guardrails',
    detail: 'Quality data, scoped prompts, and human-in-the-loop review where it matters.',
  },
]

const faqs = [
  {
    q: 'How do engagements start?',
    a: 'A short discovery (1-2 sessions) to align on objectives, systems, and constraints.',
  },
  {
    q: 'Do you work with internal teams?',
    a: 'Yes. We can co-build, embed rituals, and leave playbooks and runbooks in place.',
  },
  {
    q: 'What stacks do you prefer?',
    a: 'TypeScript-first across frontend/backend, with pragmatism for your environment.',
  },
]

const partners = ['B2B SaaS', 'Fintech', 'Health', 'Commerce', 'Membership', 'Operational Tools']

const assurances = [
  'Transparent delivery rituals with demos and decision logs.',
  'Observability by default: metrics, traces, and actionable alerts.',
  'Secure-by-design: auth, data handling, and privacy baked in early.',
  'Runbooks for support, incident paths, and steady-state ownership.',
]

const aiServices = [
  {
    title: 'AI Product Design',
    description: 'Use-case discovery, guardrails, and UX for assistive workflows.',
  },
  {
    title: 'LLM Integrations',
    description: 'RAG, tool use, and orchestration for domain-specific copilots.',
  },
  {
    title: 'Data & Evaluation',
    description: 'Pipelines, eval harnesses, and quality loops to keep responses honest.',
  },
  {
    title: 'Automation & Agents',
    description: 'Task routing, human-in-the-loop controls, and safe execution layers.',
  },
]

const aiProcess = [
  { title: 'Frame', detail: 'Map decisions, constraints, and human checkpoints.' },
  { title: 'Design', detail: 'Flows, prompts, safety rails, and measurable outcomes.' },
  { title: 'Build', detail: 'RAG, tools, and services with observability and tests.' },
  { title: 'Evaluate', detail: 'Human + automated evals and continuous tuning.' },
  { title: 'Deploy', detail: 'Rollouts with alerts, fallbacks, and versioning.' },
]

const aiCases = [
  {
    title: 'AI Service Desk',
    meta: 'Copilot + Workflow',
    summary: 'Agent that drafts responses, triggers workflows, and routes edge cases.',
  },
  {
    title: 'Knowledge Retrieval',
    meta: 'RAG + Observability',
    summary: 'Domain-tuned retrieval with evals, redaction, and freshness checks.',
  },
  {
    title: 'Ops Copilot',
    meta: 'Automation + Safety',
    summary: 'Guided task automation with approvals, logs, and audit-friendly trails.',
  },
]


export default function App() {
  const location = useLocation()
  const [prevPathname, setPrevPathname] = useState(location.pathname)

  useEffect(() => {
    console.log('Current location:', location.pathname)
    
    // Auto-refresh when navigating to a new route (except initial load)
    if (location.pathname !== prevPathname && prevPathname !== '') {
      console.log('Route changed from', prevPathname, 'to', location.pathname, '- refreshing page...')
      setTimeout(() => {
        window.location.reload()
      }, 100)
    }
    
    setPrevPathname(location.pathname)
  }, [location.pathname, prevPathname])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.16 },
    )

    const staggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('[data-stagger]')
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('in-view')
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll('[data-reveal]')
    elements.forEach((el) => observer.observe(el))

    const staggerContainers = document.querySelectorAll('[data-stagger-container]')
    staggerContainers.forEach((el) => staggerObserver.observe(el))

    return () => {
      observer.disconnect()
      staggerObserver.disconnect()
    }
  }, [])

  const isLanding = location.pathname === '/'

  return (
    <div className="min-h-screen bg-cloud text-ink">
      <SiteHeader hideNav={isLanding} />
      <ScrollManager />
      <main className="mx-auto flex max-w-6xl flex-col gap-14 px-6 py-12 md:py-16">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/software" element={<SoftwarePage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/story" element={<FounderStoryPage />} />
          <Route path="/contact" element={<ContactPage standalone />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    console.log('ScrollManager - location changed:', location.pathname)
    const { hash, pathname } = location
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  return null
}

function LogoIcon() {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
     width="32" height="32" viewBox="0 0 300.000000 300.000000"
     preserveAspectRatio="xMidYMid meet" className="h-8 w-8">
    <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
    fill="currentColor" stroke="none">
    <path d="M890 2544 c-327 -189 -599 -345 -605 -347 -10 -4 320 -1566 333
    -1578 13 -13 875 -509 883 -509 8 0 868 496 881 509 7 6 338 1538 338 1562 -1
    14 -1189 702 -1219 706 -9 1 -284 -153 -611 -343z m1112 -154 c276 -160 503
    -292 506 -294 7 -7 -279 -1329 -292 -1348 -6 -10 -169 -110 -363 -222 l-352
    -204 -357 207 c-209 121 -361 215 -366 227 -4 10 -71 316 -149 678 -115 535
    -139 660 -128 667 23 14 994 577 996 578 2 1 229 -130 505 -289z"/>
    <path d="M1075 2279 c-231 -133 -423 -244 -428 -248 -6 -6 207 -1031 229
    -1103 5 -17 44 -18 624 -18 580 0 619 1 624 18 24 78 236 1096 229 1102 -11
    11 -845 490 -852 490 -3 0 -195 -109 -426 -241z m747 -155 c178 -102 324 -187
    326 -189 4 -3 -168 -798 -178 -823 -10 -22 -13 -23 -132 -20 l-123 3 -3 248
    -2 247 -210 0 -210 0 -2 -247 -3 -248 -123 -2 c-118 -3 -123 -2 -132 20 -17
    41 -181 822 -173 825 6 2 606 350 640 371 1 1 147 -83 325 -185z"/>
    <path d="M1340 1925 l0 -65 65 0 65 0 0 65 0 65 -65 0 -65 0 0 -65z"/>
    <path d="M1530 1925 l0 -65 65 0 65 0 0 65 0 65 -65 0 -65 0 0 -65z"/>
    <path d="M1340 1740 l0 -60 65 0 65 0 0 60 0 60 -65 0 -65 0 0 -60z"/>
    <path d="M1530 1740 l0 -60 65 0 65 0 0 60 0 60 -65 0 -65 0 0 -60z"/>
    <path d="M1426 819 c-56 -48 -57 -119 -4 -176 19 -21 20 -26 9 -85 -7 -35 -15
    -73 -18 -85 -5 -23 -4 -23 87 -23 91 0 92 0 87 23 -3 12 -11 50 -18 84 -11 60
    -11 63 14 93 97 115 -45 268 -157 169z"/>
    </g>
    </svg>
  )
}

function SiteHeader({ hideNav = false }) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-cloud/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="transition-transform group-hover:scale-110">
            <LogoIcon />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-bold tracking-tight">VirtuKey</span>
            <span className="text-xs uppercase tracking-[0.3em] text-slate-500">Technologies</span>
          </div>
        </Link>
        {!hideNav && (
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <Link className="transition hover:text-ink hover:scale-105" to="/software">
              Software
            </Link>
            <Link className="transition hover:text-ink hover:scale-105" to="/ai">
              AI
            </Link>
            <Link className="transition hover:text-ink hover:scale-105" to="/story">
              Our Story
            </Link>
            <Link className="transition hover:text-ink hover:scale-105" to="/contact">
              Contact
            </Link>
          </nav>
        )}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="rounded-full border border-slate-800 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-slate-900 hover:text-white hover:scale-105"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  )
}

function Landing() {
  const cards = [
    {
      title: 'Software Development',
      body: 'Platforms, integrations, and automation with strong execution and governance.',
      accent: 'accent',
      to: '/software',
      icon: CodeIcon,
    },
    {
      title: 'AI',
      body: 'Copilots, retrieval, and safe automation with observable outcomes.',
      accent: 'accent2',
      to: '/ai',
      icon: BrainIcon,
    },
    {
      title: 'Our Story',
      body: 'Learn about our journey, values, and the team behind VirtuKey.',
      accent: 'ink',
      to: '/story',
      icon: SparklesIcon,
    },
  ]

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 shadow-soft"
      data-reveal="scale"
    >
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-accent blur-3xl animate-pulse-glow" />
        <div className="absolute right-0 bottom-10 h-48 w-48 rounded-full bg-accent2 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-4" data-reveal="slide-left">
          <div className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-4 py-2 font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
            VirtuKey — Choose Your Path
          </div>
          <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Start Here</div>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3" data-stagger-container>
          {cards.map((card, index) => (
            <Link
              key={card.title}
              to={card.to}
              data-stagger
              className="interactive-card group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/80 p-6 text-left transition hover:border-ink hover:bg-white focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`h-12 w-12 rounded-full border-4 border-${card.accent}/20 bg-${card.accent}/10 flex items-center justify-center`}>
                    <card.icon className={`h-6 w-6 text-${card.accent}`} />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{card.title}</h3>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{card.body}</p>
              <div
                className={`mt-5 h-1 w-16 rounded-full transition-all duration-500 group-hover:w-full ${
                  card.accent === 'accent2'
                    ? 'bg-accent2'
                    : card.accent === 'ink'
                      ? 'bg-ink'
                      : 'bg-accent'
                }`}
              />
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-slate-500" data-reveal="slide-right">
          <span className="font-mono text-[11px] hover-scale cursor-default">Editorial</span>
          <span className="font-mono text-[11px] hover-scale cursor-default">Minimal</span>
          <span className="font-mono text-[11px] text-accent2 hover-scale cursor-default">Human-Centered</span>
        </div>
      </div>
    </section>
  )
}

function SoftwarePage() {
  return (
    <>
      <SoftwareHero />
      <SoftwareMetrics />
      <AboutBlock />
      <Services />
      <Process />
      <CaseStudies />
      <Why />
      <Stack />
      <Engagement />
      <Assurance />
      <Partners />
      <FAQ />
      <ContactSection />
      <ClosingCTA />
    </>
  )
}

function AIPage() {
  return (
    <>
      <AIHero />
      <AIServices />
      <AIProcess />
      <AICases />
      <Assurance accent="accent2" />
      <Partners />
      <FAQ accent="accent2" />
      <ContactSection accent="accent2" />
      <ClosingCTA accent="accent2" />
    </>
  )
}

function ContactPage({ standalone = false }) {
  return (
    <>
      {standalone && (
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft" data-reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink">
            Let us plan your build.
          </h1>
          <p className="mt-3 text-base text-slate-700">
            Tell us about the product, system, or AI experience you want to launch. We respond
            quickly and propose a clear path.
          </p>
        </section>
      )}
      <ContactSection />
      <ClosingCTA />
    </>
  )
}

function AIHero() {
  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 shadow-soft"
      data-reveal
    >
      <div className="scribble-corner alt -left-6 -top-6"></div>
      <div className="scribble-corner -right-10 bottom-6 rotate-12"></div>
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <div className="absolute -left-10 top-10 h-56 w-56 rotate-6 rounded-full border-4 border-dashed border-accent2/60 blur-[1px]" />
        <div className="absolute right-10 bottom-0 h-64 w-64 -rotate-3 rounded-full border-4 border-accent2/30 blur-[1px]" />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-3 rounded-full bg-accent2/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.25em] text-accent2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent2" />
          AI Track
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Layered accent</div>
      </div>
      <div className="mt-8 grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-end">
        <div className="space-y-6">
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl">
            AI that is observable, assistive, and safe.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-700">
            Copilots, retrieval, and automation with clear guardrails, evals, and measurable impact.
            Built to fit your stack and your operators.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-900"
            >
              Start AI Project
            </Link>
            <Link
              to="/ai#work"
              className="rounded-full border border-accent2 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink"
            >
              See AI Work
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
          <div className="text-xs uppercase tracking-[0.25em] text-slate-500">AI Focus</div>
          <div className="grid grid-cols-2 gap-3 text-sm font-medium text-slate-800">
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">Copilots</div>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">RAG</div>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">Agents</div>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">Safety Rails</div>
          </div>
          <div className="text-sm text-slate-600">
            Editorial structure with layered accents—subtle strokes, bold type, calm grid.
          </div>
        </div>
      </div>
    </section>
  )
}

function AIServices() {
  return (
    <section
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12"
      data-reveal
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">AI Services</p>
          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Assistive, observable, and safe.
          </h3>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-accent2">AI Track</div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2" data-stagger-container>
        {aiServices.map((item) => (
          <div
            key={item.title}
            data-stagger
            className="interactive-card rounded-2xl border border-slate-200 bg-slate-50/80 p-6 transition hover:border-accent2 hover:bg-white hover-glow-purple focus:outline-none focus:ring-2 focus:ring-accent2 focus:ring-offset-2"
          >
            <div className="flex items-start justify-between">
              <h4 className="font-display text-xl font-semibold tracking-tight text-ink">
                {item.title}
              </h4>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent2 transition hover:scale-110">AI</span>
            </div>
            <p className="mt-3 text-base leading-relaxed text-slate-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function AIProcess() {
  return (
    <section
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12"
      data-reveal
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">AI Process</p>
          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Safety rails + measurable outcomes.
          </h3>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-accent2">Observe & Eval</div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-5">
        {aiProcess.map((step, index) => (
          <div
            key={step.title}
            className="hover-lift flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 focus:outline-none focus:ring-2 focus:ring-accent2 focus:ring-offset-2"
          >
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-accent2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent2" />
              {String(index + 1).padStart(2, '0')}
            </div>
            <h4 className="font-display text-xl font-semibold tracking-tight text-ink">{step.title}</h4>
            <p className="text-sm leading-relaxed text-slate-700">{step.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function AICases() {
  return (
    <section
      id="work"
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12"
      data-reveal
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">AI Snapshots</p>
          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Selected AI work.
          </h3>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-accent2">AI Track</div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {aiCases.map((item) => (
          <div
            key={item.title}
            className="hover-lift rounded-2xl border border-slate-200 bg-slate-50/80 p-6 transition hover:border-accent2 hover:bg-white focus:outline-none focus:ring-2 focus:ring-accent2 focus:ring-offset-2"
          >
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-slate-500">
              <span>{item.meta}</span>
              <span className="text-accent2">AI</span>
            </div>
            <h4 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink">
              {item.title}
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.summary}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function SoftwareHero() {
  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12"
      data-reveal
    >
      <div className="scribble-corner -left-8 -top-8"></div>
      <div className="scribble-corner alt right-0 bottom-0 rotate-6"></div>
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-4 py-2 font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Software Track
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Build & Integrate</div>
      </div>
      <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-end">
        <div className="space-y-6">
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl">
            Software. Systems. Solutions.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-700">
            We build custom digital tools that help businesses grow, integrate, and innovate. From
            CRM roots to full-stack delivery, we design and ship the systems that keep teams aligned.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-900"
            >
              Start a Project
            </Link>
            <Link
              to="/software#work"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink"
            >
              See Work
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
          <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Focus Areas</div>
          <div className="grid grid-cols-2 gap-3 text-sm font-medium text-slate-800">
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">Custom Software</div>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">Web & Mobile Apps</div>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">API Automation</div>
            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">Integrations</div>
          </div>
          <div className="text-sm text-slate-600">
            Structured, content-first presentation for a software partner that values clarity and measurable outcomes.
          </div>
        </div>
      </div>
    </section>
  )
}

function SoftwareMetrics() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-10" data-reveal>
      <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">Software Track</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Proof, pace, and polish.
          </h2>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Data Points</div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-4" data-stagger-container>
        {metrics.map((item) => (
          <div key={item.label} data-stagger className="interactive-card rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-6 hover-glow">
            <div className="font-display text-3xl font-bold tracking-tight text-ink">{item.value}</div>
            <div className="mt-2 text-sm text-slate-600">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function AboutBlock() {
  return (
    <section id="about" className="grid gap-6 md:grid-cols-[1.1fr_1fr]" data-reveal>
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">Our Expansion</p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          From CRM innovation to full-stack software development.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          VirtuKey started as a focused CRM and engagement suite. Today, we architect and ship full digital ecosystems,
          combining custom software, integration strategy, and product delivery so teams can move faster with confidence.
        </p>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-ink text-center font-mono text-sm font-bold leading-10 text-white">
            01
          </div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">What We Build</p>
        </div>
        <div className="mt-6 grid gap-3 text-sm font-medium text-slate-800">
          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
            Custom software, products, and platforms
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">Build</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
            Systems integration, automation, and data clarity
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">Integrate</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3">
            Productized experiences with support and rollouts
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">Ship</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12" data-reveal>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">Services</p>
          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            What We Build
          </h3>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Structured. Minimal. Precise.</div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2" data-stagger-container>
        {services.map((item) => (
          <div
            key={item.title}
            data-stagger
            className="interactive-card group rounded-2xl border border-slate-200 bg-slate-50/80 p-6 transition hover:border-ink hover:bg-white focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
          >
            <div className="flex items-start justify-between">
              <h4 className="font-display text-xl font-semibold tracking-tight text-ink">{item.title}</h4>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 transition group-hover:scale-110 group-hover:text-accent">Build</span>
            </div>
            <p className="mt-3 text-base leading-relaxed text-slate-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12" data-reveal>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">Approach</p>
          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            How we move from brief to launch.
          </h3>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Process</div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-5" data-stagger-container>
        {process.map((step, index) => (
          <div
            key={step.title}
            data-stagger
            className="interactive-card flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 hover-glow focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
          >
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              {String(index + 1).padStart(2, '0')}
            </div>
            <h4 className="font-display text-xl font-semibold tracking-tight text-ink">{step.title}</h4>
            <p className="text-sm leading-relaxed text-slate-700">{step.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function CaseStudies() {
  return (
    <section id="work" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12" data-reveal>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">Case Study Snapshots</p>
          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Report-style cards. Clean. Simple.
          </h3>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Selected Work</div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3" data-stagger-container>
        {caseStudies.map((item, index) => (
          <div
            key={item.title}
            data-stagger
            className="interactive-card rounded-2xl border border-slate-200 bg-slate-50/80 p-6 transition hover:border-ink hover:bg-white focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
          >
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-slate-500">
              <span>{item.meta}</span>
              <span className="text-accent transition hover:scale-110">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h4 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink">{item.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.summary}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12" data-reveal>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">Why VirtuKey</p>
          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Hybrid expertise. Structured delivery.
          </h3>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Partner Benefits</div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {highlights.map((point) => (
          <div
            key={point}
            className="hover-lift flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4"
          >
            <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
            <p className="text-base font-medium text-slate-800">{point}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12" data-reveal>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">Stack & Integrations</p>
          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Built for complex ecosystems.
          </h3>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Tooling</div>
      </div>
      <div className="mt-8 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500">Engineering</div>
          <p className="mt-2 text-sm text-slate-700">
            Modern stacks for frontend, backend, and cloud with strong typing and testing.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500">Integrations</div>
          <p className="mt-2 text-sm text-slate-700">
            Payments, identity, data, CRM, and analytics stitched together with resilient APIs.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500">Reliability</div>
          <p className="mt-2 text-sm text-slate-700">
            Observability, rollbacks, runbooks, and proactive monitoring for production trust.
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {stacks.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

function Engagement() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12" data-reveal>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">Engagement</p>
          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Choose the path that fits your team.
          </h3>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Working Style</div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {engagement.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 transition hover:-translate-y-1 hover:border-ink hover:bg-white focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-display text-xl font-semibold tracking-tight text-ink">{item.title}</h4>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500">Mode</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Assurance({ accent = 'accent' }) {
  const dotClass = accent === 'accent2' ? 'bg-accent2' : 'bg-accent'
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12" data-reveal>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">Reliability</p>
          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Delivery with structure and accountability.
          </h3>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Assurance</div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {assurances.map((item) => (
          <div
            key={item}
            className="hover-lift flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
          >
            <span className={`mt-1 h-2 w-2 rounded-full ${dotClass}`} />
            <p className="text-base font-medium text-slate-800">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12" data-reveal>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">Partners</p>
          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Teams we build for and alongside.
          </h3>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Industries</div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {partners.map((item) => (
          <span
            key={item}
            className="hover-lift rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-6 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
          <p className="font-display text-lg font-semibold text-ink">Enterprise-readiness</p>
          <p className="mt-2 text-sm text-slate-700">
            Identity, role models, audit trails, and data governance layered into delivery.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
          <p className="font-display text-lg font-semibold text-ink">Operator empathy</p>
          <p className="mt-2 text-sm text-slate-700">
            We respect frontline workflows, measuring impact on effort, speed, and accuracy.
          </p>
        </div>
      </div>
    </section>
  )
}

function FAQ({ accent = 'accent' }) {
  const badgeClass = accent === 'accent2' ? 'text-accent2' : 'text-slate-500'
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12" data-reveal>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">FAQ</p>
          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Quick answers.
          </h3>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-slate-500">What to expect</div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {faqs.map((item) => (
          <div key={item.q} className="hover-lift rounded-2xl border border-slate-200 bg-slate-50/80 p-6">
            <p className={`text-xs font-mono uppercase tracking-[0.25em] ${badgeClass}`}>Q</p>
            <h4 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">{item.q}</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ContactSection({ accent = 'accent' }) {
  const borderClass = accent === 'accent2' ? 'border-accent2' : 'border-accent'
  return (
    <section
      id="contact"
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12"
      data-reveal
    >
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">Contact</p>
          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Tell us about the product, the system, or the rollout you need.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            We work best when we pair with your team early - clarifying objectives, mapping integrations, and sequencing
            delivery for quick, reliable launches.
          </p>
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className={`h-8 w-8 rounded-full border ${borderClass} bg-white flex items-center justify-center`}>
                <svg
                  className="h-4 w-4 text-ink"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>
              <a href="mailto:anotida@virtukey.co.za" className="text-slate-700 hover:text-ink transition-colors">
                anotida@virtukey.co.za
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className={`h-8 w-8 rounded-full border ${borderClass} bg-white flex items-center justify-center`}>
                <svg
                  className="h-4 w-4 text-ink"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2 15 15 0 0 1-13-13 2 2 0 0 1 2-2Z" />
                </svg>
              </div>
              <a href="tel:+27662309680" className="text-slate-700 hover:text-ink transition-colors">
                +27 66 230 9680
              </a>
            </div>
          </div>
          <div className="mt-6 grid gap-3 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${borderClass}`} />
              <span>Response within 1 business day.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${borderClass}`} />
              <span>Discovery, prototypes, integration plans, and delivery.</span>
            </div>
          </div>
        </div>
        <form className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4">
            <label className="text-sm font-semibold text-slate-800">
              Name
              <input
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink"
                placeholder="Your name"
                required
              />
            </label>
            <label className="text-sm font-semibold text-slate-800">
              Email
              <input
                type="email"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink"
                placeholder="you@company.com"
                required
              />
            </label>
            <label className="text-sm font-semibold text-slate-800">
              Project Focus
              <select
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink hover:border-slate-400 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%230f172a%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10"
                defaultValue="Software Build"
              >
                <option value="Software Build">Software Build</option>
                <option value="Systems Integration">Systems Integration</option>
                <option value="API Automation">API Automation</option>
                <option value="AI Integration">AI Integration</option>
                <option value="Product Discovery">Product Discovery</option>
              </select>
            </label>
            <label className="text-sm font-semibold text-slate-800">
              Notes
              <textarea
                className="mt-2 min-h-[120px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink"
                placeholder="What do you want to build or connect?"
              />
            </label>
            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-900"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

function BrandsSection() {
  const brands = [
    { name: 'Stripe', category: 'Payment Processing' },
    { name: 'Salesforce', category: 'CRM Platform' },
    { name: 'AWS', category: 'Cloud Infrastructure' },
    { name: 'OpenAI', category: 'AI Services' },
    { name: 'Shopify', category: 'E-commerce' },
    { name: 'Twilio', category: 'Communications' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Vercel', category: 'Deployment' },
  ]

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12" data-reveal>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">Partners</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Brands we work with.
          </h2>
          <p className="mt-3 text-base text-slate-700">
            Integrating with leading platforms to deliver seamless, powerful solutions.
          </p>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Technologies</div>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4" data-stagger-container>
        {brands.map((brand, index) => (
          <div
            key={brand.name}
            data-stagger
            className="interactive-card group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/80 p-6 text-center transition hover:border-ink hover:bg-white hover-glow focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2"
          >
            <div className="h-12 w-12 rounded-full border-2 border-slate-300 bg-white flex items-center justify-center mb-3 group-hover:border-ink transition-colors">
              <div className="h-6 w-6 bg-gradient-to-br from-ink to-slate-600 rounded-sm"></div>
            </div>
            <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{brand.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{brand.category}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 p-6 text-center">
        <p className="text-base font-medium text-slate-800">
          We specialize in integrating these platforms and many more to create cohesive, 
          powerful business systems that work exactly the way you need them to.
        </p>
      </div>
    </section>
  )
}

function FounderStoryPage() {
  return (
    <>
      <FounderHero />
      <FounderJourney />
      <FounderValues />
      <FounderVision />
      <BrandsSection />
      <TeamSection />
      <ContactSection />
      <ClosingCTA />
    </>
  )
}

function FounderHero() {
  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 shadow-soft md:p-16"
      data-reveal="scale"
    >
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-accent blur-3xl animate-pulse-glow" />
        <div className="absolute right-0 bottom-10 h-64 w-64 rounded-full bg-accent2 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
      <div className="relative">
        <div className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-4 py-2 font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
          Our Story
        </div>
        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div className="flex justify-center" data-reveal="slide-left">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/20 to-accent2/20 blur-2xl animate-pulse-glow" />
              <div className="relative h-64 w-64 rounded-full border-4 border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 shadow-soft overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-32 w-32 text-slate-400 animate-float">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="128" height="128" viewBox="0 0 300.000000 300.000000"
                     preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="currentColor" stroke="none">
                    <path d="M890 2544 c-327 -189 -599 -345 -605 -347 -10 -4 320 -1566 333
                    -1578 13 -13 875 -509 883 -509 8 0 868 496 881 509 7 6 338 1538 338 1562 -1
                    14 -1189 702 -1219 706 -9 1 -284 -153 -611 -343z m1112 -154 c276 -160 503
                    -292 506 -294 7 -7 -279 -1329 -292 -1348 -6 -10 -169 -110 -363 -222 l-352
                    -204 -357 207 c-209 121 -361 215 -366 227 -4 10 -71 316 -149 678 -115 535
                    -139 660 -128 667 23 14 994 577 996 578 2 1 229 -130 505 -289z"/>
                    <path d="M1075 2279 c-231 -133 -423 -244 -428 -248 -6 -6 207 -1031 229
                    -1103 5 -17 44 -18 624 -18 580 0 619 1 624 18 24 78 236 1096 229 1102 -11
                    11 -845 490 -852 490 -3 0 -195 -109 -426 -241z m747 -155 c178 -102 324 -187
                    326 -189 4 -3 -168 -798 -178 -823 -10 -22 -13 -23 -132 -20 l-123 3 -3 248
                    -2 247 -210 0 -210 0 -2 -247 -3 -248 -123 -2 c-118 -3 -123 -2 -132 20 -17
                    41 -181 822 -173 825 6 2 606 350 640 371 1 1 147 -83 325 -185z"/>
                    <path d="M1340 1925 l0 -65 65 0 65 0 0 65 0 65 -65 0 -65 0 0 -65z"/>
                    <path d="M1530 1925 l0 -65 65 0 65 0 0 65 0 65 -65 0 -65 0 0 -65z"/>
                    <path d="M1340 1740 l0 -60 65 0 65 0 0 60 0 60 -65 0 -65 0 0 -60z"/>
                    <path d="M1530 1740 l0 -60 65 0 65 0 0 60 0 60 -65 0 -65 0 0 -60z"/>
                    <path d="M1426 819 c-56 -48 -57 -119 -4 -176 19 -21 20 -26 9 -85 -7 -35 -15
                    -73 -18 -85 -5 -23 -4 -23 87 -23 91 0 92 0 87 23 -3 12 -11 50 -18 84 -11 60
                    -11 63 14 93 97 115 -45 268 -157 169z"/>
                    </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6" data-reveal="slide-right">
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl">
              Built from real problems, shaped by real solutions.
            </h1>
            <p className="text-lg leading-relaxed text-slate-700">
              VirtuKey was founded in April 2024 by Anotida Dzinotyiwei, born from seeing businesses 
              struggle with disconnected systems, manual workflows, and technology that promised more 
              than it delivered. VirtuKey bridges that gap—creating software that actually works for 
              the people using it.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800">
                Founded April 2024
              </div>
              <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800">
                120+ Projects
              </div>
              <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800">
                30 Markets
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FounderJourney() {
  const milestones = [
    {
      year: 'April 2024',
      title: 'The Beginning',
      description: 'Anotida Dzinotyiwei founded VirtuKey with a vision to simplify business systems and create software that truly serves its users.',
      icon: KeyIcon,
    },
    {
      year: 'May 2024',
      title: 'First Clients',
      description: 'Launched with custom software development and CRM solutions, helping early clients build their digital foundations.',
      icon: RocketIcon,
    },
    {
      year: 'October 2024',
      title: 'Integration Focus',
      description: 'Expanded into systems integration—connecting payments, CRMs, analytics, and automation for seamless workflows.',
      icon: LinkIcon,
    },
    {
      year: 'January 2025',
      title: 'AI Evolution',
      description: 'Pioneered safe AI integration with guardrails, evaluation frameworks, and human-in-the-loop design.',
      icon: CpuIcon,
    },
    {
      year: 'April 2025',
      title: 'One Full Year of VirtuKey Technologies',
      description: 'Now delivering end-to-end solutions from discovery to deployment across software and AI.',
      icon: ZapIcon,
    },
    {
      year: 'July 2025',
      title: 'System Development Focus and Evolution',
      description: 'Advanced system architecture and scalable development practices for enterprise-grade solutions.',
      icon: ToolIcon,
    },
  ]

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12" data-reveal>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">Journey</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            From idea to impact.
          </h2>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Timeline</div>
      </div>
      <div className="mt-10 space-y-6" data-stagger-container>
        {milestones.map((milestone, index) => (
          <div
            key={milestone.year}
            data-stagger
            className="interactive-card group relative rounded-2xl border border-slate-200 bg-slate-50/80 p-6 md:p-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
              <div className="flex items-center gap-4 md:flex-col md:items-center">
                <div className="animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  <milestone.icon className="w-12 h-12 text-accent" />
                </div>
                <div className="font-display text-2xl font-bold text-accent">{milestone.year}</div>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-700">{milestone.description}</p>
              </div>
            </div>
            <div className="absolute left-0 bottom-0 h-1 w-0 rounded-full bg-gradient-to-r from-accent to-accent2 transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  )
}

function FounderValues() {
  const values = [
    {
      title: 'Operator-First',
      description: 'Technology should serve the people using it, not the other way around. We design for real workflows.',
      icon: UsersIcon,
    },
    {
      title: 'Honest Engineering',
      description: 'No hype, no shortcuts. We build systems that are maintainable, observable, and built to last.',
      icon: ToolIcon,
    },
    {
      title: 'Measured Progress',
      description: 'Ship early, measure impact, iterate with data. Every decision is backed by telemetry and feedback.',
      icon: ChartIcon,
    },
    {
      title: 'Partnership',
      description: 'We succeed when you succeed. Your goals become our goals, and we own the outcomes together.',
      icon: HandshakeIcon,
    },
  ]

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12" data-reveal>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">Values</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            What drives us.
          </h2>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Core Beliefs</div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2" data-stagger-container>
        {values.map((value, index) => (
          <div
            key={value.title}
            data-stagger
            className="interactive-card rounded-2xl border border-slate-200 bg-slate-50/80 p-6 hover-glow"
          >
            <div className="mb-4 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
              <value.icon className="w-12 h-12 text-accent" />
            </div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{value.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-700">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function FounderVision() {
  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-ink to-slate-800 p-10 text-white shadow-soft md:p-16"
      data-reveal="scale"
    >
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-1/4 top-1/4 h-48 w-48 rounded-full bg-accent blur-3xl animate-pulse-glow" />
        <div className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full bg-accent2 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>
      <div className="relative">
        <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.25em] text-slate-200 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent2 animate-pulse-glow" />
          Vision
        </div>
        <div className="mt-8 max-w-3xl space-y-6">
          <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Building the future of connected business systems.
          </h2>
          <p className="text-lg leading-relaxed text-slate-200">
            Anotida's vision for VirtuKey is simple: create a world where businesses spend less time 
            fighting their technology and more time serving their customers. Where systems talk to each 
            other seamlessly. Where AI assists without replacing human judgment. Where every integration 
            is reliable, every deployment is measured, and every project delivers real value.
          </p>
          <p className="text-lg leading-relaxed text-slate-200">
            We're not just building software—we're building trust, reliability, and partnerships that last.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <div className="h-16 w-16 rounded-full border-4 border-white/20 bg-gradient-to-br from-accent/40 to-accent2/40 flex items-center justify-center animate-float">
              <SparklesIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="font-display text-xl font-bold">The VirtuKey Promise</p>
              <p className="text-sm text-slate-300">Clarity. Delivery. Partnership.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12" data-reveal>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">Team</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Small team. Big impact.
          </h2>
        </div>
        <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Who We Are</div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3" data-stagger-container>
        <div data-stagger className="interactive-card rounded-2xl border border-slate-200 bg-slate-50/80 p-6 text-center hover-glow">
          <div className="mx-auto h-24 w-24 rounded-full border-4 border-slate-200 bg-gradient-to-br from-accent/20 to-accent2/20 flex items-center justify-center mb-4 animate-float">
            <CodeIcon className="w-12 h-12 text-accent" />
          </div>
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink">Engineering</h3>
          <p className="mt-2 text-sm text-slate-700">Full-stack developers with deep integration expertise</p>
        </div>
        <div data-stagger className="interactive-card rounded-2xl border border-slate-200 bg-slate-50/80 p-6 text-center hover-glow" style={{ animationDelay: '0.1s' }}>
          <div className="mx-auto h-24 w-24 rounded-full border-4 border-slate-200 bg-gradient-to-br from-accent2/20 to-accent/20 flex items-center justify-center mb-4 animate-float" style={{ animationDelay: '0.5s' }}>
            <PaletteIcon className="w-12 h-12 text-accent2" />
          </div>
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink">Design</h3>
          <p className="mt-2 text-sm text-slate-700">UX-first designers focused on usability and clarity</p>
        </div>
        <div data-stagger className="interactive-card rounded-2xl border border-slate-200 bg-slate-50/80 p-6 text-center hover-glow" style={{ animationDelay: '0.2s' }}>
          <div className="mx-auto h-24 w-24 rounded-full border-4 border-slate-200 bg-gradient-to-br from-accent/20 to-accent2/20 flex items-center justify-center mb-4 animate-float" style={{ animationDelay: '1s' }}>
            <TargetIcon className="w-12 h-12 text-ink" />
          </div>
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink">Delivery</h3>
          <p className="mt-2 text-sm text-slate-700">Project leads who own outcomes and drive results</p>
        </div>
      </div>
      <div className="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 p-6 text-center">
        <p className="text-base font-medium text-slate-800">
          We're a lean, focused team that moves fast and delivers quality. Every member brings deep expertise 
          and a commitment to your success.
        </p>
      </div>
    </section>
  )
}

function ClosingCTA({ accent = 'accent' }) {
  const bg = accent === 'accent2' ? 'bg-gradient-to-r from-accent2 to-ink' : 'bg-ink'
  const border = accent === 'accent2' ? 'border-accent2/60' : 'border-slate-300/40'
  return (
    <section className={`mb-12 rounded-3xl border ${border} ${bg} px-8 py-10 text-white shadow-soft md:px-12`} data-reveal>
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="max-w-3xl space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-200">Next Step</p>
          <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Bring us the problem, we will shape the plan and own the delivery.
          </h3>
          <p className="text-base text-slate-100">
            A short intake is enough for us to map options, timelines, and the integration reality. Let's make your systems
            work together and move faster.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:scale-105"
          >
            Start a Project
          </a>
          <a
            href="#services"
            className="rounded-full border border-slate-300/40 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:scale-105"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  )
}

