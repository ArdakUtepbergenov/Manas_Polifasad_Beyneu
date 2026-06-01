// Catalog page — filterable product grid with modal detail view.

function CatalogPage({ navigate, onOpenConsult }) {
  const { CATALOG, CATALOG_CATEGORIES, CATALOG_COLORS } = window.AppData;
  const [cat, setCat] = useState('all');
  const [color, setColor] = useState('all');
  const [openId, setOpenId] = useState(null);
  const [view, setView] = useState('grid');

  const items = useMemo(() => CATALOG.filter(p =>
    (cat === 'all' || p.category === cat) &&
    (color === 'all' || p.color === color)
  ), [cat, color]);

  const open = useMemo(() => CATALOG.find(p => p.id === openId), [openId]);

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="pt-36 pb-16 md:pb-24 bg-white border-b border-ink-100">
        <Container size="wide">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <Reveal><Eyebrow className="mb-5">КАТАЛОГ · {String(CATALOG.length).padStart(2,'0')} ПОЗИЦИЙ</Eyebrow></Reveal>
              <Reveal delay={80}>
                <h1 className="display text-[clamp(48px,7.6vw,128px)] font-medium leading-[0.94] tracking-tightest">
                  Материалы для<br/>премиальных <span className="text-gold italic font-light">фасадов</span>
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={140}>
                <p className="text-[16px] leading-[1.65] text-ink-500">
                  Термопанели, декоративные панели, утеплённые системы и архитектурный декор. Все позиции сертифицированы и адаптированы под климат Атырау.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Sticky filters */}
      <div className="md:sticky md:top-[84px] z-20 glass border-b border-ink-100">
        <Container size="wide" className="py-4 flex flex-wrap items-center gap-3 md:gap-5">
          <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.16em] text-ink-500">
            <Icons.Filter size={14}/> Фильтры
          </div>
          <div className="flex flex-wrap gap-2">
            {CATALOG_CATEGORIES.map(c => (
              <Pill key={c.key} active={cat === c.key} onClick={() => setCat(c.key)}>{c.label}</Pill>
            ))}
          </div>
          <div className="hidden md:block h-6 w-px bg-ink-200 mx-2"/>
          <div className="flex flex-wrap gap-2">
            {CATALOG_COLORS.map(c => (
              <button
                key={c.key} onClick={() => setColor(c.key)}
                className={`inline-flex items-center gap-2 h-9 px-3 rounded-full text-[13px] font-medium tracking-tight transition-all
                  ${color === c.key ? 'bg-ink-900 text-white' : 'border border-ink-200 text-ink-600 hover:border-ink-900'}`}
              >
                {c.swatch && <span className="h-3.5 w-3.5 rounded-full border border-ink-200" style={{ background: c.swatch }}/>}
                {c.label}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <div className="h-6 w-px bg-ink-200"/>
            <div className="flex gap-1">
              <button onClick={() => setView('grid')} className={`h-9 w-9 rounded-full flex items-center justify-center transition ${view==='grid' ? 'bg-ink-900 text-white' : 'text-ink-500 hover:text-ink-900'}`}>
                <Icons.Grid size={15}/>
              </button>
              <button onClick={() => setView('list')} className={`h-9 w-9 rounded-full flex items-center justify-center transition ${view==='list' ? 'bg-ink-900 text-white' : 'text-ink-500 hover:text-ink-900'}`}>
                <Icons.Menu size={15}/>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Count bar */}
      <div className="bg-ink-50">
        <Container size="wide" className="py-6 flex items-center justify-between">
          <div className="text-[14px] text-ink-500">
            Показано <span className="text-ink-900 font-medium">{items.length}</span> из {CATALOG.length} позиций
          </div>
          <div/>
        </Container>
      </div>

      {/* Grid */}
      <section className="py-16 md:py-24 bg-ink-50">
        <Container size="wide">
          {items.length === 0 ? (
            <div className="py-32 text-center">
              <p className="display text-2xl font-medium mb-3">Ничего не найдено</p>
              <p className="text-ink-500 mb-6">Попробуйте изменить фильтры</p>
              <Button onClick={() => { setCat('all'); setColor('all'); }} variant="primary" size="md">Сбросить фильтры</Button>
            </div>
          ) : view === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {items.map((p, i) => (
                <Reveal key={p.id} delay={i * 50}>
                  <ProductCard product={p} onOpen={() => setOpenId(p.id)} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((p, i) => (
                <Reveal key={p.id} delay={i * 40}>
                  <ProductRow product={p} onOpen={() => setOpenId(p.id)} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Bottom CTA */}
      <CatalogCTA onOpenConsult={onOpenConsult}/>

      {/* Product modal */}
      <ProductModal product={open} onClose={() => setOpenId(null)} onOpenConsult={onOpenConsult}/>
    </div>
  );
}

// ---------- Product card (grid view) ----------
function ProductCard({ product, onOpen }) {
  return (
    <div onClick={onOpen} className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-[20px] bg-white border border-ink-100 transition-all duration-500 hover:shadow-soft-lg hover:-translate-y-1">
        <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
          <img src={product.image} alt={product.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"/>
          {product.badge && (
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-white text-[11px] font-mono uppercase tracking-wider">{product.badge}</span>
          )}
          <button
            onClick={(e) => { e.stopPropagation(); onOpen(); }}
            className="absolute bottom-4 right-4 h-12 w-12 rounded-full bg-white text-ink-900 hover:bg-ink-900 hover:text-white transition flex items-center justify-center shadow-soft opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-500"
          >
            <Icons.Plus size={20}/>
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-ink-400">{product.categoryLabel}</span>
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-400">{product.colorLabel}</span>
          </div>
          <h3 className="display text-[22px] font-medium tracking-tight mb-2 leading-tight">{product.title}</h3>
          <p className="text-[13.5px] text-ink-500 leading-relaxed mb-5">{product.spec}</p>
          <div className="flex items-center justify-end pt-4 border-t border-ink-100">
            <span className="text-[13px] text-ink-500 group-hover:text-ink-900 transition-colors flex items-center gap-2">
              Подробнее
              <Icons.ArrowRight size={14} className="transition-transform group-hover:translate-x-1"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Product row (list view) ----------
function ProductRow({ product, onOpen }) {
  return (
    <div onClick={onOpen} className="group cursor-pointer bg-white rounded-2xl border border-ink-100 transition-all hover:border-ink-200 hover:shadow-soft p-4 grid grid-cols-[120px_1fr_auto] md:grid-cols-[160px_2fr_1fr_auto] gap-4 md:gap-6 items-center">
      <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: '4/3' }}>
        <img src={product.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"/>
      </div>
      <div>
        <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-ink-400 mb-1">{product.categoryLabel} · {product.colorLabel}</div>
        <h3 className="display text-[20px] font-medium tracking-tight mb-1">{product.title}</h3>
        <p className="text-[13px] text-ink-500 hidden md:block">{product.spec}</p>
      </div>
      <span className="h-11 w-11 rounded-full bg-ink-50 group-hover:bg-ink-900 group-hover:text-white transition flex items-center justify-center">
        <Icons.ArrowRight size={16}/>
      </span>
    </div>
  );
}

// ---------- Product modal ----------
function ProductModal({ product, onClose, onOpenConsult }) {
  useEffect(() => {
    document.body.style.overflow = product ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [product]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!product) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-ink-900/60 backdrop-blur-md" onClick={onClose}/>
      <div className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto bg-white rounded-[28px] shadow-soft-lg animate-[pageEnter_500ms_cubic-bezier(.16,1,.3,1)_both]">
        <button
          onClick={onClose}
          className="sticky top-5 right-5 ml-auto block z-10 h-11 w-11 rounded-full bg-white border border-ink-100 shadow-soft hover:bg-ink-900 hover:text-white hover:border-ink-900 transition flex items-center justify-center"
          style={{ float: 'right', marginRight: '20px', marginTop: '20px' }}
        >
          <Icons.X size={18}/>
        </button>

        <div className="grid lg:grid-cols-2">
          <div className="relative" style={{ minHeight: '60vh' }}>
            <img src={product.image} alt={product.title} className="absolute inset-0 h-full w-full object-cover"/>
            {product.badge && (
              <span className="absolute top-6 left-6 px-3 py-1 rounded-full bg-accent text-white text-[11px] font-mono uppercase tracking-wider">{product.badge}</span>
            )}
          </div>
          <div className="p-8 md:p-12">
            <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-ink-400 mb-3">{product.categoryLabel} · артикул {product.id.toUpperCase()}</div>
            <h2 className="display text-[clamp(28px,3.4vw,44px)] font-medium tracking-tight leading-tight mb-4">{product.title}</h2>
            <p className="text-[15.5px] leading-[1.65] text-ink-600 mb-8">{product.description}</p>

            <div className="grid grid-cols-2 gap-px bg-ink-100 border border-ink-100 rounded-2xl overflow-hidden mb-8">
              {[
                { label: 'Цвет',              value: product.colorLabel },
                { label: 'Спецификация',       value: product.spec },
                { label: 'Минимальный заказ',  value: '8 м²' },
                { label: 'Срок производства',  value: '14–21 день' },
              ].map((s, i) => (
                <div key={i} className="bg-white p-5">
                  <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-ink-400 mb-1">{s.label}</div>
                  <div className="text-[14px] font-medium">{s.value}</div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <div className="eyebrow text-ink-500 mb-4">ОСОБЕННОСТИ</div>
              <ul className="space-y-3">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14.5px]">
                    <span className="mt-0.5 shrink-0 h-5 w-5 rounded-full bg-ink-900 text-white flex items-center justify-center"><Icons.Check size={11} strokeWidth={2.5}/></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-ink-100 flex items-end justify-end gap-6 flex-wrap">
              <div className="flex gap-2 flex-wrap">
                <Button onClick={() => { onClose(); onOpenConsult(); }} variant="primary" size="md">Рассчитать стоимость</Button>
                <Button href="https://wa.me/77027829474" as="a" variant="outline" size="md" icon={<Icons.WhatsApp size={15}/>} iconAfter={null}>WhatsApp</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Bottom CTA ----------
function CatalogCTA({ onOpenConsult }) {
  return (
    <Section className="py-24 md:py-32 bg-ink-50">
      <Container size="wide">
        <Card className="p-10 md:p-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow className="mb-5">НЕ НАШЛИ НУЖНОЕ?</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h3 className="display text-[clamp(28px,4vw,48px)] font-medium leading-tight tracking-tight">
                Подберём фасад под ваш<br/>архитектурный проект.
              </h3>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-[15.5px] text-ink-500 max-w-xl leading-[1.65]">
                Расскажите задачу — мы предложим систему, рассчитаем теплотехнику и подготовим визуализацию фасада.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3">
            <Button onClick={onOpenConsult} variant="primary" size="lg">Получить консультацию</Button>
            <Button onClick={onOpenConsult} variant="outline" size="lg" iconAfter={<Icons.Ruler size={16}/>}>Вызвать замерщика</Button>
            <Button href="https://wa.me/77750280303" as="a" variant="whatsapp" size="lg" icon={<Icons.WhatsApp size={17}/>} iconAfter={null}>Написать в WhatsApp</Button>
          </div>
        </Card>
      </Container>
    </Section>
  );
}

window.CatalogPage = CatalogPage;
