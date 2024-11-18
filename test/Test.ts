import assert from "assert";
import { 
  TestHelpers,
  SocialDexDeployer_OwnershipTransferred
} from "generated";
const { MockDb, SocialDexDeployer } = TestHelpers;

describe("SocialDexDeployer contract OwnershipTransferred event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for SocialDexDeployer contract OwnershipTransferred event
  const event = SocialDexDeployer.OwnershipTransferred.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("SocialDexDeployer_OwnershipTransferred is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await SocialDexDeployer.OwnershipTransferred.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualSocialDexDeployerOwnershipTransferred = mockDbUpdated.entities.SocialDexDeployer_OwnershipTransferred.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedSocialDexDeployerOwnershipTransferred: SocialDexDeployer_OwnershipTransferred = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualSocialDexDeployerOwnershipTransferred, expectedSocialDexDeployerOwnershipTransferred, "Actual SocialDexDeployerOwnershipTransferred should be the same as the expectedSocialDexDeployerOwnershipTransferred");
  });
});
