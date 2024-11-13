import { useBookmarksContext } from '../lib/hooks';
import JobListItem from './JobListItem';

export default function BookmarksPopover() {
  const { bookmarkedIds } = useBookmarksContext();

  return (
    <div className='bookmarks-popover'>
      {bookmarkedIds.map((jobItem) => (
        <div>{jobItem}</div>
        // <JobListItem
        //   key={jobItem?.id}
        //   jobItem={jobItem}
        //   handleActiveClick={handleActiveClick}
        //   activeId={activeId}
        // />
      ))}
    </div>
  );
}
