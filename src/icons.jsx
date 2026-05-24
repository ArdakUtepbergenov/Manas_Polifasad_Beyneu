// Lightweight inline icon set — architectural and premium feel.
// All icons are 24x24, stroke-width 1.5, currentColor, lucide-inspired.

const Icon = ({ children, size = 20, className = '', strokeWidth = 1.5, ...props }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth={strokeWidth}
    strokeLinecap="round" strokeLinejoin="round"
    className={`lucide ${className}`} {...props}
  >{children}</svg>
);

const Icons = {
  Menu: (p) => <Icon {...p}><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="17" x2="21" y2="17"/></Icon>,
  X:    (p) => <Icon {...p}><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></Icon>,
  ArrowRight: (p) => <Icon {...p}><line x1="4" y1="12" x2="20" y2="12"/><polyline points="14 6 20 12 14 18"/></Icon>,
  ArrowUpRight: (p) => <Icon {...p}><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></Icon>,
  ArrowLeft: (p) => <Icon {...p}><line x1="20" y1="12" x2="4" y2="12"/><polyline points="10 6 4 12 10 18"/></Icon>,
  ChevronDown: (p) => <Icon {...p}><polyline points="6 9 12 15 18 9"/></Icon>,
  ChevronRight: (p) => <Icon {...p}><polyline points="9 6 15 12 9 18"/></Icon>,
  Plus: (p) => <Icon {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></Icon>,
  Minus: (p) => <Icon {...p}><line x1="5" y1="12" x2="19" y2="12"/></Icon>,
  Phone: (p) => <Icon {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></Icon>,
  Mail: (p) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></Icon>,
  MapPin: (p) => <Icon {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></Icon>,
  Clock: (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></Icon>,
  Instagram: (p) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></Icon>,
  WhatsApp: (p) => <Icon {...p}><path d="M21 12a9 9 0 1 1-17.06-3.94L3 21l3.06-1.06A9 9 0 0 0 21 12z"/><path d="M8.5 9c0 4 2.5 6.5 6.5 6.5l1.5-1.5-2.5-1.5-1 1c-1.5-.5-2.5-1.5-3-3l1-1L9.5 7l-1 1z"/></Icon>,
  Check: (p) => <Icon {...p}><polyline points="4 12 10 18 20 6"/></Icon>,
  Star: (p) => <Icon {...p}><polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9"/></Icon>,
  Shield: (p) => <Icon {...p}><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5z"/></Icon>,
  Building: (p) => <Icon {...p}><rect x="4" y="3" width="16" height="18" rx="1"/><line x1="9" y1="8" x2="9" y2="8.01"/><line x1="13" y1="8" x2="13" y2="8.01"/><line x1="9" y1="12" x2="9" y2="12.01"/><line x1="13" y1="12" x2="13" y2="12.01"/><line x1="9" y1="16" x2="9" y2="16.01"/><line x1="13" y1="16" x2="13" y2="16.01"/></Icon>,
  Home: (p) => <Icon {...p}><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></Icon>,
  Wrench: (p) => <Icon {...p}><path d="M14.7 6.3a4 4 0 1 1-5.4 5.4l-6.3 6.3 2 2 6.3-6.3a4 4 0 0 1 5.4-5.4l-2 2 1.4 1.4 2-2z"/></Icon>,
  Layers: (p) => <Icon {...p}><polygon points="12 3 2 8 12 13 22 8 12 3"/><polyline points="2 13 12 18 22 13"/></Icon>,
  Ruler: (p) => <Icon {...p}><path d="M3 16l5 5 13-13-5-5z"/><line x1="6" y1="14" x2="8" y2="16"/><line x1="9" y1="11" x2="11" y2="13"/><line x1="12" y1="8" x2="14" y2="10"/><line x1="15" y1="5" x2="17" y2="7"/></Icon>,
  Award: (p) => <Icon {...p}><circle cx="12" cy="9" r="6"/><polyline points="8.5 13.5 7 22 12 19 17 22 15.5 13.5"/></Icon>,
  Compass: (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><polygon points="15 9 11 11 9 15 13 13"/></Icon>,
  Snowflake: (p) => <Icon {...p}><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></Icon>,
  Flame: (p) => <Icon {...p}><path d="M12 2c2 4 6 6 6 11a6 6 0 0 1-12 0c0-3 2-4 3-6 1 2 2 3 3 1 0-2-1-4 0-6z"/></Icon>,
  Droplet: (p) => <Icon {...p}><path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12z"/></Icon>,
  Sparkles: (p) => <Icon {...p}><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/><path d="M19 16l.7 2L22 19l-2.3.7L19 22l-.7-2L16 19l2.3-.7z"/></Icon>,
  Play: (p) => <Icon {...p}><polygon points="7 4 20 12 7 20 7 4"/></Icon>,
  Search: (p) => <Icon {...p}><circle cx="11" cy="11" r="7"/><line x1="20" y1="20" x2="16.5" y2="16.5"/></Icon>,
  Filter: (p) => <Icon {...p}><polygon points="3 4 21 4 14 12 14 20 10 18 10 12"/></Icon>,
  Grid: (p) => <Icon {...p}><rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/></Icon>,
  Eye: (p) => <Icon {...p}><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></Icon>,
  Quote: (p) => <Icon {...p}><path d="M7 7h4v4H8c0 2 1 3 3 3v3c-3 0-5-2-5-5V8a1 1 0 0 1 1-1z"/><path d="M15 7h4v4h-3c0 2 1 3 3 3v3c-3 0-5-2-5-5V8a1 1 0 0 1 1-1z"/></Icon>,
  Send: (p) => <Icon {...p}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></Icon>,
  Drag: (p) => <Icon {...p}><polyline points="6 9 2 12 6 15"/><polyline points="18 9 22 12 18 15"/><line x1="2" y1="12" x2="22" y2="12"/></Icon>,
  Maximize: (p) => <Icon {...p}><polyline points="4 9 4 4 9 4"/><polyline points="20 9 20 4 15 4"/><polyline points="4 15 4 20 9 20"/><polyline points="20 15 20 20 15 20"/></Icon>,
  Calendar: (p) => <Icon {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/></Icon>,
  Truck: (p) => <Icon {...p}><rect x="1" y="6" width="14" height="11"/><polygon points="15 9 19 9 22 13 22 17 15 17"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></Icon>,
  Leaf: (p) => <Icon {...p}><path d="M21 4c-9 0-15 5-15 13 0 2 1 3 1 3s6-1 9-4 5-9 5-12z"/><line x1="5" y1="20" x2="14" y2="11"/></Icon>,
  Volume: (p) => <Icon {...p}><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15 9a4 4 0 0 1 0 6"/><path d="M18 6a8 8 0 0 1 0 12"/></Icon>,
};

window.Icons = Icons;
