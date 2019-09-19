import { SynchtruModel } from "./SynchtruModel";
import { SynchTruStatus } from "./SynchTruStatus";
import { SynchTruResponseBuilder } from "../builder/SynchTruResponseBuilder";

describe('Synchtru', () => {
  it('should adapt the response', () => {
    const response = SynchTruResponseBuilder
                      .aSynchTruResponse()
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
    expect(model.status()).toBe(SynchTruStatus.SLEEPING);
  });
});