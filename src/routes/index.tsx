import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

import black4 from "@/assets/gallery/black4.jpg.asset.json";
import black5 from "@/assets/gallery/black5.jpeg.asset.json";
import blue1 from "@/assets/gallery/blue1.jpeg.asset.json";
import blue5 from "@/assets/gallery/blue5.jpeg.asset.json";
import glow4 from "@/assets/gallery/glow4.jpeg.asset.json";
import glow5 from "@/assets/gallery/glow5.jpeg.asset.json";
import new1 from "@/assets/gallery/new1.jpg.asset.json";
import new2 from "@/assets/gallery/new2.jpg.asset.json";
import new3 from "@/assets/gallery/new3.jpg.asset.json";
import red1 from "@/assets/gallery/red1.jpeg.asset.json";
import red2 from "@/assets/gallery/red2.jpeg.asset.json";
import white6 from "@/assets/gallery/white6.jpeg.asset.json";
import white8 from "@/assets/gallery/white8.jpeg.asset.json";

const P = {
  black4: black4.url, black5: black5.url,
  blue1: blue1.url, blue5: blue5.url,
  glow4: glow4.url, glow5: glow5.url,
  new1: new1.url, new2: new2.url, new3: new3.url,
  red1: red1.url, red2: red2.url,
  white6: white6.url, white8: white8.url,
};
const PHOTO = (n: string) => {
  const key = n.replace(/\.(jpe?g)$/i, "") as keyof typeof P;
  return P[key] ?? "";
};

const HERO_SLIDES = [
  { src: PHOTO("red1.jpeg"), caption: "Red Passion" },
  { src: PHOTO("black4.jpg"), caption: "Black Elegance" },
  { src: PHOTO("white8.jpeg"), caption: "White Grace" },
  { src: PHOTO("glow5.jpeg"), caption: "Golden Radiance" },
  { src: PHOTO("blue5.jpeg"), caption: "Blue Serenity" },
  { src: PHOTO("new2.jpg"), caption: "Editorial" },
];

const RELEASED = [
  { year: "2021", title: "Maa Oori Polimera", meta: "Dir. Anil Vishwanath", tag: "Disney+ Hotstar", link: "https://www.imdb.com/title/tt16404416/" },
  { year: "2023", title: "Maa Oori Polimera 2", meta: "Dir. Anil Vishwanath", tag: "Disney+ Hotstar", link: "https://www.imdb.com/title/tt28512693/" },
  { year: "2024", title: "Sarkaaru Noukari", meta: "Dir. Ganganamoni Shekar · Prod. K. Raghavendra Rao", tag: "Theatrical", link: "https://www.imdb.com/title/tt28266209/" },
  { year: "2023", title: "Sri Sri Sri Raja Vaaru", meta: "Feat. Narne Nithiin, Rao Ramesh", tag: "Theatrical", link: "https://www.imdb.com/title/tt28359015/" },
  { year: "2025", title: "Uttaram", meta: "Dir. Vegesna Satish · Supervisor: K. Raghavendra Rao", tag: "ETV Win" },
  { year: "TBD", title: "Tenant", meta: "Telugu Feature Film", tag: "Theatrical" },
  { year: "2026", title: "Cheekati Lo", meta: "Feat. Sobhita Dhulipala · Prod. Rana Daggubati", tag: "Amazon Prime · Crime Thriller" },
  { year: "2025", title: "Katha Sudha Series", meta: "Curator: K. Raghavendra Rao", tag: "ETV Win · Anthology" },
];

const UPCOMING = [
  { year: "2025", title: "Black, White & Gray", meta: "Multi-language Series", tag: "SonyLIV · Crime Thriller" },
  { year: "2026", title: "Bharatavarsha", meta: "Dir. Sankalp Reddy · Prod. Srinivasaa Chitturi", tag: "ETV Win · Historical Epic" },
];

