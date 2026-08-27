"use client";

import { useEffect, useRef, useState } from "react";

const cases = [
  {
    id: "truckrates-logistics-platform",
    number: "01",
    category: "LOGISTICS PLATFORM · LIVE PRODUCT",
    title: "Truck Rates AI",
    summary: "A real-time logistics workspace connecting managers and drivers through messaging, calls, live location and intelligent route pricing.",
    challenge: "Dispatch teams needed one reliable place to communicate with drivers, track their location and calculate accurate route costs without switching between disconnected tools.",
    solution: "We built a logistics platform with WhatsApp chat, Twilio calling, internal notes, live driver tracking and route pricing based on truck type, toll roads and trip details. Samsara and Mapbox integrations keep operational data connected.",
    outcome: "Managers can coordinate drivers, communication and route decisions from one live workspace, while push notifications and WebSockets keep every important update visible in real time.",
    stack: ["React", "Next.js", "Node.js", "React Query", "WebSockets", "Mapbox", "Twilio", "Samsara"],
    flow: ["Manager", "Driver chat", "Live location", "Route price"],
    liveUrl: "https://www.truckrates.ai/",
    real: true,
    showcase: "truckrates"
  },
  {
    id: "tire-inspection-platform",
    number: "02",
    category: "FLEET TECHNOLOGY · REAL PRODUCT",
    title: "Tire App",
    summary: "A tire inspection and fleet intelligence platform that helps teams identify damage early, monitor tire condition and control long-term tire costs.",
    challenge: "Fleet teams need a consistent way to inspect every tire, spot developing damage and understand where tire spend is going across vehicles and trailers.",
    solution: "We created a connected inspection workflow with vehicle and axle configuration, mobile tire checks, condition analysis, fleet-wide status tracking and the operational statistics needed for maintenance decisions.",
    outcome: "Potential tire problems become visible earlier, inspection history stays organized and fleet managers get better information for reducing avoidable replacements and downtime.",
    stack: ["Mobile inspections", "AI vision", "Fleet analytics", "Samsara", "QuickBooks", "API integrations"],
    flow: ["Inspect", "Analyze", "Alert", "Optimize"],
    liveUrl: "https://www.trucktireapp.com/",
    real: true,
    showcase: "tire-app"
  },
  {
    id: "estate-logs-team-contribution",
    number: "03",
    category: "TEAM PROJECT · DEVELOPMENT CONTRIBUTION",
    title: "Estate Logs",
    summary: "A property operations platform connecting managers, technicians and tenants through dashboards, work orders, reporting and mobile workflows.",
    challenge: "Property teams need to coordinate maintenance, service requests, documentation and technician work across multiple buildings without losing operational visibility.",
    solution: "As a freelance developer working within an external product team, I contributed to the development of Estate Logs and its connected property-management experience.",
    outcome: "The production platform gives property managers and operations teams a shared view of issues, assignments and ongoing work across their property portfolio.",
    stack: ["Web application", "Mobile workflows", "Dashboards", "Case management", "Team delivery"],
    flow: ["Tenant request", "Manager review", "Technician", "Report"],
    liveUrl: "https://www.estatelogs.com/",
    real: true,
    credit: "TEAM CONTRIBUTION",
    showcase: "estate-logs"
  }
];

