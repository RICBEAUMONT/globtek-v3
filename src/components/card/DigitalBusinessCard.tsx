'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import QRCode from 'react-qr-code';
import CardRailHero from '@/components/card/CardRailHero';
import {
  ArrowUpRight,
  Globe,
  Mail,
  Phone,
  QrCode,
  Share2,
  UserPlus,
  X,
  Check,
} from 'lucide-react';

const CARD_URL = 'https://www.globtek.co.za/card';
const RAIL_LOGO = '/images/rails/globtek-rail-logo-transparent.png';

const contactLinks = [
  {
    id: 'phone',
    title: '031 512 1005',
    subtitle: 'Call us',
    href: 'tel:+27315121005',
    icon: Phone,
    external: false,
  },
  {
    id: 'email',
    title: 'Info@globtek.co.za',
    subtitle: 'General enquiries',
    href: 'mailto:Info@globtek.co.za',
    icon: Mail,
    external: false,
  },
  {
    id: 'website',
    title: 'globtek.co.za',
    subtitle: 'Website & services',
    href: 'https://www.globtek.co.za',
    icon: Globe,
    external: true,
  },
] as const;

const railLinks = [
  { title: 'Rail Design & Engineering', href: '/services/rail-design' },
  { title: 'Infrastructure Inspection', href: '/services/rail-infrastructure' },
  { title: 'Operational Support', href: '/services/rail-operational-support' },
  { title: 'Maintenance & Lifecycle', href: '/services/rail-maintenance' },
] as const;

const VCARD = `BEGIN:VCARD
VERSION:3.0
FN:Globtek Rail
ORG:Globtek Rail;Globtek
TITLE:Rail Infrastructure Engineering
URL:https://www.globtek.co.za/services/rail-design
TEL;TYPE=WORK,VOICE:+27315121005
EMAIL:Info@globtek.co.za
ADR;TYPE=WORK:;;62 Smiso Nkwanyana Road;Durban;;4001;South Africa
NOTE:Integrated rail design, infrastructure inspection, and lifecycle engineering
END:VCARD`;

