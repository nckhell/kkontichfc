// eslint-disable-next-line import/prefer-default-export
export const getReadableRankingType = (type: string): string => {
  const dictionary = {
    generalRanking: "Algemeen",
    firstPeriodRanking: "Periode 1",
    secondPeriodRanking: "Periode 2",
    thirdPeriodRanking: "Periode 3"
  };

  return dictionary[type];
};
