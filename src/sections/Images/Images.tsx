'use client';

import { useEffect, useState } from 'react';
import { ImagesList } from '@/components/ImagesList';
import { ToggleButton } from '@/components/toggleButton';
import { SearchForm } from '@/components/SearchForm/SearchForm';
import { imagesApi } from '@/types/api.types';
import { getImages, getImagesByQuery } from '@/api/getImages';
import data from '@/data/common.json';
import styles from './Images.module.css';

interface ImagesProps {
  images: imagesApi[];
}

export const Images = ({ images }: ImagesProps) => {
  const [imagesNew, setImagesNew] = useState(images);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<imagesApi[]>([]);
  const [queryPage, setQueryPage] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedImages = sessionStorage.getItem('images');
    const storedPage = sessionStorage.getItem('page');

    if (storedImages) setImagesNew(JSON.parse(storedImages));
    if (storedPage) setPage(JSON.parse(storedPage));
  }, []);

  useEffect(() => {
    if (isMounted) {
      sessionStorage.setItem('images', JSON.stringify(imagesNew));
      sessionStorage.setItem('page', JSON.stringify(page));
    }
  }, [imagesNew, page, isMounted]);

  const getMoreImages = async () => {
    const data = await getImages({ page: page + 1 });
    setImagesNew([...imagesNew, ...data]);
    setPage(page + 1);
  };

  const getMoreImagesByQuery = async () => {
    const data = await getImagesByQuery(query, queryPage);
    setResult([...result, ...data]);
    setQueryPage(queryPage + 1);
  };

  const onToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <section className="section">
      <div className="container">
        <div className={styles.searchWrapper}>
          <SearchForm
            query={query}
            queryPage={queryPage}
            setQuery={setQuery}
            setResult={setResult}
            setQueryPage={setQueryPage}
          />
          <ToggleButton onToggleChange={onToggleChange} />
        </div>

        <ImagesList
          images={result.length > 0 ? result : imagesNew}
          columnCount={toggle}
        />
        <button
          type="button"
          className="buttonStyle"
          onClick={
            result.length > 0
              ? () => getMoreImagesByQuery()
              : () => getMoreImages()
          }
        >
          {data.linkName}
        </button>
      </div>
    </section>
  );
};
