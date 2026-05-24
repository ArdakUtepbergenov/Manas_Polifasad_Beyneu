// Shared primitives — buttons, containers, image cards, reveal wrapper.

const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ---------- Reveal on scroll ----------
function Reveal({ children, delay = 0, className = '', as: As = 'div' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.classList.add('in');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <As ref={ref} className={`reveal ${className}`} style={{ transitionDelay: delay + 'ms' }}>
      {children}
    </As>
  );
}

// ---------- Container ----------
function Container({ children, className = '', size = 'default' }) {
  const sizes = {
    tight:   'max-w-5xl',
    default: 'max-w-7xl',
    wide:    'max-w-[1440px]',
    full:    'max-w-none',
  };
  return <div className={`${sizes[size]} mx-auto px-6 md:px-10 lg:px-14 ${className}`}>{children}</div>;
}

// ---------- Section ----------
function Section({ children, id, className = '', dark = false, tone = '' }) {
  const bg = dark ? 'bg-ink-900 text-white' : (tone === 'mute' ? 'bg-ink-50 text-ink-900' : 'bg-white text-ink-900');
  return <section id={id} className={`relative ${bg} ${className}`}>{children}</section>;
}

// ---------- Button ----------
function Button({ children, variant = 'primary', size = 'md', as = 'button', href, onClick, className = '', icon, iconAfter, type = 'button' }) {
  const base = 'group inline-flex items-center justify-center gap-2.5 font-medium tracking-tight transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)] whitespace-nowrap';
  const sizes = {
    sm: 'h-10 px-5 text-[13px] rounded-full',
    md: 'h-12 px-7 text-[14px] rounded-full',
    lg: 'h-14 px-8 text-[15px] rounded-full',
  };
  const variants = {
    primary:     'bg-ink-900 text-white hover:bg-accent hover:shadow-glow',
    accent:      'bg-accent text-white hover:bg-accent-dark hover:shadow-glow',
    light:       'bg-white text-ink-900 border border-ink-100 hover:border-ink-900 hover:shadow-soft',
    ghost:       'bg-transparent text-ink-900 hover:bg-ink-50',
    invert:      'bg-white text-ink-900 hover:bg-ink-100',
    outline:     'border border-ink-200 text-ink-900 hover:border-ink-900 bg-white',
    outlineDark: 'border border-white/25 text-white hover:bg-white hover:text-ink-900',
    whatsapp:    'bg-[#25D366] text-white hover:bg-[#1FB955] hover:shadow-[0_12px_40px_-8px_rgba(37,211,102,0.4)]',
    gold:        'bg-gold text-white hover:bg-gold-dark',
    invert_dark: 'bg-ink-800 text-white border border-white/10 hover:bg-ink-700',
  };
  const showArrow = iconAfter === undefined && variant !== 'ghost' && variant !== 'outline' && variant !== 'outlineDark' && variant !== 'light';
  const cls = `${base} ${sizes[size]} ${variants[variant] || variants.primary} ${className}`;
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {iconAfter !== undefined ? iconAfter : (showArrow && (
        <span className="ml-0.5 transition-transform duration-300 group-hover:translate-x-0.5">
          <Icons.ArrowRight size={16} />
        </span>
      ))}
    </>
  );
  if (as === 'a' || href) return <a href={href} target={href && href.startsWith('http') ? '_blank' : undefined} rel={href && href.startsWith('http') ? 'noopener noreferrer' : undefined} onClick={onClick} className={cls}>{content}</a>;
  return <button type={type} onClick={onClick} className={cls}>{content}</button>;
}

// ---------- Eyebrow tag ----------
function Eyebrow({ children, className = '', dark = false }) {
  return (
    <div className={`eyebrow inline-flex items-center gap-2 ${dark ? 'text-white/70' : 'text-ink-500'} ${className}`}>
      <span className={`h-px w-8 ${dark ? 'bg-white/40' : 'bg-ink-300'}`}/>
      <span>{children}</span>
    </div>
  );
}

