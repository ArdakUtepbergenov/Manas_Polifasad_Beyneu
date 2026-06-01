// App entry — hash-based routing, scroll handling, mount.

const WHATSAPP_URL = 'https://wa.me/77027095654';

function openWhatsApp() {
  window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
}

function App() {
  const [route, setRoute] = useState(() => (window.location.hash || '#home').slice(1) || 'home');

  useEffect(() => {
    const onHash = () => {
      const h = (window.location.hash || '#home').slice(1) || 'home';
      setRoute(h);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (key) => {
    if (key === route) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.location.hash = key;
    setRoute(key);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const isDarkNav = route === 'home';

  let Page;
  switch (route) {
    case 'catalog':   Page = window.CatalogPage;   break;
    case 'portfolio': Page = window.PortfolioPage; break;
    case 'about':     Page = window.AboutPage;     break;
    case 'contact':   Page = window.ContactPage;   break;
    case 'home':
    default:          Page = window.HomePage;      break;
  }

  return (
    <>
      <Navbar route={route} navigate={navigate} dark={isDarkNav} onOpenConsult={openWhatsApp} />
      <main key={route}>
        <Page navigate={navigate} onOpenConsult={openWhatsApp} />
      </main>
      <Footer navigate={navigate} onOpenConsult={openWhatsApp} />
      <FloatingWhatsApp />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
