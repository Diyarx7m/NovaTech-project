import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { eras, eraDescriptions, eraStyles } from './eraConfig.js';
import { SiteContent } from './components.jsx';

function LoadingScreen({ era, messages }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (messages.length <= 1) return;
    const iv = setInterval(() => setIdx(i => (i + 1) % messages.length), 220);
    return () => clearInterval(iv);
  }, [messages]);

  return (
    <>
      <div className="loading-text">{messages[idx]}</div>
      <div className="loading-bar-track">
        <div className="loading-bar-fill" />
      </div>
    </>
  );
}

export default function App() {
  const [currentEra, setCurrentEra] = useState(2025);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [pendingEra, setPendingEra] = useState(null);
  const tooltipTimer = useRef(null);

  const eraInfo = eraDescriptions[currentEra];
  const eraStyle = eraStyles[currentEra];

  useEffect(() => {
    setShowTooltip(true);
    clearTimeout(tooltipTimer.current);
    tooltipTimer.current = setTimeout(() => setShowTooltip(false), 3800);
    return () => clearTimeout(tooltipTimer.current);
  }, [currentEra]);

  const switchEra = (year) => {
    if (year === currentEra || isTransitioning) return;
    setIsTransitioning(true);
    setPendingEra(year);
    const dur = year <= 2000 ? 1300 : year <= 2005 ? 950 : year <= 2010 ? 700 : 500;
    setTimeout(() => {
      setCurrentEra(year);
      setPendingEra(null);
      window.scrollTo({ top: 0 });
      setTimeout(() => setIsTransitioning(false), 100);
    }, dur);
  };

  const activeEra = pendingEra || currentEra;
  const loadingMessages = eraDescriptions[activeEra].loadingMessages;
  const loadingClass = `era-${activeEra}-loading`;

  return (
    <div className={eraStyle.className} style={{ minHeight: '100vh' }}>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="loading"
            className={`loading-overlay ${loadingClass}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <LoadingScreen era={activeEra} messages={loadingMessages} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentEra}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <SiteContent era={currentEra} />
        </motion.div>
      </AnimatePresence>

      <div className={`era-tooltip ${showTooltip ? 'visible' : ''}`}>
        <strong style={{ color: 'rgba(255,255,255,0.85)', display: 'block', marginBottom: 5 }}>
          {eras.find(e => e.year === currentEra)?.label} — {eras.find(e => e.year === currentEra)?.subtitle}
        </strong>
        {eraInfo.tooltip}
      </div>

      <div className="timeline-bar">
        <div className="timeline-inner">
          {eras.map(era => (
            <button
              key={era.year}
              className={`timeline-btn ${currentEra === era.year ? 'active' : ''}`}
              data-era={era.year}
              onClick={() => switchEra(era.year)}
              title={era.subtitle}
            >
              <span className="year-label">{era.label}</span>
              <span className="era-dot" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
