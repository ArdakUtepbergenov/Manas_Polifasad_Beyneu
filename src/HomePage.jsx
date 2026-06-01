// Home page — cinematic hero, trust strip, advantages, featured projects, stats, process, testimonials, FAQ, Instagram, map, final CTA.

function HomePage({ navigate, onOpenConsult }) {
  return (
    <div className="page-enter">
      <Hero onOpenConsult={onOpenConsult} navigate={navigate}/>
      <TrustStrip />
      <AdvantagesSection />
      <FeaturedProjectsSection navigate={navigate}/>
      <StatsSection />
      <ProcessSection onOpenConsult={onOpenConsult}/>
      <TestimonialsSection />
      <FAQSection />
      <InstagramSection />
      <MapSection />
      <FinalCTASection onOpenConsult={onOpenConsult}/>
    </div>
  );
}

// ---------- Hero ----------
function Hero({ onOpenConsult, navigate }) {
  const { Photos } = window.AppData;
  return (
    <section className="relative min-h-[100vh] bg-ink-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src={Photos.heroPrimary} alt="" className="absolute inset-0 h-full w-full object-cover kenburns" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/45 to-ink-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/70 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
        }}/>
      </div>

      <Container size="wide" className="relative h-screen min-h-[760px] flex flex-col justify-between pt-32 pb-12">
        <div className="flex items-center justify-between text-[12px] font-mono tracking-[0.18em] uppercase text-white/60">
          <div className="reveal in">
            <span className="text-white/40">N 47° 06'</span>
            <span className="mx-3 text-white/20">/</span>
            <span className="text-white/40">E 51° 55'</span>
            <span className="mx-3 text-white/20">·</span>
            <span>Атырау, Казахстан</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span className="text-white/40">2013 — 2026</span>
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"/> В работе 14 объектов</span>
          </div>
        </div>

        <div className="max-w-[1200px]">
          <Reveal>
            <div className="eyebrow text-white/60 mb-7">
              <span className="h-px w-10 bg-white/40 inline-block align-middle mr-3"/>
              ПОЛИФАСАДНЫЕ СИСТЕМЫ · АРХИТЕКТУРНЫЙ МОНТАЖ
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display font-medium text-[clamp(48px,8.2vw,148px)] leading-[0.92] tracking-tightest text-white">
              Фасад, который<br/>
              <span className="text-gold-light italic font-light">остаётся</span> в памяти.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 max-w-xl text-[17px] md:text-[19px] leading-[1.55] text-white/75">
              Производим и монтируем премиальные фасадные системы для частных домов, коттеджей, ресторанов и коммерческих зданий в Атырау. Архитектурное качество, гарантия год.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button onClick={onOpenConsult} variant="invert" size="lg">Получить консультацию</Button>
              <Button onClick={onOpenConsult} variant="outlineDark" size="lg" iconAfter={<Icons.Ruler size={16}/>}>Вызвать замерщика</Button>
              <Button href="https://wa.me/77027095654" as="a" variant="whatsapp" size="lg" icon={<Icons.WhatsApp size={17}/>} iconAfter={null}>WhatsApp</Button>
              <Button onClick={() => navigate('catalog')} variant="ghost" size="lg" className="text-white hover:bg-white/10" iconAfter={null}>Смотреть каталог</Button>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="grid grid-cols-3 gap-8 md:gap-14">
            {[
              { v: '5000+', l: 'объектов сдано' },
              { v: '1',   l: 'год гарантии' },
              { v: '8',   l: 'лет на рынке' },
            ].map((s, i) => (
              <Reveal key={i} delay={320 + i * 80}>
                <div>
                  <div className="display text-[36px] md:text-[44px] font-medium leading-none"><CountUp value={s.v}/></div>
                  <div className="mt-2 text-[12px] font-mono uppercase tracking-[0.18em] text-white/50">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={500}>
            <div className="flex items-center gap-3 text-[12px] font-mono uppercase tracking-[0.18em] text-white/50">
              <span>прокрутите вниз</span>
              <span className="block h-12 w-px bg-gradient-to-b from-white/40 to-transparent"/>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

// ---------- Trust strip ----------
function TrustStrip() {
  const labels = [
    'TÜV-сертифицированные материалы',
    'Член ассоциации строителей Казахстана',
    'Гарантия год',
    'Собственное производство',
    'ISO 9001:2015',
    '5000+ сданных объектов',
  ];
  return (
    <section className="bg-white py-8 border-b border-ink-100">
      <Marquee>
        {labels.map((l, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="text-[13.5px] font-medium tracking-tight text-ink-500">{l}</span>
            <span className="text-ink-200">◆</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

// ---------- Advantages ----------
function AdvantagesSection() {
  const { ADVANTAGES } = window.AppData;
  return (
    <Section className="py-28 md:py-40">
      <Container size="wide">
        <SectionHeader
          align="split"
          eyebrow="ПОЧЕМУ МАНАС СТРОЙ"
          title={<>Шесть причин выбрать<br/>архитектурный подход</>}
          lead="Мы не просто закрываем стену материалом. Мы проектируем фасад как часть архитектурной композиции — с расчётом теплотехники, инсоляции и долговечности на десятилетия вперёд."
        />
        <div className="mt-16 md:mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-100 border border-ink-100 rounded-3xl overflow-hidden">
          {ADVANTAGES.map((a, i) => {
            const Ic = Icons[a.icon];
            return (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-white p-10 md:p-12 h-full flex flex-col group hover:bg-ink-50 transition-colors duration-500 cursor-default">
                  <div className="flex items-center justify-between mb-12">
                    <span className="h-14 w-14 rounded-2xl bg-ink-50 group-hover:bg-white transition-colors flex items-center justify-center text-accent">
                      <Ic size={22}/>
                    </span>
                    <span className="font-mono text-[12px] text-ink-300 tracking-widest">0{i+1}</span>
                  </div>
                  <h3 className="display text-[26px] font-medium tracking-tight text-ink-900 mb-3 leading-tight">{a.title}</h3>
                  <p className="text-[15px] leading-[1.65] text-ink-500">{a.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

// ---------- Featured projects ----------
function FeaturedProjectsSection({ navigate }) {
  const { PROJECTS } = window.AppData;
  const featured = PROJECTS.slice(0, 5);
  return (
    <Section className="py-28 md:py-40">
      <Container size="wide">
        <SectionHeader
          align="split"
          eyebrow="ИЗБРАННЫЕ ПРОЕКТЫ"
          title="Каталог наших фасадов"
          lead="Каждый объект — индивидуальное проектное решение. Ниже несколько работ последних лет в Атырау."
          cta={<Button onClick={() => navigate('portfolio')} variant="outline" size="md" iconAfter={null}>Все проекты — 5000+</Button>}
        />
        <div className="mt-16 md:mt-20 grid md:grid-cols-12 gap-6 md:gap-8">
          <Reveal className="md:col-span-7">
            <ProjectTile project={featured[0]} large onClick={() => navigate('portfolio')}/>
          </Reveal>
          <Reveal className="md:col-span-5" delay={120}>
            <ProjectTile project={featured[1]} onClick={() => navigate('portfolio')}/>
          </Reveal>
          <Reveal className="md:col-span-4" delay={60}>
            <ProjectTile project={featured[2]} onClick={() => navigate('portfolio')}/>
          </Reveal>
          <Reveal className="md:col-span-4" delay={120}>
            <ProjectTile project={featured[3]} onClick={() => navigate('portfolio')}/>
          </Reveal>
          <Reveal className="md:col-span-4" delay={180}>
            <ProjectTile project={featured[4]} onClick={() => navigate('portfolio')}/>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function ProjectTile({ project, large = false, onClick }) {
  return (
    <button onClick={onClick} className="group block w-full text-left">
      <HoverImage src={project.image} alt={project.title} aspect="4/3" className="rounded-[20px]">
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/0 to-transparent opacity-90"/>
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur text-[11px] font-mono tracking-[0.16em] uppercase">{project.typeLabel}</span>
            <span className="text-[12px] text-white/60 font-mono">{project.year}</span>
          </div>
          <h3 className={`display font-medium tracking-tight leading-tight ${large ? 'text-[34px] md:text-[44px]' : 'text-[24px]'}`}>{project.title}</h3>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-[13px] text-white/70 truncate">{project.location} · {project.area}</p>
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
              <Icons.ArrowUpRight size={20}/>
            </span>
          </div>
        </div>
      </HoverImage>
    </button>
  );
}

// ---------- Stats ----------
function StatsSection() {
  const { STATS, Photos } = window.AppData;
  return (
    <Section dark className="py-28 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src={Photos.heroSecondary} alt="" className="h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-900/80 to-ink-900"/>
      </div>
      <Container size="wide" className="relative">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow dark className="mb-5">ЦИФРЫ</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="display text-white text-[clamp(36px,5.4vw,72px)] font-medium leading-[0.96] tracking-tightest">
                Восемь лет<br/>в одной дисциплине —<br/><span className="text-gold-light italic font-light">фасады.</span>
              </h2>
            </Reveal>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="bg-ink-900/40 backdrop-blur p-8 md:p-10 h-full">
                <div className="display text-white text-[clamp(48px,6vw,84px)] font-medium leading-none tracking-tightest">
                  <CountUp value={s.value}/>
                </div>
                <div className="mt-4 text-[12.5px] font-mono uppercase tracking-[0.18em] text-white/50 leading-snug">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ---------- Process ----------
function ProcessSection({ onOpenConsult }) {
  const { PROCESS } = window.AppData;
  const [active, setActive] = useState(0);
  return (
    <Section tone="mute" className="py-28 md:py-40">
      <Container size="wide">
        <SectionHeader
          align="split"
          eyebrow="КАК МЫ РАБОТАЕМ"
          title={<>Прозрачный процесс<br/>от заявки до гарантии</>}
          lead="Каждый этап фиксируется в договоре с конкретными сроками. Вы всегда знаете, что происходит на объекте."
          cta={<Button onClick={onOpenConsult} variant="primary" size="md">Начать с консультации</Button>}
        />
        <div className="mt-16 md:mt-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="space-y-1">
              {PROCESS.map((p, i) => (
                <Reveal key={i} delay={i * 60}>
                  <button
                    onClick={() => setActive(i)}
                    className={`w-full text-left grid grid-cols-[64px_1fr_auto] items-center gap-6 py-7 border-b border-ink-200 transition-colors duration-500 cursor-pointer
                      ${active === i ? 'opacity-100' : 'opacity-60 hover:opacity-90'}`}
                  >
                    <span className={`font-mono text-[13px] tracking-widest transition-colors ${active === i ? 'text-accent' : 'text-ink-400'}`}>{p.step}</span>
                    <span className={`display text-[22px] md:text-[28px] font-medium tracking-tight transition-colors ${active === i ? 'text-ink-900' : 'text-ink-500'}`}>{p.title}</span>
                    <span className={`transition-all ${active === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                      <Icons.ArrowRight size={20} className="text-accent"/>
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <Reveal>
              <Card className="p-8 md:p-10 sticky top-28">
                <div className="font-mono text-[12px] tracking-[0.18em] text-accent mb-3">ЭТАП {PROCESS[active].step}</div>
                <h3 className="display text-[34px] font-medium leading-tight mb-5 tracking-tight">{PROCESS[active].title}</h3>
                <p className="text-[15.5px] leading-[1.7] text-ink-500 mb-7">{PROCESS[active].text}</p>
                <div className="space-y-3 pt-6 border-t border-ink-100">
                  {['Закрепляем сроки', 'Фотофиксация', 'Прозрачная смета'].map((t, i) => (
                    <div key={i} className="flex items-center gap-3 text-[14px] text-ink-600">
                      <span className="h-5 w-5 rounded-full bg-ink-900 text-white flex items-center justify-center"><Icons.Check size={11} strokeWidth={2.5}/></span>
                      {t}
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ---------- Testimonials ----------
function TestimonialsSection() {
  const { TESTIMONIALS } = window.AppData;
  const [i, setI] = useState(0);
  return (
    <Section className="py-28 md:py-40">
      <Container size="tight">
        <Reveal><div className="text-center"><Eyebrow className="justify-center mb-5">ОТЗЫВЫ</Eyebrow></div></Reveal>
        <Reveal delay={80}>
          <h2 className="display text-center text-[clamp(34px,5vw,60px)] font-medium leading-[0.98] tracking-tightest">Что говорят клиенты</h2>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-16 relative">
            <div className="text-center max-w-3xl mx-auto">
              <div className="text-accent flex justify-center mb-8"><Icons.Quote size={48} className="opacity-30"/></div>
              <p className="display text-[clamp(22px,2.6vw,34px)] font-medium leading-[1.35] tracking-tight text-ink-900 min-h-[180px]">
                «{TESTIMONIALS[i].text}»
              </p>
              <div className="mt-10 flex flex-col items-center">
                <div className="display text-[18px] font-medium">{TESTIMONIALS[i].name}</div>
                <div className="text-[13px] font-mono uppercase tracking-[0.16em] text-ink-400 mt-1">{TESTIMONIALS[i].role}</div>
              </div>
            </div>
            <div className="mt-12 flex items-center justify-center gap-5">
              <button onClick={() => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="h-11 w-11 rounded-full border border-ink-200 hover:border-ink-900 hover:bg-ink-900 hover:text-white transition flex items-center justify-center">
                <Icons.ArrowLeft size={16}/>
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button key={idx} onClick={() => setI(idx)} className={`h-1 transition-all duration-500 ${i === idx ? 'w-10 bg-ink-900' : 'w-6 bg-ink-200'}`}/>
                ))}
              </div>
              <button onClick={() => setI((i + 1) % TESTIMONIALS.length)} className="h-11 w-11 rounded-full border border-ink-200 hover:border-ink-900 hover:bg-ink-900 hover:text-white transition flex items-center justify-center">
                <Icons.ArrowRight size={16}/>
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

// ---------- FAQ ----------
function FAQSection() {
  const { FAQS } = window.AppData;
  const [open, setOpen] = useState(0);
  return (
    <Section tone="mute" className="py-28 md:py-40">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal><Eyebrow className="mb-5">ВОПРОСЫ</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="display text-[clamp(34px,4.4vw,56px)] font-medium leading-[0.98] tracking-tightest">
                Часто<br/>спрашивают
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-[15.5px] leading-[1.65] text-ink-500">
                Не нашли ответ? Напишите в WhatsApp или закажите звонок — архитектор студии перезвонит в течение 15 минут.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            {FAQS.map((f, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="border-b border-ink-200">
                  <button
                    onClick={() => setOpen(open === i ? -1 : i)}
                    className="w-full py-6 md:py-8 flex items-center justify-between gap-6 text-left group"
                  >
                    <span className={`display text-[20px] md:text-[24px] font-medium tracking-tight transition-colors ${open === i ? 'text-ink-900' : 'text-ink-700 group-hover:text-ink-900'}`}>
                      {f.q}
                    </span>
                    <span className={`shrink-0 h-10 w-10 rounded-full flex items-center justify-center border transition-all duration-500
                      ${open === i ? 'border-ink-900 bg-ink-900 text-white' : 'border-ink-200 text-ink-600'}`}>
                      <Icons.Plus size={16} className={`transition-transform duration-500 ${open === i ? 'rotate-45' : ''}`}/>
                    </span>
                  </button>
                  <div className={`grid transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]
                    ${open === i ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-[15.5px] leading-[1.75] text-ink-500 max-w-2xl">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ---------- Instagram ----------
function InstagramSection() {
  const { Photos } = window.AppData;
  const imgs = [Photos.house1, Photos.detail1, Photos.cottage1, Photos.restaurant1, Photos.detail2, Photos.house3];
  return (
    <Section className="py-28 md:py-40">
      <Container size="wide">
        <SectionHeader
          align="split"
          eyebrow="@МАНАССТРОЙБЕЙНЕУ"
          title={<>Хроника наших<br/>фасадов</>}
          lead="Каждую неделю показываем процесс с объектов, детали монтажа и архитектурную съёмку завершённых работ."
          cta={
            <a href="https://www.instagram.com/manas_stroi_beyneu/" className="inline-flex items-center gap-3 text-[14px] font-medium tracking-tight hover:text-accent transition-colors">
              <Icons.Instagram size={18}/> Подписаться · 12.4K
              <Icons.ArrowUpRight size={16}/>
            </a>
          }
        />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
          {imgs.map((src, i) => (
            <Reveal key={i} delay={i * 60}>
              <a href="https://instagram.com" className="block group relative overflow-hidden rounded-2xl" style={{ aspectRatio: '1/1' }}>
                <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy"/>
                <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/40 transition-colors duration-500 flex items-center justify-center">
                  <Icons.Instagram size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ---------- Map ----------
function MapSection() {
  const points = [
    { x: 24, y: 38, label: 'мкр. Жилгородок', count: 18 },
    { x: 42, y: 56, label: 'мкр. Самал',      count: 24 },
    { x: 56, y: 30, label: 'мкр. Привокзальный', count: 31 },
    { x: 70, y: 64, label: 'р-н Балыкши',     count: 12 },
    { x: 36, y: 72, label: 'пр. Азаттык',     count: 22 },
    { x: 78, y: 42, label: 'промзона',        count: 9  },
    { x: 50, y: 48, label: 'центр',           count: 41 },
  ];
  return (
    <Section tone="mute" className="py-28 md:py-40 overflow-hidden">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-10 mb-12 items-end">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow className="mb-5">ГЕОГРАФИЯ ПРОЕКТОВ</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="display text-[clamp(34px,5vw,64px)] font-medium leading-[0.98] tracking-tightest">
                5000+ фасадов<br/>по всему Атырау
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={140}>
              <p className="text-[15.5px] leading-[1.65] text-ink-500">
                Карта наших объектов охватывает все районы города и пригородные посёлки. Большинство проектов сосредоточено в центре и премиальных коттеджных зонах.
              </p>
            </Reveal>
          </div>
        </div>
        <Reveal delay={200}>
          <div className="relative rounded-[28px] overflow-hidden border border-ink-200 bg-white" style={{ aspectRatio: '16/9' }}>
            <svg viewBox="0 0 1600 900" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#E8ECF0" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)"/>
              <path d="M-50,700 Q300,500 600,600 T1200,520 T1700,400" stroke="#42A5F5" strokeWidth="60" fill="none" opacity="0.25"/>
              <path d="M-50,700 Q300,500 600,600 T1200,520 T1700,400" stroke="#1565C0" strokeWidth="2" fill="none"/>
              <path d="M0,300 L1600,330" stroke="#D9DDE3" strokeWidth="3" fill="none"/>
              <path d="M0,500 L1600,470" stroke="#D9DDE3" strokeWidth="3" fill="none"/>
              <path d="M400,0 L460,900" stroke="#D9DDE3" strokeWidth="3" fill="none"/>
              <path d="M900,0 L920,900" stroke="#D9DDE3" strokeWidth="3" fill="none"/>
              <path d="M1240,0 L1180,900" stroke="#D9DDE3" strokeWidth="3" fill="none"/>
              <rect x="180" y="220" width="240" height="160" fill="#F5F7FA" stroke="#E8ECF0"/>
              <rect x="460" y="280" width="320" height="180" fill="#F5F7FA" stroke="#E8ECF0"/>
              <rect x="820" y="180" width="280" height="200" fill="#F5F7FA" stroke="#E8ECF0"/>
              <rect x="1120" y="240" width="320" height="180" fill="#F5F7FA" stroke="#E8ECF0"/>
              <rect x="220" y="540" width="220" height="200" fill="#F5F7FA" stroke="#E8ECF0"/>
              <rect x="500" y="660" width="280" height="180" fill="#F5F7FA" stroke="#E8ECF0"/>
              <rect x="880" y="600" width="280" height="220" fill="#F5F7FA" stroke="#E8ECF0"/>
              <rect x="1200" y="540" width="260" height="200" fill="#F5F7FA" stroke="#E8ECF0"/>
            </svg>
            {points.map((p, i) => (
              <div key={i} className="absolute -translate-x-1/2 -translate-y-full group cursor-pointer" style={{ left: p.x + '%', top: p.y + '%' }}>
                <div className="relative">
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-accent/30 animate-ping"/>
                  <span className="relative h-10 w-10 rounded-full bg-accent text-white flex items-center justify-center shadow-soft-lg border-2 border-white text-[11px] font-mono font-bold">
                    {p.count}
                  </span>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 rounded-full bg-ink-900 text-white text-[11px] font-mono uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.label} · {p.count} объектов
                </div>
              </div>
            ))}
            <div className="absolute top-6 right-6 h-16 w-16 rounded-full bg-white border border-ink-200 flex items-center justify-center shadow-soft">
              <Icons.Compass size={28} className="text-ink-700"/>
            </div>
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur border border-ink-200 rounded-2xl p-4 text-[12px] font-mono uppercase tracking-wider text-ink-600">
              <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-accent"/> Наш объект</div>
              <div className="flex items-center gap-2 mt-2"><span className="h-1 w-5 bg-accent"/> р. Урал</div>
            </div>
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur border border-ink-200 rounded-2xl px-5 py-3 text-[12px] font-mono uppercase tracking-wider text-ink-600">
              г. АТЫРАУ · масштаб 1:25 000
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

// ---------- Final CTA ----------
function FinalCTASection({ onOpenConsult }) {
  const { Photos } = window.AppData;
  return (
    <Section className="py-28 md:py-40 bg-white">
      <Container size="wide">
        <div className="relative overflow-hidden rounded-[32px] bg-ink-900 text-white p-10 md:p-20">
          <div className="absolute inset-0 opacity-50">
            <img src={Photos.heroVilla} alt="" className="h-full w-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/70 to-transparent"/>
          </div>
          <div className="relative max-w-2xl">
            <Reveal><Eyebrow dark className="mb-6">ПОРА НАЧАТЬ</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="display text-[clamp(40px,6.4vw,84px)] font-medium leading-[0.96] tracking-tightest">
                Замер фасада<br/><span className="text-gold-light italic font-light">бесплатно</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 text-[17px] leading-[1.6] text-white/75 max-w-lg">
                Архитектор приедет на объект, обсудит материалы и подготовит прозрачную смету в течение трёх рабочих дней.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button onClick={onOpenConsult} variant="invert" size="lg">Вызвать замерщика</Button>
                <Button href="https://wa.me/77027095654" as="a" variant="whatsapp" size="lg" icon={<Icons.WhatsApp size={17}/>} iconAfter={null}>WhatsApp</Button>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
                <div><Icons.Clock size={20} className="text-gold-light mb-2"/><div className="text-[13px] text-white/80">Ответ за 15 минут</div></div>
                <div><Icons.Ruler size={20} className="text-gold-light mb-2"/><div className="text-[13px] text-white/80">Бесплатный замер</div></div>
                <div><Icons.Shield size={20} className="text-gold-light mb-2"/><div className="text-[13px] text-white/80">Без обязательств</div></div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

window.HomePage = HomePage;
