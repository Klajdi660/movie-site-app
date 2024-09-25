export interface MovieListResp {
  Response: string;
  Search: any;
  totalResults: string;
}

export interface SearchInputProps {
  search: string;
  handleSearch: (event: any) => void;
  moviesResult: any[];
  clearInput: () => void;
}

export interface MovieResultsProps {
  moviesResult: any[];
}
