// About page — company philosophy, animated stats, guarantees, history timeline, values, awards.

function AboutPage({ navigate, onOpenConsult }) {
  const { Photos, STATS } = window.AppData;
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="pt-36 pb-20 md:pb-32 bg-white">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <Reveal><Eyebrow className="mb-6">О КОМПАНИИ · С 2018 ГОДА</Eyebrow></Reveal>
              <Reveal delay={80}>
                <h1 className="display text-[clamp(48px,7.6vw,128px)] font-medium leading-[0.94] tracking-tightest">
                  Архитектурное<br/>отношение к <span className="text-gold italic font-light">фасаду.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-10 max-w-2xl text-[18px] md:text-[20px] leading-[1.55] text-ink-600">
                  Манас Строй — не подрядчик, а архитектурно-производственная студия, которая занимается только одним делом: фасадами премиальных зданий в Атырау.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end gap-4">
              <Reveal delay={220}>
                <Card className="p-6">
                  <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-400 mb-1">ОСНОВАНО</div>
                  <div className="display text-[28px] font-medium tracking-tight">2018</div>
                </Card>
              </Reveal>
              <Reveal delay={280}>
                <Card className="p-6">
                  <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-400 mb-1">ОФИС</div>
                  <div className="text-[15px] font-medium leading-snug">г. Атырау, ул. Сырым Датова 99а</div>
                </Card>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Hero photo */}
      <section className="relative bg-ink-50 overflow-hidden">
        <Container size="wide" className="py-0">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px]" style={{ aspectRatio: '21/9' }}>
              <img src={Photos.heroSecondary} alt="" className="absolute inset-0 w-full h-full object-cover kenburns"/>
              <div className="absolute inset-0 bg-gradient-to-tr from-ink-900/40 via-transparent to-transparent"/>
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-6 text-white">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70 mb-2">ОБЪЕКТ № 312 · 2024</div>
                  <div className="display text-2xl md:text-3xl font-medium tracking-tight">Резиденция «Терен», мкр. Самал</div>
                </div>
                <div className="hidden md:block text-right">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70 mb-2">МАТЕРИАЛ</div>
                  <div className="text-[14px]">Термопанель «Песочник»</div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Philosophy */}
      <Section className="py-28 md:py-40">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal><Eyebrow className="mb-5">ФИЛОСОФИЯ</Eyebrow></Reveal>
              <Reveal delay={80}>
                <h2 className="display text-[clamp(34px,4.6vw,60px)] font-medium leading-[1] tracking-tightest">
                  Фасад — это первое<br/>впечатление о здании.<br/>И последнее.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={160}>
                <p className="text-[17px] leading-[1.7] text-ink-600 mb-6">
                  Мы убеждены, что фасад не должен «закрывать стену». Он должен формировать характер здания, работать на квартал, отражать ценности владельца — и при этом служить десятилетиями без потери качества.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-[17px] leading-[1.7] text-ink-600 mb-6">
                  Поэтому в Манас Строй каждый проект начинается с архитектурного эскиза и расчёта теплотехники, а не с прайса материалов. Мы говорим заказчику «не подходит», когда выбранный материал не выдержит климат Атырау — и предлагаем альтернативу.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-10 grid grid-cols-2 gap-4">
                  <Pillar value="01" label="Только фасады"   text="Никаких отвлечений на смежные направления."/>
                  <Pillar value="02" label="Под ключ"        text="Проект, производство и монтаж — внутри студии."/>
                  <Pillar value="03" label="Архитектура"     text="Каждый объект ведёт практикующий архитектор."/>
                  <Pillar value="04" label="Гарантия год" text="Письменное обязательство на материал и работу."/>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats — animated */}
      <Section dark className="py-24 md:py-32">
        <Container size="wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-ink-800 p-8 md:p-10 h-full">
                  <div className="display text-white text-[clamp(48px,6vw,84px)] font-medium leading-none tracking-tightest">
                    <CountUp value={s.value}/>
                  </div>
                  <div className="mt-4 text-[12.5px] font-mono uppercase tracking-[0.18em] text-white/50">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Guarantees */}
      <GuaranteesSection/>

      {/* Production timeline */}
      <ProductionTimeline/>

      {/* Values */}
      <ValuesSection/>

      {/* Awards strip */}
      <AwardsStrip/>

      {/* CTA */}
      <Section className="py-24 md:py-32 bg-ink-50">
        <Container size="wide">
          <Card className="p-10 md:p-16 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Reveal><Eyebrow className="mb-5">ПРИХОДИТЕ В СТУДИЮ</Eyebrow></Reveal>
              <Reveal delay={80}>
                <h3 className="display text-[clamp(28px,4vw,48px)] font-medium leading-tight tracking-tight">
                  Покажем производство<br/>и завершённые объекты.
                </h3>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-[15.5px] text-ink-500 max-w-xl leading-[1.65]">
                  Лучший способ убедиться в качестве — увидеть его своими глазами. Назначьте визит, и мы покажем производство термопанелей и один из завершённых фасадов в Атырау.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3">
              <Button onClick={onOpenConsult} variant="primary" size="lg">Назначить визит</Button>
              <Button onClick={() => navigate('contact')} variant="outline" size="lg" iconAfter={<Icons.MapPin size={16}/>}>Адрес и контакты</Button>
            </div>
          </Card>
        </Container>
      </Section>
    </div>
  );
}

