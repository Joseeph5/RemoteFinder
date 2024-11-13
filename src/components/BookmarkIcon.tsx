import { BookmarkFilledIcon } from '@radix-ui/react-icons';
import { useBookmarksContext } from '../lib/hooks';
import { JobItem } from '../lib/types';

type BookmarkIconProps = {
  jobItem: JobItem;
};

export default function BookmarkIcon({ jobItem }: BookmarkIconProps) {
  const { bookmarkedIds, handleToggleBookmark } = useBookmarksContext();

  return (
    <button
      className='bookmark-btn'
      onClick={(e) => {
        handleToggleBookmark(jobItem);
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <BookmarkFilledIcon
        className={`
          ${bookmarkedIds[+jobItem.id] ? 'filled' : ''}
        `}
      />
    </button>
  );
}
