import Image from 'next/image';

type CardProfileHeroProps = {
  src: string;
  alt: string;
};

export default function CardProfileHero({ src, alt }: CardProfileHeroProps) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a]">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 640px) 100vw, 420px"
        className="object-cover object-top"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/10 to-[#0a0a0a]"
        aria-hidden
      />
    </div>
  );
}
