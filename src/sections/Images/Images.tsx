'use client';

import { useEffect, useState } from 'react';
import { getImages } from '@/api/getImages';
import { ImagesList } from '@/components/ImagesList';
import { imagesApi } from '@/types/api.types';
import styles from './Images.module.css';
import data from '@/data/common.json';
import { ToggleButton } from '@/components/toggleButton';

interface ImagesProps {
  images: imagesApi[];
}

export const Images = ({ images }: ImagesProps) => {
  // Initialize state with props to avoid mismatch on hydration
  const [imagesNew, setImagesNew] = useState(images);
  const [page, setPage] = useState(1);
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

  const onToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <section className={styles.imagesSection}>
      <div className="container">
        <ToggleButton onToggleChange={onToggleChange} />
        <ImagesList images={imagesNew} columnCount={toggle} />
        <button
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
