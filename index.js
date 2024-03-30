
  function superbowlWin(record) {
    const winningrecord = record.find(record => record.result === "W");
    if (winningrecord) {
        return winningrecord.year;
    }
  };
