import DigitalBusinessCard from '@/components/card/DigitalBusinessCard';
import { companyCardProfile } from '@/data/rail-card-profiles';

export default function CardPage() {
  return <DigitalBusinessCard profile={companyCardProfile} />;
}
