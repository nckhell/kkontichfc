export const getReadableRankingType = (type: string): string => {
  const dictionary = {
    generalRanking: "Algemeen",
    firstPeriodRanking: "Periode 1",
    secondPeriodRanking: "Periode 2",
    thirdPeriodRanking: "Periode 3"
  };

  return dictionary[type];
};

export const anotherFunction = () => {
  return "test";
};
