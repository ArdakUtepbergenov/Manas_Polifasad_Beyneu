// Contact page — all CTAs route to WhatsApp. No forms.

const WA_URL = 'https://wa.me/77027095654';

function ContactPage({ navigate, onOpenConsult }) {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="pt-36 pb-16 md:pb-24 bg-white">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <Reveal><Eyebrow className="mb-5">КОНТАКТЫ</Eyebrow></Reveal>
              <Reveal delay={80}>
                <h1 className="display text-[clamp(48px,7.6vw,128px)] font-medium leading-[0.94] tracking-tightest">
                  Давайте <span className="text-gold italic font-light">поговорим</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={140}>
                <p className="text-[16px] leading-[1.65] text-ink-500">
                  Среднее время ответа в WhatsApp — 7 минут. Архитектор студии согласует удобное время визита и подготовит расчёт фасада.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Big primary WhatsApp CTA */}
      <section className="pb-12 md:pb-20 bg-white">
        <Container size="wide">
          <Reveal>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-[28px] bg-[#25D366] text-white shadow-[0_24px_60px_-12px_rgba(37,211,102,0.45)] hover:shadow-[0_32px_80px_-12px_rgba(37,211,102,0.6)] transition-all duration-700"
            >
              <div className="absolute inset-0 opacity-30" style={{
                background: 'radial-gradient(circle at 80% 30%, rgba(255,255,255,0.35) 0%, transparent 50%), radial-gradient(circle at 20% 90%, rgba(0,0,0,0.25) 0%, transparent 50%)'
              }}/>
              <div className="relative p-10 md:p-16 grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-8">
                  <div className="eyebrow text-white/70 mb-5">
                    <span className="h-px w-8 bg-white/50 inline-block align-middle mr-3"/>
                    ОСНОВНОЙ КАНАЛ СВЯЗИ
                  </div>
                  <h2 className="display text-[clamp(36px,5.6vw,76px)] font-medium leading-[0.96] tracking-tightest mb-6">
                    Напишите нам<br/>в WhatsApp
                  </h2>
                  <p className="text-[17px] leading-[1.6] text-white/85 max-w-xl">
                    Все консультации, замеры и расчёты — через WhatsApp. Так быстрее: вы можете сразу прислать фотографии объекта, замеры, референсы.
                  </p>
                  <div className="mt-10 inline-flex items-center gap-4 bg-white text-ink-900 rounded-full pl-3 pr-7 h-16 group-hover:gap-5 transition-all duration-500">
                    <span className="h-11 w-11 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                      <Icons.WhatsApp size={20}/>
                    </span>
                    <span className="display text-[22px] font-medium tracking-tight">+7 702 214 06 06</span>
                    <Icons.ArrowUpRight size={20} className="text-ink-400 group-hover:text-ink-900 transition-colors"/>
                  </div>
                </div>
                <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-3 text-white">
                  <WAstat label="Время ответа" value="7 мин"/>
                  <WAstat label="Доступно"     value="Пн — Сб"/>
                  <WAstat label="Часы"         value="09:00 — 18:00"/>
                </div>
              </div>
            </a>
          </Reveal>
        </Container>
      </section>

      {/* Contact cards */}
      <section className="pb-16 md:pb-24 bg-white">
        <Container size="wide">
          <Reveal>
            <div className="text-[12px] font-mono uppercase tracking-[0.16em] text-ink-500 mb-6">
              <span className="h-px w-8 bg-ink-300 inline-block align-middle mr-3"/>
              ДРУГИЕ СПОСОБЫ СВЯЗИ
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <ContactCard
              icon={<Icons.Phone size={22}/>}
              label="ТЕЛЕФОН"
              value="+7 702 214 06 06"
              hint="Ежедневно 09:00 — 21:00"
              href="tel:+77027095654"
            />
            <ContactCard
              icon={<Icons.Mail size={22}/>}
              label="ПОЧТА"
              value="info@manasstroi.kz"
              hint="Для проектной документации"
              href="mailto:info@manasstroi.kz"
            />
            <ContactCard
              icon={<Icons.Instagram size={22}/>}
              label="INSTAGRAM"
              value="@manas_stroi"
              hint="82 200 подписчиков"
              href="https://instagram.com/manas_stroi/"
            />
          </div>
        </Container>
      </section>

      {/* Office card + services */}
      <section className="py-16 md:py-24 bg-ink-50">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
            <Reveal className="lg:col-span-5">
              <div className="bg-ink-900 text-white rounded-[24px] overflow-hidden relative h-full flex flex-col">
                <div className="relative" style={{ aspectRatio: '4/3' }}>
                  <SchematicMap/>
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <Eyebrow dark className="mb-4">ОФИС И ПРОИЗВОДСТВО</Eyebrow>
                  <h3 className="display text-[28px] md:text-[32px] font-medium tracking-tight leading-tight mb-6">
                    Атырау, ул. Сырым Датова 99а
                  </h3>
                  <div className="space-y-5 text-[14.5px]">
                    <ContactLine icon={<Icons.MapPin size={16}/>}   label="Адрес офиса"  value="г. Атырау, ул. Сырым Датова 99а"/>
                    <ContactLine icon={<Icons.Building size={16}/>} label="Производство" value="г. Атырау, ул. Сырым Датова 99а"/>
                    <ContactLine icon={<Icons.Clock size={16}/>}    label="Часы работы"  value="Пн — Сб · 09:00 — 18:00"/>
                    <ContactLine icon={<Icons.Phone size={16}/>}    label="Телефон"      value="+7 702 214 06 06"/>
                  </div>
                  <div className="mt-auto pt-8 grid grid-cols-2 gap-3">
                    <Button href={WA_URL} as="a" variant="whatsapp" size="md" icon={<Icons.WhatsApp size={15}/>} iconAfter={null}>WhatsApp</Button>
                    <Button href="tel:+77027095654" as="a" variant="invert_dark" size="md" icon={<Icons.Phone size={15}/>} iconAfter={null}>Позвонить</Button>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={120}>
              <div className="h-full flex flex-col gap-4 md:gap-6">
                <ServiceRow number="01" title="Получить консультацию" text="Архитектор студии ответит на вопросы по фасадным системам, материалам и срокам." cta="Написать в WhatsApp"/>
                <ServiceRow number="02" title="Вызвать замерщика"     text="Бесплатный выезд по Атырау. Замер фасада, фотофиксация и обсуждение материалов на объекте." cta="Написать в WhatsApp"/>
                <ServiceRow number="03" title="Рассчитать стоимость"  text="Прозрачная смета с детализацией по материалам и работам в течение 3 рабочих дней." cta="Написать в WhatsApp"/>
                <ServiceRow number="04" title="Проект фасада"         text="Архитектурный проект с визуализацией и подбором материалов. От 7 рабочих дней." cta="Написать в WhatsApp"/>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Big map */}
      <section className="pb-20 md:pb-32 bg-ink-50">
        <Container size="wide">
          <Reveal>
            <div className="relative rounded-[28px] overflow-hidden border border-ink-200 bg-white" style={{ aspectRatio: '21/9' }}>
              <BigSchematicMap/>
              <div className="absolute top-6 left-6 bg-white rounded-2xl border border-ink-200 shadow-soft p-5 max-w-xs">
                <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-400 mb-1">МЫ ЗДЕСЬ</div>
                <div className="display text-[18px] font-medium mb-1">Манас Строй</div>
                <div className="text-[13px] text-ink-500 leading-relaxed">ул. Сырым Датова 99а<br/>г. Атырау, Казахстан</div>
                <div className="mt-3 pt-3 border-t border-ink-100 flex items-center gap-3 text-[13px]">
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline flex items-center gap-1.5">
                    <Icons.WhatsApp size={14}/> Написать
                  </a>
                  <span className="text-ink-200">·</span>
                  <a href="tel:+77027095654" className="text-accent hover:text-accent-dark">+7 702 709 56-54</a>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Quick info */}
      <Section className="py-20 md:py-28 bg-white">
        <Container size="wide">
          <div className="grid md:grid-cols-3 gap-8">
            <QuickInfo icon="Clock"  title="Среднее время ответа"  text="7 минут в рабочее время. Сообщения вне часов обрабатываются с 09:00."/>
            <QuickInfo icon="Ruler"  title="Замер фасада"           text="Бесплатно в Атырау. Для объектов от 200 м² — выезд по Атырауской области."/>
            <QuickInfo icon="Shield" title="Без обязательств"       text="Консультация и расчёт стоимости не накладывают финансовых обязательств."/>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function WAstat({ label, value }) {
  return (
    <div className="p-4 rounded-2xl bg-white/10">
      <div className="text-[11px] font-mono uppercase tracking-[0.14em] mb-1 text-white/60">{label}</div>
      <div className="display text-[20px] font-medium tracking-tight text-white">{value}</div>
    </div>
  );
}

