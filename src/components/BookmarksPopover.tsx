import { forwardRef } from 'react';
import { useBookmarksContext, useJobItemsContext } from '../lib/hooks';
import JobListItem from './JobListItem';

const BookmarksPopover = forwardRef<HTMLDivElement>((_, ref) => {
  const { bookmarkedIds } = useBookmarksContext();
  const { setSelectedJobItem } = useJobItemsContext();

  return (
    <div className='bookmarks-popover' ref={ref}>
      <ul>
        {Object.values(bookmarkedIds).map((jobItem) => {
          return (
            <JobListItem
              key={jobItem?.id}
              jobItem={jobItem}
              handleActiveClick={(item) => {
                setSelectedJobItem(item);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
});

export default BookmarksPopover;
