const services = [
  {
    name: "Preventive Care",
    description: "Cleanings, exams, and routine care that keep problems small.",
  },
  {
    name: "Cosmetic Dentistry",
    description: "Whitening and smile refinements with a natural-looking finish.",
  },
  {
    name: "Invisalign",
    description: "Clear aligners for a straighter smile with less disruption.",
  },
  {
    name: "Dental Implants",
    description: "Modern tooth replacement designed for long-term confidence.",
  },
  {
    name: "Emergency Visits",
    description: "Prompt care for pain, damage, and urgent dental concerns.",
  },
  {
    name: "Restorative Dentistry",
    description: "Crowns, fillings, and repairs focused on comfort and function.",
  },
];

const trustItems = [
  "1,100+ 5-star reviews",
  "CareCredit® and many PPO's",
  "Advanced technology",
  "Extended hours",
  "Friendly staff",
  "Full-service care",
];

const teamBadges = [
  "20+ years experience",
  "PPO plans accepted",
  "Patient-first care",
];

const testimonials = [
  {
    quote:
      "Professional, efficient, and genuinely reassuring from the first visit.",
    name: "Alicia P.",
  },
  {
    quote:
      "Clean office, clear communication, and a team that makes booking simple.",
    name: "Michael R.",
  },
  {
    quote:
      "Our family has trusted this office for years because the care feels honest and consistent.",
    name: "Bhavna R.",
  },
];

const faqs = [
  {
    question: "Do you accept dental insurance?",
    answer:
      "Yes. Most PPO plans are accepted, and the team can help verify benefits before your visit.",
  },
  {
    question: "Can I book online?",
    answer:
      "Yes. Patients can request an appointment online through the booking link or call the office directly.",
  },
  {
    question: "Do you offer emergency visits?",
    answer:
      "Yes. The office provides prompt care for urgent issues such as pain, chipped teeth, or swelling.",
  },
  {
    question: "What services do you provide?",
    answer:
      "The practice offers preventive, cosmetic, restorative, implant, Invisalign, and emergency dental care.",
  },
];

function ServiceIcon({ type }: { type: string }) {
  const base = "h-5 w-5 stroke-[1.8] text-stone-900";

  switch (type) {
    case "Preventive Care":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={base}
          aria-hidden="true"
        >
          <path d="M7.5 4.5c-1.8 0-3 1.5-3 3.5 0 4.8 2.2 11 5 11 1 0 1.2-1 1.6-2.5.3-1.1.7-2 1.4-2s1.1.9 1.4 2c.4 1.5.6 2.5 1.6 2.5 2.8 0 5-6.2 5-11 0-2-1.2-3.5-3-3.5-1.4 0-2.3.8-3 .8s-1.6-.8-3-.8-2.3.8-3 .8-1.6-.8-3-.8Z" />
        </svg>
      );
    case "Cosmetic Dentistry":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={base}
          aria-hidden="true"
        >
          <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" />
          <path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />
        </svg>
      );
    case "Invisalign":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={base}
          aria-hidden="true"
        >
          <rect x="4" y="6" width="16" height="12" rx="4" />
          <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
        </svg>
      );
    case "Dental Implants":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={base}
          aria-hidden="true"
        >
          <path d="M12 3v5" />
          <path d="M9 8h6" />
          <path d="M10 11h4" />
          <path d="M10 14h4" />
          <path d="M9 17h6" />
          <path d="M8 21h8" />
        </svg>
      );
    case "Emergency Visits":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={base}
          aria-hidden="true"
        >
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={base}
          aria-hidden="true"
        >
          <path d="M7.5 4.5c-1.8 0-3 1.5-3 3.5 0 4.8 2.2 11 5 11 1 0 1.2-1 1.6-2.5.3-1.1.7-2 1.4-2s1.1.9 1.4 2c.4 1.5.6 2.5 1.6 2.5 2.8 0 5-6.2 5-11 0-2-1.2-3.5-3-3.5-1.4 0-2.3.8-3 .8s-1.6-.8-3-.8-2.3.8-3 .8-1.6-.8-3-.8Z" />
          <path d="M9 11h6" />
        </svg>
      );
  }
}

