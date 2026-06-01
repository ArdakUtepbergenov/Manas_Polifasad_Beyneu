// Portfolio page — masonry grid, filters by type/year, lightbox detail view.

function PortfolioPage({ navigate, onOpenConsult }) {
  const { PROJECTS, PROJECT_TYPES } = window.AppData;
  const [type, setType] = useState('all');
  const [year, setYear] = useState('all');
  const [openIdx, setOpenIdx] = useState(-1);

  const years = useMemo(() => {
    const ys = Array.from(new Set(PROJECTS.map(p => p.year))).sort((a,b) => b - a);
    return ['all', ...ys];
  }, [PROJECTS]);

  const items = useMemo(() => PROJECTS.filter(p =>
    (type === 'all' || p.type === type) &&
    (year === 'all' || p.year === year)
  ), [type, year]);

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="pt-36 pb-16 md:pb-24 bg-white border-b border-ink-100">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <Reveal><Eyebrow className="mb-5">ПОРТФОЛИО · 5000+ ОБЪЕКТОВ</Eyebrow></Reveal>
              <Reveal delay={80}>
                <h1 className="display text-[clamp(48px,7.6vw,128px)] font-medium leading-[0.94] tracking-tightest">
                  Завершённые<br/><span className="text-gold italic font-light">фасады</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={140}>
                <p className="text-[16px] leading-[1.65] text-ink-500">
                  Архивный набор проектов студии с 2013 года. Архитектурная фотосъёмка, описания материалов и истории каждого объекта.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Filter bar */}
      <div className="md:sticky md:top-[84px] z-20 glass border-b border-ink-100">
        <Container size="wide" className="py-4 flex flex-wrap items-center gap-3 md:gap-5">
          <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.16em] text-ink-500">
            <Icons.Filter size={14}/> Тип
          </div>
          <div className="flex flex-wrap gap-2">
            {PROJECT_TYPES.map(t => (
              <Pill key={t.key} active={type === t.key} onClick={() => setType(t.key)}>{t.label}</Pill>
            ))}
          </div>
          <div className="hidden md:block h-6 w-px bg-ink-200 mx-2"/>
          <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.16em] text-ink-500">
            <Icons.Calendar size={14}/> Год
          </div>
          <div className="flex flex-wrap gap-2">
            {years.map(y => (
              <Pill key={y} active={year === y} onClick={() => setYear(y)}>{y === 'all' ? 'Все годы' : y}</Pill>
            ))}
          </div>
          <div className="ml-auto text-[13px] text-ink-500">
            <span className="text-ink-900 font-medium">{items.length}</span> {items.length === 1 ? 'проект' : 'проектов'}
          </div>
        </Container>
      </div>

      {/* Masonry grid */}
      <section className="py-12 md:py-20 bg-white">
        <Container size="wide">
          {items.length === 0 ? (
            <div className="py-32 text-center">
              <p className="display text-2xl font-medium mb-3">Проекты не найдены</p>
              <Button onClick={() => { setType('all'); setYear('all'); }} variant="primary" size="md">Сбросить фильтры</Button>
            </div>
          ) : (
            <div className="masonry">
              {items.map((p, i) => (
                <PortfolioCard
                  key={p.id} project={p} delay={i * 60}
                  onClick={() => setOpenIdx(items.findIndex(x => x.id === p.id))}
                />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <Section className="py-24 md:py-32 bg-ink-50">
        <Container size="wide">
          <Card className="p-10 md:p-16 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Reveal><Eyebrow className="mb-5">ВАШ ПРОЕКТ — СЛЕДУЮЩИЙ</Eyebrow></Reveal>
              <Reveal delay={80}>
                <h3 className="display text-[clamp(28px,4vw,48px)] font-medium leading-tight tracking-tight">
                  Добавим ваш фасад в эту<br/>галерею в этом году.
                </h3>
              </Reveal>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3">
              <Button onClick={onOpenConsult} variant="primary" size="lg">Обсудить проект</Button>
              <Button onClick={onOpenConsult} variant="outline" size="lg" iconAfter={<Icons.Ruler size={16}/>}>Вызвать замерщика</Button>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Lightbox */}
      <ProjectLightbox
        items={items}
        index={openIdx}
        onClose={() => setOpenIdx(-1)}
        onPrev={() => setOpenIdx((openIdx - 1 + items.length) % items.length)}
        onNext={() => setOpenIdx((openIdx + 1) % items.length)}
        onOpenConsult={onOpenConsult}
      />
    </div>
  );
}

// ---------- Portfolio card ----------
function PortfolioCard({ project, delay = 0, onClick }) {
  return (
    <Reveal delay={delay}>
      <button onClick={onClick} className="group block w-full text-left">
        <div className="relative overflow-hidden rounded-[18px]" style={{ aspectRatio: project.ar }}>
          <img src={project.image} alt={project.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"/>
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
          <div className="absolute bottom-0 inset-x-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur text-[10px] font-mono tracking-[0.16em] uppercase">{project.typeLabel}</span>
              <span className="text-[11px] text-white/70 font-mono">{project.year}</span>
            </div>
            <h3 className="display text-[22px] font-medium tracking-tight leading-tight">{project.title}</h3>
            <p className="text-[12.5px] text-white/70 mt-1">{project.location}</p>
          </div>
          <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/90 backdrop-blur text-ink-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Icons.Maximize size={16}/>
          </div>
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4">
          <div>
            <h3 className="display text-[18px] font-medium tracking-tight leading-tight">{project.title}</h3>
            <p className="text-[12.5px] text-ink-400 mt-0.5">{project.typeLabel}</p>
          </div>
          <span className="font-mono text-[12px] text-ink-400 shrink-0">{project.year}</span>
        </div>
      </button>
    </Reveal>
  );
}

// ---------- Project lightbox ----------
function ProjectLightbox({ items, index, onClose, onPrev, onNext, onOpenConsult }) {
  useEffect(() => {
    document.body.style.overflow = index >= 0 ? 'hidden' : '';
    const onKey = (e) => {
      if (index < 0) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [index]);

  if (index < 0) return null;
  const p = items[index];
  if (!p) return null;

  return (
    <div className="fixed inset-0 z-50 bg-ink-900/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-[pageEnter_400ms_cubic-bezier(.16,1,.3,1)_both]">
      <button onClick={onClose} className="absolute top-5 right-5 z-10 h-12 w-12 rounded-full bg-white/10 backdrop-blur text-white hover:bg-white hover:text-ink-900 transition flex items-center justify-center">
        <Icons.X size={20}/>
      </button>
      <button onClick={onPrev} className="absolute left-5 top-1/2 -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-white/10 backdrop-blur text-white hover:bg-white hover:text-ink-900 transition hidden md:flex items-center justify-center">
        <Icons.ArrowLeft size={20}/>
      </button>
      <button onClick={onNext} className="absolute right-5 top-1/2 -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-white/10 backdrop-blur text-white hover:bg-white hover:text-ink-900 transition hidden md:flex items-center justify-center">
        <Icons.ArrowRight size={20}/>
      </button>

      <div className="absolute top-7 left-7 z-10 font-mono text-[12px] tracking-[0.18em] uppercase text-white/70">
        {String(index + 1).padStart(2,'0')} / {String(items.length).padStart(2,'0')}
      </div>

      <div className="relative w-full max-w-7xl max-h-[88vh] bg-white rounded-[24px] overflow-hidden grid lg:grid-cols-12 shadow-soft-lg">
        <div className="lg:col-span-8 relative bg-ink-100" style={{ minHeight: '50vh' }}>
          <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover"/>
        </div>
        <div className="lg:col-span-4 p-8 md:p-10 overflow-y-auto max-h-[88vh]">
          <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-ink-400 mb-3">{p.typeLabel} · {p.year}</div>
          <h2 className="display text-[clamp(28px,2.6vw,38px)] font-medium tracking-tight leading-tight mb-4">{p.title}</h2>
          <p className="text-[15px] leading-[1.65] text-ink-600 mb-8">{p.description}</p>

          <div className="space-y-px bg-ink-100 border border-ink-100 rounded-2xl overflow-hidden">
            {[
              { label: 'Локация',        value: p.location, icon: 'MapPin' },
              { label: 'Тип объекта',    value: p.typeLabel, icon: 'Building' },
              { label: 'Площадь фасада', value: p.area, icon: 'Ruler' },
              { label: 'Материалы',      value: p.material, icon: 'Layers' },
              { label: 'Завершено',      value: p.year, icon: 'Calendar' },
            ].map((s, i) => {
              const Ic = Icons[s.icon];
              return (
                <div key={i} className="bg-white p-4 flex items-start gap-4">
                  <span className="mt-0.5 text-ink-400"><Ic size={16}/></span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-400 mb-0.5">{s.label}</div>
                    <div className="text-[14px] font-medium truncate">{s.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-2">
            <Button onClick={() => { onClose(); onOpenConsult(); }} variant="primary" size="md">Хочу такой же фасад</Button>
            <Button href="https://wa.me/77750280303" as="a" variant="outline" size="md" icon={<Icons.WhatsApp size={15}/>} iconAfter={null}>Обсудить в WhatsApp</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

window.PortfolioPage = PortfolioPage;
