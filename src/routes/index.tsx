import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Camera, Instagram, MessageCircle, Radio, Sparkles, Volume2, VolumeX, Wifi } from "lucide-react";
import { useRef, useState } from "react";

import engagementImage from "../assets/shubham-engagement.jpg";
import ganeshaImage from "../assets/shubham-ganesha.jpg";
import marriageImage from "../assets/shubham-marriage.jpg";
import receptionImage from "../assets/shubham-reception.jpg";
import upanayanamImage from "../assets/shubham-upanayanam.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const events = [
  { title: "Upanayanam", image: upanayanamImage, description: "Sacred thread ceremonies streamed with reverence, clarity, and care." },
  { title: "Engagement", image: engagementImage, description: "Share ring ceremonies live with family across every distance." },
  { title: "Marriage", image: marriageImage, description: "Professional coverage for divine wedding rituals and mandap moments." },
  { title: "Reception", image: receptionImage, description: "Elegant live broadcast for celebrations, blessings, and portraits." },
];

const petals = Array.from({ length: 12 }, (_, index) => ({
  left: `${(index * 11) % 96}%`,
  delay: `${index * 0.8}s`,
  size: index % 3 === 0 ? "h-3 w-3" : "h-2 w-2",
}));

const whatsAppUrl = "https://api.whatsapp.com/send?phone=919398335770&text=Namaste%20Shubham%20Live%2C%20I%20want%20to%20book%20live%20streaming%20for%20my%20event.";

