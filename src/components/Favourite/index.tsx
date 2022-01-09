import styled from 'styled-components';

import LikeIconSource from 'assets/icons/Favourite';
import likedIconSource from 'assets/icons/Favourite/Filled';

export const LikeIcon = styled(LikeIconSource)`
  width: 16px;
  color: red;
  padding: 0 5px;
`;

export const LikedIcon = styled(likedIconSource)`
  width: 16px;
  color: red;
  padding: 0 5px;
`;

type Props = {
  liked?: boolean;
  onClick: () => void;
};

export default function Favourite({ liked, onClick }: Props) {
  return liked ? (
    <LikedIcon onClick={onClick} />
  ) : (
    <LikeIcon onClick={onClick} />
  );
}
