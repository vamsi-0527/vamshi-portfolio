import { useEffect, useMemo, useState } from 'react'
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import {
  ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Check,
  Code2, Download, ExternalLink, Github, Linkedin, Mail, Menu, Moon, Sun,
  Terminal, X, Layers3, Cpu, Sparkles, CircleDot
} from 'lucide-react'
import { experience, profile, projects, skillGroups } from './data'
import type { Project } from './types'

function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const stored = localStorage.getItem('vp-theme')
    return stored === 'light' ? 'light' : 'dark'
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('vp-theme', theme)
  }, [theme])
  return { theme, toggleTheme: () => setTheme(t => t === 'dark' ? 'light' : 'dark') }
}


function Header({
  theme,
  toggleTheme,
}: {
  theme: 'dark' | 'light'
  toggleTheme: () => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const items = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/#about' },
    { label: 'Experience', to: '/#experience' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/#contact' },
  ]


const handleNavigation = (
  event: React.MouseEvent<HTMLAnchorElement>,
  to: string,
) => {
  event.preventDefault()
  setMenuOpen(false)

  // Home: return to the top of the page
  if (to === '/') {
    if (location.pathname !== '/') {
      navigate('/')
      window.setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 150)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return
  }

  // Projects: navigate to the projects page
  if (!to.includes('#')) {
    navigate(to)
    return
  }

  // About, Experience, and Contact
  const sectionId = to.split('#')[1]
  const alreadyOnHome = location.pathname === '/'

  if (!alreadyOnHome) {
    navigate('/')
  }

  window.setTimeout(
    () => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    },
    alreadyOnHome ? 0 : 150,
  )
}


  return (
    <header className="site-header">
      <div className="nav-wrap container">
        <Link className="brand" to="/" aria-label="Vamshi Peram home">
          <span className="brand-mark">
            VP<span>.</span>
          </span>
          <span className="brand-caption">SOFTWARE ENGINEER</span>
        </Link>

        <button
          className="mobile-menu-button icon-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          className={`nav-links ${menuOpen ? 'open' : ''}`}
          aria-label="Main navigation"
        >
          {items.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={(event) => handleNavigation(event, item.to)}
              className={({ isActive }) =>
                isActive &&
                !item.to.includes('#') &&
                item.to !== '/'
                  ? 'active'
                  : ''
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}

          <button
            className="theme-toggle icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === 'dark' ? 'light' : 'dark'
            } theme`}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <a className="button button-light nav-resume" href="/resume.pdf" download>
            <Download size={16} /> Resume
          </a>
        </nav>
      </div>
    </header>
  )
}




function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading">
    <span className="eyebrow"><span className="eyebrow-dot"/> {eyebrow}</span>
    <h2>{title}<span className="accent">.</span></h2>
    {description && <p>{description}</p>}
  </div>
}


function ProjectVisual({
  project,
  large = false,
}: {
  project: Project
  large?: boolean
}) {
  const isCopilot = project.slug === 'live-ai-meeting-copilot'
  const isTravel = project.slug === 'voyagemate-ai'
  const isEngine = project.slug === 'aircraft-engine-predictive-maintenance'

  return (
    <div
      className={`project-visual visual-${project.accent} ${
        large ? 'visual-large' : ''
      }`}
      aria-label={`${project.title} project preview`}
    >
      <div className="visual-topline">
        <span>
          <CircleDot size={12} />
          PROJECT / {project.number}
        </span>
        <span>CASE STUDY</span>
      </div>

      {isCopilot ? (
        <div className="copilot-mock">
          <div className="mock-sidebar">
            <div className="mock-logo">
              <Sparkles size={16} />
            </div>
            <i />
            <i />
            <i />
          </div>

          <div className="mock-content">
            <div className="mock-label">
              LIVE SESSION <span className="live-dot" />
            </div>

            <div className="mock-title">Meeting copilot</div>

            <div className="mock-wave" aria-hidden="true">
              {Array.from({ length: 28 }, (_, i) => (
                <span
                  key={i}
                  style={{ height: `${12 + ((i * 17) % 39)}px` }}
                />
              ))}
            </div>

            <div className="mock-line wide" />
            <div className="mock-line" />

            <div className="mock-ai">
              <Sparkles size={15} />
              <div>
                <b>Contextual suggestion</b>
                <span>Summarize the key decision and next step.</span>
              </div>
            </div>
          </div>
        </div>
      ) : isTravel ? (
        <div className="travel-mock">
          <div className="travel-map">
            <span className="map-route route-a" />
            <span className="map-route route-b" />
            <i className="map-pin pin-a" />
            <i className="map-pin pin-b" />
            <i className="map-pin pin-c" />
          </div>

          <div className="travel-card">
            <span className="mock-label">YOUR NEXT JOURNEY</span>
            <b>Explore more.</b>

            <div className="travel-stat">
              <span>Itinerary</span>
              <strong>Day by day</strong>
            </div>

            <div className="travel-stat">
              <span>Budget</span>
              <strong>Cost-aware</strong>
            </div>

            <div className="travel-progress">
              <i />
            </div>
          </div>
        </div>
      ) : isEngine ? (
        <div className="engine-mock">
          <div className="engine-meta">
            <span>ENGINE HEALTH / OVERVIEW</span>
            <b>RUL MODEL</b>
          </div>

          <div className="chart-label">
            Sensor sequence
            <span> — illustrative visualization</span>
          </div>

          <svg
            viewBox="0 0 520 180"
            role="img"
            aria-label="Illustrative sensor trend showing a changing engine signal"
          >
            <defs>
              <linearGradient
                id={`chartFill-${project.slug}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="currentColor"
                  stopOpacity=".22"
                />
                <stop
                  offset="100%"
                  stopColor="currentColor"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            {[30, 70, 110, 150].map((y) => (
              <line
                key={y}
                x1="0"
                x2="520"
                y1={y}
                y2={y}
                className="chart-grid"
              />
            ))}

            <path
              d="M0 42 C30 45 35 36 55 54 S90 62 112 50 S150 65 173 70 S210 60 230 85 S275 88 292 96 S330 80 352 105 S390 102 410 118 S460 125 520 148 L520 180 L0 180Z"
              fill={`url(#chartFill-${project.slug})`}
            />

            <path
              d="M0 42 C30 45 35 36 55 54 S90 62 112 50 S150 65 173 70 S210 60 230 85 S275 88 292 96 S330 80 352 105 S390 102 410 118 S460 125 520 148"
              className="chart-line"
            />
          </svg>

          <div className="engine-bottom">
            <span>SEQUENCE MODEL</span>
            <span>RUL ESTIMATION</span>
            <span>MODEL EVALUATION</span>
          </div>
        </div>
      ) : (
        <div className="project-visual-fallback">
          <Sparkles size={28} />
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
      )}

      <div className="visual-footer">
        <span>{project.category}</span>
        <ArrowUpRight size={16} aria-hidden="true" />
      </div>
    </div>
  )
}



