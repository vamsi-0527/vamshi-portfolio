
import type { Project } from './types'

export const profile = {
  name: 'Vamshi Peram',
  initials: 'VP',
  headline: 'Software Developer',
  subheadline: 'Full-Stack & AI Engineer',
  email: 'vamshi.peram0410@gmail.com',
  github: 'https://github.com/vamsi-0527/vamsi-0527',
  linkedin: 'https://www.linkedin.com/in/vamshi-peram-71ba5a320/',
  intro:
    'I build thoughtful software experiences, reliable backend systems, and AI-powered applications that turn complex problems into useful products.',
}

export const projects: Project[] = [
  {
    slug: 'live-ai-meeting-copilot',
    number: '01',
    title: 'Live AI Meeting Copilot',
    category: 'AI Applications',
    summary:
      'An AI meeting companion concept focused on real-time conversation workflows, contextual assistance, and actionable meeting insights.',
    description:
      'A meeting-oriented AI application exploring how audio workflows, transcription context, and model-generated assistance can work together in a focused user experience.',
    stack: ['React', 'TypeScript', 'AI APIs', 'Real-time audio'],
    accent: 'teal',
    status: 'Case study',
    repo: 'https://github.com/vamsi-0527/live_ai_meet_copilot',
    problem:
      'Meetings generate information quickly. Participants may miss important details, lose track of decisions, or spend time switching between notes and separate AI tools. A useful copilot should keep assistance connected to the meeting context.',
    approach: [
      'Organized the experience around a dedicated meeting workspace instead of a generic chat interface.',
      'Explored audio and transcription-oriented workflows as context for AI assistance.',
      'Separated the user interface from AI service integration responsibilities.',
      'Identified API credential handling and provider configuration as backend security concerns.',
    ],
    architecture: [
      {
        label: 'Meeting interface',
        detail:
          'Provides the workspace for meeting controls, transcript content, and contextual assistance.',
      },
      {
        label: 'Audio and transcript workflow',
        detail:
          'Handles meeting input and prepares available conversation context for downstream processing.',
      },
      {
        label: 'AI service layer',
        detail:
          'Connects application workflows to configured model services for responses and suggestions.',
      },
      {
        label: 'Contextual output',
        detail:
          'Presents relevant assistance in the meeting experience for users to review.',
      },
    ],
    challenges: [
      'Keeping the interface understandable when meeting information changes frequently.',
      'Presenting AI-generated suggestions without distracting users from the conversation.',
      'Separating frontend responsibilities from provider integration and secret management.',
      'Handling transcription and model-service failures without overstating what the system can do.',
    ],
    outcomes: [
      'Demonstrates a product-oriented approach to AI-assisted meeting workflows.',
      'Provides a case study in interface design, integration boundaries, and contextual AI assistance.',
      'Creates opportunities to evaluate latency, transcript quality, and suggestion usefulness with reproducible tests.',
    ],
    limitations: [
      'Live audio, transcription, and provider integrations should be tested against the current repository configuration.',
      'The availability of a working public demo has not been established here.',
      'Latency, accuracy, and productivity claims require measured results before publication.',
    ],
  },
  {
    slug: 'voyagemate-ai',
    number: '02',
    title: 'VoyageMate AI',
    category: 'AI Applications',
    summary:
      'An AI travel-planning application concept that structures trip preferences into itinerary suggestions and budget-aware planning.',
    description:
      'An agentic travel-planning project exploring workflow-based planning, backend API coordination, and structured itinerary responses.',
    stack: ['Python', 'FastAPI', 'LangGraph', 'External APIs'],
    accent: 'violet',
    status: 'Case study',
    repo: 'https://github.com/vamsi-0527/voyagemate_agenticai_travelplanner',
    problem:
      'Travel planning often requires coordinating destination research, activities, schedules, transport considerations, and estimated costs across different sources. A structured workflow can make the planning process easier to follow.',
    approach: [
      'Organized planning as a sequence of focused workflow steps instead of one unstructured prompt.',
      'Used a backend service boundary to receive requests and coordinate planning logic.',
      'Explored agent-workflow orchestration for separating planning responsibilities.',
      'Represented itinerary and budget information as structured outputs for easier review.',
    ],
    architecture: [
      {
        label: 'Planning interface',
        detail:
          'Collects the travel preferences available to the application, such as destination, dates, interests, and budget.',
      },
      {
        label: 'FastAPI service',
        detail:
          'Provides the backend request boundary and coordinates the planning workflow.',
      },
      {
        label: 'Agent workflow and tools',
        detail:
          'Organizes planning tasks and uses configured external information sources where available.',
      },
      {
        label: 'Itinerary response',
        detail:
          'Returns a structured travel plan and cost estimates when supported by the available information.',
      },
    ],
    challenges: [
      'Translating open-ended preferences into a coherent, structured itinerary.',
      'Keeping the planning workflow modular and understandable.',
      'Handling incomplete or unavailable information from external services.',
      'Distinguishing estimated costs from live prices, confirmed availability, and completed bookings.',
    ],
    outcomes: [
      'Demonstrates applied LLM workflow concepts and API-oriented application design.',
      'Provides a foundation for evaluating agent orchestration, output validation, and tool reliability.',
      'Highlights the importance of presenting travel recommendations with clear assumptions and limitations.',
    ],
    limitations: [
      'Travel prices, opening hours, and availability can change and must be verified with current providers.',
      'Recommendations should not be presented as confirmed bookings unless a booking workflow verifies them.',
      'Performance improvements require reproducible measurements before they can be claimed.',
    ],
  },
  {
    slug: 'aircraft-engine-predictive-maintenance',
    number: '03',
    title: 'Aircraft Engine Predictive Maintenance',
    category: 'AI / Machine Learning',
    summary:
      'A time-series machine-learning project exploring remaining useful life estimation from turbofan engine sensor sequences.',
    description:
      'A predictive-maintenance case study based on the NASA C-MAPSS turbofan engine degradation dataset, with a focus on Remaining Useful Life (RUL) prediction and model evaluation.',
    stack: ['Python', 'PyTorch / ML', 'Time-series data', 'Model Evaluation'],
    accent: 'amber',
    status: 'Case study',
    repo: 'https://github.com/vamsi-0527/aircraft-maintenance-system',
    problem:
      'Engine degradation data contains patterns across operating conditions and sensor measurements. Estimating remaining useful life from these sequences is a time-series regression problem that requires careful preprocessing and evaluation.',
    approach: [
      'Worked with multivariate sensor sequences from the NASA C-MAPSS turbofan engine dataset.',
      'Explored feature scaling, sequence-window construction, and degradation-aware RUL target preparation.',
      'Compared candidate deep-learning sequence models and traditional machine-learning approaches during experimentation.',
      'Used regression evaluation concepts to assess predictions and compare candidate models.',
    ],
    architecture: [
      {
        label: 'NASA C-MAPSS data',
        detail:
          'Provides engine operating settings, sensor readings, and run-to-failure sequences for model development.',
      },
      {
        label: 'Preprocessing pipeline',
        detail:
          'Prepares features, normalizes sensor values, constructs RUL targets, and generates time-series windows.',
      },
      {
        label: 'Model training',
        detail:
          'Trains and compares selected sequence-learning and traditional machine-learning models.',
      },
      {
        label: 'Evaluation and prediction',
        detail:
          'Uses held-out evaluation and regression metrics to assess RUL estimates before presenting results.',
      },
    ],
    challenges: [
      'Handling sensor features with different numerical scales and operating conditions.',
      'Constructing time-series windows while preserving the correct engine and evaluation split boundaries.',
      'Preparing degradation-aware targets consistently across training and evaluation data.',
      'Comparing candidate models using consistent metrics and experimental settings.',
    ],
    outcomes: [
      'Demonstrates practical experience with time-series preprocessing and predictive-maintenance modelling.',
      'Highlights the relationship between feature preparation, sequence design, and model evaluation.',
      'Provides a foundation for reporting verified MAE, RMSE, and other model-comparison results.',
    ],
    limitations: [
      'Results from NASA C-MAPSS experiments do not establish readiness for real-world aircraft maintenance.',
      'Final metrics and model rankings should be taken from verified experiment outputs.',
      'Deployment would require further validation, domain review, and evaluation under operational conditions.',
    ],
  },
]


