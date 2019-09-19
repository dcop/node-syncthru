import { SynchtruModel } from "./SynchtruModel";
import { data as response } from "../stub/response.malformed";
import { SynchTruStatus } from "./SynchTruStatus";

describe('Synchtru', () => {
  it('should adapt the response', () => {
    const model = SynchtruModel.from(response);

    expect(model.isOnline()).toBe(true);
    expect(model.blackTonerLevel()).toBe(28);
    expect(model.magentaTonerLevel()).toBe(56);
    expect(model.cyanTonerLevel()).toBe(6);
    expect(model.yellowTonerLevel()).toBe(82);
    expect(model.status()).toBe(SynchTruStatus.SLEEPING);
  });
});