// ---------- Section header ----------
function SectionHeader({ eyebrow, title, lead, align = 'left', dark = false, cta }) {
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto max-w-3xl' : ''} ${align === 'split' ? 'grid md:grid-cols-12 gap-8 items-end' : ''}`}>
      <div className={`${align === 'split' ? 'md:col-span-7' : ''}`}>
        {eyebrow && <Reveal><Eyebrow dark={dark} className="mb-5">{eyebrow}</Eyebrow></Reveal>}
        <Reveal delay={80}>
          <h2 className={`display text-[clamp(34px,5.2vw,68px)] font-medium leading-[0.96] tracking-tightest ${dark ? 'text-white' : 'text-ink-900'}`}>
            {title}
          </h2>
        </Reveal>
      </div>
      {(lead || cta) && (
        <div className={`${align === 'split' ? 'md:col-span-5' : 'mt-5 max-w-2xl ' + (align === 'center' ? 'mx-auto' : '')}`}>
          {lead && <Reveal delay={140}><p className={`text-[17px] leading-[1.6] ${dark ? 'text-white/70' : 'text-ink-500'}`}>{lead}</p></Reveal>}
          {cta && <Reveal delay={200} className="mt-6">{cta}</Reveal>}
        </div>
      )}
    </div>
  );
}

// ---------- Image with skeleton ----------
function Pic({ src, alt = '', className = '', aspect, loading = 'lazy' }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-ink-100 ${className}`} style={aspect ? { aspectRatio: aspect } : undefined}>
      {!loaded && <div className="absolute inset-0 bg-gradient-to-br from-ink-100 via-ink-50 to-ink-100 animate-pulse" />}
      <img
        src={src} alt={alt} loading={loading}
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
      />
    </div>
  );
}

// ---------- Cursor-tracking image hover ----------
function HoverImage({ src, alt = '', className = '', aspect = '4/3', children }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--mx', x);
    el.style.setProperty('--my', y);
  };
  const onLeave = () => {
    const el = ref.current; if (!el) return;
    el.style.setProperty('--mx', 0);
    el.style.setProperty('--my', 0);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove} onMouseLeave={onLeave}
      className={`group relative overflow-hidden ${className}`}
      style={{ aspectRatio: aspect, '--mx': 0, '--my': 0 }}
    >
      <img
        src={src} alt={alt} loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        style={{ transform: 'translate3d(calc(var(--mx) * -8px), calc(var(--my) * -8px), 0)' }}
      />
      {children}
    </div>
  );
}

// ---------- Animated stat counter ----------
function CountUp({ value, duration = 1600 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const numeric = useMemo(() => {
    const n = parseFloat(String(value).replace(/[^\d.]/g, ''));
    return isNaN(n) ? 0 : n;
  }, [value]);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let started = false;
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !started) {
        started = true;
        const start = performance.now();
        const tick = (t) => {
          const k = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - k, 3);
          setDisplay(numeric * eased);
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [numeric, duration]);

  const orig = String(value);
  let rendered;
  if (/\+$/.test(orig)) rendered = `${Math.round(display)}+`;
  else if (/%$/.test(orig)) rendered = `${Math.round(display)}%`;
  else rendered = `${Math.round(display)}`;

  return <span ref={ref}>{rendered}</span>;
}

// ---------- Marquee ----------
function Marquee({ children, className = '' }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="marquee-track">
        <div className="flex items-center gap-16 pr-16">{children}</div>
        <div className="flex items-center gap-16 pr-16" aria-hidden>{children}</div>
      </div>
    </div>
  );
}

// ---------- Pill / tag ----------
function Pill({ children, active = false, onClick, dark = false }) {
  const base = 'inline-flex items-center h-9 px-4 rounded-full text-[13px] font-medium tracking-tight transition-all duration-300';
  const styles = active
    ? (dark ? 'bg-white text-ink-900' : 'bg-ink-900 text-white')
    : (dark ? 'border border-white/20 text-white/80 hover:border-white/60' : 'border border-ink-200 text-ink-600 hover:border-ink-900 hover:text-ink-900');
  return <button onClick={onClick} className={`${base} ${styles}`}>{children}</button>;
}

// ---------- Card frame ----------
function Card({ children, className = '', as: As = 'div', interactive = false, ...rest }) {
  return (
    <As
      className={`rounded-[20px] bg-white border border-ink-100 ${interactive ? 'transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-1 hover:border-ink-200' : ''} ${className}`}
      {...rest}
    >
      {children}
    </As>
  );
}

Object.assign(window, { Reveal, Container, Section, Button, Eyebrow, SectionHeader, Pic, HoverImage, CountUp, Marquee, Pill, Card });
