import { FC } from "react";
import { MdSearch, MdClear } from "react-icons/md";
import { SearchInputProps } from "../types/general.type";

export const SearchInput: FC<SearchInputProps> = (props) => {
  const { search, handleSearch, moviesResult, clearInput } = props;

  return (
    <div className="search-form">
      <input
        className="input-field"
        type="text"
        placeholder="Search for a movie..."
        value={search}
        onChange={handleSearch}
      />
      {moviesResult.length === 0 ? (
        <MdSearch size={25} />
      ) : (
        <MdClear size={25} onClick={clearInput} />
      )}
    </div>
  );
};