function Pillar({ value, label, text }) {
  return (
    <div className="p-5 bg-ink-50 rounded-2xl">
      <div className="font-mono text-[12px] text-accent mb-3">{value}</div>
      <div className="display text-[16px] font-medium mb-2">{label}</div>
      <div className="text-[13px] text-ink-500 leading-relaxed">{text}</div>
    </div>
  );
}

// ---------- Guarantees ----------
function GuaranteesSection() {
  const items = [
    { icon: 'Shield',    title: '15 лет на материал', text: 'Цветостойкость, морозостойкость и геометрическая стабильность. Гарантия фиксируется письменно в договоре.' },
    { icon: 'Wrench',    title: 'Год на монтаж',   text: 'Качество узлов крепления, герметизация швов, ветрозащита. Бесплатный сервис в течение всего срока.' },
    { icon: 'Snowflake', title: 'Гарантия зимовки',   text: 'Возможность монтажа при −20 °C без потери качества. Подтверждено за 12 зим в Атырау.' },
    { icon: 'Award',     title: 'Соответствие СНиП',  text: 'Все системы прошли испытания в аккредитованных лабораториях и имеют действующие сертификаты соответствия.' },
  ];
  return (
    <Section tone="mute" className="py-28 md:py-40">
      <Container size="wide">
        <SectionHeader
          align="split"
          eyebrow="ГАРАНТИИ"
          title={<>Письменные обязательства,<br/>а не общие фразы</>}
          lead="Все наши гарантии прописаны в договоре с конкретными сроками и условиями. Сервисное сопровождение действует на весь период."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-200 rounded-3xl overflow-hidden border border-ink-200">
          {items.map((it, i) => {
            const Ic = Icons[it.icon];
            return (
              <Reveal key={i} delay={i * 70}>
                <div className="bg-white p-8 h-full">
                  <Ic size={28} className="text-accent mb-6"/>
                  <h3 className="display text-[22px] font-medium tracking-tight mb-3 leading-tight">{it.title}</h3>
                  <p className="text-[14px] text-ink-500 leading-[1.65]">{it.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

// ---------- Production timeline ----------
function ProductionTimeline() {
  const events = [
    { year: '2013', text: 'Основание производственной площадки в Атырау. Первая бригада — 4 человека.' },
    { year: '2015', text: 'Запуск собственной линии термопанелей. Первые объекты в премиум-сегменте.' },
    { year: '2018', text: 'Сертификация системы менеджмента качества по ISO 9001:2015.' },
    { year: '2020', text: 'Расширение производства до 12 000 м² панелей в год. Гарантия увеличена до одного года.' },
    { year: '2023', text: 'Запуск архитектурной мастерской — проекты фасадов выполняются внутри студии.' },
    { year: '2026', text: '5000+ завершённых объектов. Бригады работают одновременно на 14 площадках.' },
  ];
  return (
    <Section className="py-28 md:py-40">
      <Container size="wide">
        <SectionHeader
          align="split"
          eyebrow="ИСТОРИЯ"
          title="Восемь лет в одной дисциплине"
          lead="Мы не открывали новые направления, не уходили в смежные ниши. Все эти годы — фасады, фасады и фасады."
        />
        <div className="mt-16 md:mt-24 relative">
          <div className="absolute left-[88px] md:left-[120px] top-0 bottom-0 w-px bg-ink-200"/>
          <div className="space-y-12">
            {events.map((e, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 md:gap-12 items-baseline">
                  <div className="relative">
                    <div className="display text-[24px] md:text-[32px] font-medium tabular-nums">{e.year}</div>
                    <span className="absolute -right-[28px] md:-right-[34px] top-3 h-3 w-3 rounded-full bg-accent ring-4 ring-white"/>
                  </div>
                  <div className="text-[16px] md:text-[18px] leading-[1.6] text-ink-600 max-w-xl">{e.text}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ---------- Values ----------
function ValuesSection() {
  const { Photos } = window.AppData;
  const values = [
    { title: 'Качество без компромиссов', text: 'Мы не используем материалы дешевле определённого порога — даже если клиент готов. Это вопрос репутации, которая строится десятилетиями.' },
    { title: 'Прозрачность сметы',        text: 'В смете прописывается каждая позиция: материалы, работы, доставка, утилизация. Никаких «прочих расходов» и «по факту».' },
    { title: 'Сроки = договор',           text: 'Если мы зафиксировали срок в договоре — мы укладываемся в него. За 8 лет — 100% объектов сданы в срок или досрочно.' },
    { title: 'Сервис после',              text: 'После сдачи фасада мы не исчезаем. Раз в два года — бесплатный плановый осмотр и фотоотчёт состояния.' },
  ];
  return (
    <Section tone="mute" className="py-28 md:py-40">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal><Eyebrow className="mb-5">ЦЕННОСТИ</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="display text-[clamp(34px,4.4vw,56px)] font-medium leading-[1] tracking-tightest">
                Чем мы руководствуемся<br/>в работе
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-10 rounded-3xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <img src={Photos.house4} alt="" className="w-full h-full object-cover"/>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-2">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl border border-ink-100 p-8 md:p-10 hover:border-ink-200 hover:shadow-soft transition-all duration-500 group">
                  <div className="flex items-start gap-6">
                    <span className="font-mono text-[12px] text-accent tracking-widest pt-2">{String(i+1).padStart(2,'0')}</span>
                    <div className="flex-1">
                      <h3 className="display text-[24px] md:text-[28px] font-medium tracking-tight mb-3 leading-tight">{v.title}</h3>
                      <p className="text-[15.5px] leading-[1.7] text-ink-500">{v.text}</p>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-8px] group-hover:translate-x-0 text-accent">
                      <Icons.ArrowUpRight size={20}/>
                    </span>
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

// ---------- Awards / certifications ----------
function AwardsStrip() {
  const items = [
    { tag: 'ISO 9001:2015', label: 'Система менеджмента' },
    { tag: 'СТ РК',         label: 'Сертификация продукции' },
    { tag: 'TÜV',           label: 'Тестирование материалов' },
    { tag: 'F300',          label: 'Морозостойкость' },
    { tag: 'НГ',            label: 'Класс пожарной безопасности' },
    { tag: '2024',          label: 'Премия Best Façade KZ' },
  ];
  return (
    <Section className="py-20 md:py-24 border-y border-ink-100">
      <Container size="wide">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-ink-100">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 40}>
              <div className="bg-white p-6 h-full flex flex-col">
                <div className="display text-[22px] md:text-[26px] font-medium tracking-tight text-ink-900">{it.tag}</div>
                <div className="mt-2 text-[12px] font-mono uppercase tracking-[0.14em] text-ink-400 leading-snug">{it.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

window.AboutPage = AboutPage;