export default function DigitalBusinessCard() {
  const [showQr, setShowQr] = useState(false);
  const [savedContact, setSavedContact] = useState(false);
  const [qrSize, setQrSize] = useState(240);

  useEffect(() => {
    document.body.style.overflow = showQr ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showQr]);

  useEffect(() => {
    if (!showQr) return;

    const updateQrSize = () => {
      const horizontal = window.innerWidth - 56;
      const vertical = window.innerHeight - 280;
      setQrSize(Math.max(180, Math.min(horizontal, vertical, 340)));
    };

    updateQrSize();
    window.addEventListener('resize', updateQrSize);
    return () => window.removeEventListener('resize', updateQrSize);
  }, [showQr]);

  const downloadVCard = useCallback(() => {
    const blob = new Blob([VCARD], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'globtek-rail.vcf';
    link.click();
    URL.revokeObjectURL(url);
    setSavedContact(true);
    window.setTimeout(() => setSavedContact(false), 2500);
  }, []);

  const shareContact = useCallback(async () => {
    const shareData = {
      title: 'Globtek Rail — Contact',
      text: 'Globtek Rail\nRail Infrastructure Engineering\n031 512 1005\nInfo@globtek.co.za',
      url: CARD_URL,
    };

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        /* cancelled */
      }
    }

    try {
      await navigator.clipboard.writeText(`${shareData.text}\n${CARD_URL}`);
    } catch {
      /* clipboard unavailable */
    }
  }, []);

  return (
    <>
      <div className="min-h-dvh bg-[#050505] sm:flex sm:items-center sm:justify-center sm:p-6">
        <main className="relative mx-auto flex w-full max-w-[420px] min-h-dvh flex-col bg-[#0a0a0a] text-white sm:min-h-[680px] sm:max-h-[860px] sm:overflow-hidden sm:rounded-sm sm:ring-1 sm:ring-white/[0.08] card-enter motion-reduce:animate-none">
          {/* Hero */}
          <header className="relative flex min-h-[360px] shrink-0 flex-col justify-between px-6 pb-8 pt-[max(1.5rem,env(safe-area-inset-top))] sm:min-h-[380px]">
            <CardRailHero />

            <div className="relative z-[1]">
              <Image
                src={RAIL_LOGO}
                alt="Globtek Rail"
                width={190}
                height={80}
                priority
                className="h-auto w-[min(64vw,190px)] max-w-full"
              />
            </div>

            <div className="relative z-[1] mt-8 sm:mt-10">
              <h1 className="sr-only">Globtek Rail</h1>
              <p className="max-w-[30ch] text-[17px] sm:text-[18px] leading-relaxed text-white/60">
                Infrastructure design, inspection &amp; lifecycle engineering
              </p>
            </div>
          </header>

          {/* Body */}
          <div className="flex-1 px-4 pb-[calc(5.25rem+env(safe-area-inset-bottom))] sm:px-5 sm:pb-5">
            <div className="overflow-hidden rounded-sm ring-1 ring-white/[0.07]">
              {contactLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`group flex items-center gap-4 bg-white/[0.03] px-5 py-[1.125rem] transition-colors hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--color-accent)] ${
                      index > 0 ? 'border-t border-white/[0.06]' : ''
                    }`}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                  >
                    <Icon
                      className="h-[17px] w-[17px] shrink-0 text-white/35 transition-colors group-hover:text-[var(--color-accent)]"
                      aria-hidden
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block text-[15px] font-semibold leading-tight text-white/92">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block text-[13px] text-white/40">{item.subtitle}</span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-white/20 transition-all group-hover:translate-x-px group-hover:-translate-y-px group-hover:text-white/60"
                      aria-hidden
                    />
                  </a>
                );
              })}
            </div>

            <nav className="mt-8 px-1" aria-label="Rail services">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-white/30">
                Capabilities
              </p>
              <ul className="space-y-3">
                {railLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-[14px] font-medium text-white/55 transition-colors hover:text-white focus:outline-none focus-visible:text-[var(--color-accent)]"
                    >
                      <span className="h-px w-4 bg-[var(--color-accent)]/60 transition-all group-hover:w-6 group-hover:bg-[var(--color-accent)]" />
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Bottom bar */}
          <div
            className="fixed bottom-0 left-0 right-0 z-10 mx-auto w-full max-w-[420px] border-t border-white/[0.06] bg-[#0a0a0a]/88 px-4 py-3 backdrop-blur-xl sm:sticky sm:bg-[#0a0a0a]/95"
            style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
          >
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setShowQr(true)}
                className="flex h-11 w-11 shrink-0 items-center justify-center text-white/50 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                aria-label="Show QR code"
              >
                <QrCode className="h-[18px] w-[18px]" aria-hidden />
              </button>

              <button
                type="button"
                onClick={shareContact}
                className="flex h-11 w-11 shrink-0 items-center justify-center text-white/50 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                aria-label="Share contact"
              >
                <Share2 className="h-[18px] w-[18px]" aria-hidden />
              </button>

              <button
                type="button"
                onClick={downloadVCard}
                className="flex flex-1 items-center justify-center gap-2 bg-[var(--color-accent)] px-5 py-3 text-[13px] font-semibold tracking-wide text-white transition-colors hover:bg-[var(--color-accent-dark)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                {savedContact ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden />
                    Saved to contacts
                  </>
                ) : (
                  <>
                    <UserPlus className="h-4 w-4" aria-hidden />
                    Save contact
                  </>
                )}
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* QR sheet */}
      {showQr && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] sm:bg-black/80 sm:p-4 sm:backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="qr-dialog-title"
          onClick={() => setShowQr(false)}
        >
          <div
            className="flex h-full w-full max-w-[420px] flex-col px-5 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))] sm:h-auto sm:max-h-[min(720px,92dvh)] sm:rounded-2xl sm:bg-[#111] sm:p-6 sm:ring-1 sm:ring-white/[0.08] card-enter motion-reduce:animate-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex shrink-0 items-start justify-between gap-4 sm:mb-5">
              <div className="min-w-0">
                <Image
                  src={RAIL_LOGO}
                  alt=""
                  width={140}
                  height={59}
                  className="mb-3 h-auto w-[120px] opacity-95 sm:w-[130px]"
                />
                <h2 id="qr-dialog-title" className="text-lg font-semibold text-white">
                  Scan to connect
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowQr(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                aria-label="Close"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col items-center justify-center py-2">
              <div className="rounded-xl bg-white p-4 sm:p-5">
                <QRCode value={CARD_URL} size={qrSize} level="M" />
              </div>
              <p className="mt-4 max-w-full truncate px-2 text-center text-[11px] text-white/30">
                {CARD_URL}
              </p>
            </div>

            <button
              type="button"
              onClick={downloadVCard}
              className="mt-4 flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[var(--color-accent-dark)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 sm:mt-5"
            >
              <UserPlus className="h-4 w-4" aria-hidden />
              Save contact
            </button>
          </div>
        </div>
      )}
    </>
  );
}