function ProjectPreview({ type }: { type: string }) {
  if (type === "01") return <div className="project-shot logistics-shot"><div className="logistics-rail"><b>TR</b><i /><i /><i /><i /></div><div className="logistics-main"><div className="logistics-top"><span>Dispatch / Live operations</span><b><i /> DRIVER ONLINE</b></div><div className="logistics-map"><span className="route-line" /><i className="map-point point-a" /><i className="map-point point-b" /><div className="driver-card"><small>DRIVER 024</small><b>42 min away</b><span>Live via Samsara</span></div></div><div className="logistics-chat"><span>WhatsApp</span><i /><i /><b>Call</b></div><div className="route-price"><small>ESTIMATED ROUTE</small><b>$1,842</b><span>Truck + tolls included</span></div></div></div>;
  if (type === "02") return <div className="project-shot tire-shot"><div className="tire-shot-head"><span>Fleet / Tire health</span><b><i /> INSPECTION READY</b></div><div className="tire-vehicle"><span className="tire-axle axle-front"><i /><i /></span><span className="tire-axle axle-mid"><i /><i /><i /><i /></span><span className="tire-axle axle-rear"><i /><i /><i /><i /></span><b>TRUCK 511</b></div><div className="tire-health"><small>FLEET STATUS</small><b>92%</b><span>Healthy tires</span><i /></div><div className="tire-alert"><i /> Early damage detected</div></div>;
  if (type === "03") return <div className="project-shot estate-shot"><div className="estate-rail"><b>EL</b><i /><i /><i /><i /></div><div className="estate-main"><div className="estate-head"><span>Property portfolio</span><b>12 ACTIVE</b></div><div className="estate-metrics"><i /><i /><i /></div><div className="estate-building"><span /><span /><span /><span /></div><div className="estate-tasks"><i /><i /><i /></div><div className="estate-mobile"><b>7</b><span>Open work orders</span></div></div></div>;
  return <div className="project-shot commerce-shot"><div className="commerce-nav"><b>North / Store</b><span>Shop&nbsp;&nbsp; Collections&nbsp;&nbsp; About</span><i>Bag 2</i></div><div className="product-layout"><div className="product-image"><span>NEW</span></div><div className="product-info"><small>ESSENTIAL SERIES</small><b>Form Chair 01</b><span>€420</span><i /><em>Add to bag</em></div></div><div className="medusa-badge">MEDUSA.JS</div></div>;
}

