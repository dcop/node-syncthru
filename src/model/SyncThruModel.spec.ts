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
                      .withModelName("M2020 Series")
                      .build()
    const device = SynchtruModel.from(response);

    expect(device.isOnline()).toBe(true);
    expect(device.blackTonerLevel()).toBe(28);
    expect(device.magentaTonerLevel()).toBe(56);
    expect(device.cyanTonerLevel()).toBe(6);
    expect(device.yellowTonerLevel()).toBe(82);
    expect(device.status()).toBe(SyncThruStatus.SLEEPING);
    expect(device.modelName()).toBe("M2020 Series");
  });
});