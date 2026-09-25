  export function handleStatus(setFun, stateData, status) {
    setFun({ ...stateData, status: status });
  }