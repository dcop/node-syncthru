import { SynchtruModel } from "./SyncThruModel";
import { SyncThruStatus } from "./SyncThruStatus";
import { SyncThruResponseBuilder } from "../builder/SyncThruResponseBuilder";

describe('Synchtru', () => {
  it('should adapt the response', () => {
    const response = SyncThruResponseBuilder
                      .aSyncThruResponse()
                      .withMagentaTonerLevel(56)
                      .withBlackTonerLevel(28)
                      .withCyanTonerLevel(6)
                      .withYellowTonerLevel(82)
                      .build()
    const model = SynchtruModel.from(response);

    expect(model.isOnline()).toBe(true);
    expect(model.blackTonerLevel()).toBe(28);
    expect(model.magentaTonerLevel()).toBe(56);
    expect(model.cyanTonerLevel()).toBe(6);
    expect(model.yellowTonerLevel()).toBe(82);
    expect(model.status()).toBe(SyncThruStatus.SLEEPING);
  });
});