export default function PortfolioSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const activeCase = cases.find(item => item.id === activeId);

  useEffect(() => {
    if (!activeId) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [activeId]);

  const openCase = (id: string, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActiveId(id);
  };

  return (
    <section className="section portfolio" id="work">
      <div className="portfolio-intro">
        <p className="eyebrow"><span /> Selected work</p>
        <h2>Systems designed for <em>real business movement.</em></h2>
        <p>Representative engagement patterns showing how we combine automation, AI and product engineering. Client details can remain confidential.</p>
      </div>
      <p className="portfolio-scroll-hint">DRAG OR SCROLL TO EXPLORE <span>→</span></p>

      <div className="portfolio-grid">
        {cases.map((item) => (
          <button type="button" className={`portfolio-card portfolio-${item.number}`} key={item.id} onClick={(event) => openCase(item.id, event.currentTarget)} aria-label={`View case study: ${item.title}`}>
            <div className="portfolio-preview" aria-hidden="true">
              <span className="case-number">CASE / {item.number}</span>
              <ProjectPreview type={item.number} />
            </div>
            <div className="portfolio-card-copy"><small>{item.category}</small><h3>{item.title}</h3><p>{item.summary}</p><div className="portfolio-tech-chips">{item.stack.map(tech => <span key={tech}>{tech}</span>)}</div><span className="portfolio-card-link">View case study <b>↗</b></span></div>
          </button>
        ))}
      </div>

      {activeCase && (
        <div className="case-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveId(null); }}>
          <div className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-modal-title">
            <div className="case-modal-head"><div><small>{activeCase.category} · {activeCase.credit ?? (activeCase.real ? "REAL CASE" : "REPRESENTATIVE CASE")}</small><h2 id="case-modal-title">{activeCase.title}</h2></div><button type="button" onClick={() => setActiveId(null)} aria-label="Close case study">×</button></div>
            <div className="case-modal-flow">{activeCase.flow.map((node, index) => <span key={node}><b>{String(index + 1).padStart(2, "0")}</b>{node}{index < activeCase.flow.length - 1 && <i />}</span>)}</div>
            {activeCase.showcase === "truckrates" && (
              <div className="product-showcase" aria-label="TruckRates product interface previews">
                <div className="showcase-browser showcase-main">
                  <div className="browser-chrome"><i /><i /><i /><span>truckrates.ai / route intelligence</span></div>
                  <div className="showcase-image"><img src="/portfolio/truckrates/route-pricing.jpg" alt="TruckRates route pricing and Mapbox interface" /></div>
                  <div className="showcase-label"><small>ROUTE INTELLIGENCE</small><b>Rates built around the real trip.</b></div>
                </div>
                <div className="showcase-browser showcase-chat">
                  <div className="browser-chrome"><i /><i /><i /><span>live communication</span></div>
                  <div className="showcase-image"><img src="/portfolio/truckrates/driver-chat.jpg" alt="TruckRates manager and driver communication interface" /></div>
                  <div className="showcase-label"><small>CONNECTED DISPATCH</small><b>Messages, calls and notes in one place.</b></div>
                </div>
                <div className="showcase-browser showcase-rates">
                  <div className="browser-chrome"><i /><i /><i /><span>carrier marketplace</span></div>
                  <div className="showcase-image"><img src="/portfolio/truckrates/rates-marketplace.jpg" alt="TruckRates carrier rates workspace" /></div>
                  <div className="showcase-label"><small>FASTER DECISIONS</small><b>Compare routes and carriers.</b></div>
                </div>
              </div>
            )}
            {activeCase.showcase === "tire-app" && (
              <div className="product-showcase tire-showcase" aria-label="Tire App product interface previews">
                <div className="showcase-browser showcase-main tire-main">
                  <div className="browser-chrome"><i /><i /><i /><span>tire app / vehicle configuration</span></div>
                  <div className="showcase-image"><img src="/portfolio/tire-app/tire-configuration.jpg" alt="Tire App vehicle and tire configuration interface" /></div>
                  <div className="showcase-label"><small>CONFIGURE EVERY POSITION</small><b>A clear tire model for every truck and trailer.</b></div>
                </div>
                <div className="showcase-browser showcase-chat tire-mobile">
                  <div className="browser-chrome"><i /><i /><i /><span>mobile inspection</span></div>
                  <div className="showcase-image"><img src="/portfolio/tire-app/mobile-inspection.jpg" alt="Tire App mobile inspection experience" /></div>
                  <div className="showcase-label"><small>INSPECT IN THE FIELD</small><b>Capture condition before damage becomes downtime.</b></div>
                </div>
                <div className="showcase-browser showcase-rates tire-fleet">
                  <div className="browser-chrome"><i /><i /><i /><span>fleet intelligence</span></div>
                  <div className="showcase-image"><img src="/portfolio/tire-app/fleet-vehicles.jpg" alt="Tire App fleet vehicle management interface" /></div>
                  <div className="showcase-label"><small>ONE FLEET VIEW</small><b>Vehicle history and tire data stay connected.</b></div>
                </div>
              </div>
            )}
            {activeCase.showcase === "estate-logs" && (
              <div className="product-showcase estate-showcase" aria-label="Estate Logs public product previews">
                <div className="showcase-browser showcase-main estate-main-shot">
                  <div className="browser-chrome"><i /><i /><i /><span>estate logs / property operations</span></div>
                  <div className="showcase-image"><img src="/portfolio/estate-logs/property-dashboard.jpg" alt="Estate Logs property management dashboard presentation" /></div>
                  <div className="showcase-label"><small>PROPERTY OPERATIONS</small><b>One workspace for managers, issues and reporting.</b></div>
                </div>
                <div className="showcase-browser showcase-chat estate-mobile-shot">
                  <div className="browser-chrome"><i /><i /><i /><span>technician workflows</span></div>
                  <div className="showcase-image"><img src="/portfolio/estate-logs/mobile-work-orders.jpg" alt="Estate Logs mobile work order experience" /></div>
                  <div className="showcase-label"><small>MOBILE FIELD WORK</small><b>Daily tasks stay connected to property teams.</b></div>
                </div>
                <div className="estate-credit-card"><small>ROLE ON THE PROJECT</small><b>Software developer</b><p>Contributed as part of an external product development team.</p></div>
              </div>
            )}
            <div className="case-modal-content"><div><small>THE CHALLENGE</small><p>{activeCase.challenge}</p></div><div><small>THE SOLUTION</small><p>{activeCase.solution}</p></div><div><small>THE OUTCOME</small><p>{activeCase.outcome}</p></div></div>
            <div className="case-modal-stack"><small>TECHNOLOGY</small><div>{activeCase.stack.map(item => <span key={item}>{item}</span>)}</div></div>
            <div className="case-modal-actions">
              {activeCase.liveUrl && <a href={activeCase.liveUrl} target="_blank" rel="noreferrer">Visit live product <span>↗</span></a>}
              <a href="#contact" onClick={() => setActiveId(null)}>Discuss a similar project <span>→</span></a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
