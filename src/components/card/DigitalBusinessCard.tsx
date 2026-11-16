'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import QRCode from 'react-qr-code';
import styles from '@/components/card/CardMotion.module.css';
import {
  type RailCardProfile,
  buildVCard,
  getCardUrl,
} from '@/data/rail-card-profiles';
import {
  Check,
  ChevronRight,
  Download,
  Globe,
  Mail,
  Phone,
  X,
} from 'lucide-react';

const RAIL_LOGO = '/images/rails/globtek-rail-logo-transparent.png';
const BANNER = '/images/rails/globtek-rail-header.jpg';

type DigitalBusinessCardProps = {
  profile: RailCardProfile;
};

function Strike({ tick, light = false }: { tick?: number; light?: boolean }) {
  if (!tick) return null;
  return <span key={tick} className={light ? styles.strikeLight : styles.strike} aria-hidden />;
}

export default function DigitalBusinessCard({ profile }: DigitalBusinessCardProps) {
  const cardUrl = getCardUrl(profile.slug);
  const vcard = buildVCard(profile, cardUrl);
  const hasPortrait = Boolean(profile.heroImage);

  const [showQr, setShowQr] = useState(false);
  const [savedContact, setSavedContact] = useState(false);
  const [strikes, setStrikes] = useState<Record<string, number>>({});
  const [qrSize, setQrSize] = useState(240);
  const qrButtonRef = useRef<HTMLButtonElement>(null);
  const closeQrRef = useRef<HTMLButtonElement>(null);

  const strike = useCallback((id: string) => {
    setStrikes((current) => ({ ...current, [id]: (current[id] ?? 0) + 1 }));
  }, []);

  const contactLinks = [
    {
      id: 'phone',
      title: profile.phone,
      href: `tel:${profile.phoneE164}`,
      icon: Phone,
      external: false,
    },
    {
      id: 'email',
      title: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
      external: false,
    },
    {
      id: 'website',
      title: 'globtek.co.za',
      href: 'https://www.globtek.co.za',
      icon: Globe,
      external: true,
    },
  ] as const;

  useEffect(() => {
    document.body.style.overflow = showQr ? 'hidden' : '';
    if (!showQr) return () => {
      document.body.style.overflow = '';
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowQr(false);
    };

    closeQrRef.current?.focus();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      qrButtonRef.current?.focus();
    };
  }, [showQr]);

  useEffect(() => {
    if (!showQr) return;

    const updateQrSize = () => {
      const horizontal = window.innerWidth - 96;
      const vertical = window.innerHeight - 220;
      setQrSize(Math.max(180, Math.min(horizontal, vertical, 320)));
    };

    updateQrSize();
    window.addEventListener('resize', updateQrSize);
    return () => window.removeEventListener('resize', updateQrSize);
  }, [showQr]);

  const downloadVCard = useCallback(() => {
    const blob = new Blob([vcard.content], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = vcard.fileName;
    link.click();
    URL.revokeObjectURL(url);
    setSavedContact(true);
    window.setTimeout(() => setSavedContact(false), 2500);
  }, [vcard]);

  return (
    <>
      <div className="min-h-dvh bg-[#050505] sm:flex sm:items-center sm:justify-center sm:p-6">
        <main className="relative mx-auto w-full max-w-[420px] min-h-dvh overflow-x-clip bg-[#0c0c0c] text-white selection:bg-[var(--color-accent)] selection:text-white sm:min-h-0 sm:rounded-[28px] sm:ring-1 sm:ring-white/[0.08] card-enter motion-reduce:animate-none">
          <header className="relative">
            <div className="relative h-[268px] overflow-hidden sm:rounded-t-[28px]">
              <Image
                src={BANNER}
                alt=""
                fill
                priority
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-cover object-[center_84%]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-[#0c0c0c]"
                aria-hidden
              />
              <div className="absolute inset-x-0 top-0 z-[2] px-5 pt-[max(0.9rem,env(safe-area-inset-top))]">
                <Image
                  src={RAIL_LOGO}
                  alt="Globtek Rail"
                  width={180}
                  height={76}
                  priority
                  className="h-auto w-[158px]"
                />
              </div>
            </div>

            <svg
              className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[284px] w-full"
              viewBox="0 0 420 284"
              preserveAspectRatio="none"
              aria-hidden
            >
              <polygon points="0,214 0,244 358,274" fill="var(--color-accent)" />
            </svg>

            {hasPortrait && profile.heroImage && (
              <div className="absolute bottom-[-12px] left-5 z-[3] h-[108px] w-[108px] overflow-hidden rounded-full bg-[#1a1a1a] shadow-[0_12px_24px_rgba(0,0,0,0.5)]">
                <Image
                  src={profile.heroImage}
                  alt=""
                  width={216}
                  height={216}
                  priority
                  className="h-full w-full object-cover object-[center_16%]"
                />
              </div>
            )}
          </header>

          <div
            className={`px-5 pb-[max(1.75rem,env(safe-area-inset-bottom))] ${
              hasPortrait ? 'pt-7' : 'pt-6'
            }`}
          >
            {profile.isCompany ? (
              <>
                <h1 className="sr-only">{profile.name}</h1>
                <p className="max-w-[28ch] text-[17px] leading-snug text-white/80">
                  Infrastructure design, inspection &amp; lifecycle engineering
                </p>
              </>
            ) : (
              <>
                <h1 className="text-[2rem] font-bold leading-none tracking-tight text-white">
                  {profile.name}
                </h1>
                {profile.expertise && (
                  <p className="mt-1 text-[15px] leading-none text-white/65">{profile.expertise}</p>
                )}
                <p className="mt-1 text-[15px] font-bold leading-none text-[var(--color-accent)]">{profile.title}</p>
              </>
            )}

            <div className="mt-6 divide-y divide-white/12">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => strike(item.id)}
                    className="group relative flex items-center gap-3 overflow-hidden py-3.5 transition-transform duration-150 ease-out active:scale-[0.985] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                  >
                    <Strike tick={strikes[item.id]} />
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] text-white">
                      <Icon className="h-[18px] w-[18px]" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1 text-[15px] font-medium tabular-nums text-white/92">
                      {item.title}
                    </span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-white/70" aria-hidden />
                  </a>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => {
                strike('save');
                downloadVCard();
              }}
              className="relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--color-accent)] px-5 py-3.5 text-[16px] font-semibold text-white transition-[transform,background-color] duration-150 ease-out hover:bg-[var(--color-accent-dark)] active:scale-[0.985] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <Strike tick={strikes.save} light />
              {savedContact ? (
                <>
                  <Check className={`h-4 w-4 ${styles.check}`} aria-hidden />
                  Saved to contacts
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" aria-hidden />
                  Save Contact
                </>
              )}
            </button>
            <p className="sr-only" aria-live="polite">
              {savedContact ? 'Saved to contacts' : ''}
            </p>

            <div className="mt-3 grid grid-cols-2 border-t border-white/12">
              <button
                ref={qrButtonRef}
                type="button"
                onClick={() => {
                  strike('qr');
                  setShowQr(true);
                }}
                className="relative min-h-12 overflow-hidden border-r border-white/12 py-3.5 text-[15px] font-medium tracking-tight text-white transition-transform duration-150 ease-out hover:text-[var(--color-accent-light)] active:scale-[0.985] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                <Strike tick={strikes.qr} />
                Show QR
              </button>
              <a
                href="/services/rail-infrastructure"
                onClick={() => strike('profile')}
                className="relative flex min-h-12 items-center justify-center overflow-hidden px-3 py-3.5 text-center text-[15px] font-medium leading-snug tracking-tight text-white transition-transform duration-150 ease-out hover:text-[var(--color-accent-light)] active:scale-[0.985] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                <Strike tick={strikes.profile} />
                Read business profile
              </a>
            </div>
          </div>
        </main>
      </div>

      {showQr && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="qr-dialog-title"
          onClick={() => setShowQr(false)}
        >
          <div
            className="flex w-full max-w-[420px] flex-col rounded-3xl bg-[#111] p-6 ring-1 ring-white/[0.08] card-enter motion-reduce:animate-none"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 id="qr-dialog-title" className="text-lg font-semibold text-white">
                  Scan to connect
                </h2>
                <p className="mt-0.5 text-sm text-white/80">{profile.name}</p>
                <p className="text-[13px] text-white/70">{profile.title}</p>
              </div>
              <button
                ref={closeQrRef}
                type="button"
                onClick={() => setShowQr(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                aria-label="Close"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>

            <div className="flex justify-center">
              <div className="rounded-2xl bg-white p-4">
                <QRCode value={cardUrl} size={qrSize} level="M" />
              </div>
            </div>
            <p className="mt-4 break-all text-center text-[12px] leading-snug text-white/70">{cardUrl}</p>
          </div>
        </div>
      )}
    </>
  );
}
