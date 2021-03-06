export const LIST_VIEW = "list";
export const CHART_VIEW = "map";
export const TYPE_INCOME = "income";
export const TYPE_OUTCOME = "outcome";

export const padLeft = (n) => {
  return n < 10 ? "0" + n : n;
};

export const range = (size, start) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = start + i;
  }
  return arr;
};

export const parseToYearMonth = (str) => {
  const date = str ? new Date(str) : new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
  };
};
