import { toSynchTruState as toSynchTruStatus, SynchTruStatus } from "./SynchTruStatus";

describe('SynchTru State', () => {
  it('should return a proper status if number is existing', () => {
    const statusAsNumber = 4;
    const expected = toSynchTruStatus(statusAsNumber);

    expect(expected).toBe(SynchTruStatus.READY);
  });

  it('should default to OFFLINE state', () => {
    const notExistingStatus = 46;
    const expected = toSynchTruStatus(notExistingStatus);

    expect(expected).toBe(SynchTruStatus.OFFLINE);
  });
});