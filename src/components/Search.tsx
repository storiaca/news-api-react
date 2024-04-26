import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchTermAction } from '../store/newsSlice';
import Button from './Button';

function Search() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const dispatch = useDispatch();

  function handleSearchTerm(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
    dispatch(searchTermAction(searchTerm));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSearchTerm('');
  }

  return (
    <div className="order-3 mb-3 bg-text-stone-800 md:order-2 md:mb-0">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-2">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            className="input-search"
            type="text"
            placeholder="Search Articles"
            id="search"
            name="search"
            value={searchTerm}
            onChange={handleSearchTerm}
          />
          <Button type="submit">Search</Button>
        </div>
      </form>
    </div>
  );
}

export default Search;