const GALLERY = [
  { src: PHOTO("red1.jpeg"), title: "Bold & Beautiful", mood: "Red Passion" },
  { src: PHOTO("new1.jpg"), title: "Cinematic", mood: "Editorial" },
  { src: PHOTO("black4.jpg"), title: "Studio Portrait", mood: "Black Elegance" },
  { src: PHOTO("glow5.jpeg"), title: "Traditional Elegance", mood: "Golden Glow" },
  { src: PHOTO("white8.jpeg"), title: "Pure Elegance", mood: "White Grace" },
  { src: PHOTO("blue5.jpeg"), title: "Graceful", mood: "Blue Serenity" },
  { src: PHOTO("new2.jpg"), title: "Timeless", mood: "Editorial" },
  { src: PHOTO("red2.jpeg"), title: "Fiery Spirit", mood: "Red Passion" },
  { src: PHOTO("glow4.jpeg"), title: "Warm Tones", mood: "Golden Glow" },
  { src: PHOTO("black5.jpeg"), title: "Fashion Forward", mood: "Black Elegance" },
  { src: PHOTO("blue1.jpeg"), title: "Calm & Collected", mood: "Blue Serenity" },
  { src: PHOTO("white6.jpeg"), title: "Serene Grace", mood: "White Grace" },
  { src: PHOTO("new3.jpg"), title: "Radiant", mood: "Editorial" },
];

