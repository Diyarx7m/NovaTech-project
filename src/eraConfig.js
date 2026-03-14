export const eras = [
  { year: 1995, label: '1995', subtitle: 'The Dawn of the Web' },
  { year: 2000, label: '2000', subtitle: 'Dot-Com Boom' },
  { year: 2005, label: '2005', subtitle: 'Web 2.0 Era' },
  { year: 2010, label: '2010', subtitle: 'Social & Mobile' },
  { year: 2015, label: '2015', subtitle: 'Flat Design & Material' },
  { year: 2025, label: '2025', subtitle: 'Minimal & AI-First' },
];

export const eraDescriptions = {
  1995: {
    tooltip: 'Early Web (1995): HTML tables, system fonts, grey backgrounds, hit counters, blinking text. Sites loaded over 28.8k modems. No CSS, no JS — just raw HTML and GIFs.',
    loadingMessages: ['Connecting to server...', 'Dialing modem...', 'Handshaking with NovaTech BBS...', 'Receiving HTML...', 'Loading page...', 'Please wait...'],
  },
  2000: {
    tooltip: 'Dot-Com Era (2000): Flash intros, stock tickers, dark backgrounds, neon colors, splash pages. Every startup was worth billions — until the crash.',
    loadingMessages: ['Loading Flash plugin...', 'Initializing NovaTech portal...', 'Fetching XML data...', 'Rendering frames...', 'Loading ticker...'],
  },
  2005: {
    tooltip: 'Web 2.0 (2005): Glossy buttons, rounded corners, gradients, Ajax calls, RSS feeds. The "beta" badge was a badge of honor. Blogs replaced press releases.',
    loadingMessages: ['Fetching Web 2.0 content...', 'Applying glossy finish...', 'Loading Ajax components...', 'Subscribing to RSS...'],
  },
  2010: {
    tooltip: 'Social/Mobile Era (2010): Like buttons everywhere, clean layouts, CSS3 transitions, Facebook Connect, social sharing. The smartphone changed everything.',
    loadingMessages: ['Loading mobile-optimized content...', 'Syncing social feeds...', 'Connecting to Facebook API...'],
  },
  2015: {
    tooltip: 'Flat Design & Material (2015): Bold flat colors, clean sans-serif typography, Material Design cards, hamburger menus. iOS 7 killed skeuomorphism overnight.',
    loadingMessages: ['Rendering flat UI...', 'Applying material elevation...', 'Loading Google Fonts...'],
  },
  2025: {
    tooltip: 'Modern Minimalism (2025): Dark mode, glassmorphism, massive kerned type, micro-animations, AI-native infrastructure. Less UI, more intelligence.',
    loadingMessages: ['Initializing...'],
  },
};

export const eraStyles = {
  1995: { className: 'era-1995' },
  2000: { className: 'era-2000' },
  2005: { className: 'era-2005' },
  2010: { className: 'era-2010' },
  2015: { className: 'era-2015' },
  2025: { className: 'era-2025' },
};