function ContactCard({ icon, label, value, hint, href }) {
  const isExternal = /^https?:/.test(href);
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group block rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-ink-200 hover:shadow-soft"
    >
      <div className="flex items-start justify-between mb-12">
        <span className="h-12 w-12 rounded-2xl bg-ink-50 text-accent flex items-center justify-center">{icon}</span>
        <Icons.ArrowUpRight size={18} className="text-ink-300 group-hover:text-ink-900 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
      </div>
      <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-ink-400 mb-2">{label}</div>
      <div className="display text-[20px] font-medium tracking-tight leading-tight mb-1.5">{value}</div>
      <div className="text-[13px] text-ink-500">{hint}</div>
    </a>
  );
}

function ServiceRow({ number, title, text, cta }) {
  return (
    <a
      href={WA_URL} target="_blank" rel="noopener noreferrer"
      className="group flex-1 bg-white rounded-2xl border border-ink-100 p-6 md:p-8 hover:border-ink-200 hover:shadow-soft transition-all duration-500 flex items-center gap-6 md:gap-10"
    >
      <span className="font-mono text-[13px] text-accent tracking-widest">{number}</span>
      <div className="flex-1 min-w-0">
        <h3 className="display text-[20px] md:text-[24px] font-medium tracking-tight mb-1.5 leading-tight">{title}</h3>
        <p className="text-[13.5px] md:text-[14.5px] text-ink-500 leading-[1.6]">{text}</p>
      </div>
      <span className="hidden md:flex items-center gap-2.5 text-[13.5px] font-medium text-ink-500 group-hover:text-ink-900 transition-colors whitespace-nowrap">
        {cta}
        <span className="h-10 w-10 rounded-full bg-ink-50 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300 flex items-center justify-center">
          <Icons.ArrowRight size={15}/>
        </span>
      </span>
      <span className="md:hidden h-11 w-11 rounded-full bg-ink-50 group-hover:bg-[#25D366] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
        <Icons.WhatsApp size={16}/>
      </span>
    </a>
  );
}