function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="project-card"
      aria-label={`View ${project.title} case study`}
    >
      <ProjectVisual project={project} />

      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.number} / 03</span>
          <span>{project.category}</span>
        </div>

        <h3>
          {project.title}
          <ArrowUpRight size={19} aria-hidden="true" />
        </h3>

        <p>{project.summary}</p>

        <div className="tag-list">
          {project.stack.slice(0, 4).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="tag">+{project.stack.length - 4}</span>
          )}
        </div>

        <div className="project-card-cta">
          <span>Explore case study</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </div>
      </div>
    </Link>
  )
}



function Hero() {
  const roles = [
    'Software Developer',
    'Full-stack Engineer',
    'Backend Developer',
  ]

  const [, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length)
    }, 2400)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className="centered-hero" id="home">
      <div className="centered-hero-content">
        <p className="centered-greeting">
          Hello, I'm <span>Vamshi Peram</span>
        </p>

        
        <div className="centered-role game-title">
          <h1 className="software-developer-title">
          <span className="software-word">Software</span>{' '}
          <span className="developer-word">Developer</span>
          </h1>
          <span className="pacman-character" aria-hidden="true" />
        </div>


        <p className="centered-tagline">
          Building reliable software, intelligent systems, and
          <br className="desktop-break" /> meaningful digital experiences.
        </p>

        <div className="centered-hero-actions">
          <Link to="/projects" className="button button-accent">
            Explore my work <ArrowUpRight size={17} />
          </Link>

          <a href="/resume.pdf" download className="button button-outline">
            <Download size={16} /> Download resume
          </a>
        </div>

        <div className="centered-portrait-wrap">
          <div className="portrait-glow" />
          <div className="portrait-ring" />

          <img
            className="centered-portrait"
            src="/images/vamshi-photo.jpeg"
            alt="Vamshi Peram"
          />

          <span className="tech-float tech-react">⚛️</span>
          <span className="tech-float tech-python">🐍</span>
          <span className="tech-float tech-code">&lt;/&gt;</span>
          <span className="tech-float tech-js">🟨</span>
        </div>

        <p className="centered-availability">
          <span className="live-dot" />
          OPEN TO OPPORTUNITIES
        </p>
      </div>

      <div className="centered-socials" aria-label="Social links">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={20} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <Mail size={20} />
        </a>
      </div>
    </section>
  )
}






