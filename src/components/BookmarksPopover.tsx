import { forwardRef } from 'react';
import JobListItem from './JobListItem';
import { createPortal } from 'react-dom';
import { JobItem, LocalStorageItems } from '../lib/types';

type JobListProps = {
  setSelectedJobItem: (jobItem: JobItem) => void;
  bookmarkedIds: LocalStorageItems;
};

const BookmarksPopover = forwardRef<HTMLDivElement, JobListProps>(
  ({ bookmarkedIds, setSelectedJobItem }: JobListProps, ref) => {
    return createPortal(
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
      </div>,
      document.body
    );
  }
);

export default BookmarksPopover;
