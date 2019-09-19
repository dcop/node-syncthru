export enum SyncThruStatus {
  OFFLINE = 1,
  SLEEPING = 2,
  WARMING_UP = 3,
  READY = 4,
  UNKNOWN = 5,
  PRINTING = 6,
  SCANNING = 7,
  CALIBRATING = 8
}

export const toSyncThruState = (stateAsNumber: number): SyncThruStatus => {
  const findMatchingState = (currentStatus: string) => SyncThruStatus[currentStatus] === stateAsNumber
  const matchingStatusArray = Object.keys(SyncThruStatus)
                              .filter(findMatchingState);

  if (matchingStatusArray.length === 1) {
    const matchingStatus = matchingStatusArray[0];

    return SyncThruStatus[matchingStatus];
  } else {
    return SyncThruStatus.OFFLINE;
  }
}