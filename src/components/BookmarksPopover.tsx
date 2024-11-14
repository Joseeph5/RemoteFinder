import { forwardRef } from 'react';
import { useBookmarksContext } from '../lib/hooks';
import JobListItem from './JobListItem';

const BookmarksPopover = forwardRef<HTMLDivElement>((_, ref) => {
  const { bookmarkedIds } = useBookmarksContext();

  return (
    <div className='bookmarks-popover' ref={ref}>
      <ul>
        {Object.values(bookmarkedIds).map((jobItem) => {
          return (
            <JobListItem
              key={jobItem?.id}
              jobItem={jobItem}
              handleActiveClick={() => {
                window.open(jobItem.url, '_blank');
              }}
            />
          );
        })}
      </ul>
    </div>
  );
});

export default BookmarksPopover;
