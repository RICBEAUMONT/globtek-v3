export type RailCardProfile = {
  slug: string;
  name: string;
  phone: string;
  phoneE164: string;
  email: string;
  title: string;
  isCompany?: boolean;
};

const SITE_ORIGIN = 'https://www.globtek.co.za';

export function getCardUrl(slug: string) {
  if (slug === 'rail') return `${SITE_ORIGIN}/card`;
  return `${SITE_ORIGIN}/card/${slug}`;
}

export const companyCardProfile: RailCardProfile = {
  slug: 'rail',
  name: 'Globtek Rail',
  phone: '031 512 1005',
  phoneE164: '+27315121005',
  email: 'Info@globtek.co.za',
  title: 'Rail Infrastructure Engineering',
  isCompany: true,
};

export const teamCardProfiles: RailCardProfile[] = [
  {
    slug: 'themba-melato',
    name: 'Themba Melato',
    phone: '074 409 3155',
    phoneE164: '+27744093155',
    email: 'Info@globtek.co.za',
    title: 'Globtek Rail',
  },
  {
    slug: 'lungisa-douse',
    name: 'Lungisa Douse',
    phone: '071 606 9539',
    phoneE164: '+27716069539',
    email: 'Info@globtek.co.za',
    title: 'Globtek Rail',
  },
  {
    slug: 'kagiso-letlala',
    name: 'Kagiso Letlala',
    phone: '079 637 5833',
    phoneE164: '+27796375833',
    email: 'Info@globtek.co.za',
    title: 'Globtek Rail',
  },
];

export const allCardProfiles = [companyCardProfile, ...teamCardProfiles];

export function getCardProfileBySlug(slug: string): RailCardProfile | undefined {
  return allCardProfiles.find((profile) => profile.slug === slug);
}

export function buildVCard(profile: RailCardProfile, cardUrl: string) {
  const fileName = profile.name.toLowerCase().replace(/\s+/g, '-');
  return {
    content: `BEGIN:VCARD
VERSION:3.0
FN:${profile.name}
ORG:Globtek Rail;Globtek
TITLE:${profile.title}
URL:${cardUrl}
TEL;TYPE=CELL,VOICE:${profile.phoneE164}
EMAIL:${profile.email}
ADR;TYPE=WORK:;;62 Smiso Nkwanyana Road;Durban;;4001;South Africa
NOTE:Globtek Rail — infrastructure design, inspection & lifecycle engineering
END:VCARD`,
    fileName: `${fileName}.vcf`,
  };
}