function About() {
  return <section className="section container" id="about">
    <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curiosity, meet execution" description="I like working across the stack — understanding the problem, designing the system, and shipping an experience that feels simple to use."/>
    <div className="about-grid">
      <div className="about-main"><span className="about-mark"><Terminal size={24}/></span><p>My work sits at the intersection of <strong>software engineering and applied AI</strong>. From building user-facing interfaces to connecting APIs and experimenting with machine-learning workflows, I enjoy understanding how the pieces fit together.</p><p>I'm especially interested in thoughtful architecture, reliable backend services, and AI features that solve a real user problem instead of adding complexity for its own sake.</p><div className="about-signature">Vamshi <span>Peram.</span></div></div>
      <div className="about-stats">
        <div className="stat-card"><span className="stat-number">01</span><Code2 size={19}/><b>Full-stack thinking</b><p>From user experience to API boundaries and data flow.</p></div>
        <div className="stat-card"><span className="stat-number">02</span><Cpu size={19}/><b>Applied AI</b><p>Building practical AI and machine-learning experiences.</p></div>
        <div className="stat-card"><span className="stat-number">03</span><Layers3 size={19}/><b>System mindset</b><p>Readable architecture, clear interfaces, and maintainability.</p></div>
      </div>
    </div>
  </section>
}


