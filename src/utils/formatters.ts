export const formatDecimal = (val: number): string => {
  return val.toFixed(1).replace('.', ',');
};

export const getTeamClass = (team: string): string => {
  switch (team) {
    case 'G3X': return 'g3x';
    case 'BRASIL': return 'brasil';
    case 'PORCINOS': return 'porcinos';
    default: return '';
  }
};