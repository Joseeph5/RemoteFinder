import { BookmarkFilledIcon } from '@radix-ui/react-icons';
import { useContext } from 'react';
import { BookmarksContext } from '../contexts/BookmarksContextProvider';

type BookmarkIconProps = {
  id: number;
};

export default function BookmarkIcon({ id }: BookmarkIconProps) {
  const context = useContext(BookmarksContext);
  const handleToggleBookmark = context?.handleToggleBookmark;
  const bookmarkedIds = context?.bookmarkedIds;

  return (
    <button
      className='bookmark-btn'
      onClick={(e) => {
        handleToggleBookmark?.(id);
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <BookmarkFilledIcon
        className={`
          ${bookmarkedIds?.includes(id) ? 'filled' : ''}
        `}
      />
    </button>
  );
}
