import { LikedIcon, LikeIcon } from './styled';

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
