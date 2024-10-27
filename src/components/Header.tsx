import BookmarksButton from './BookmarksButton';
import Logo from './Logo';
import SearchForm from './SearchForm';

type HeaderProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

export default function Header({ searchText, setSearchText }: HeaderProps) {
  return (
    <header className='header'>
      <HeaderTop>
        <Logo />
        <BookmarksButton />
      </HeaderTop>
      <SearchForm searchText={searchText} setSearchText={setSearchText} />
    </header>
  );
}

export function HeaderTop({ children }: { children: React.ReactNode }) {
  return <div className='header__top'>{children}</div>;
}