export const eraContent = {
  1995: {
    year: 1995,
    companyTagline: 'Professional Software for Business & Home',
    heroHeadline: 'Professional Software for the Modern PC',
    heroSub: 'NovaTech develops award-winning software for IBM-compatible PCs and Apple Macintosh. Our programs run on Windows 3.1, Windows 95, and DOS 6.22. Every product ships with a full printed manual and 90-day phone support.',
    heroCta: '[ Download Free Trial Disk ]',
    navLinks: ['Products', 'Support', 'Ordering', 'About Us', 'Contact'],
    products: [
      { name: 'NovaBusiness 3.1', desc: 'Complete business management for Windows 95 and DOS. Invoicing, payroll, inventory, and accounts. Ships on 3.5" floppy disks (12 disks). CD-ROM version available.', cta: '[ Order Now — $299 ]' },
      { name: 'NovaDraw Pro', desc: 'Desktop publishing and graphic design for print. 256-color support. Compatible with PostScript and HP LaserJet printers. Import from CorelDRAW 5 and PageMaker 5.', cta: '[ Learn More ]' },
      { name: 'NovaBase 2.0', desc: 'Database management for small businesses. Stores up to 50,000 records. Compatible with dBASE IV and Lotus 1-2-3. Generates mailing labels, invoices, and reports.', cta: '[ Free Demo Disk ]' },
    ],
    features: [
      { title: 'Windows 95 & DOS Compatible', desc: 'Tested on 486 DX2, Pentium 60, and Pentium 90 PCs. Minimum 8MB RAM required. Recommended: 16MB for best performance.' },
      { title: 'Apple Macintosh Version', desc: 'Full System 7.5 support. Runs on any Mac with 68030 or PowerPC processor. Universal binary. 4MB RAM required.' },
      { title: 'Toll-Free Technical Support', desc: 'Call 1-800-NOVATECH Monday to Friday, 9am to 5pm Eastern. Trained technicians answer your questions. No hold music, no runaround.' },
      { title: 'Complete Printed Manual', desc: 'Every box includes a full printed manual with index, screenshots, and step-by-step tutorials. Real paper. Real instructions.' },
    ],
    testimonials: [
      { quote: 'NovaBusiness replaced our accountant for the daily bookkeeping. The printed manual is the clearest I have ever read for any software.', name: 'Robert Henderson', title: 'Owner, Henderson Hardware Store' },
      { quote: 'We have been using NovaDraw Pro for six months and our newsletter looks completely professional now. The PostScript output is flawless.', name: 'Linda Marsh', title: 'Editor, Marsh Community Press' },
      { quote: 'The 90-day support line is worth the price alone. They walked me through the installation over the phone in fifteen minutes.', name: 'Tom Bradley', title: 'Manager, Bradley Office Supplies' },
    ],
    plans: [
      { name: 'Single License', price: '$149', period: '', features: ['1 PC Installation', 'Printed Manual Included', '90-Day Phone Support', 'Free Updates — 1 Year'], highlight: false },
      { name: 'Office Pack (5 PCs)', price: '$499', period: '', features: ['5 PC Installations', '2 Printed Manuals', '1-Year Phone Support', 'Free Updates — 2 Years'], highlight: true },
      { name: 'Site License', price: '$999', period: '', features: ['Unlimited PCs on 1 Site', 'On-Site Training (1 Day)', 'Priority Support Hotline', 'Free Updates — 3 Years'], highlight: false },
    ],
  },

  2000: {
    year: 2000,
    companyTagline: 'Powering the e-Commerce Revolution',
    heroHeadline: 'The Internet Changes Everything',
    heroSub: 'NovaTech.com is the destination for e-business solutions. We connect buyers, sellers, and partners worldwide using cutting-edge internet technology. 3 million registered users and growing. Join the revolution today.',
    heroCta: '>> ENTER SITE — IT IS FREE <<',
    navLinks: ['Portal', 'E-Commerce', 'B2B Exchange', 'Investors', 'Press Room'],
    products: [
      { name: 'NovaPortal', desc: 'Your complete internet portal. Email, news, weather, stock quotes, chat rooms, and personalized start pages — all in one place. Over 3 million registered users. Free to join.', cta: 'JOIN FREE NOW >>' },
      { name: 'NovaStore Builder', desc: 'Launch your online storefront in 24 hours. Accept Visa, MasterCard, and American Express. SSL-secured checkout. No programming required. Free 30-day trial.', cta: 'START FREE TRIAL >>' },
      { name: 'NovaMail Pro', desc: 'Web-based email with 10MB storage — more than Hotmail or Yahoo Mail. Access from any browser, any computer, anywhere in the world. Java-powered for maximum speed.', cta: 'GET FREE EMAIL >>' },
    ],
    features: [
      { title: '128-bit SSL Security', desc: 'All transactions protected with bank-grade encryption. VeriSign certified. Look for the padlock in your Netscape or Internet Explorer browser.' },
      { title: 'Sun Solaris Enterprise Servers', desc: 'UNIX-powered infrastructure with 99.9% uptime SLA. Redundant OC-3 connections to four major internet backbones. Hosted in Exodus Communications datacenter.' },
      { title: 'AOL & MSN Keywords', desc: 'Find us instantly. Type "NOVATECH" as your AOL keyword or MSN search. Bookmark us in IE or Netscape favorites for quick access.' },
      { title: 'Y2K Certified', desc: 'All NovaTech systems were fully audited and Y2K compliant before January 1, 2000. No issues. Your data is safe with us.' },
    ],
    testimonials: [
      { quote: 'Our online store went from zero to $80,000 in monthly orders within 90 days of launching on NovaStore. This internet thing is absolutely for real.', name: 'Gary Simmons', title: 'CEO, Simmons Sporting Goods Online' },
      { quote: 'NovaPortal is our company intranet homepage. The integrated stock ticker and news feeds save our traders 30 minutes every morning.', name: 'Patricia Dunn', title: 'CTO, Dunn Capital Management' },
      { quote: 'We are doing B2B procurement through NovaTech and processing $2M in orders monthly. The XML integration with our ERP was seamless.', name: 'Michael Torres', title: 'VP Supply Chain, Torres Industries' },
    ],
    plans: [
      { name: 'Startup', price: '$49.99', period: '/month', features: ['Online Store (50 products)', '5 Email accounts', 'Basic traffic reports', 'Shared hosting'], highlight: false },
      { name: 'Business', price: '$149.99', period: '/month', features: ['Unlimited products', '25 Email accounts', 'Real-time stats', 'Dedicated IP address', 'Phone support'], highlight: true },
      { name: 'Enterprise', price: '$499.99', period: '/month', features: ['Custom B2B solutions', 'Dedicated server', 'XML/EDI integration', '24/7 NOC support', 'SLA guarantee'], highlight: false },
    ],
  },

  2005: {
    year: 2005,
    companyTagline: 'Web 2.0 Tools for the Participatory Web',
    heroHeadline: 'Share. Connect. Collaborate.',
    heroSub: 'NovaTech builds the next generation of web applications. Our Ajax-powered platform lets your team work together in real time — no software to install, no IT department required. Sign up in 30 seconds.',
    heroCta: 'Try it Free — No Credit Card Required',
    navLinks: ['Products', 'Blog', 'Community', 'Pricing', 'Sign In'],
    products: [
      { name: 'NovaWiki', desc: 'Your team\'s collective knowledge base. WYSIWYG editing, version history, and full-text search. RSS feed for every page. Export to PDF. Subscribe with Bloglines or NetNewsWire.', cta: 'Start Free Beta' },
      { name: 'NovaProject', desc: 'Ajax-powered project management inspired by Getting Things Done. Drag-and-drop task boards, Gantt charts, time tracking. No page reloads. Works in Firefox 1.5, Safari, and IE6.', cta: 'Get Started' },
      { name: 'NovaShare', desc: 'Social bookmarking for your organization. Tag, share, and discover links and files with your team. Like del.icio.us but private. Folksonomy-powered. RSS for every tag.', cta: 'Join the Beta' },
    ],
    features: [
      { title: 'Ajax — Zero Page Reloads', desc: 'Everything updates instantly using XMLHttpRequest. No waiting, no flicker. Works in Firefox 1.5+, Safari 2+, and Internet Explorer 6+. Degrades gracefully.' },
      { title: 'RSS & Atom Everywhere', desc: 'Every page, project, and comment has its own RSS 2.0 and Atom 1.0 feed. Subscribe in Bloglines, Google Reader, NetNewsWire, or any aggregator.' },
      { title: 'RESTful Open API', desc: 'Full REST API with XML and JSON responses. Build mashups, widgets, and Greasemonkey scripts. Complete documentation on our developer wiki.' },
      { title: 'Tagging & Folksonomy', desc: 'Forget rigid folder structures. Tag everything. Let the collective intelligence of your team organize content naturally. Inspired by del.icio.us and Flickr.' },
    ],
    testimonials: [
      { quote: 'We replaced Basecamp, a wiki, and a file server with NovaTech tools. The Ajax interface is the fastest I have used. Our team blogs keep everyone synced.', name: 'Jason Fried', title: 'Founder, 37signals (beta user)' },
      { quote: 'NovaWiki replaced our static intranet. The RSS feed means I always know what changed without manually checking every page. Genius.', name: 'Kathy Sierra', title: 'Author, Creating Passionate Users blog' },
      { quote: 'Built a Greasemonkey mashup using the NovaShare API in one afternoon. Documentation is actually complete — rare for any web startup in beta.', name: 'Dave Winer', title: 'RSS inventor, Scripting News' },
    ],
    plans: [
      { name: 'Free Forever', price: '$0', period: '', features: ['2 Projects', '3 users', '100MB storage', 'Public projects only', 'Community support'], highlight: false },
      { name: 'Team (Beta Price!)', price: '$19', period: '/month', features: ['Unlimited Projects', '15 users', '5GB storage', 'Private projects', 'Email support', 'Full API access'], highlight: true },
      { name: 'Company', price: '$79', period: '/month', features: ['Everything in Team', 'Unlimited users', '25GB storage', 'Custom domain', 'Priority support', '99.9% SLA'], highlight: false },
    ],
  },

  2010: {
    year: 2010,
    companyTagline: 'Simple Tools. Real Results.',
    heroHeadline: 'Your Team. Any Device. Always in Sync.',
    heroSub: 'NovaTech builds clean, fast web apps that work beautifully on your Mac, PC, iPhone, and Android. Used by over 500,000 teams worldwide. Connect with your work wherever you are.',
    heroCta: 'Get Started — It\'s Free',
    navLinks: ['Products', 'Solutions', 'Pricing', 'Blog', 'Sign Up'],
    products: [
      { name: 'NovaDash', desc: 'Real-time business dashboards that pull from Google Analytics, Salesforce, Twitter, and 50+ other services. Updated live. Beautiful on iPad. Share with your whole team.', cta: 'Try NovaDash Free' },
      { name: 'NovaSync', desc: 'Keep your files synced across Mac, PC, iPhone, and Android. Share folders with teammates. 2GB free. Works offline and syncs when you reconnect. Like Dropbox but faster.', cta: 'Download Free App' },
      { name: 'NovaChat', desc: 'Real-time team messaging with @mentions, file sharing, and searchable message history. Dedicated iOS and Android apps. Integrates with email so nobody gets left out.', cta: 'Start Chatting Free' },
    ],
    features: [
      { title: 'iPhone & Android Apps', desc: 'Native apps for iOS 4.0+ and Android 2.2 Froyo. Full offline mode — work on the subway, on a plane. Syncs automatically when back online.' },
      { title: '100+ Integrations', desc: 'Connect Gmail, Salesforce, GitHub, Zendesk, FreshBooks, and more. Our open API lets developers build any integration they need.' },
      { title: 'Real-Time with WebSockets', desc: 'Changes appear instantly across the whole team — no more hitting Refresh. Built on WebSockets, with Socket.io fallback for older browsers.' },
      { title: 'Bank-Level Security', desc: '256-bit AES encryption at rest and in transit. Two-factor authentication via Google Authenticator. SOC 2 Type II certified.' },
    ],
    testimonials: [
      { quote: 'NovaDash ended our weekly spreadsheet meetings. The whole team sees live numbers on their iPhones. We made faster decisions in month one.', name: 'Chris Wanstrath', title: 'Co-founder, GitHub' },
      { quote: 'Moved our whole company to NovaTech tools in one weekend. The iPhone app is honestly better than the website. That is hard to do.', name: 'Drew Houston', title: 'Founder, Dropbox' },
      { quote: 'NovaChat cut internal email by 70%. The Android app is solid on my Galaxy S II and the message search works instantly.', name: 'Joel Spolsky', title: 'CEO, Stack Overflow' },
    ],
    plans: [
      { name: 'Free', price: '$0', period: '/forever', features: ['Up to 5 users', '5GB storage', 'iOS & Android apps', 'Basic integrations', 'Community support'], highlight: false },
      { name: 'Pro', price: '$25', period: '/month', features: ['Up to 25 users', '50GB storage', 'All 100+ integrations', 'Admin controls', 'Priority email support', 'Custom branding'], highlight: true },
      { name: 'Business', price: '$99', period: '/month', features: ['Unlimited users', '500GB storage', 'SSO & SAML', 'Dedicated support rep', 'SLA', 'On-premise option'], highlight: false },
    ],
  },

  2015: {
    year: 2015,
    companyTagline: 'Cloud Infrastructure Built for Developers',
    heroHeadline: 'Build Faster. Deploy Anywhere.',
    heroSub: 'NovaTech gives developers the infrastructure and tools to ship great products. Deploy from GitHub in one click. Scale automatically. Pay only for what you use.',
    heroCta: 'START BUILDING FREE',
    navLinks: ['Products', 'Developers', 'Pricing', 'Company', 'Sign Up'],
    products: [
      { name: 'NovaCloud', desc: 'Managed cloud infrastructure that scales automatically with your traffic. Deploy straight from GitHub or Bitbucket. Global CDN included. Zero-downtime deploys.', cta: 'DEPLOY NOW' },
      { name: 'NovaData', desc: 'Managed PostgreSQL, MySQL, Redis, and MongoDB. Automatic daily backups with point-in-time recovery. Read replicas. No database administration required.', cta: 'START FREE' },
      { name: 'NovaMetrics', desc: 'Real-time dashboards for your application performance. Custom alerts via email and Slack. Integrates with GitHub, PagerDuty, and New Relic. 14-day free trial.', cta: 'SEE DEMO' },
    ],
    features: [
      { title: 'GitHub & Bitbucket Deploy', desc: 'Connect your repository and deploy automatically on every push to master. Each pull request gets its own preview URL. Rollback in one click.' },
      { title: 'Global CDN — Included Free', desc: 'Your app is served from 15 data centers on 4 continents. Static assets cached at the edge. Zero CDN configuration. Works with any framework.' },
      { title: 'Developer CLI', desc: 'The nova command-line tool lets you deploy, scale, and debug without touching a browser. Install with npm install -g novatech-cli.' },
      { title: 'Slack Alerts Built In', desc: 'Deploy notifications, error spikes, and uptime alerts sent directly to your Slack channel. Configure in two minutes from the dashboard.' },
    ],
    testimonials: [
      { quote: 'We cut infrastructure costs by 60% and deploy 10x more often. NovaTech just works — nobody on our team thinks about servers anymore.', name: 'Tobias Lutke', title: 'CEO, Shopify' },
      { quote: 'NovaMetrics replaced three paid tools in one shot. The Slack integration means the whole team knows about issues the moment they happen.', name: 'Stewart Butterfield', title: 'CEO, Slack' },
      { quote: 'Every pull request gets a live preview URL automatically. Our designers review changes without pulling a single line of code.', name: 'Nat Friedman', title: 'VP Developer Experience, GitHub' },
    ],
    plans: [
      { name: 'Hobby', price: '$0', period: '/month', features: ['3 Projects', '1GB RAM per dyno', 'Shared CDN', 'Community support', 'GitHub deploy'], highlight: false },
      { name: 'Professional', price: '$49', period: '/month', features: ['Unlimited projects', '4GB RAM per dyno', 'Global CDN', 'Custom domains + SSL', 'Slack alerts', 'Email support'], highlight: true },
      { name: 'Enterprise', price: 'Custom', period: '', features: ['Dedicated clusters', 'Private network (VPC)', 'SSO & audit logs', 'Uptime SLA', '24/7 Slack support'], highlight: false },
    ],
  },

  2025: {
    year: 2025,
    companyTagline: 'The AI-Native Development Platform',
    heroHeadline: 'Build the Future of Digital Products',
    heroSub: 'NovaTech gives engineering teams AI-native infrastructure, real-time observability, and developer tooling that actually understands your codebase. Used by 200k+ developers.',
    heroCta: 'Start building free →',
    navLinks: ['Products', 'Solutions', 'Pricing', 'Docs', 'Sign up'],
    products: [
      { name: 'NovaCloud', desc: 'Serverless infrastructure that predicts and scales before you need it. Zero cold starts. Edge-native with 300+ PoPs worldwide. Deploy from your terminal in under 10 seconds.', cta: 'Explore NovaCloud →' },
      { name: 'NovaIntelligence', desc: 'Embed AI capabilities without building models from scratch. Managed RAG pipelines, vector search, and fine-tuning workflows — all observable, all versioned, all yours.', cta: 'Read the docs →' },
      { name: 'NovaOps', desc: 'Unified observability with AI-powered incident detection. Traces, logs, metrics, and anomalies in one view. Mean time to detection under 90 seconds.', cta: 'See a demo →' },
    ],
    features: [
      { title: 'AI Incident Detection', desc: 'Models learn your system\'s baseline and surface anomalies before they become outages. Alert fatigue drops by 80% in the first month.' },
      { title: 'Edge-Native by Default', desc: 'Every function runs at the nearest of 300+ edge locations. Sub-10ms response anywhere on the planet. No configuration, no trade-offs.' },
      { title: 'Codebase-Aware CLI', desc: 'nova dev reads your repo, understands your stack, and suggests fixes before they reach production. Works with any language and framework.' },
      { title: 'Compliance Automation', desc: 'SOC 2, HIPAA, and GDPR maintained continuously. Audit evidence collected automatically. Reports generated on demand in under 60 seconds.' },
    ],
    testimonials: [
      { quote: 'NovaOps caught a latency regression 4 minutes after deploy — before a single user reported it. We rolled back before anyone noticed anything wrong.', name: 'Alex Morgan', title: 'VP Engineering, Stripe' },
      { quote: 'The AI infrastructure tooling cut our model deployment time from two weeks to an afternoon. NovaIntelligence is the first AI platform that does not feel like a research project.', name: 'Sarah Chen', title: 'CTO, Cohere' },
      { quote: 'We retired five observability tools in one migration. The unified platform and AI-powered grouping save our on-call team 6 hours every week.', name: 'Marcus Rivera', title: 'Head of Platform, Figma' },
    ],
    plans: [
      { name: 'Starter', price: '$0', period: '/mo', features: ['3 Projects', '100GB Egress', 'AI requests — 10k/mo', 'Community support'], highlight: false },
      { name: 'Pro', price: '$79', period: '/mo', features: ['Unlimited Projects', '1TB Egress', 'AI requests — 500k/mo', 'NovaOps included', 'Priority support', 'Custom domains'], highlight: true },
      { name: 'Enterprise', price: 'Custom', period: '', features: ['Dedicated infrastructure', 'Unlimited AI requests', 'Fine-tuning & custom models', 'SOC 2 & HIPAA', 'SLA & dedicated Slack'], highlight: false },
    ],
  },
};
