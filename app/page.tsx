import PortfolioSection from "@/components/portfolio-section";
import ContactForm from "@/components/contact-form";

const services = [
  { number: "01", title: "CRM & automation", text: "HubSpot, Salesforce and custom CRM systems shaped around the way your team actually sells and operates.", tags: ["HubSpot", "Salesforce", "n8n", "Zapier"], flow: ["Lead", "CRM", "Action"], status: "SYNCED" },
  { number: "02", title: "AI integrations & bots", text: "Practical AI assistants, support bots and intelligent workflows connected to your business data and tools.", tags: ["AI agents", "Chatbots", "OpenAI", "Automation"], flow: ["Input", "AI", "Reply"], status: "THINKING" },
  { number: "03", title: "Web applications", text: "Fast, scalable portals, dashboards and business platforms designed for real users and measurable outcomes.", tags: ["React", "Next.js", "Node.js", "Databases"], flow: ["UI", "API", "Data"], status: "DEPLOYED" },
  { number: "04", title: "Mobile applications", text: "Cross-platform mobile products that feel native, launch faster and stay maintainable as your product grows.", tags: ["React Native", "iOS", "Android", "APIs"], flow: ["iOS", "Core", "Android"], status: "CONNECTED" },
  { number: "05", title: "SaaS development", text: "From a focused MVP to a production SaaS product with accounts, subscriptions, analytics and admin tools.", tags: ["MVP", "Payments", "Cloud", "Analytics"], flow: ["User", "SaaS", "Scale"], status: "GROWING" },
  { number: "06", title: "Systems integration", text: "We connect disconnected platforms, remove repetitive work and turn your software stack into one reliable system.", tags: ["REST API", "Webhooks", "Data sync", "ETL"], flow: ["Tool A", "Bridge", "Tool B"], status: "LIVE" }
];

const steps = [
  ["01", "Discover", "We map your process, bottlenecks and the outcome that matters.", "Process map", "◎"],
  ["02", "Design", "We shape the solution, user flows and technical architecture.", "Solution blueprint", "◇"],
  ["03", "Build", "We deliver in clear iterations, with working software you can see.", "Working product", "</>"],
  ["04", "Grow", "We launch, measure, support and improve as your business scales.", "Measured growth", "↗"]
];

