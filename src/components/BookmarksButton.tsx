import { TriangleDownIcon } from '@radix-ui/react-icons';
import React, { useRef, useState } from 'react';
import BookmarksPopover from './BookmarksPopover';
import {
  useActiveIdContext,
  useBookmarksContext,
  useOnClickOutside,
} from '../lib/hooks';

const BookmarksButton = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useOnClickOutside([buttonRef, popoverRef], () => setIsOpen(false));
  const { bookmarkedIds } = useBookmarksContext();
  const { setSelectedJobItem } = useActiveIdContext();
  return (
    <section>
      <button
        ref={buttonRef}
        className='bookmarks-btn'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Bookmarks <TriangleDownIcon />
      </button>
      {isOpen && (
        <BookmarksPopover
          bookmarkedIds={bookmarkedIds}
          setSelectedJobItem={setSelectedJobItem}
          ref={popoverRef}
        />
      )}
    </section>
  );
});

export default BookmarksButton;