function Experience() {
  return (
    <section className="section section-muted" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="WHERE I'VE BEEN BUILDING"
          title="Experience in practice"
          description="My journey across software development, backend engineering, API integrations, and AI-enabled applications."
        />

        <div className="experience-timeline">
          {experience.map((item, index) => (
            <article
              className={`experience-card ${
                index === 0 ? 'experience-card-current' : ''
              }`}
              key={item.company}
            >
              <div className="experience-rail" aria-hidden="true">
                <span className="experience-node">
                  {index === 0 ? (
                    <CircleDot size={19} />
                  ) : (
                    `0${index + 1}`
                  )}
                </span>

                {index !== experience.length - 1 && (
                  <span className="experience-connector" />
                )}
              </div>

              <div className="experience-card-content">
                <div className="experience-card-top">
                  <div className="experience-role">
                    <span className="experience-kind">
                      {index === 0
                        ? 'CURRENT ROLE'
                        : 'PREVIOUS EXPERIENCE'}
                    </span>

                    <h3>{item.role}</h3>
                    <p className="experience-company">{item.company}</p>
                  </div>

                  <span className="experience-period">
                    {item.period}
                  </span>
                </div>

                <p className="experience-description">
                  {item.summary}
                </p>

                <div className="experience-tech-label">
                  TECHNOLOGIES &amp; TOOLS
                </div>

                <div className="tag-list experience-tags">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <ArrowUpRight
                className="experience-card-arrow"
                size={19}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        <p className="disclaimer">
          Experience details will be finalized against verified
          responsibilities and dates before publication.
        </p>
      </div>
    </section>
  )
}



const skillIcons: Record<string, string> = {

  JavaScript: '🟨',
  TypeScript: '🔷',
  Python: '🐍',
  Java: '☕',
  C: '🔵',
  HTML5: '🧡',
  CSS3: '💙',
  React: '⚛️',
  'Next.js': '⚫',
  'React Native': '⚛️',
  'Tailwind CSS': '🌊',
  Redux: '🟣',
  Zustand: '⚛️',
  Bootstrap: '🅱️',
  Vite: '⚡',
  'Node.js': '🟢',
  'Express.js': '⬛',
  Fastify: '🏎️',
  FastAPI: '⚡',
  'REST API': '🟩',
  WebSockets: '🔗',
  Swagger: '🟢',
  PostgreSQL: '🐘',
  MongoDB: '🍃',
  MySQL: '🐬',
  Redis: '🟥',
  Supabase: '🟩',
  Prisma: '🔺',
  LangChain: '🦜',
  LangGraph: '🐍',
  Qdrant: '🔴',
  'Hugging Face': '🤗',
  Gemini: '✨',
  Groq: '⚡',
  OpenAI: '🤖',
  Claude: '🧠',
  LSTM: '🐍',
  XGBoost: '🐍',
  LightGBM: '🐍',
  'Random Forest': '🌲',
  AWS: '☁️',
  Docker: '🐳',
  'Docker Compose': '🐳',
  'GitHub Actions': '⚙️',
  Railway: '🚆',
  Render: '🟢',
  Netlify: '🌐',
  Linux: '🐧',
  Git: '🔀',
  GitHub: '🐙',
  Postman: '🟠',
  Figma: '🎨',
  Photoshop: '🖼️',

}

function getSkillIcon(skill: string) {
  if (skillIcons[skill]) return skillIcons[skill]

  const normalized = skill.toLowerCase()

  if (normalized.includes('python')) return '🐍'
  if (normalized.includes('react')) return '⚛️'
  if (normalized.includes('database') || normalized.includes('sql')) return '🗄️'
  if (normalized.includes('cloud')) return '☁️'
  if (normalized.includes('machine learning') || normalized.includes('ai')) return '🤖'
  if (normalized.includes('api')) return '🔌'
  if (normalized.includes('testing')) return '🧪'

  return '💻'
}


function Skills() {
  const allSkills = skillGroups.flatMap((group) => group.items)

  return (
    <section className="section container skills-section">
      <div className="skills-title">
        <h2>
          My Tech Stack<span>.</span>
        </h2>
      </div>

      <div className="skills-cloud">
        {allSkills.map((item) => (
          <span className="skill-pill" key={item} title={item}>
            <span className="skill-icon" aria-hidden="true">
              {getSkillIcon(item)}
            </span>
            <span className="skill-name">{item}</span>
          </span>
        ))}
      </div>
    </section>
  )
}



function ProjectsSection() {
  return <section className="section section-muted" id="selected-work"><div className="container">
    <div className="section-heading-row"><SectionHeading eyebrow="SELECTED WORK" title="Projects with a purpose" description="A closer look at the problems, decisions, and engineering behind the work."/><Link to="/projects" className="text-link">View all projects <ArrowRight size={16}/></Link></div>
    <div className="projects-grid">{projects.map(project=><ProjectCard project={project} key={project.slug}/>)}</div>
  </div></section>
}

function Contact() {
  return <section className="section container" id="contact"><div className="contact-panel"><div className="contact-orb"/><div className="contact-content"><span className="eyebrow"><span className="eyebrow-dot"/> WHAT'S NEXT?</span><h2>Have a good problem?<br/><span>Let's build something.</span></h2><p>I'm open to conversations about software engineering, full-stack development, applied AI, and interesting projects.</p><a className="button button-accent" href={`mailto:${profile.email}?subject=${encodeURIComponent('Let’s connect')}`}>Start a conversation <ArrowUpRight size={17}/></a></div><div className="contact-side"><span>GET IN TOUCH</span><a href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={15}/></a><div className="contact-social"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/></a></div></div></div></section>
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner"><Link to="/" className="footer-brand">VP<span>.</span></Link><span>Designed with intent · Built with React</span><a href="#top" onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}}>Back to top ↑</a></div></footer>
}

function HomePage() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 100)
  }, [])
  return <><div id="top"/><Hero/><About/><Experience/><Skills/><ProjectsSection/><Contact/><Footer/></>
}

function ProjectsPage() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...Array.from(new Set(projects.map(p=>p.category)))]
  const visible = useMemo(() => filter === 'All' ? projects : projects.filter(p=>p.category === filter), [filter])
  return <><main className="page container"><div className="page-intro"><span className="eyebrow"><span className="eyebrow-dot"/> PROJECT INDEX / 001—003</span><h1>Selected <span className="accent">work.</span></h1><p>Projects that explore useful products, reliable systems, and applied intelligence. Open a case study to see the thinking behind the build.</p></div><div className="filter-row" aria-label="Filter projects">{categories.map(category=><button className={`filter-button ${filter===category?'selected':''}`} key={category} onClick={()=>setFilter(category)}>{category}</button>)}</div><div className="projects-grid project-index-grid">{visible.map(project=><ProjectCard project={project} key={project.slug}/>)}</div><div className="page-bottom-note"><span className="live-dot"/> More projects will be added as their case studies are verified.</div></main><Footer/></>
}