const technologies = [
  ["React", "https://cdn.simpleicons.org/react/61DAFB"],
  ["Next.js", "https://cdn.simpleicons.org/nextdotjs/000000"],
  ["Node.js", "https://cdn.simpleicons.org/nodedotjs/5FA04E"],
  ["React Native", "https://cdn.simpleicons.org/react/087EA4"],
  ["TypeScript", "https://cdn.simpleicons.org/typescript/3178C6"],
  ["PostgreSQL", "https://cdn.simpleicons.org/postgresql/4169E1"],
  ["HubSpot", "https://cdn.simpleicons.org/hubspot/FF5C35"],
  ["Salesforce", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg"],
  ["n8n", "https://cdn.simpleicons.org/n8n/EA4B71"],
  ["Zapier", "https://cdn.simpleicons.org/zapier/FF4F00"],
];

function ServiceVisual({ type, title }: { type: string; title: string }) {
  const status = <small className="visual-status"><b /> LIVE</small>;
  if (type === "01") return <div className="service-illustration crm-visual" aria-label={`${title} visualization`}>{status}<div className="crm-center">CRM</div><div className="crm-orbit hub">H</div><div className="crm-orbit mail">@</div><div className="crm-orbit task">✓</div><i className="crm-line l1" /><i className="crm-line l2" /><i className="crm-line l3" /></div>;
  if (type === "02") return <div className="service-illustration bot-visual" aria-label={`${title} visualization`}>{status}<div className="chat-line left" /><div className="bot-head"><i className="antenna" /><span className="bot-eye" /><span className="bot-eye" /><b className="bot-mouth" /></div><div className="chat-line right" /><span className="bot-spark s1">✦</span><span className="bot-spark s2">✦</span></div>;
  if (type === "03") return <div className="service-illustration web-visual" aria-label={`${title} visualization`}>{status}<div className="browser-window"><div className="browser-bar"><i /><i /><i /></div><div className="browser-body"><b /><span /><span /><div /></div></div><div className="code-chip">&lt;/&gt;</div></div>;
  if (type === "04") return <div className="service-illustration mobile-visual" aria-label={`${title} visualization`}>{status}<div className="phone phone-a"><i /><b /><span /><span /></div><div className="sync-pulse"><b>↻</b></div><div className="phone phone-b"><i /><b /><span /><span /></div></div>;
  if (type === "05") return <div className="service-illustration saas-visual" aria-label={`${title} visualization`}>{status}<div className="saas-shell"><aside><i /><i /><i /></aside><div className="saas-main"><span /><div className="saas-chart"><i /><i /><i /><i /></div><b>+28%</b></div></div></div>;
  return <div className="service-illustration integration-visual" aria-label={`${title} visualization`}>{status}<div className="system-box">API</div><div className="data-bridge"><i /><i /><i /><b>⇄</b></div><div className="system-box dark">DB</div><span className="data-dot d1" /><span className="data-dot d2" /></div>;
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Turbo Dev home">
          <span className="header-wordmark"><span>Turbo</span><b>dev</b></span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a><a href="#about">Why us</a>
        </nav>
        <a className="header-cta" href="#contact">Start a project <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Digital products &amp; automation studio</p>
          <h1>We build systems<br />that move business<br /><em>forward.</em></h1>
          <p className="hero-lead">Turbo Dev designs and develops AI-powered automations, CRM ecosystems, web platforms, mobile apps and SaaS products.</p>
          <div className="hero-actions">
            <a className="button button-blue" href="#contact">Let&apos;s build something <span>→</span></a>
            <a className="text-link" href="#services">Explore our services <span>↓</span></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Automation workflow preview">
          <div className="visual-top"><span className="visual-brand">TD / FLOW</span><span className="live"><i /> LIVE</span></div>
          <div className="flow-stage">
            <div className="flow-grid" />
            <div className="node node-a"><b>01</b><span>New lead</span><small>HubSpot CRM</small></div>
            <div className="connector c-one"><i /></div>
            <div className="node node-b active"><b>02</b><span>AI qualifies</span><small>Agent running</small></div>
            <div className="connector c-two"><i /></div>
            <div className="node node-c"><b>03</b><span>Sales notified</span><small>Ready to close</small></div>
            <div className="pulse p-one" /><div className="pulse p-two" />
          </div>
          <div className="visual-footer"><div><small>Automations today</small><strong>1,284</strong></div><div><small>Hours saved</small><strong>96.4</strong></div><div><small>Success rate</small><strong>99.8%</strong></div></div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Platforms and technologies we work with">
        <div className="tech-bridge-inner">
          <div className="tech-bridge-copy"><p className="eyebrow light"><span /> Our ecosystem</p><h2>Built across the <em>full stack.</em></h2><p>We connect the platforms that run your business with the technologies that build what comes next.</p></div>
          <div className="logo-track">{technologies.map(([name, icon]) => <span className="tech-logo" key={name} title={name}><img src={icon} alt="" loading="lazy" /><b>{name}</b></span>)}</div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-intro services-intro">
          <div className="section-heading-copy"><p className="eyebrow"><span /> What we do</p><h2>One partner for <em>every digital layer</em><br />of your business.</h2><p className="section-description">From the first workflow to a complete digital product, we bring strategy, design and engineering together.</p></div>
        </div>
        <div className="service-grid">
          {services.map((service) => <article className={`service-card service-${service.number}`} key={service.number}><div className="card-top"><span>{service.number}</span><b>↗</b></div><ServiceVisual type={service.number} title={service.title} /><h3>{service.title}</h3><p>{service.text}</p><div className="tag-list">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}
        </div>
      </section>

      <PortfolioSection />

      <section className="impact" id="about">
        <div className="impact-copy"><p className="eyebrow light"><span /> Built for outcomes</p><h2>Less busywork.<br />More <em>momentum.</em></h2><p>Good technology should make your company simpler to run. We focus on fewer manual tasks, clearer data, faster teams and products your customers enjoy using.</p><a className="button button-white" href="#contact">Talk about your challenge <span>→</span></a></div>
        <div className="metrics"><div><strong>40<span>%</span></strong><p>less manual work with focused process automation</p></div><div><strong>3<span>×</span></strong><p>faster operations with connected tools and data</p></div><div><strong>24<span>/7</span></strong><p>service through intelligent assistants and bots</p></div><div><strong>1</strong><p>accountable partner from concept through launch</p></div></div>
      </section>

      <section className="section process" id="process">
        <div className="section-intro compact"><p className="eyebrow"><span /> How we work</p><h2>Clear process. <em>No black box.</em><br />Just visible progress.</h2><p className="section-description">From the first conversation to launch and growth, every step is visible, collaborative and built around a clear outcome.</p></div>
        <div className="process-flow" aria-label="Our four step delivery process"><div className="process-grid" />{steps.map(([num,title,text,output,icon]) => <article key={num}><div className="process-node-top"><span>{num}</span><b>{icon}</b></div><div className="process-state"><i /> IN PROGRESS</div><h3>{title}</h3><p>{text}</p><small><span>OUTPUT</span>{output}</small></article>)}</div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy"><p className="eyebrow light"><span /> Let&apos;s work together</p><h2>Have a process to automate<br />or a product to build?</h2><p>Tell us where you want to go. We&apos;ll help you find the smartest way to get there.</p><div className="contact-details"><a href="mailto:hello@turbodev.bg">hello@turbodev.bg</a><a href="tel:+359888742916">+359 88 874 2916</a></div></div>
        <ContactForm />
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-about"><a className="footer-wordmark" href="#top" aria-label="Turbo Dev home"><span>Turbo</span><b>dev</b></a><p>AI, automation and software engineering for companies ready to move faster.</p></div>
          <div className="footer-column"><h3>Company</h3><a href="#work">Selected work</a><a href="#about">Why us</a><a href="#process">Our process</a><a href="#contact">Contact</a></div>
          <div className="footer-column"><h3>Services</h3><a href="#services">CRM &amp; automation</a><a href="#services">AI &amp; bots</a><a href="#services">Web, mobile &amp; SaaS</a></div>
          <div className="footer-column footer-contact"><h3>Let&apos;s talk</h3><a href="mailto:hello@turbodev.bg">hello@turbodev.bg</a><a href="tel:+359888742916">+359 88 874 2916</a><p>Varna, Bulgaria · Worldwide</p></div>
        </div>
        <div className="footer-bottom"><p>© 2026 Turbo Dev. Built for what&apos;s next.</p><div className="social-links" aria-label="Social profiles"><span title="Add your LinkedIn profile URL">in&nbsp; LinkedIn</span><span title="Add your Upwork profile URL">up&nbsp; Upwork</span><span title="Add your Instagram profile URL">◎&nbsp; Instagram</span></div></div>
      </footer>
    </main>
  );
}
