'use client';

import { useEffect, useState } from 'react';
import { getImages } from '@/api/getImages';
import { ImagesList } from '@/components/ImagesList';
import { imagesApi } from '@/types/api.types';
import styles from './Images.module.css';
import data from '@/data/common.json';

interface ImagesProps {
  images: imagesApi[];
}

export const Images = ({ images }: ImagesProps) => {
  const [imagesNew, setImagesNew] = useState(
    JSON.parse(sessionStorage?.getItem('images') || '') || images
  );
  const [page, setPage] = useState(
    JSON.parse(sessionStorage?.getItem('page') || '') || 1
  );

  useEffect(() => {
    sessionStorage.setItem('images', JSON.stringify(imagesNew));
    sessionStorage.setItem('page', JSON.stringify(page));
  }, [imagesNew, page]);

  const getMoreImages = async () => {
    const data = await getImages({ page: page + 1 });
    setImagesNew([...imagesNew, ...data]);
    setPage(page + 1);
  };

  return (
    <section className={styles.imagesSection}>
      <div className="container">
        <ImagesList images={imagesNew} columnCount={5} />
        <button
          id="button"
          type="button"
          className="buttonStyle"
          onClick={() => getMoreImages()}
        >
          {data.linkName}
        </button>
      </div>
    </section>
  );
};
