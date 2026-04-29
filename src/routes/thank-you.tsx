import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  component: ThankYou,
});

const whatsAppUrl = "https://api.whatsapp.com/send?phone=919398335770&text=Namaste%20Shubham%20Live%2C%20I%20submitted%20a%20booking%20request%20and%20want%20to%20confirm%20details.";

function ThankYou() {
  return (
    <main className="mandala-field flex min-h-screen items-center justify-center bg-background px-5 py-16 text-foreground">
      <section className="max-w-2xl rounded-3xl border bg-card p-8 text-center shadow-gold sm:p-12">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <CheckCircle2 className="h-11 w-11 text-accent" />
        </div>
        <p className="font-bold text-accent">Booking request received</p>
        <h1 className="mt-3 text-5xl font-bold text-accent sm:text-6xl">Thank You</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Shubham Live will contact you shortly to confirm your event details and live streaming package.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="/" className="inline-flex min-h-12 items-center justify-center rounded-full border bg-card px-7 py-3 font-bold shadow-soft transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ring">
            Back Home
          </a>
          <a href={whatsAppUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 font-bold text-accent-foreground shadow-gold transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring">
            <MessageCircle className="h-5 w-5" /> WhatsApp Now
          </a>
        </div>
      </section>
    </main>
  );
}