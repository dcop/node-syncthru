import { toSyncThruState as toSyncThruStatus, SyncThruStatus } from "./SyncThruStatus";

describe('SyncThru State', () => {
  it('should return a proper status if number is existing', () => {
    const statusAsNumber = 4;
    const expected = toSyncThruStatus(statusAsNumber);

    expect(expected).toBe(SyncThruStatus.READY);
  });

  it('should default to OFFLINE state', () => {
    const notExistingStatus = 46;
    const expected = toSyncThruStatus(notExistingStatus);

    expect(expected).toBe(SyncThruStatus.OFFLINE);
  });
});