import { useBookmarksContext } from '../lib/hooks';
import JobListItem from './JobListItem';

export default function BookmarksPopover() {
  const { bookmarkedIds } = useBookmarksContext();

  return (
    <div className='bookmarks-popover'>
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
}
