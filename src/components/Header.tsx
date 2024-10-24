import BookmarksButton from './BookmarksButton';
import Logo from './Logo';

export default function Header() {
  return (
    <header className='header'>
      <HeaderTop>
        <Logo />
        <BookmarksButton />
      </HeaderTop>
    </header>
  );
}

export function HeaderTop({ children }: { children: React.ReactNode }) {
  return <div className='header__top'>{children}</div>;
}
