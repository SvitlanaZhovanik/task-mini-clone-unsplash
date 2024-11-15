import { getImagesByQuery } from '@/api/getImages';
import { imagesApi } from '@/types/api.types';
import styles from './SearchForm.module.css';
import data from '@/data/common.json';

interface SearchInputProps {
  queryPage: number;
  query: string;
  setQueryPage: React.Dispatch<React.SetStateAction<number>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<imagesApi[]>>;
}

export const SearchForm = ({
  queryPage,
  query,
  setQueryPage,
  setQuery,
  setResult,
}: SearchInputProps) => {
  const { buttonSearchText } = data;
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await getImagesByQuery(query, queryPage);
    setResult(result);
    setQueryPage(queryPage + 1);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className={styles.searchInput}
        placeholder="Search for photo"
      />
      <button type="submit" className="linkStyle">
        {buttonSearchText}
      </button>
    </form>
  );
};
