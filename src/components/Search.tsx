import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchTermAction } from '../store/newsSlice';
import Button from './Button';

function Search() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const dispatch = useDispatch();

  function handleSearchTerm(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setSearchTerm(e.target.value);
    dispatch(searchTermAction(searchTerm));
  }

  return (
    <div className="bg-text-stone-800">
      <form>
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
          <Button type="button">Search</Button>
        </div>
      </form>
    </div>
  );
}

export default Search;
