import { NavLink, Link } from 'react-router-dom';

// icons
import { FaRegNewspaper } from 'react-icons/fa6';

function Header() {
  let links: LinkType[] = [
    { id: 0, path: '/', label: 'Home' },
    { id: 1, path: '/news', label: 'News' },
  ];
  return (
    <header className="py-2 px-4 md:px-0">
      <div className="container mx-auto flex items-center justify-between h-16">
        <h1 className="text-2xl">
          <Link to="/" className="flex items-center gap-1">
            <FaRegNewspaper size={28} />
            News API
          </Link>
        </h1>
        <nav className="navbar">
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
