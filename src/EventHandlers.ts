/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  SocialDexDeployer,
  SocialDexDeployer_OwnershipTransferred,
  SocialDexDeployer_TokenCreated,
} from "generated";

SocialDexDeployer.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: SocialDexDeployer_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.SocialDexDeployer_OwnershipTransferred.set(entity);
});

SocialDexDeployer.TokenCreated.handler(async ({ event, context }) => {
  const entity: SocialDexDeployer_TokenCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenAddress: event.params.tokenAddress,
    lpNftId: event.params.lpNftId,
    deployer: event.params.deployer,
    name: event.params.name,
    symbol: event.params.symbol,
    supply: event.params.supply,
    _supply: event.params._supply,
    lockerAddress: event.params.lockerAddress,
  };

  context.SocialDexDeployer_TokenCreated.set(entity);
});
