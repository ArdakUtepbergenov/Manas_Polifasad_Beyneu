// Layout: Navbar, Footer, FloatingWhatsApp, MobileMenu

const NAV_LINKS = [
  { key: 'home',      label: 'Басты бет' },
  { key: 'catalog',   label: 'Каталог' },
  { key: 'portfolio', label: 'Портфолио' },
  { key: 'about',     label: 'Компания туралы' },
  { key: 'contact',   label: 'Байланыс' },
];

// ---------- Navbar ----------
function Navbar({ route, navigate, dark = false, onOpenConsult }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const wantsDark = dark && !scrolled;
  const navClass = scrolled
    ? 'glass text-ink-900'
    : (wantsDark ? 'bg-transparent text-white' : 'bg-white/0 text-ink-900');

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${navClass}`}>
        <Container size="wide" className="flex items-center justify-between h-[72px] md:h-[84px]">
          <button onClick={() => navigate('home')} className="flex items-center gap-3 group">
            <Logo dark={wantsDark} />
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(l => (
              <button
                key={l.key}
                onClick={() => navigate(l.key)}
                className={`relative px-4 py-2 text-[13.5px] font-medium tracking-tight transition-colors duration-300
                  ${route === l.key ? (wantsDark ? 'text-white' : 'text-ink-900') : (wantsDark ? 'text-white/70 hover:text-white' : 'text-ink-500 hover:text-ink-900')}`}
              >
                {l.label}
                {route === l.key && (
                  <span className={`absolute left-4 right-4 bottom-1 h-px ${wantsDark ? 'bg-white' : 'bg-ink-900'}`} />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+77716029494" className={`flex items-center gap-2 text-[14px] font-medium tracking-tight ${wantsDark ? 'text-white' : 'text-ink-900'}`}>
              <Icons.Phone size={16} />
              <span>+7 771 602 94-94</span>
            </a>
            <Button onClick={onOpenConsult} variant={wantsDark ? 'invert' : 'primary'} size="sm">
              Кеңес
            </Button>
          </div>

          <button
            onClick={() => setOpen(v => !v)}
            className={`lg:hidden flex items-center justify-center h-11 w-11 rounded-full border ${wantsDark ? 'border-white/30 text-white' : 'border-ink-200 text-ink-900'}`}
            aria-label="Мәзір"
          >
            {open ? <Icons.X size={18} /> : <Icons.Menu size={18} />}
          </button>
        </Container>
      </header>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        route={route}
        navigate={(k) => { setOpen(false); navigate(k); }}
        onOpenConsult={() => { setOpen(false); onOpenConsult(); }}
      />
    </>
  );
}

// ---------- Logo ----------
function Logo({ dark = false }) {
  return (
    <img
      src="images/logo.png"
      alt="МАНАС СТРОЙ"
      className="h-12 w-12 object-contain rounded-full"
      style={dark ? {} : { filter: 'drop-shadow(0 0 0px transparent)' }}
    />
  );
}

// ---------- Mobile menu ----------
function MobileMenu({ open, onClose, route, navigate, onOpenConsult }) {
  return (
    <div
      className={`fixed inset-0 z-30 lg:hidden transition-all duration-500
        ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <div className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm" onClick={onClose} />
      <div className={`absolute top-[72px] inset-x-4 rounded-3xl bg-white shadow-soft-lg p-6 transition-all duration-500
        ${open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <nav className="flex flex-col">
          {NAV_LINKS.map((l, i) => (
            <button
              key={l.key}
              onClick={() => navigate(l.key)}
              className={`flex items-center justify-between py-4 border-b border-ink-100 text-left transition-colors
                ${route === l.key ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'}`}
            >
              <span className="display text-[22px] font-medium tracking-tight">{l.label}</span>
              <span className="font-mono text-[11px] text-ink-400">0{i+1}</span>
            </button>
          ))}
        </nav>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button onClick={onOpenConsult} variant="primary" size="md">Кеңес</Button>
          <Button href="tel:+77716029494" as="a" variant="outline" size="md" icon={<Icons.Phone size={15}/>} iconAfter={null}>Қоңырау шалу</Button>
        </div>
        <div className="mt-5 pt-5 border-t border-ink-100 grid grid-cols-2 gap-3 text-[13px] text-ink-500">
          <a href="https://wa.me/77716029494" className="flex items-center gap-2 hover:text-ink-900">
            <Icons.WhatsApp size={15}/> WhatsApp-қа жазу
          </a>
          <a href="https://www.instagram.com/manas_stroi_beyneu/" className="flex items-center gap-2 hover:text-ink-900">
            <Icons.Instagram size={15}/> Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