function Index() {
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const nextUrlRef = useRef<HTMLInputElement | null>(null);

  const toggleMusic = () => {
    if (musicOn) {
      oscillatorRef.current?.stop();
      audioRef.current?.close();
      oscillatorRef.current = null;
      audioRef.current = null;
      setMusicOn(false);
      return;
    }

    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) {
      return;
    }
    const context = new AudioCtor();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = 196;
    gain.gain.value = 0.035;
    oscillator.connect(gain).connect(context.destination);
    oscillator.start();
    audioRef.current = context;
    oscillatorRef.current = oscillator;
    setMusicOn(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {petals.map((petal, index) => (
          <span
            key={index}
            className={`petal-drift absolute top-0 ${petal.size} rounded-full bg-secondary shadow-gold`}
            style={{ left: petal.left, animationDelay: petal.delay }}
          />
        ))}
      </div>

      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="font-display text-2xl font-bold text-accent">Shubham Live</a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
            <a className="transition-colors hover:text-accent" href="#events">Events</a>
            <a className="transition-colors hover:text-accent" href="#pricing">Pricing</a>
            <a className="transition-colors hover:text-accent" href="#contact">Contact</a>
          </div>
          <button onClick={toggleMusic} className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-card shadow-soft transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring" aria-label="Toggle traditional background tone">
            {musicOn ? <Volume2 className="h-5 w-5 text-accent" /> : <VolumeX className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <section id="home" className="relative z-10 mandala-field px-5 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-[20px_1fr_20px] items-center gap-4 md:grid-cols-[42px_1fr_42px]">
          <div className="temple-border h-full min-h-[430px] rounded-full opacity-80" />
          <div className="soft-enter text-center">
            <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border bg-card p-1 shadow-gold sm:h-32 sm:w-32">
              <img src={ganeshaImage} alt="Lord Ganesha blessing Shubham Live" width={768} height={768} className="h-full w-full rounded-full object-cover" />
            </div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-semibold text-accent shadow-soft">
              <Sparkles className="h-4 w-4" /> Professional Hindu event live streaming
            </p>
            <h1 className="mx-auto max-w-4xl text-6xl font-bold leading-none text-accent sm:text-7xl lg:text-8xl">Shubham Live</h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-muted-foreground sm:text-2xl">Preserving Traditions, Streaming Divine Moments Live</p>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-foreground/85">We provide professional live streaming services for all Hindu traditional events with high quality and reliability.</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-8 py-3 font-bold text-accent-foreground shadow-gold transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring">Book Now</a>
              <a href="#live" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border bg-card px-8 py-3 font-bold shadow-soft transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ring"><Radio className="h-5 w-5 text-accent" /> View Live Demo</a>
            </div>
          </div>
          <div className="temple-border h-full min-h-[430px] rounded-full opacity-80" />
        </div>
      </section>

      <section id="events" className="relative z-10 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div><p className="font-bold text-accent">Sacred occasions</p><h2 className="text-4xl font-bold sm:text-5xl">Events we stream</h2></div>
            <a href="#contact" className="font-bold text-accent transition hover:opacity-75">Book your date →</a>
          </div>
          <div className="flex snap-x gap-5 overflow-x-auto pb-5">
            {events.map((event) => (
              <article key={event.title} className="group min-w-[290px] snap-start overflow-hidden rounded-2xl border bg-card shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-gold sm:min-w-[360px]">
                <img src={event.image} alt={`${event.title} live streaming service by Shubham Live`} width={1024} height={768} loading="lazy" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-accent">{event.title}</h3>
                  <p className="mt-3 min-h-16 text-sm leading-6 text-muted-foreground">{event.description}</p>
                  <p className="mt-5 rounded-full bg-muted px-4 py-2 text-center font-bold text-foreground">₹3000 – ₹5000</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="live" className="relative z-10 bg-muted/65 px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl border bg-card shadow-gold">
            <div className="flex items-center justify-between border-b px-5 py-3"><span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-bold text-accent-foreground"><span className="h-2 w-2 rounded-full bg-secondary" /> LIVE NOW</span><Wifi className="h-5 w-5 text-accent" /></div>
            <div className="relative aspect-video mandala-field bg-background p-6">
              <div className="flex h-full items-center justify-center rounded-xl border bg-card/80">
                <div className="text-center"><Camera className="mx-auto mb-4 h-14 w-14 text-accent" /><p className="font-display text-3xl font-bold text-accent">HD Ceremony Preview</p><p className="mt-2 text-muted-foreground">Multi-camera broadcast • Stable audio • Family-ready stream</p></div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold text-accent">Trustworthy coverage</p>
            <h2 className="mt-2 text-4xl font-bold sm:text-5xl">Every blessing reaches every loved one.</h2>
            <p className="mt-5 leading-8 text-muted-foreground">From puja details to reception entrances, Shubham Live captures your event with premium streaming equipment, respectful operators, and reliable delivery.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="relative z-10 px-5 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl border bg-card p-8 text-center shadow-gold sm:p-12">
          <h2 className="text-4xl font-bold text-accent sm:text-5xl">Affordable Live Streaming Packages</h2>
          <p className="mt-5 font-display text-5xl font-bold">₹3000 to ₹5000</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[Camera, Radio, CalendarDays].map((Icon, index) => (
              <div key={index} className="rounded-2xl border bg-muted p-5 font-bold"><Icon className="mx-auto mb-3 h-8 w-8 text-accent" />{["Camera Setup", "Live Broadcast", "HD Streaming"][index]}</div>
            ))}
          </div>
          <a href="#contact" className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-8 py-3 font-bold text-accent-foreground shadow-gold transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring">Book Now</a>
        </div>
      </section>

      <section className="relative z-10 bg-muted/65 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-bold text-accent sm:text-5xl">Blessings from families</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {["Our relatives watched the wedding rituals clearly from abroad.", "Very punctual, respectful team and smooth live stream quality.", "The reception stream looked premium and our family loved it."].map((quote, index) => (
              <blockquote key={index} className="rounded-2xl border bg-card p-6 shadow-soft"><p className="text-lg leading-7">“{quote}”</p><footer className="mt-5 font-bold text-accent">— Shubham Live client</footer></blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-bold text-accent">Book a divine broadcast</p>
            <h2 className="mt-2 text-4xl font-bold sm:text-5xl">Contact Shubham Live</h2>
            <p className="mt-5 text-xl font-bold">Phone: <a className="text-accent" href="tel:9398335770">9398335770</a></p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-full border bg-card px-5 py-3 font-bold shadow-soft transition hover:scale-105" href={whatsAppUrl} target="_blank" rel="noreferrer"><MessageCircle className="h-5 w-5 text-accent" /> WhatsApp</a>
              <a className="inline-flex items-center gap-2 rounded-full border bg-card px-5 py-3 font-bold shadow-soft transition hover:scale-105" href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram className="h-5 w-5 text-accent" /> Instagram</a>
            </div>
          </div>
          <form action="https://formsubmit.co/shubhamlivetech@gmail.com" method="POST" onSubmit={() => { if (nextUrlRef.current) nextUrlRef.current.value = `${window.location.origin}/thank-you`; }} className="rounded-3xl border bg-card p-6 shadow-gold sm:p-8">
            <input ref={nextUrlRef} type="hidden" name="_next" value="" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Shubham Live booking request" />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 font-bold">Name<input className="min-h-12 rounded-xl border bg-background px-4 font-normal outline-none focus:ring-2 focus:ring-ring" name="name" placeholder="Your name" required /></label>
              <label className="grid gap-2 font-bold">Phone number<input className="min-h-12 rounded-xl border bg-background px-4 font-normal outline-none focus:ring-2 focus:ring-ring" name="phone" inputMode="tel" placeholder="9398335770" required /></label>
              <label className="grid gap-2 font-bold">Event type<select className="min-h-12 rounded-xl border bg-background px-4 font-normal outline-none focus:ring-2 focus:ring-ring" name="event"><option>Upanayanam</option><option>Engagement</option><option>Marriage</option><option>Reception</option></select></label>
              <label className="grid gap-2 font-bold">Date<input className="min-h-12 rounded-xl border bg-background px-4 font-normal outline-none focus:ring-2 focus:ring-ring" name="date" type="date" required /></label>
            </div>
            <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-accent px-8 py-3 font-bold text-accent-foreground shadow-gold transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring">Request Booking</button>
          </form>
        </div>
      </section>
    </main>
  );
}

declare global {
  interface Window { webkitAudioContext?: typeof AudioContext; }
}