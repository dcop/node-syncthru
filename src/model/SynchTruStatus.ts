export enum SynchTruStatus {
  OFFLINE = 1,
  SLEEPING = 2,
  WARMING_UP = 3,
  READY = 4,
  UNKNOWN = 5,
  PRINTING = 6,
  SCANNING = 7,
  CALIBRATING = 8
}

export const toSynchTruState = (stateAsNumber: number): SynchTruStatus => {
  const findMatchingState = (currentStatus: string) => SynchTruStatus[currentStatus] === stateAsNumber
  const matchingStatusArray = Object.keys(SynchTruStatus)
                              .filter(findMatchingState);

  if (matchingStatusArray.length === 1) {
    const matchingStatus = matchingStatusArray[0];

    return SynchTruStatus[matchingStatus];
  } else {
    return SynchTruStatus.OFFLINE;
  }
}