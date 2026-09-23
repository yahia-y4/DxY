export   function chooseToothState(setFun, stateData, toothData) {
    setFun({
      ...stateData,
      teeth_number: toothData.number,
      teeth_vertical: toothData.vertical,
      teeth_horizontal: toothData.horizontal,
    });
  }