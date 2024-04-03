
function superbowlWin(record) {
  for (const winningRecord of record) {
    if (winningRecord.result === "W") {
      return winningRecord.year;
    }
  }
}