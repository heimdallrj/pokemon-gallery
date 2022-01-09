export const unique = (arr: any[], key: string) => {
  return arr.reduce((acc: any, current: any) => {
    const x = acc.find((item: any) => item[key] === current[key]);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
};