function Architecture({ project }: { project: Project }) {
  return <div className="architecture">
    {project.architecture.map((node, index)=><div className="architecture-step" key={node.label}><div className="architecture-node"><span>0{index+1}</span><b>{node.label}</b><p>{node.detail}</p></div>{index < project.architecture.length-1 && <div className="architecture-connector"><ArrowDownRight size={17}/></div>}</div>)}
  </div>
}


function ProjectDetailPage() {
  const { pathname } = useLocation()
  const slug = pathname.split('/').filter(Boolean).pop()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  if (!project) return <NotFound />

  return (
    <>
      <main className="project-detail container">
        <Link to="/projects" className="back-link">
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <section className="detail-hero">
          <div className="detail-copy">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              PROJECT {project.number} / CASE STUDY
            </span>

            <h1>
              {project.title}
              <span className="accent">.</span>
            </h1>

            <p>{project.description}</p>

            <div className="detail-status-row">
              <span className="detail-status">
                <CircleDot size={13} />
                {project.status}
              </span>
              <span className="detail-category">{project.category}</span>
            </div>

            <div className="tag-list">
              {project.stack.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="detail-actions">
              <a
                href={project.repo}
                className="button button-outline"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                View source code
                <ExternalLink size={14} />
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  className="button button-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>

          <ProjectVisual project={project} large />
        </section>

        <div className="detail-content">
          <aside className="detail-sidebar">
            <span className="eyebrow">ON THIS PAGE</span>
            <a href="#overview">Overview</a>
            <a href="#approach">Approach</a>
            <a href="#architecture">Architecture</a>
            <a href="#challenges">Engineering decisions</a>
            <a href="#outcomes">Outcomes & limitations</a>

            <div className="sidebar-note">
              <Code2 size={17} />
              <span>
                A closer look at the problem, design choices, and technical
                trade-offs.
              </span>
            </div>
          </aside>

          <div className="detail-article">
            <section id="overview" className="detail-section">
              <span className="section-kicker">01 / THE PROBLEM</span>
              <h2>Context & objectives</h2>
              <p>{project.problem}</p>
              <p>{project.description}</p>
            </section>

            <section id="approach" className="detail-section">
              <span className="section-kicker">02 / THE APPROACH</span>
              <h2>How the solution was approached</h2>
              <ul className="detail-list">
                {project.approach.map((item) => (
                  <li key={item}>
                    <Check size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="architecture" className="detail-section">
              <span className="section-kicker">03 / SYSTEM DESIGN</span>
              <h2>Architecture & workflow</h2>
              <p>
                This diagram presents the high-level responsibilities and
                flow described for the project. Refer to the source code for
                implementation-specific details.
              </p>
              <Architecture project={project} />
            </section>

            <section id="challenges" className="detail-section">
              <span className="section-kicker">04 / ENGINEERING NOTES</span>
              <h2>Challenges & decisions</h2>
              <ul className="detail-list">
                {project.challenges.map((item) => (
                  <li key={item}>
                    <CircleDot size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="outcomes" className="detail-section">
              <span className="section-kicker">05 / RESULTS & REFLECTION</span>
              <h2>Outcomes & limitations</h2>

              <ul className="detail-list">
                {project.outcomes.map((item) => (
                  <li key={item}>
                    <Check size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="limitations-box">
                <b>Known limitations</b>
                <ul>
                  {project.limitations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <div className="detail-end">
              <div>
                <span className="detail-end-label">EXPLORE THE CODE</span>
                <p>Review the repository for implementation details.</p>
              </div>

              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
              >
                View repository
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <section className="next-project">
          <span className="eyebrow">KEEP EXPLORING</span>
          <h2>
            Curious about the other projects?
            <span className="accent">.</span>
          </h2>
          <p>
            Explore more work across AI applications, software engineering,
            and machine learning.
          </p>
          <Link to="/projects" className="button button-outline">
            Browse all projects
            <ArrowRight size={16} />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}


function NotFound() {
  return <main className="not-found container"><span className="eyebrow">404 / NOT FOUND</span><h1>This page went off-script<span className="accent">.</span></h1><p>The page may have moved, or the link may be incorrect.</p><Link to="/" className="button button-accent">Return home <ArrowRight size={16}/></Link></main>
}

export default function App() {
  const { theme, toggleTheme } = useTheme()
  return <><Header theme={theme} toggleTheme={toggleTheme}/><Routes><Route path="/" element={<HomePage/>}/><Route path="/projects" element={<ProjectsPage/>}/><Route path="/projects/:slug" element={<ProjectDetailPage/>}/><Route path="*" element={<NotFound/>}/></Routes></>
}
