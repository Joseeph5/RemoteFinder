import { ReactNode, createContext } from 'react';
import { useLocalStorage } from '../lib/hooks';
import {
  BookmarksContextProps,
  JobItem,
  LocalStorageItems,
} from '../lib/types';

export const BookmarksContext = createContext<BookmarksContextProps | null>(
  null
);

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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
