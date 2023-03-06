// Regex for token amount
export const handleChangeAmountInput = (e, setFunction) => {
  const regex = /^[0-9]*[.,]?[0-9]*$/;
  if (e.target.value === "" || regex.test(e.target.value)) {
    setFunction(e.target.value);
  }
};
