import renderer, { act } from 'react-test-renderer';

import Favourite from './index';

describe('Components - Favourite', () => {
  test('renders when both liked or not liked', () => {
    let root: any;
    act(() => {
      root = renderer.create(<Favourite onClick={() => {}} liked={false} />);
    });

    expect(root.toJSON()).toMatchSnapshot();

    // Update likced flag
    act(() => {
      root.update(<Favourite onClick={() => {}} liked />);
    });

    expect(root.toJSON()).toMatchSnapshot();
  });
});
