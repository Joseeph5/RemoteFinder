import { ReactNode, createContext } from 'react';
import { useLocalStorage } from '../lib/hooks';
import { JobItem } from '../lib/types';

type BookmarksContext = {
  bookmarkedIds: LocalStorageItems;
  handleToggleBookmark: (item: JobItem) => void;
};

type LocalStorageItems = {
  [key: number]: JobItem;
};

export const BookmarksContext = createContext<BookmarksContext | null>(null);

export default function BookmarksContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<LocalStorageItems>(
    'bookmarkedIds',
    {} as LocalStorageItems
  );

  const handleToggleBookmark = (item: JobItem) => {
    setBookmarkedIds((prev) => {
      if (item.id in prev) {
        const { [+item.id]: _, ...rest } = prev;
        return rest;
      } else {
        return {
          ...prev,
          [item.id]: item,
        };
      }
    });
  };

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkedIds,
        handleToggleBookmark,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}