export const skillGroups = [
  {
    title: 'All Skills',
    items: [
      'JavaScript',
      'TypeScript',
      'Python',
      'Java',
      'C',
      'HTML5',
      'CSS3',
      'React',
      'Next.js',
      'React Native',
      'Tailwind CSS',
      'Redux',
      'Zustand',
      'Bootstrap',
      'Vite',
      'Node.js',
      'Express.js',
      'Fastify',
      'FastAPI',
      'REST API',
      'WebSockets',
      'Swagger',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Redis',
      'Supabase',
      'Prisma',
      'LangChain',
      'LangGraph',
      'Qdrant',
      'Hugging Face',
      'Gemini',
      'Groq',
      'OpenAI',
      'Claude',
      'LSTM',
      'XGBoost',
      'LightGBM',
      'Random Forest',
      'AWS',
      'Docker',
      'Docker Compose',
      'GitHub Actions',
      'Railway',
      'Render',
      'Netlify',
      'Linux',
      'Git',
      'GitHub',
      'Postman',
      'Figma',
      'Photoshop',
    ],
  },
]





export const experience = [
  {
    role: 'Software Developer',
    company: 'Lakhi Technologies',
    period: 'Current',
    summary:
      'Contributing to software development across application interfaces, backend services, and AI-enabled product workflows.',
    tags: ['React', 'FastAPI', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Backend Developer Intern',
    company: 'Neuxa — Tastezt',
    period: 'Previous internship',
    summary:
      'Worked on backend application functionality and API integrations, including Aadhaar identity-verification workflows using Cashfree APIs.',
    tags: ['Node.js', 'TypeScript', 'MongoDB', 'Cashfree APIs', 'Postman'],
  },
]
