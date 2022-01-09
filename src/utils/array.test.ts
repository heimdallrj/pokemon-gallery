import { unique } from './array';

const duplicateArr = [
  { name: 'a', url: 'u-r-l1' },
  { name: 'b', url: 'u-r-l2' },
  { name: 'a', url: 'u-r-l3' },
];

describe('Utils', () => {
  test('remove duplicates in object arrays by key', () => {
    const newArr = unique(duplicateArr, 'name');

    expect(newArr.length).toBe(2);
  });
});
