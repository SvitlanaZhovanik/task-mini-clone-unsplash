'use client';

import { useEffect, useState } from 'react';
import { getCollection } from '@/api/getImages';
import { ImagesList } from '@/components/ImagesList';
import { imagesApi } from '@/types/api.types';
import { ToggleButton } from '@/components/toggleButton';
import data from '@/data/common.json';

interface CategoryImagesProps {
  images: imagesApi[];
  slug: string;
}

export const CategoryImages = ({ images, slug }: CategoryImagesProps) => {
  const [imagesNew, setImagesNew] = useState(images);
  const [page, setPage] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedSlug = sessionStorage.getItem('slug');
    const parsedSlug = storedSlug ? JSON.parse(storedSlug) : null;
    if (parsedSlug && slug !== parsedSlug) {
      sessionStorage.removeItem('imagesCategory');
      sessionStorage.removeItem('pageCategory');
      sessionStorage.removeItem('slug');
    }
    const storedImages = sessionStorage.getItem('imagesCategory');
    const storedPage = sessionStorage.getItem('pageCategory');

    if (storedImages) setImagesNew(JSON.parse(storedImages));
    if (storedPage) setPage(JSON.parse(storedPage));
  }, [slug]);

  useEffect(() => {
    if (isMounted) {
      sessionStorage.setItem('imagesCategory', JSON.stringify(imagesNew));
      sessionStorage.setItem('pageCategory', JSON.stringify(page));
      sessionStorage.setItem('slug', JSON.stringify(slug));
    }
  }, [imagesNew, page, isMounted, slug]);

  const getMoreImages = async () => {
    const data = await getCollection(slug, page + 1);
    setImagesNew([...imagesNew, ...data]);
    setPage(page + 1);
  };

  const onToggleChange = () => {
    setToggle(!toggle);
  };
  return (
    <section className="section">
      <div className="container">
        <h1>{slug}</h1>
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