function ContactLine({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-white/40">{icon}</span>
      <div>
        <div className="eyebrow text-white/40 mb-1">{label}</div>
        <div className="text-[14.5px]">{value}</div>
      </div>
    </div>
  );
}

function QuickInfo({ icon, title, text }) {
  const Ic = Icons[icon];
  return (
    <Reveal>
      <div className="p-2">
        <Ic size={26} className="text-accent mb-5"/>
        <h3 className="display text-[22px] font-medium tracking-tight mb-2">{title}</h3>
        <p className="text-[14.5px] text-ink-500 leading-relaxed">{text}</p>
      </div>
    </Reveal>
  );
}

// ---------- Small map in office card ----------
function SchematicMap() {
  return (
    <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="grid-sm" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#161A20"/>
      <rect width="100%" height="100%" fill="url(#grid-sm)"/>
      <path d="M-50,400 Q200,280 450,360 T900,260" stroke="#1565C0" strokeWidth="40" fill="none" opacity="0.4"/>
      <path d="M0,200 L800,220"  stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none"/>
      <path d="M0,440 L800,420"  stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none"/>
      <path d="M280,0 L320,600"  stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none"/>
      <path d="M540,0 L560,600"  stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none"/>
      <rect x="120" y="160" width="120" height="100" fill="rgba(255,255,255,0.04)"/>
      <rect x="350" y="240" width="160" height="120" fill="rgba(255,255,255,0.04)"/>
      <rect x="580" y="180" width="140" height="140" fill="rgba(255,255,255,0.04)"/>
      <rect x="160" y="320" width="120" height="100" fill="rgba(255,255,255,0.04)"/>
      <rect x="380" y="440" width="140" height="100" fill="rgba(255,255,255,0.04)"/>
      <rect x="580" y="380" width="160" height="120" fill="rgba(255,255,255,0.04)"/>
      <g transform="translate(420,260)">
        <circle r="36" fill="#1565C0" opacity="0.15">
          <animate attributeName="r" from="20" to="48" dur="2.4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" from="0.35" to="0" dur="2.4s" repeatCount="indefinite"/>
        </circle>
        <circle r="14" fill="#42A5F5" stroke="#fff" strokeWidth="2.5"/>
      </g>
    </svg>
  );
}

// ---------- Big schematic map ----------
function BigSchematicMap() {
  return (
    <svg viewBox="0 0 1600 700" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="grid-lg" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#E8ECF0" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#fff"/>
      <rect width="100%" height="100%" fill="url(#grid-lg)"/>
      <path d="M-50,520 Q300,360 600,440 T1200,360 T1700,260" stroke="#42A5F5" strokeWidth="48" fill="none" opacity="0.22"/>
      <path d="M-50,520 Q300,360 600,440 T1200,360 T1700,260" stroke="#1565C0" strokeWidth="2" fill="none"/>
      <path d="M0,220 L1600,240"   stroke="#D9DDE3" strokeWidth="3" fill="none"/>
      <path d="M0,440 L1600,400"   stroke="#D9DDE3" strokeWidth="3" fill="none"/>
      <path d="M420,0 L480,700"    stroke="#D9DDE3" strokeWidth="3" fill="none"/>
      <path d="M900,0 L920,700"    stroke="#D9DDE3" strokeWidth="3" fill="none"/>
      <path d="M1240,0 L1180,700"  stroke="#D9DDE3" strokeWidth="3" fill="none"/>
      {[
        [180,140,240,160],[460,200,320,180],[820,140,280,200],[1120,200,320,180],
        [220,460,220,200],[500,580,280,120],[880,520,280,160],[1200,460,260,200],
      ].map(([x,y,w,h], i) => <rect key={i} x={x} y={y} width={w} height={h} fill="#F5F7FA" stroke="#E8ECF0"/>)}
      <g transform="translate(820,360)">
        <circle r="60" fill="#1565C0" opacity="0.15">
          <animate attributeName="r" from="30" to="80" dur="2.4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" from="0.3" to="0" dur="2.4s" repeatCount="indefinite"/>
        </circle>
        <circle r="20" fill="#1565C0" stroke="#fff" strokeWidth="3"/>
      </g>
    </svg>
  );
}

window.ContactPage = ContactPage;