function TrustIcon({ item }: { item: string }) {
  const base = "h-5 w-5 text-white";

  switch (item) {
    case "1,100+ 5-star reviews":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`${base} stroke-[1.75]`} aria-hidden="true">
          <path d="M12 17.5 7.3 20l1-5.4-4-3.9 5.5-.8L12 5l2.2 4.9 5.5.8-4 3.9 1 5.4Z" />
        </svg>
      );
    case "CareCredit® and many PPO's":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className={`${base} stroke-[1.7]`}
          aria-hidden="true"
        >
          <path
            d="M9 12 11 14 15 10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 12C20 16.4611 14.54 19.6937 12.6414 20.683C12.4361 20.79 12.3334 20.8435 12.191 20.8712C12.08 20.8928 11.92 20.8928 11.809 20.8712C11.6666 20.8435 11.5639 20.79 11.3586 20.683C9.45996 19.6937 4 16.4611 4 12V8.21759C4 7.41808 4 7.01833 4.13076 6.6747C4.24627 6.37113 4.43398 6.10027 4.67766 5.88552C4.9535 5.64243 5.3278 5.50207 6.0764 5.22134L11.4382 3.21067C11.6461 3.13271 11.75 3.09373 11.857 3.07827C11.9518 3.06457 12.0482 3.06457 12.143 3.07827C12.25 3.09373 12.3539 3.13271 12.5618 3.21067L17.9236 5.22134C18.6722 5.50207 19.0465 5.64243 19.3223 5.88552C19.566 6.10027 19.7537 6.37113 19.8692 6.6747C20 7.01833 20 7.41808 20 8.21759V12Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "Advanced technology":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
          <path d="M16.13 19.88H7.88a3.76 3.76 0 0 1-3.75-3.75V7.88A3.75 3.75 0 0 1 7.88 4.13h8.25a3.76 3.76 0 0 1 3.75 3.75v8.25a3.76 3.76 0 0 1-3.75 3.75ZM7.88 5.63A2.24 2.24 0 0 0 5.63 7.88v8.25a2.25 2.25 0 0 0 2.25 2.25h8.25a2.25 2.25 0 0 0 2.25-2.25V7.88a2.25 2.25 0 0 0-2.25-2.25Z" fill="currentColor" />
          <path d="M9.69 5.57a.74.74 0 0 1-.75-.75V2a.75.75 0 0 1 1.5 0v2.82a.75.75 0 0 1-.75.75ZM14.31 5.6a.76.76 0 0 1-.75-.75V2a.75.75 0 0 1 1.5 0v2.85a.75.75 0 0 1-.75.75ZM9.69 22.75a.75.75 0 0 1-.75-.75v-2.87a.75.75 0 0 1 1.5 0V22a.76.76 0 0 1-.75.75ZM14.31 22.78a.76.76 0 0 1-.75-.75v-2.9a.75.75 0 0 1 1.5 0V22a.75.75 0 0 1-.75.78ZM22 10.48h-2.85a.75.75 0 0 1 0-1.5H22a.75.75 0 0 1 0 1.5ZM22 15.1h-2.9a.75.75 0 0 1 0-1.5H22a.75.75 0 0 1 0 1.5ZM4.9 10.48H2A.75.75 0 0 1 2 9H4.9a.75.75 0 0 1 0 1.5ZM4.9 15.1H2a.75.75 0 0 1 0-1.5H4.9a.75.75 0 0 1 0 1.5Z" fill="currentColor" />
        </svg>
      );
    case "Extended hours":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`${base} stroke-[1.75]`} aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2.5 2.5" />
        </svg>
      );
    case "Friendly staff":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
          <path d="M12 2.75C6.89 2.75 2.75 6.89 2.75 12s4.14 9.25 9.25 9.25 9.25-4.14 9.25-9.25S17.11 2.75 12 2.75Zm0-1.5C17.94 1.25 22.75 6.06 22.75 12S17.94 22.75 12 22.75 1.25 17.94 1.25 12 6.06 1.25 12 1.25Z" fill="currentColor" />
          <path d="M8.4 15.55a.75.75 0 0 1 1.05-.16c.73.55 1.61.86 2.55.86.95 0 1.82-.31 2.55-.86a.75.75 0 1 1 .9 1.2c-.97.72-2.16 1.16-3.45 1.16s-2.48-.44-3.45-1.16a.75.75 0 0 1-.15-1.05Z" fill="currentColor" />
          <path d="M16 10.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5.45-1.5 1-1.5 1 .67 1 1.5ZM10 10.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5S8.45 9 9 9s1 .67 1 1.5Z" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={base} aria-hidden="true">
          <path d="M9.2 4.46C8.55 4.22 7.94 4 7 4 5 4 4 6 4 8.5c0 1.6.41 2.58.83 3.61.24.58.49 1.17.67 1.89.15.6.21 1.46.27 2.38.15 2.16.32 4.62 1.73 4.62.9 0 1.29-1.41 1.73-2.97C9.76 16.12 10.35 14 12 14c1.65 0 2.24 2.12 2.77 4.03.43 1.56.83 2.97 1.73 2.97 1.4 0 1.58-2.46 1.73-4.62.06-.92.12-1.78.27-2.38.18-.72.43-1.31.67-1.89.42-1.03.83-2.01.83-3.61C20 6 19 4 17 4c-.94 0-1.55.22-2.2.46C14.08 4.72 13.32 5 12 5c-1.32 0-2.08-.28-2.8-.54Z" fill="currentColor" />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#f8fafc] text-stone-950">
      <header className="sticky top-0 z-40 bg-[#f8fafc]/94 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex min-w-0 items-center">
            <img
              src="/clients/exchange/logo.png"
              alt="The Exchange Dental Group"
              className="h-11 w-auto sm:h-12"
            />
          </a>

          <nav className="hidden items-center gap-9 text-[0.96rem] text-stone-600 md:flex">
            <a href="#services" className="transition hover:text-stone-950">
              Services
            </a>
            <a href="#team" className="transition hover:text-stone-950">
              Team
            </a>
            <a href="#reviews" className="transition hover:text-stone-950">
              Reviews
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <details className="relative md:hidden">
              <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-[12px] border border-stone-200 bg-white text-stone-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-5 w-5 stroke-[1.8]"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="absolute right-0 top-12 z-50 w-52 rounded-[14px] border border-stone-200 bg-white p-2 shadow-[0_16px_36px_rgba(15,23,42,0.12)]">
                <a href="#services" className="block rounded-[10px] px-3 py-2.5 text-sm text-stone-700 hover:bg-stone-50">
                  Services
                </a>
                <a href="#why-us" className="block rounded-[10px] px-3 py-2.5 text-sm text-stone-700 hover:bg-stone-50">
                  Why Us
                </a>
                <a href="#team" className="block rounded-[10px] px-3 py-2.5 text-sm text-stone-700 hover:bg-stone-50">
                  Team
                </a>
                <a href="#reviews" className="block rounded-[10px] px-3 py-2.5 text-sm text-stone-700 hover:bg-stone-50">
                  Reviews
                </a>
                <a href="#faq" className="block rounded-[10px] px-3 py-2.5 text-sm text-stone-700 hover:bg-stone-50">
                  FAQ
                </a>
              </div>
            </details>
            <a
              href="facetime://6469701601"
              className="hidden items-center gap-1.5 text-sm font-medium text-stone-600 transition hover:text-stone-950 sm:flex"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 text-stone-600"
                aria-hidden="true"
              >
                <path d="M16.1 13.36 15.57 12.83h0l.53.53Zm.46-.45.53.53h0l-.53-.53Zm2.42-.32-.36.66.36-.66Zm1.91 1.04-.36.66.36-.66Zm.54 3.25.53.53-.53-.53Zm-1.42 1.41-.53-.53.53.53Zm-1.32.67.07.75h0l-.07-.75ZM8.82 14.73l.52-.53-.52.53ZM4 5.75l-.75.04h0l.75-.04Zm6.47 1.45.53.53h0l-.53-.53Zm.16-2.65.6-.45-.6.45ZM9.37 2.86l-.6.45.6-.45ZM6.26 2.57l.53.53h0l-.53-.53ZM4.69 4.14l-.53-.53h0l.53.53Zm7.37 7.36.53-.53-.53.53Zm4.57 2.39.45-.45-1.06-1.06-.46.45 1.06 1.06Zm1.98-.64 1.91 1.04.72-1.32-1.91-1.04-.72 1.32Zm2.28 3.1-1.42 1.42 1.06 1.06 1.42-1.41-1.06-1.07Zm-2.29 1.87c-1.45.14-5.2.01-9.26-4.02l-1.06 1.07c4.43 4.4 8.65 4.62 10.46 4.45l-.14-1.5ZM9.34 14.2C5.47 10.35 4.83 7.11 4.75 5.7l-1.5.09c.1 1.77.89 5.36 5.03 9.47l1.06-1.06Zm1.38-6.18.28-.28L9.95 6.67l-.29.29 1.06 1.06Zm.51-3.92L9.97 2.41l-1.2.9 1.26 1.68 1.2-.9ZM5.73 2.04 4.16 3.6l1.06 1.06 1.57-1.56-1.06-1.06Zm4.46 5.44c-.53-.53-.53-.53-.53-.53h0l-.01.01-.01.01-.01.01-.01.01a1.1 1.1 0 0 0-.03.03l-.05.05a1.61 1.61 0 0 0-.12.15c-.05.08-.11.19-.16.32-.1.27-.16.63-.09 1.08.14.86.73 2.01 2.26 3.53l1.06-1.06c-1.43-1.42-1.77-2.29-1.83-2.69-.03-.19 0-.29.01-.31v-.01h0v-.01h0l-.01.01.02-.02.06-.07a.8.8 0 0 0 .05-.06l.03-.03.01-.01.01-.01h0l.01-.01h0s0 0-.53-.54Zm2.4 4.55c1.53 1.51 2.68 2.1 3.54 2.24.44.07.8.02 1.08-.08.13-.05.24-.11.32-.17a1.92 1.92 0 0 0 .2-.16l.05-.05.03-.03.01-.01.01-.01h0l.01-.01h0c.53-.53.53-.53 0 0h0v-.01l-.01.01-.01.01-.03.03a.4.4 0 0 1-.06.05l-.07.05h-.01.01c-.03.01-.13.04-.32.01-.41-.06-1.28-.4-2.7-1.82l-1.05 1.07ZM9.97 2.41C8.95 1.05 6.95.83 5.73 2.04l1.06 1.06c.53-.53 1.47-.47 1.98.2l1.2-.9ZM4.75 5.7c-.02-.34.14-.7.47-1.03L4.16 3.6c-.54.54-.96 1.3-.9 2.18l1.49-.08Zm14.72 12.06c-.27.27-.57.43-.86.45l.14 1.5c.73-.07 1.34-.44 1.78-.89l-1.06-1.06ZM11 7.73c.98-.98 1.06-2.53.23-3.64l-1.2.9c.4.54.34 1.25-.08 1.68L11 7.73Zm9.52 6.56c.82.45.95 1.49.37 2.07l1.06 1.06c1.34-1.33.93-3.56-.7-4.45l-.73 1.32Zm-3.44-.85c.38-.38 1-.47 1.53-.19l.72-1.32c-1.08-.59-2.43-.42-3.3.44l1.05 1.07Z" fill="currentColor" />
              </svg>
              <span>(646) 970-1601</span>
            </a>
            <a
              href="https://www.nexhealth.com/appt/the-exchange-dental-group"
              target="_blank"
              rel="noreferrer"
              className="rounded-[14px] bg-[#2155f5] px-3.5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(33,85,245,0.22)] transition hover:bg-[#1947d4] sm:rounded-[18px] sm:px-5"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </header>

      <section className="px-0 pt-0 sm:px-6 sm:pt-6 lg:px-8">
        <div className="mx-auto max-w-none overflow-hidden rounded-none bg-stone-950 shadow-[0_28px_90px_rgba(28,25,23,0.12)] sm:max-w-7xl sm:rounded-[40px]">
          <div className="relative isolate overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=80"
              alt="Dental care close-up"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,9,0.22),rgba(12,10,9,0.52))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.12),transparent_42%)]" />

            <div className="relative px-6 pb-18 pt-22 text-center sm:px-8 lg:px-12 lg:pb-20 lg:pt-24">
              <div className="mx-auto max-w-3xl">
                <div className="inline-flex rounded-full border border-white/16 bg-white/6 px-5 py-2 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
                  DENTIST NEW YORK
                </div>
                <h1 className="mt-8 text-[3.1rem] font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-[5.3rem] lg:leading-[0.98]">
                  Modern dental care in Union City
                </h1>
                <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/88 sm:text-[1.18rem] sm:leading-9">
                  Family, cosmetic, and restorative dentistry in a calm,
                  trusted setting with easier booking, clear communication, and
                  a patient experience that feels more modern from the first visit.
                </p>
              </div>

              <div className="mx-auto mt-10 w-full max-w-full overflow-hidden md:hidden">
                <div className="flex w-max items-center gap-3 animate-[heroMarquee_26s_linear_infinite] pr-3">
                  {[...trustItems, ...trustItems].map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="flex items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-white/8 px-4 py-3 text-white/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                        <TrustIcon item={item} />
                      </span>
                      <p className="text-[0.93rem] font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mx-auto mt-14 hidden max-w-6xl gap-px overflow-hidden rounded-[32px] border border-white/10 bg-white/6 text-left backdrop-blur-md md:grid md:grid-cols-3">
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="border-white/8 bg-black/10 p-4 sm:p-5"
                  >
                    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-3 text-white/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                        <TrustIcon item={item} />
                      </span>
                      <p className="text-[0.98rem] font-medium">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-14 px-4 sm:-mt-18 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[544px] rounded-[25px] border border-stone-200/80 bg-white px-6 pb-0 pt-5.5 shadow-[0_14px_34px_rgba(28,25,23,0.10)] sm:px-7 sm:pt-6">
          <h2 className="text-left text-[1.34rem] font-normal tracking-[-0.03em] text-stone-950 sm:text-[1.5rem]">
            Book an Appointment
          </h2>

          <div className="mt-3.5">
            <a
              href="https://www.nexhealth.com/appt/the-exchange-dental-group"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[68px] cursor-pointer items-center justify-between rounded-[16px] border border-stone-200/90 bg-[#fffefd] px-4 py-2.5 text-stone-900 transition duration-200 hover:bg-stone-50 hover:border-stone-300 sm:px-5"
            >
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-4.5 w-4.5 shrink-0 stroke-[1.7] text-stone-700"
                  aria-hidden="true"
                >
                  <path d="M8 7.5h8" />
                  <path d="M8 12h8" />
                  <path d="M8 16.5h5" />
                  <rect x="4.5" y="4.5" width="15" height="15" rx="3.5" />
                </svg>
                <span className="text-[0.98rem] font-normal text-stone-900 sm:text-[1.02rem]">
                  Appointment Booking
                </span>
              </div>
              <span className="flex items-center gap-2 text-[0.9rem] font-normal text-[#22b8a2] sm:text-[0.96rem]">
                <span>Request Now</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-4 w-4 stroke-[1.9] text-stone-500"
                  aria-hidden="true"
                >
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </span>
            </a>

            <div className="mt-2.5 -mx-6 border-t border-stone-300/90 sm:-mx-7" />

            <a
              href="tel:+16469701601"
              className="-mx-6 mb-0 flex min-h-[64px] cursor-pointer items-center justify-between gap-4 rounded-[14px] px-6 pb-3.5 pt-2.5 text-stone-900 transition duration-200 hover:bg-stone-50 sm:-mx-7 sm:px-7 sm:pb-4"
            >
              <div className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-4.5 w-4.5 shrink-0 stroke-[1.7] text-stone-700"
                  aria-hidden="true"
                >
                  <path d="M5 4.75h3.5l1.75 4.25-2.1 1.8a14.2 14.2 0 0 0 5.05 5.05L15 13.75l4.25 1.75V19a1.75 1.75 0 0 1-1.9 1.75C9.57 20.22 3.78 14.43 3.25 6.65A1.75 1.75 0 0 1 5 4.75Z" />
                </svg>
                <span className="text-[0.98rem] font-normal text-stone-900 sm:text-[1.02rem]">
                  Call Now
                </span>
              </div>
              <span className="text-right text-[1.03rem] font-semibold text-stone-400 sm:text-[1.08rem]">
                (646) 970-1601
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="why-us" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-[44rem] text-center">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-stone-500">
              Why Us
            </p>
            <h2 className="mt-5 text-[2.45rem] font-semibold tracking-[-0.045em] text-stone-950 sm:text-[3.35rem] lg:text-[3.45rem] lg:leading-[1.01]">
              A better dental experience, from the first visit
            </h2>
            <p className="mx-auto mt-6 max-w-[36rem] text-[1.01rem] leading-8 text-stone-500 sm:text-[1.04rem]">
              Modern technology, trusted care, and a patient-first approach all in one place.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3 lg:gap-6">
            <article className="rounded-[24px] border border-stone-200/65 bg-white/55 p-7 transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_24px_rgba(15,23,42,0.05)] sm:p-8">
              <div className="text-[#2c6bff]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-14 w-14 stroke-[1.85]"
                  aria-hidden="true"
                >
                  <path d="M12 3 5 6v5c0 4.2 2.8 7.9 7 9 4.2-1.1 7-4.8 7-9V6l-7-3Z" />
                  <path d="M9 12.5 11 14.5 15.5 10" />
                </svg>
              </div>
              <h3 className="mt-7 text-[1.58rem] font-semibold tracking-[-0.03em] text-stone-950">
                All-in-One Care
              </h3>
              <p className="mt-4 max-w-[18rem] text-[0.98rem] leading-8 text-stone-500">
                From routine checkups to advanced treatments, patients can get everything they need in one trusted place.
              </p>
            </article>

            <article className="rounded-[24px] border border-stone-200/65 bg-white/55 p-7 transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_24px_rgba(15,23,42,0.05)] sm:p-8">
              <div className="text-[#2c6bff]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-14 w-14 stroke-[1.85]"
                  aria-hidden="true"
                >
                  <path d="m12 3.5 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16l-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 3.5Z" />
                </svg>
              </div>
              <h3 className="mt-7 text-[1.58rem] font-semibold tracking-[-0.03em] text-stone-950">
                1,000+ 5-Star Reviews
              </h3>
              <p className="mt-4 max-w-[18rem] text-[0.98rem] leading-8 text-stone-500">
                Highly rated by patients for professionalism, clarity, and a consistently reassuring experience.
              </p>
            </article>

            <article className="rounded-[24px] border border-stone-200/65 bg-white/55 p-7 transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_24px_rgba(15,23,42,0.05)] sm:p-8">
              <div className="text-[#2c6bff]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-14 w-14 stroke-[1.85]"
                  aria-hidden="true"
                >
                  <rect x="4.5" y="4.5" width="15" height="15" rx="3.5" />
                  <path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4.5" />
                  <path d="M16.8 17.8 20 21" />
                </svg>
              </div>
              <h3 className="mt-7 text-[1.58rem] font-semibold tracking-[-0.03em] text-stone-950">
                Advanced Technology
              </h3>
              <p className="mt-4 max-w-[18rem] text-[0.98rem] leading-8 text-stone-500">
                Modern tools and techniques designed to improve precision, comfort, and treatment quality.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-stone-500">
              Our Services
            </p>
          <h2 className="mt-5 text-[2.35rem] font-semibold tracking-[-0.045em] text-stone-950 sm:text-5xl lg:text-[3.3rem] lg:leading-[1.04]">
              Treatments designed around your smile
            </h2>
          </div>

          <div className="mt-20 grid gap-x-14 gap-y-18 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-18 lg:gap-y-20">
            {[
              {
                name: "Teeth Whitening",
                description:
                  "Professional whitening treatments designed to brighten your smile with a cleaner, more luminous finish.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-14 w-14 stroke-[1.5]" aria-hidden="true">
                    <path d="M7.5 4.5c-1.8 0-3 1.5-3 3.5 0 4.8 2.2 11 5 11 1 0 1.2-1 1.6-2.5.3-1.1.7-2 1.4-2s1.1.9 1.4 2c.4 1.5.6 2.5 1.6 2.5 2.8 0 5-6.2 5-11 0-2-1.2-3.5-3-3.5-1.4 0-2.3.8-3 .8s-1.6-.8-3-.8-2.3.8-3 .8-1.6-.8-3-.8Z" />
                    <path d="m17 3 .8 1.9L19.7 5.7l-1.9.8L17 8.4l-.8-1.9-1.9-.8 1.9-.8L17 3Z" />
                  </svg>
                ),
              },
              {
                name: "Porcelain Veneers",
                description:
                  "Custom veneers that refine shape, tone, and symmetry for a more balanced and polished smile.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-14 w-14 stroke-[1.5]" aria-hidden="true">
                    <path d="M7.5 4.5c-1.8 0-3 1.5-3 3.5 0 4.8 2.2 11 5 11 1 0 1.2-1 1.6-2.5.3-1.1.7-2 1.4-2s1.1.9 1.4 2c.4 1.5.6 2.5 1.6 2.5 2.8 0 5-6.2 5-11 0-2-1.2-3.5-3-3.5-1.4 0-2.3.8-3 .8s-1.6-.8-3-.8-2.3.8-3 .8-1.6-.8-3-.8Z" />
                    <path d="M9 10.5h6" />
                    <path d="M9.5 13.5h5" />
                  </svg>
                ),
              },
              {
                name: "Clear Aligners",
                description:
                  "Discreet orthodontic treatment that straightens teeth with a more comfortable, everyday approach.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-14 w-14 stroke-[1.5]" aria-hidden="true">
                    <rect x="4" y="6" width="16" height="12" rx="4.5" />
                    <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                name: "Dental Bonding",
                description:
                  "A conservative cosmetic treatment used to smooth chips, refine edges, and restore natural detail.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-14 w-14 stroke-[1.5]" aria-hidden="true">
                    <path d="M7.5 4.5c-1.8 0-3 1.5-3 3.5 0 4.8 2.2 11 5 11 1 0 1.2-1 1.6-2.5.3-1.1.7-2 1.4-2s1.1.9 1.4 2c.4 1.5.6 2.5 1.6 2.5 2.8 0 5-6.2 5-11 0-2-1.2-3.5-3-3.5-1.4 0-2.3.8-3 .8s-1.6-.8-3-.8-2.3.8-3 .8-1.6-.8-3-.8Z" />
                    <path d="M9.5 14.5 14.5 9.5" />
                    <path d="m13.5 9.5 1 1" />
                  </svg>
                ),
              },
              {
                name: "Gum Contouring",
                description:
                  "Gentle contouring that reshapes the gumline to create a more harmonious and refined smile.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-14 w-14 stroke-[1.5]" aria-hidden="true">
                    <path d="M4.5 14c1.4-2.7 4.2-4.5 7.5-4.5s6.1 1.8 7.5 4.5" />
                    <path d="M6 17.5c1.3-1.8 3.5-3 6-3s4.7 1.2 6 3" />
                    <path d="M8 7.5c.8-.7 2.2-1.5 4-1.5s3.2.8 4 1.5" />
                  </svg>
                ),
              },
              {
                name: "Smile Makeovers",
                description:
                  "Comprehensive planning that combines cosmetic treatments into one cohesive, personalized result.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-14 w-14 stroke-[1.5]" aria-hidden="true">
                    <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" />
                    <path d="m18.5 14 .8 1.8L21 16.5l-1.7.7-.8 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
                    <path d="m6 14 .6 1.4L8 16l-1.4.6L6 18l-.6-1.4L4 16l1.4-.6L6 14Z" />
                  </svg>
                ),
              },
            ].map((service) => (
              <article key={service.name} className="mx-auto flex max-w-[24rem] flex-col items-center text-center">
                <div className="text-[#2c6bff]">
                  {service.icon}
                </div>
                <h3 className="mt-8 text-[1.45rem] font-semibold tracking-[-0.03em] text-stone-950 sm:text-[1.6rem]">
                  {service.name}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-8 text-stone-500 sm:text-[1rem]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

<section id="team" className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
  <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24">
    <div className="relative min-h-[340px] rounded-[36px] lg:min-h-[500px]">
      <img
        src="/clients/team.png"
        alt="Dental team in clinic"
        className="h-full w-full rounded-[36px] object-contain"
      />
    </div>

    <div className="max-w-md lg:max-w-[27rem] lg:pl-6 xl:pl-10">
      <p className="text-[0.66rem] font-medium uppercase tracking-[0.14em] text-stone-500">
        Meet
      </p>
      <h2 className="mt-6 text-[2.15rem] font-semibold tracking-[-0.045em] text-stone-950 sm:text-[2.9rem] lg:text-[3.05rem] lg:leading-[1.06]">
        The team behind your smile
      </h2>
      <p className="mt-9 max-w-[24rem] text-base leading-8 text-stone-500 sm:text-[1.01rem]">
        Founded in 1982 by{" "}
        <span className="font-medium text-[#2c6bff] underline underline-offset-4">
          Dr. Howard Wimmer
        </span>
        , The Exchange Dental Group has been a trusted part of New York City&apos;s
        Financial District for over four decades. Today, our team blends deep
        clinical expertise with a more modern, patient-first approach focused
        on comfort, clarity, and long-term results.
      </p>

      <a
        href="#"
        className="group mt-12 inline-flex items-center gap-2 text-[0.98rem] font-medium text-stone-900 transition hover:text-stone-700"
      >
        Meet the team
        <span
          aria-hidden="true"
          className="translate-x-0 text-stone-500 transition duration-200 group-hover:translate-x-1 group-hover:text-[#2c6bff]"
        >
          →
        </span>
      </a>
    </div>
  </div>
</section>

      <section id="reviews" className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-stone-500">
                Social Proof
              </p>
              <h2 className="mt-4 text-[2.3rem] font-semibold tracking-[-0.05em] text-stone-950 sm:text-5xl lg:text-[3.2rem] lg:leading-[1.03]">
                Hear what our patients have to say
              </h2>
            </div>
          </div>

          <div className="mt-12">
            <input
              id="review-1"
              type="radio"
              name="reviews-carousel"
              className="sr-only"
            />
            <input
              id="review-2"
              type="radio"
              name="reviews-carousel"
              className="sr-only"
              defaultChecked
            />
            <input
              id="review-3"
              type="radio"
              name="reviews-carousel"
              className="sr-only"
            />
            <input
              id="review-4"
              type="radio"
              name="reviews-carousel"
              className="sr-only"
            />
            <input
              id="review-5"
              type="radio"
              name="reviews-carousel"
              className="sr-only"
            />

            <div className="carousel-shell relative">
              <div className="carousel-stage">
                <article className="review-card review-card-1">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-stone-500 shadow-[0_4px_18px_rgba(28,25,23,0.05)]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-5 w-5 stroke-[1.8]"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="8" r="3.5" />
                        <path d="M5.5 19c1.6-3 4-4.5 6.5-4.5s4.9 1.5 6.5 4.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[1.02rem] font-medium tracking-[-0.02em] text-stone-950">
                        Alicia P.
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-amber-500">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <svg
                            key={index}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4"
                            aria-hidden="true"
                          >
                            <path d="m10 2.5 2.16 4.38 4.84.7-3.5 3.41.83 4.82L10 13.54 5.67 15.8l.83-4.82L3 7.57l4.84-.7L10 2.5Z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-[1.02rem] leading-[1.95rem] text-stone-700 lg:text-[1.08rem]">
                    &ldquo;Professional, efficient, and genuinely reassuring from the first visit.&rdquo;
                  </p>
                </article>

                <article className="review-card review-card-2">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-stone-500 shadow-[0_4px_18px_rgba(28,25,23,0.05)]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-5 w-5 stroke-[1.8]"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="8" r="3.5" />
                        <path d="M5.5 19c1.6-3 4-4.5 6.5-4.5s4.9 1.5 6.5 4.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[1.08rem] font-medium tracking-[-0.02em] text-stone-950">
                        Michael R.
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-amber-500">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <svg
                            key={index}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4"
                            aria-hidden="true"
                          >
                            <path d="m10 2.5 2.16 4.38 4.84.7-3.5 3.41.83 4.82L10 13.54 5.67 15.8l.83-4.82L3 7.57l4.84-.7L10 2.5Z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-[1.22rem] leading-[2.15rem] text-stone-700 lg:text-[1.38rem]">
                    &ldquo;Clear communication, smooth booking, and a team that really cares.&rdquo;
                  </p>
                </article>

                <article className="review-card review-card-3">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-stone-500 shadow-[0_4px_18px_rgba(28,25,23,0.05)]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-5 w-5 stroke-[1.8]"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="8" r="3.5" />
                        <path d="M5.5 19c1.6-3 4-4.5 6.5-4.5s4.9 1.5 6.5 4.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[1.02rem] font-medium tracking-[-0.02em] text-stone-950">
                        Bhavna R.
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-amber-500">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <svg
                            key={index}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4"
                            aria-hidden="true"
                          >
                            <path d="m10 2.5 2.16 4.38 4.84.7-3.5 3.41.83 4.82L10 13.54 5.67 15.8l.83-4.82L3 7.57l4.84-.7L10 2.5Z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-[1.02rem] leading-[1.95rem] text-stone-700 lg:text-[1.08rem]">
                    &ldquo;Our family has trusted this office for years. Always consistent and honest.&rdquo;
                  </p>
                </article>

                <article className="review-card review-card-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-stone-500 shadow-[0_4px_18px_rgba(28,25,23,0.05)]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-5 w-5 stroke-[1.8]"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="8" r="3.5" />
                        <path d="M5.5 19c1.6-3 4-4.5 6.5-4.5s4.9 1.5 6.5 4.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[1.02rem] font-medium tracking-[-0.02em] text-stone-950">
                        Daniel S.
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-amber-500">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <svg
                            key={index}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4"
                            aria-hidden="true"
                          >
                            <path d="m10 2.5 2.16 4.38 4.84.7-3.5 3.41.83 4.82L10 13.54 5.67 15.8l.83-4.82L3 7.57l4.84-.7L10 2.5Z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-[1.02rem] leading-[1.95rem] text-stone-700 lg:text-[1.08rem]">
                    &ldquo;Appointments feel easy, the office is calm, and the care is always thoughtful.&rdquo;
                  </p>
                </article>

                <article className="review-card review-card-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-stone-500 shadow-[0_4px_18px_rgba(28,25,23,0.05)]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-5 w-5 stroke-[1.8]"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="8" r="3.5" />
                        <path d="M5.5 19c1.6-3 4-4.5 6.5-4.5s4.9 1.5 6.5 4.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[1.02rem] font-medium tracking-[-0.02em] text-stone-950">
                        Priya M.
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-amber-500">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <svg
                            key={index}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4"
                            aria-hidden="true"
                          >
                            <path d="m10 2.5 2.16 4.38 4.84.7-3.5 3.41.83 4.82L10 13.54 5.67 15.8l.83-4.82L3 7.57l4.84-.7L10 2.5Z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-[1.02rem] leading-[1.95rem] text-stone-700 lg:text-[1.08rem]">
                    &ldquo;You can feel the experience here. The team is warm, honest, and consistently excellent.&rdquo;
                  </p>
                </article>
              </div>

              <div className="mt-10 flex items-center justify-center gap-6 lg:mt-0 lg:block">
                <label
                  htmlFor="review-1"
                  className="carousel-arrow carousel-arrow-prev carousel-arrow-prev-1"
                  aria-label="Show previous testimonial"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-6 w-6 stroke-[1.8]"
                    aria-hidden="true"
                  >
                    <path d="m15 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </label>
                <label
                  htmlFor="review-3"
                  className="carousel-arrow carousel-arrow-prev carousel-arrow-prev-2"
                  aria-label="Show previous testimonial"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-6 w-6 stroke-[1.8]"
                    aria-hidden="true"
                  >
                    <path d="m15 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </label>
                <label
                  htmlFor="review-2"
                  className="carousel-arrow carousel-arrow-prev carousel-arrow-prev-3"
                  aria-label="Show previous testimonial"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-6 w-6 stroke-[1.8]"
                    aria-hidden="true"
                  >
                    <path d="m15 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </label>
                <label
                  htmlFor="review-3"
                  className="carousel-arrow carousel-arrow-prev carousel-arrow-prev-4"
                  aria-label="Show previous testimonial"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-6 w-6 stroke-[1.8]"
                    aria-hidden="true"
                  >
                    <path d="m15 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </label>
                <label
                  htmlFor="review-4"
                  className="carousel-arrow carousel-arrow-prev carousel-arrow-prev-5"
                  aria-label="Show previous testimonial"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-6 w-6 stroke-[1.8]"
                    aria-hidden="true"
                  >
                    <path d="m15 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </label>

                <label
                  htmlFor="review-2"
                  className="carousel-arrow carousel-arrow-next carousel-arrow-next-1"
                  aria-label="Show next testimonial"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-6 w-6 stroke-[1.8]"
                    aria-hidden="true"
                  >
                    <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </label>
                <label
                  htmlFor="review-3"
                  className="carousel-arrow carousel-arrow-next carousel-arrow-next-2"
                  aria-label="Show next testimonial"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-6 w-6 stroke-[1.8]"
                    aria-hidden="true"
                  >
                    <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </label>
                <label
                  htmlFor="review-4"
                  className="carousel-arrow carousel-arrow-next carousel-arrow-next-3"
                  aria-label="Show next testimonial"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-6 w-6 stroke-[1.8]"
                    aria-hidden="true"
                  >
                    <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </label>
                <label
                  htmlFor="review-5"
                  className="carousel-arrow carousel-arrow-next carousel-arrow-next-4"
                  aria-label="Show next testimonial"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-6 w-6 stroke-[1.8]"
                    aria-hidden="true"
                  >
                    <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </label>
                <label
                  htmlFor="review-1"
                  className="carousel-arrow carousel-arrow-next carousel-arrow-next-5"
                  aria-label="Show next testimonial"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-6 w-6 stroke-[1.8]"
                    aria-hidden="true"
                  >
                    <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </label>
              </div>
            </div>

            <div className="mt-7 text-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=The+Exchange+Dental+Group+39+Broadway+Suite+2115+New+York+NY+10006"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-[1.04rem] font-medium text-stone-900 transition hover:text-stone-700"
              >
                Read all reviews
                <span
                  aria-hidden="true"
                  className="text-stone-500 transition duration-200 group-hover:scale-110 group-hover:text-[#2c6bff]"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes heroMarquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .carousel-shell {
            position: relative;
            padding-inline: 3rem;
          }

          .carousel-stage {
            position: relative;
            height: 20.5rem;
          }

          .review-card {
            position: absolute;
            top: 0;
            left: 50%;
            width: min(35rem, calc(100vw - 6rem));
            min-height: 17.75rem;
            border-radius: 1.9rem;
            background: #f6f8fb;
            padding: 2.1rem 2.15rem;
            transition:
              transform 0.45s ease,
              opacity 0.45s ease,
              filter 0.45s ease,
              box-shadow 0.45s ease;
            opacity: 0;
            pointer-events: none;
          }

    .carousel-arrow {
      display: none;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      color: rgb(68 64 60);
      transition:
        color 0.2s ease,
        transform 0.2s ease,
        opacity 0.2s ease;
      cursor: pointer;
      opacity: 0.78;
      z-index: 10;
      pointer-events: auto;
    }

  .carousel-arrow:hover {
    color: #2c6bff;
    opacity: 1;
  }

          #review-1:checked ~ .carousel-shell .review-card-1,
          #review-2:checked ~ .carousel-shell .review-card-2,
          #review-3:checked ~ .carousel-shell .review-card-3,
          #review-4:checked ~ .carousel-shell .review-card-4,
          #review-5:checked ~ .carousel-shell .review-card-5 {
            transform: translateX(-50%) scale(1);
            opacity: 1;
            filter: none;
            z-index: 3;
            box-shadow: 0 20px 52px rgba(44, 107, 255, 0.12);
            pointer-events: auto;
          }

    #review-1:checked ~ .carousel-shell .review-card-2,
    #review-2:checked ~ .carousel-shell .review-card-3,
    #review-3:checked ~ .carousel-shell .review-card-4,
    #review-4:checked ~ .carousel-shell .review-card-5,
    #review-5:checked ~ .carousel-shell .review-card-1 {
      transform: translateX(calc(-50% + 25rem)) scale(0.8);
      opacity: 0.52;
      filter: saturate(0.82);
      z-index: 2;
      pointer-events: auto;
    }

    #review-1:checked ~ .carousel-shell .review-card-5,
    #review-2:checked ~ .carousel-shell .review-card-1,
    #review-3:checked ~ .carousel-shell .review-card-2,
    #review-4:checked ~ .carousel-shell .review-card-3,
    #review-5:checked ~ .carousel-shell .review-card-4 {
      transform: translateX(calc(-50% - 25rem)) scale(0.8);
      opacity: 0.52;
      filter: saturate(0.82);
      z-index: 1;
      pointer-events: auto;
    }

    #review-1:checked ~ .carousel-shell .review-card-3,
    #review-1:checked ~ .carousel-shell .review-card-4,
    #review-2:checked ~ .carousel-shell .review-card-4,
    #review-2:checked ~ .carousel-shell .review-card-5,
    #review-3:checked ~ .carousel-shell .review-card-5,
    #review-3:checked ~ .carousel-shell .review-card-1,
    #review-4:checked ~ .carousel-shell .review-card-1,
    #review-4:checked ~ .carousel-shell .review-card-2,
    #review-5:checked ~ .carousel-shell .review-card-2,
    #review-5:checked ~ .carousel-shell .review-card-3 {
      transform: translateX(-50%) scale(0.6);
      opacity: 0;
      filter: saturate(0.8);
      z-index: 0;
      pointer-events: none;
    }

          #review-1:checked ~ .carousel-shell .carousel-arrow-prev-1,
          #review-2:checked ~ .carousel-shell .carousel-arrow-prev-2,
          #review-3:checked ~ .carousel-shell .carousel-arrow-prev-3,
          #review-4:checked ~ .carousel-shell .carousel-arrow-prev-4,
          #review-5:checked ~ .carousel-shell .carousel-arrow-prev-5,
          #review-1:checked ~ .carousel-shell .carousel-arrow-next-1,
          #review-2:checked ~ .carousel-shell .carousel-arrow-next-2,
          #review-3:checked ~ .carousel-shell .carousel-arrow-next-3,
          #review-4:checked ~ .carousel-shell .carousel-arrow-next-4,
          #review-5:checked ~ .carousel-shell .carousel-arrow-next-5 {
            display: inline-flex;
          }

          @media (min-width: 1024px) {
    .carousel-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .carousel-arrow:hover {
      transform: translateY(-50%) scale(1.08);
    }

      .carousel-arrow-prev {
        left: 0.5rem;
      }

      .carousel-arrow-next {
        right: 0.5rem;
      }
    }

          @media (max-width: 1023px) {
            .carousel-stage {
              height: 18.5rem;
            }

            .review-card {
              width: min(32rem, calc(100vw - 3rem));
              min-height: 16.25rem;
              padding: 1.5rem;
            }

            #review-1:checked ~ .carousel-shell .review-card-2,
            #review-1:checked ~ .carousel-shell .review-card-3,
            #review-1:checked ~ .carousel-shell .review-card-4,
            #review-1:checked ~ .carousel-shell .review-card-5,
            #review-2:checked ~ .carousel-shell .review-card-1,
            #review-2:checked ~ .carousel-shell .review-card-3,
            #review-2:checked ~ .carousel-shell .review-card-4,
            #review-2:checked ~ .carousel-shell .review-card-5,
            #review-3:checked ~ .carousel-shell .review-card-1,
            #review-3:checked ~ .carousel-shell .review-card-2,
            #review-3:checked ~ .carousel-shell .review-card-4,
            #review-3:checked ~ .carousel-shell .review-card-5,
            #review-4:checked ~ .carousel-shell .review-card-1,
            #review-4:checked ~ .carousel-shell .review-card-2,
            #review-4:checked ~ .carousel-shell .review-card-3,
            #review-4:checked ~ .carousel-shell .review-card-5,
            #review-5:checked ~ .carousel-shell .review-card-1,
            #review-5:checked ~ .carousel-shell .review-card-2,
            #review-5:checked ~ .carousel-shell .review-card-3,
            #review-5:checked ~ .carousel-shell .review-card-4 {
              transform: translateX(calc(-50% + 120vw)) scale(0.94);
              opacity: 0;
              pointer-events: none;
            }
          }
        `}</style>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-10">
          <div className="flex h-full flex-col pt-2">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-stone-500">
              Location
            </p>
            <h2 className="mt-4 text-[2.2rem] font-semibold tracking-[-0.045em] text-stone-950 sm:text-5xl lg:text-[3rem] lg:leading-[1.04]">
              New York Office
            </h2>

            <div className="mt-8">
              <p className="text-lg leading-8 text-stone-800">
                39 Broadway Suite 2115
                <br />
                New York, NY 10006
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.nexhealth.com/appt/the-exchange-dental-group"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-[16px] bg-[#2155f5] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#1947d4]"
              >
                Book Appointment
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=The+Exchange+Dental+Group,+39+Broadway+Suite+2115,+New+York,+NY+10006"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-[16px] border border-stone-200 bg-white px-6 py-3.5 text-sm font-medium text-stone-800 transition hover:bg-stone-50"
              >
                Get Directions
              </a>
            </div>

            <div className="mt-8 rounded-[26px] border border-stone-200/70 bg-white p-6 shadow-[0_10px_30px_rgba(28,25,23,0.03)] sm:mt-9 sm:p-7">
              <div className="space-y-3">
                {[
                  ["Monday", "08-19"],
                  ["Tuesday", "08-19"],
                  ["Wednesday", "08-19"],
                  ["Thursday", "08-19"],
                  ["Friday", "08-16"],
                  ["Saturday", "Closed"],
                  ["Sunday", "09:15-17"],
                ].map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex items-center justify-between gap-4 text-sm sm:text-base"
                  >
                    <span className="text-stone-600">{day}</span>
                    <span className="font-medium text-stone-900">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=The+Exchange+Dental+Group,+39+Broadway+Suite+2115,+New+York,+NY+10006"
            target="_blank"
            rel="noreferrer"
            className="relative min-h-[420px] h-full overflow-hidden rounded-[30px] border border-stone-200/70 bg-[#eef2f7] transition hover:opacity-95"
          >
            <iframe
              title="Map showing the office location in New York"
              src="https://www.google.com/maps?q=The+Exchange+Dental+Group,+39+Broadway+Suite+2115,+New+York,+NY+10006&z=15&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>
      </section>

      <section id="faq" className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-5xl">
          <div className="mt-24 space-y-6">
            <div className="space-y-2 pb-6 pt-12 text-center">
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-stone-500">
                FAQs
              </p>
              <h3 className="text-[2.35rem] font-semibold tracking-[-0.045em] text-stone-950 sm:text-5xl lg:text-[3.2rem] lg:leading-[1.03]">
                Frequently asked questions
              </h3>
            </div>

            <div className="space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group overflow-hidden rounded-[32px] border border-stone-200/70 bg-white px-6 py-5 shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition hover:-translate-y-[1px] hover:shadow-[0_16px_42px_rgba(15,23,42,0.08)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[1.02rem] font-medium tracking-[-0.02em] text-stone-950 sm:text-[1.08rem]">
                    <span>{item.question}</span>
                    <span className="text-xl font-bold text-stone-400 transition group-open:rotate-45 group-open:text-stone-600">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[48rem] text-sm leading-7 text-stone-600 sm:text-[0.98rem]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl text-center">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            <h3 className="text-[2rem] font-semibold tracking-[-0.03em] text-stone-950 sm:text-[2.1rem]">
              Rate, Review & Explore
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=The+Exchange+Dental+Group+39+Broadway+Suite+2115+New+York+NY+10006"
                target="_blank"
                rel="noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-stone-900 text-[2rem] font-semibold text-[#2c6bff] transition hover:scale-[1.03]"
                aria-label="Google reviews"
              >
                G
              </a>
              <a
                href="#"
                className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-stone-900 text-[2rem] font-semibold text-[#2c6bff] transition hover:scale-[1.03]"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-stone-900 text-[1.9rem] font-semibold text-[#2c6bff] transition hover:scale-[1.03]"
                aria-label="Instagram"
              >
                ◎
              </a>
              <a
                href="#"
                className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-stone-900 text-[2rem] font-semibold text-[#2c6bff] transition hover:scale-[1.03]"
                aria-label="Yelp"
              >
                ✶
              </a>
            </div>
          </div>

          <p className="mx-auto mt-20 max-w-6xl text-[1.05rem] leading-8 text-stone-800">
            *Disclaimer: results are not guaranteed, may not be permanent, and can vary per individual. Some images are of models, not actual patients.
          </p>

          <p className="mt-8 text-[1.05rem] leading-8 text-stone-800">
            ©2026 The Exchange Dental Group | Forever Website
            <sup>®</sup> 2.0 | Designed &amp; Developed by{" "}
            <a href="#" className="font-semibold underline underline-offset-4">
              Revenly AI
            </a>
          </p>

          <div className="mt-7 flex items-center justify-center gap-3 text-[1.05rem] font-semibold text-stone-950">
            <a href="#" className="underline underline-offset-4">
              Sitemap
            </a>
            <span>|</span>
            <a href="#" className="underline underline-offset-4">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="underline underline-offset-4">
              Login
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-3 z-50 px-2 sm:bottom-4 sm:px-3">
        <div className="mx-auto flex w-full max-w-[calc(100vw-12px)] items-center justify-center gap-2 sm:max-w-[calc(100vw-24px)]">
          <div className="min-w-0 flex-1 rounded-[18px] border border-stone-200/80 bg-white/95 p-2 shadow-[0_12px_30px_rgba(28,25,23,0.09)] backdrop-blur sm:px-7 sm:py-4">
            <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
              <a
                href="tel:+16469701601"
                className="flex min-w-0 w-full items-center gap-3 rounded-[12px] px-3 py-2.5 text-left text-stone-800 transition hover:bg-stone-50 sm:flex-[1.28] sm:gap-4 sm:px-4 sm:py-3"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-5 w-5 shrink-0 stroke-[1.7] text-stone-700 sm:h-5.5 sm:w-5.5"
                  aria-hidden="true"
                >
                  <path d="M5 4.75h3.5l1.75 4.25-2.1 1.8a14.2 14.2 0 0 0 5.05 5.05L15 13.75l4.25 1.75V19a1.75 1.75 0 0 1-1.9 1.75C9.57 20.22 3.78 14.43 3.25 6.65A1.75 1.75 0 0 1 5 4.75Z" />
                </svg>
                <span className="min-w-0 text-[0.95rem] leading-none sm:text-[1.12rem]">
                  <span className="font-medium text-stone-950">Call now</span>
                  <span className="ml-2 text-stone-500 sm:ml-3">(646) 970-1601</span>
                </span>
              </a>
              <a
                href="https://www.nexhealth.com/appt/the-exchange-dental-group"
                target="_blank"
                rel="noreferrer"
                className="w-full shrink-0 rounded-[10px] bg-[#2155f5] px-4 py-2.5 text-center text-[0.92rem] font-medium text-white transition hover:bg-[#1947d4] sm:w-auto sm:flex-[0.88] sm:rounded-[12px] sm:px-7 sm:py-5 sm:text-[1.08rem]"
              >
                Request Appointment
              </a>
            </div>
          </div>

          <a
            href="#"
            className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white/95 shadow-[0_12px_30px_rgba(28,25,23,0.09)] backdrop-blur sm:h-[72px] sm:w-[72px]"
            aria-label="Live chat"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6 text-[#2c6bff]"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.7994 18.3704L23.8013 18.373C24.1307 18.8032 24.2888 20.2316 22.0258 19.9779C21.3596 19.9033 20.4282 19.7715 19.3088 19.3471C18.5551 19.0613 17.8986 18.7026 17.3584 18.3522C16.4699 18.7098 15.5118 18.9296 14.5113 18.9857C13.1436 20.8155 10.9602 22 8.50001 22C7.69152 22 6.91135 21.8717 6.17973 21.6339C5.74016 21.8891 5.24034 22.1376 4.68789 22.3471C3.56851 22.7715 2.63949 22.9297 1.97092 22.9779C1.47028 23.014 1.11823 22.9883 0.944098 22.9681C0.562441 22.9239 0.219524 22.7064 0.072134 22.3397C-0.0571899 22.0179 -0.0104055 21.6519 0.195537 21.3728C0.448192 21.0283 0.680439 20.6673 0.899972 20.3011C1.32809 19.5868 1.74792 18.8167 1.85418 17.9789C1.30848 16.9383 1.00001 15.7539 1.00001 14.5C1.00001 11.5058 2.75456 8.92147 5.29159 7.71896C6.30144 3.85296 9.81755 1 14 1C18.9706 1 23 5.02944 23 10C23 11.3736 22.6916 12.6778 22.1395 13.8448C21.9492 15.5687 22.8157 17.0204 23.7994 18.3704ZM7.00001 10C7.00001 6.13401 10.134 3 14 3C17.866 3 21 6.13401 21 10C21 11.1198 20.7378 12.1756 20.2723 13.1118C20.2242 13.2085 20.1921 13.3124 20.1772 13.4194C19.9584 14.9943 20.3278 16.43 21.0822 17.8083C19.9902 17.5451 18.9611 17.0631 18.0522 16.4035C17.7546 16.1875 17.3625 16.1523 17.0312 16.3117C16.1152 16.7525 15.0879 17 14 17C10.134 17 7.00001 13.866 7.00001 10ZM5.00353 10.2543C5.11889 14.4129 8.05529 17.8664 11.9674 18.7695C11.0213 19.5389 9.8145 20 8.50001 20C7.7707 20 7.07689 19.8586 6.44271 19.6026C6.14147 19.481 5.79993 19.5133 5.52684 19.6892C5.08797 19.972 4.56616 20.2543 3.9788 20.477C3.58892 20.6248 3.23263 20.7316 2.91446 20.8083C3.24678 20.2012 3.58332 19.4779 3.73844 18.7971C3.81503 18.461 3.8572 18.1339 3.87625 17.8266C3.88848 17.6293 3.84192 17.4327 3.74245 17.2618C3.27058 16.451 3.00001 15.5086 3.00001 14.5C3.00001 12.7904 3.78 11.263 5.00353 10.2543Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
