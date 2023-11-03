import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import batteries from './schemas/menu/batteries';
import cartridges from './schemas/menu/cartridges';
import concentrates from './schemas/menu/concentrates';
import edibles from './schemas/menu/edibles';
import flowerGift from './schemas/menu/flowerGift';
import flowers from './schemas/menu/flowers';
import prerolls from './schemas/menu/prerolls';
import specialRequest from './schemas/menu/specialRequest';
import faq from './schemas/faq';
import giftPolicies from './schemas/giftPolicies';
import loyaltyProgram from './schemas/loyaltyProgram';
import policy from './schemas/policy';
import socialMedia from './schemas/socialMedia';
import spendingRewards from './schemas/spendingRewards';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    batteries,
    cartridges,
    concentrates,
    edibles,
    flowerGift,
    flowers,
    prerolls,
    specialRequest,
    faq,
    giftPolicies,
    loyaltyProgram,
    policy,
    socialMedia,
    spendingRewards,
    blockContent
  ],
};