const VIDEOS = [
  { id: "CFD5MNrkdTQ", title: "Bajaj Electronics — Festive Campaign" },
  { id: "NfGMMvEgI9Q", title: "Sarkaaru Naukari (2024)" },
  { id: "7YLF1ZnGRSI", title: "Maa Oori Polimera (2021)" },
  { id: "EEnhH3yGa9o", title: "Aishwarya Low GI Rice — TVC" },
  { id: "TmaFrfBMYjw", title: "Xtra Liquid Detergent — TVC" },
  { id: "88zXlbcZuFc", title: "Sastry Balm — TVC" },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("reveal-in");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.12 },
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#about", label: "About" },
    { href: "#filmography", label: "Films" },
    { href: "#gallery", label: "Gallery" },
    { href: "#videos", label: "Videos" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass py-3" : "py-6 bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl tracking-wide text-gold-soft">
          Ramya<span className="text-gold">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-gold transition-colors relative group">
              {l.label}
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
            </a>
          ))}
          <a href="https://www.instagram.com/rammyah_ponduri" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-[0.25em] px-4 py-2 border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all">
            Instagram
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-gold" aria-label="menu">
          <div className="space-y-1.5">
            <span className={`block w-6 h-px bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden glass mt-3 mx-6 rounded-lg p-6 space-y-4 animate-fade-up">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm uppercase tracking-widest text-foreground/80 hover:text-gold">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="top" className="relative h-screen min-h-[700px] overflow-hidden">
      {HERO_SLIDES.map((s, i) => (
        <div key={s.src} className={`absolute inset-0 transition-opacity duration-[1500ms] ${i === idx ? "opacity-100" : "opacity-0"}`}>
          <img src={s.src} alt={s.caption} className="w-full h-full object-cover animate-kenburns" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/40" />
        </div>
      ))}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">
        <div className="animate-fade-up">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Every Role, A New Story</span>
          </div>
          <h1 className="font-display font-light text-[20vw] md:text-[14rem] leading-[0.85] gold-gradient">
            Ramya
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed font-light">
            Bringing stories to life through authentic performances. Trained artist with five years
            in Telugu cinema. Fluent in Telugu, Tamil, Hindi, and English.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#filmography" className="group relative px-8 py-4 bg-gold text-ink text-xs uppercase tracking-[0.3em] font-medium overflow-hidden animate-pulse-gold">
              <span className="relative z-10">View Filmography</span>
              <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="absolute inset-0 flex items-center justify-center text-ink text-xs uppercase tracking-[0.3em] font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">View Filmography</span>
            </a>
            <a href="https://www.instagram.com/rammyah_ponduri" target="_blank" rel="noreferrer" className="px-8 py-4 border border-gold/50 text-gold text-xs uppercase tracking-[0.3em] hover:bg-gold/10 transition-all">
              Follow Journey
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold/70">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent relative overflow-hidden">
          <div className="absolute top-0 w-px h-4 bg-gold animate-scroll-down" />
        </div>
      </div>
      <div className="absolute bottom-8 right-6 md:right-16 z-10 text-right">
        <div className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Now Showing</div>
        <div className="text-sm text-gold mt-1 font-display italic">{HERO_SLIDES[idx].caption}</div>
      </div>
    </section>
  );
}

function About() {
  const ref = useReveal();
  const stats = [
    ["Playing Age", "25–30"], ["Height", "5'7\""], ["Residence", "Hyderabad"],
    ["Complexion", "Fair"], ["Experience", "5 Years"], ["Status", "Available"],
  ];
  return (
    <section id="about" ref={ref} className="relative py-32 px-6 grain-overlay">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        <div className="reveal relative">
          <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm group">
            <img src={PHOTO("red1.jpeg")} alt="Ramya" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
            <div className="absolute inset-0 ring-1 ring-gold/30" />
            <div className="absolute top-4 left-4 text-[10px] tracking-[0.4em] uppercase text-gold/80">Portrait · 2025</div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/40 rounded-sm -z-0 animate-float" />
        </div>
        <div className="reveal">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">About</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light leading-[1.05] mb-8">
            Crafting Characters with <em className="gold-gradient not-italic">Authenticity</em>
          </h2>
          <p className="text-foreground/75 leading-relaxed mb-10 font-light text-lg">
            With five years of dedicated work in Telugu cinema, I bring depth and nuance to every
            character I portray. From rural narratives to contemporary stories, my passion lies in
            authentic storytelling that resonates with audiences. Fluent in Telugu, Tamil, Hindi,
            and English — connecting with diverse roles and audiences alike.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
            {stats.map(([k, v]) => (
              <div key={k} className="border-l border-gold/40 pl-4 hover-lift">
                <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">{k}</div>
                <div className="font-display text-2xl text-gold-soft mt-1">{v}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {["Telugu", "Tamil", "Hindi", "English"].map((l) => (
              <span key={l} className="px-4 py-2 text-xs uppercase tracking-[0.25em] border border-gold/30 text-gold-soft hover:bg-gold hover:text-ink transition-all">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FilmCard({ year, title, meta, tag, link, featured }: { year: string; title: string; meta: string; tag: string; link?: string; featured?: boolean }) {
  const inner = (
    <div className={`reveal group relative p-7 border border-gold/20 hover:border-gold/60 transition-all duration-500 hover-lift bg-card/40 backdrop-blur-sm ${featured ? "ring-1 ring-gold/40" : ""}`}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex items-start justify-between gap-4 mb-3">
        <h4 className="font-display text-2xl text-foreground group-hover:text-gold transition-colors">{title}</h4>
        <span className="shrink-0 text-[10px] uppercase tracking-[0.3em] text-gold border border-gold/40 px-3 py-1 rounded-full">{year}</span>
      </div>
      <p className="text-sm text-foreground/65 font-light leading-relaxed">{meta}</p>
      <div className="mt-5 pt-4 border-t border-gold/15 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold-soft">{tag}</span>
        {link && <span className="text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity">IMDb →</span>}
      </div>
    </div>
  );
  return link ? <a href={link} target="_blank" rel="noreferrer">{inner}</a> : inner;
}

function Filmography() {
  const ref = useReveal();
  return (
    <section id="filmography" ref={ref} className="py-32 px-6 relative">
      <div className="mx-auto max-w-7xl">
        <div className="text-center reveal mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Body of Work</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-5xl md:text-7xl font-light gold-gradient">Filmography</h2>
        </div>

        <h3 className="reveal text-2xl font-display text-gold-soft mb-8 flex items-center gap-4">
          <span className="text-gold">◆</span> Released & In Production
        </h3>
        <div className="grid md:grid-cols-2 gap-5 mb-20">
          {RELEASED.map((f) => <FilmCard key={f.title} {...f} />)}
        </div>

        <h3 className="reveal text-2xl font-display text-gold-soft mb-8 flex items-center gap-4">
          <span className="text-gold">◆</span> Upcoming Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-5 mb-20">
          {UPCOMING.map((f) => <FilmCard key={f.title} {...f} featured />)}
        </div>

        <h3 className="reveal text-2xl font-display text-gold-soft mb-8 flex items-center gap-4">
          <span className="text-gold">◆</span> Television Commercials
        </h3>
        <div className="reveal flex flex-wrap gap-4">
          {["Bajaj Electronics", "Aishwarya Rice", "Xtra Detergent", "Sastry Balm"].map((b) => (
            <div key={b} className="px-6 py-4 border border-gold/30 bg-card/30 hover:bg-gold/10 transition-colors">
              <div className="font-display text-lg">{b}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold/70 mt-1">TVC</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useReveal();
  const close = () => setLightbox(null);
  const next = (dir: number) =>
    setLightbox((i) => (i === null ? null : (i + dir + GALLERY.length) % GALLERY.length));
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next(1);
      if (e.key === "ArrowLeft") next(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="gallery" ref={ref} className="py-32 px-6 relative">
      <div className="mx-auto max-w-7xl">
        <div className="text-center reveal mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Visual Portfolio</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-5xl md:text-7xl font-light gold-gradient mb-4">Gallery</h2>
          <p className="text-foreground/60 font-light max-w-xl mx-auto">
            A curated collection of photoshoots showcasing elegance, versatility, and artistic expression.
          </p>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {GALLERY.map((g, i) => (
            <button
              key={g.src}
              onClick={() => setLightbox(i)}
              className="reveal group relative mb-4 block w-full overflow-hidden bg-card break-inside-avoid"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img
                src={g.src}
                alt={g.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-left">
                <div className="text-[9px] uppercase tracking-[0.3em] text-gold">{g.mood}</div>
                <div className="font-display text-lg text-foreground">{g.title}</div>
              </div>
              <div className="absolute inset-2 ring-1 ring-gold/0 group-hover:ring-gold/40 transition-all duration-500" />
            </button>
          ))}
        </div>
      </div>
      {lightbox !== null && (
        <div onClick={close} className="fixed inset-0 z-[60] bg-ink/95 flex items-center justify-center p-6 backdrop-blur-md animate-fade-up cursor-zoom-out">
          <img src={GALLERY[lightbox].src} alt={GALLERY[lightbox].title} className="max-h-[90vh] max-w-[90vw] object-contain ring-1 ring-gold/30" />
          <button onClick={(e) => { e.stopPropagation(); next(-1); }} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all text-xl">‹</button>
          <button onClick={(e) => { e.stopPropagation(); next(1); }} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all text-xl">›</button>
          <button onClick={close} className="absolute top-6 right-6 text-gold text-3xl w-10 h-10 flex items-center justify-center">×</button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <div className="font-display text-xl text-gold-soft">{GALLERY[lightbox].title}</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 mt-1">{GALLERY[lightbox].mood} · {lightbox + 1} / {GALLERY.length}</div>
          </div>
        </div>
      )}
    </section>
  );
}

function Videos() {
  const ref = useReveal();
  return (
    <section id="videos" ref={ref} className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center reveal mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Performance Highlights</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-5xl md:text-7xl font-light gold-gradient">Videos</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.map((v) => (
            <div key={v.id} className="reveal group">
              <div className="relative aspect-video overflow-hidden ring-1 ring-gold/20 group-hover:ring-gold/60 transition-all">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="mt-3 font-display text-lg text-foreground/85 group-hover:text-gold transition-colors">{v.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" ref={ref} className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
      <div className="relative mx-auto max-w-5xl">
        <div className="text-center reveal mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Let's Connect</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-5xl md:text-7xl font-light gold-gradient mb-6">Get in Touch</h2>
          <p className="text-foreground/70 font-light max-w-2xl mx-auto leading-relaxed">
            Available for film projects, web series, advertisements, and collaborations.
            Let's create something extraordinary together.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="reveal p-10 border border-gold/30 bg-card/40 backdrop-blur-sm hover-lift">
            <h3 className="font-display text-2xl text-gold-soft mb-6">Contact Information</h3>
            <div className="space-y-5">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">Location</div>
                <div className="text-foreground mt-1">Hyderabad, Telangana</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">Email</div>
                <a href="mailto:rammyah.ponduri@gmail.com" className="text-gold hover:underline mt-1 block">rammyah.ponduri@gmail.com</a>
              </div>
              <div className="flex gap-3 pt-4">
                <a href="https://www.instagram.com/rammyah_ponduri" target="_blank" rel="noreferrer" className="flex-1 px-4 py-3 text-center text-xs uppercase tracking-[0.25em] border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all">Instagram</a>
                <a href="https://youtube.com/@ramyaponduri" target="_blank" rel="noreferrer" className="flex-1 px-4 py-3 text-center text-xs uppercase tracking-[0.25em] border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-all">YouTube</a>
              </div>
            </div>
          </div>
          <div className="reveal p-10 border border-gold/30 bg-card/40 backdrop-blur-sm hover-lift">
            <h3 className="font-display text-2xl text-gold-soft mb-6">For Casting Inquiries</h3>
            <p className="text-foreground/70 font-light leading-relaxed mb-8">
              Interested in discussing a role or project? Reach out with details about the character,
              project timeline, and production house. I respond within 48 hours.
            </p>
            <a href="mailto:rammyah.ponduri@gmail.com" className="inline-block w-full text-center px-6 py-4 bg-gold text-ink text-xs uppercase tracking-[0.3em] font-medium hover:bg-gold-soft transition-colors animate-pulse-gold">
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gold/15">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/50">
        <div className="font-display text-xl text-gold-soft">Ramya<span className="text-gold">.</span></div>
        <div className="uppercase tracking-[0.3em]">© {new Date().getFullYear()} Ramya Ponduri · All Rights Reserved</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Filmography />
      <Gallery />
      <Videos />
      <Contact />
      <Footer />
    </main>
  );
}
