import { useAuth } from '@/hooks';
import { roleTypes as r } from '../constants';

export const BSSViewers = [r.FWOwner, r.Owner];
export const PartnerViewers = [r.FWOwner, r.Owner];

const useCanView = () => {
  const { user } = useAuth();
  const role = user?.role;

  const canBSSView = BSSViewers.includes(role as string);
  const canPartnerView = PartnerViewers.includes(role as string);

  return { canBSSView, canPartnerView };
};

export default useCanView;
