import { NavLink, Link } from 'react-router-dom';
import Search from './Search';
// icons
import { FaRegNewspaper } from 'react-icons/fa6';

function Header() {
  let links: LinkType[] = [{ id: 0, path: '/', label: 'Home' }];
  return (
    <header className="fixed w-full z-10 py-2 px-4 md:px-0 border-b border-b-stone-800 bg-stone-800">
      <div className="container mx-auto flex flex-col gap-2 items-center justify-between h-auto md:flex-row md:h-16 md:gap-0">
        <h1 className="text-2xl text-white order-1">
          <Link to="/" className="flex items-center gap-1">
            <FaRegNewspaper size={28} color="white" />
            News API
          </Link>
        </h1>
        <Search />
        <nav className="navbar order-2 md:order-3">
          <ul className="flex items-center gap-4">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <NavLink to={link.path}>{link.label}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
