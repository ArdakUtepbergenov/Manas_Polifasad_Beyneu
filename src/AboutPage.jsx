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
              <Reveal><Eyebrow className="mb-6">КОМПАНИЯ ТУРАЛЫ · 2018 ЖЫЛДАН</Eyebrow></Reveal>
              <Reveal delay={80}>
                <h1 className="display text-[clamp(48px,7.6vw,128px)] font-medium leading-[0.94] tracking-tightest">
                  Фасадқа<br/><span className="text-gold italic font-light">сәулеттік</span> қатынас.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-10 max-w-2xl text-[18px] md:text-[20px] leading-[1.55] text-ink-600">
                  Манас Строй — мердігер емес, тек бір іспен айналысатын сәулеттік-өндірістік студия: Бейнеу ауданындағы премиум ғимараттардың фасадтары.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end gap-4">
              <Reveal delay={220}>
                <Card className="p-6">
                  <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-400 mb-1">ҚҰРЫЛДЫ</div>
                  <div className="display text-[28px] font-medium tracking-tight">2018</div>
                </Card>
              </Reveal>
              <Reveal delay={280}>
                <Card className="p-6">
                  <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-400 mb-1">ОФИС</div>
                  <div className="text-[15px] font-medium leading-snug">г. район Бейнеу, ул. Улица Майлина, 168</div>
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
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70 mb-2">НЫСАН № 312 · 2024</div>
                  <div className="display text-2xl md:text-3xl font-medium tracking-tight">«Терен» резиденциясы, Самал ш.а.</div>
                </div>
                <div className="hidden md:block text-right">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70 mb-2">МАТЕРИАЛ</div>
                  <div className="text-[14px]">«Песочник» термопанелі</div>
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
                  Фасад — бұл ғимарат туралы<br/>бірінші әсер.<br/>Және соңғы.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={160}>
                <p className="text-[17px] leading-[1.7] text-ink-600 mb-6">
                  Біз фасад «қабырғаны жабуы» керек деп санамаймыз. Ол ғимараттың мінезін қалыптастыруы, кварталға жұмыс жасауы, иесінің құндылықтарын бейнелеуі — және сапасын жоғалтпай ондаған жылдар бойы қызмет етуі керек.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="text-[17px] leading-[1.7] text-ink-600 mb-6">
                  Сондықтан Манас Строй-да әр жоба материалдар прайсынан емес, сәулеттік эскиз бен жылутехника есебінен басталады. Таңдалған материал Бейнеу ауданының климатын көтере алмаса, тапсырыс берушіге «жарамайды» деп айтамыз — және балама ұсынамыз.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-10 grid grid-cols-2 gap-4">
                  <Pillar value="01" label="Тек фасадтар"     text="Ешқандай бөгде бағыттарға алаңдатпаймыз."/>
                  <Pillar value="02" label="Кілттен кілтке"  text="Жоба, өндіріс және орнату — студия ішінде."/>
                  <Pillar value="03" label="Сәулет"          text="Әр нысанды практикалық сәулетші жүргізеді."/>
                  <Pillar value="04" label="Жыл кепілдігі"   text="Материал мен жұмысқа жазбаша міндеттеме."/>
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
              <Reveal><Eyebrow className="mb-5">СТУДИЯҒА КЕЛІҢІЗ</Eyebrow></Reveal>
              <Reveal delay={80}>
                <h3 className="display text-[clamp(28px,4vw,48px)] font-medium leading-tight tracking-tight">
                  Өндірісті<br/>және аяқталған нысандарды көрсетеміз.
                </h3>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-[15.5px] text-ink-500 max-w-xl leading-[1.65]">
                  Сапаға көз жеткізудің ең жақсы жолы — өз көзіңізбен көру. Келуді белгілеңіз, біз термопанель өндірісін және Бейнеу ауданындағы аяқталған фасадтардың бірін көрсетеміз.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3">
              <Button onClick={onOpenConsult} variant="primary" size="lg">Келуді белгілеу</Button>
              <Button onClick={() => navigate('contact')} variant="outline" size="lg" iconAfter={<Icons.MapPin size={16}/>}>Мекенжай және байланыс</Button>
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
    { icon: 'Shield',    title: 'Материалға 15 жыл', text: 'Түс тұрақтылығы, аяз төзімділігі және геометриялық тұрақтылық. Кепілдік шартта жазбаша бекітіледі.' },
    { icon: 'Wrench',    title: 'Орнатуға жыл',      text: 'Бекіту тораптарының сапасы, тіктер герметизациясы, желден қорғау. Бүкіл мерзім бойы тегін сервис.' },
    { icon: 'Snowflake', title: 'Қысқы кепілдік',    text: 'Сапасын жоғалтпай −20 °C температурада орнату мүмкіндігі. Бейнеу ауданында 12 қыста дәлелденді.' },
    { icon: 'Award',     title: 'СНиП сәйкестігі',   text: 'Барлық жүйелер аккредиттелген зертханаларда сынақтан өтті және қолданыстағы сәйкестік сертификаттары бар.' },
  ];
  return (
    <Section tone="mute" className="py-28 md:py-40">
      <Container size="wide">
        <SectionHeader
          align="split"
          eyebrow="КЕПІЛДІКТЕР"
          title={<>Жалпы сөздер емес,<br/>жазбаша міндеттемелер</>}
          lead="Барлық кепілдіктеріміз нақты мерзімдер мен шарттармен шартта жазылған. Сервистік қолдау бүкіл мерзім бойы жұмыс істейді."
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
    { year: '2013', text: 'Бейнеу ауданында өндіріс алаңының іргетасы қаланды. Бірінші бригада — 4 адам.' },
    { year: '2015', text: 'Өзіндік термопанель желісі іске қосылды. Премиум-сегменттегі алғашқы нысандар.' },
    { year: '2018', text: 'ISO 9001:2015 бойынша сапа менеджменті жүйесінің сертификациясы.' },
    { year: '2020', text: 'Өндіріс жылына 12 000 м² панельге дейін кеңейтілді. Кепілдік бір жылға дейін ұлғайтылды.' },
    { year: '2023', text: 'Сәулеттік шеберхана іске қосылды — фасад жобалары студия ішінде орындалады.' },
    { year: '2026', text: '5000-нан астам аяқталған нысан. Бригадалар бір мезгілде 14 алаңда жұмыс жасайды.' },
  ];
  return (
    <Section className="py-28 md:py-40">
      <Container size="wide">
        <SectionHeader
          align="split"
          eyebrow="ТАРИХ"
          title="Бір пәнде сегіз жыл"
          lead="Жаңа бағыттар ашпадық, бөгде нишаларға кетпедік. Осы жылдардың бәрі — фасадтар, фасадтар және фасадтар."
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
    { title: 'Компромиссіз сапа',   text: 'Белгілі бір шектен арзан материалдарды пайдаланбаймыз — клиент дайын болса да. Бұл ондаған жылдармен қалыптасатын беделдің мәселесі.' },
    { title: 'Смета мөлдірлігі',    text: 'Сметада әр позиция жазылады: материалдар, жұмыстар, жеткізу, кәдеге жарату. Ешқандай «басқа шығыстар» мен «нақты бойынша» жоқ.' },
    { title: 'Мерзім = шарт',       text: 'Шартта мерзімді бекіттік — оны сақтаймыз. 8 жыл ішінде — 100% нысан мерзімінде немесе мерзімінен бұрын тапсырылды.' },
    { title: 'Кейінгі сервис',      text: 'Фасадты тапсырғаннан кейін жоғалып кетпейміз. Екі жылда бір рет — тегін жоспарлы тексеру және күй бойынша фотоесеп.' },
  ];
  return (
    <Section tone="mute" className="py-28 md:py-40">
      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal><Eyebrow className="mb-5">ҚҰНДЫЛЫҚТАР</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h2 className="display text-[clamp(34px,4.4vw,56px)] font-medium leading-[1] tracking-tightest">
                Жұмыста нені<br/>басшылыққа аламыз
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
    { tag: 'ISO 9001:2015', label: 'Менеджмент жүйесі' },
    { tag: 'СТ РК',         label: 'Өнімді сертификаттау' },
    { tag: 'TÜV',           label: 'Материалдарды сынау' },
    { tag: 'F300',          label: 'Аяз төзімділігі' },
    { tag: 'НГ',            label: 'Өрт қауіпсіздік сыныбы' },
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