// ---------- Footer ----------
function Footer({ navigate, onOpenConsult }) {
  return (
    <footer className="bg-ink-900 text-white pt-24 pb-10 relative overflow-hidden">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-10 pb-20 border-b border-white/10">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="eyebrow text-white/50 mb-5"><span className="h-px w-8 bg-white/30 inline-block align-middle mr-2"/>БАЙЛАНЫС</div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display text-[clamp(40px,5.8vw,76px)] font-medium leading-[0.95] tracking-tightest">
                Фасадыңызды<br/>талқылауға <span className="text-gold-light italic font-light">дайынбыз?</span>
              </h2>
            </Reveal>
            <Reveal delay={160} className="mt-7 flex flex-wrap gap-3">
              <Button onClick={onOpenConsult} variant="invert" size="lg">Кеңес алу</Button>
              <Button href="https://wa.me/77716029494" as="a" variant="whatsapp" size="lg" icon={<Icons.WhatsApp size={17}/>} iconAfter={null}>WhatsApp</Button>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pl-8 lg:border-l border-white/10 flex flex-col justify-end">
            <Reveal delay={200}>
              <div className="space-y-5">
                <FooterContact icon={<Icons.MapPin size={18}/>}  label="Мекенжай" value="район Бейнеу, ул. Улица Майлина, 168" />
                <FooterContact icon={<Icons.Phone size={18}/>}   label="Телефон"  value="+7 771 602 94-94" href="tel:+77716029494"/>
                <FooterContact icon={<Icons.Mail size={18}/>}    label="Пошта"    value="info@manasstroi.kz" href="mailto:info@manasstroi.kz"/>
                <FooterContact icon={<Icons.Clock size={18}/>}   label="Сағат"    value="Дс–Сн 09:00 — 18:00" />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 pt-14 pb-14">
          <div className="md:col-span-5">
            <Logo dark />
            <p className="mt-6 max-w-md text-[14.5px] text-white/60 leading-[1.7]">
              2018 жылдан бастап Бейнеуда премиум фасадтық жүйелер өндіру және орнату.
              Сәулеттік сапа, жыл кепілдігі, өзіндік өндіріс алаңы.
            </p>
            <div className="mt-7 flex gap-3">
              <SocialLink href="https://wa.me/77716029494"     icon={<Icons.WhatsApp size={17}/>}/>
              <SocialLink href="https://www.instagram.com/manas_stroi_beyneu/"          icon={<Icons.Instagram size={17}/>}/>
              <SocialLink href="tel:+77716029494"               icon={<Icons.Phone size={17}/>}/>
              <SocialLink href="mailto:info@manasstroi.kz"    icon={<Icons.Mail size={17}/>}/>
            </div>
          </div>

          <FooterCol title="Бөлімдер" items={NAV_LINKS.map(l => ({ label: l.label, onClick: () => navigate(l.key) }))} className="md:col-span-3"/>
          <FooterCol title="Каталог" items={[
            { label: 'Термопанельдер',         onClick: () => navigate('catalog') },
            { label: 'Декоративтік панельдер', onClick: () => navigate('catalog') },
            { label: 'Жылытылған жүйелер',     onClick: () => navigate('catalog') },
            { label: 'Фасад декоры',           onClick: () => navigate('catalog') },
          ]} className="md:col-span-2"/>
          <FooterCol title="Сервис" items={[
            { label: 'Өлшеуші шақыру', onClick: onOpenConsult },
            { label: 'Құнын есептеу',  onClick: onOpenConsult },
            { label: 'Кеңес',          onClick: onOpenConsult },
            { label: 'Кепілдік',       onClick: () => navigate('about') },
          ]} className="md:col-span-2"/>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[12.5px] text-white/40">
          <div>© 2018 — 2026 Манас Строй. Барлық құқықтар қорғалған.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">Құпиялылық саясаты</a>
            <a href="#" className="hover:text-white/70 transition-colors">Оферта шарты</a>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none select-none absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-[0.04]">
        <div className="display text-[clamp(120px,22vw,420px)] font-medium tracking-tightest leading-none">МАНАС</div>
      </div>
    </footer>
  );
}

function FooterContact({ icon, label, value, href }) {
  const Tag = href ? 'a' : 'div';
  return (
    <Tag href={href} className="flex items-start gap-3 group">
      <span className="mt-1 text-white/40 group-hover:text-white transition-colors">{icon}</span>
      <span>
        <span className="block eyebrow text-white/40 mb-1">{label}</span>
        <span className="block text-[15.5px] text-white group-hover:text-gold-light transition-colors">{value}</span>
      </span>
    </Tag>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a href={href} className="flex items-center justify-center h-11 w-11 rounded-full border border-white/15 hover:border-white hover:bg-white hover:text-ink-900 transition-all duration-300">
      {icon}
    </a>
  );
}

function FooterCol({ title, items, className = '' }) {
  return (
    <div className={className}>
      <div className="eyebrow text-white/40 mb-4">{title}</div>
      <ul className="space-y-2.5">
        {items.map((it, i) => (
          <li key={i}>
            <button onClick={it.onClick} className="text-[14px] text-white/70 hover:text-white transition-colors uline">
              {it.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------- Floating WhatsApp ----------
function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);
  return (
    <a
  href="https://go.2gis.com/5EVJ2"
  target="_blank"
  rel="noopener noreferrer"
  className={`fixed z-30 bottom-6 right-6 flex items-center justify-center h-14 w-20 rounded-2xl bg-white shadow-[0_8px_32px_-4px_rgba(0,0,0,0.18)] hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.25)] transition-all duration-500 ${show ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
>
  <img src="images/2gis-seeklogo.png" alt="2GIS" width="56" height="56" style={{objectFit:'contain', filter:'drop-shadow(0 8px 24px rgba(0,0,0,0.25))'}}/>

</a>

  );
}

Object.assign(window, { Navbar, Logo, Footer, FloatingWhatsApp });
