'use client';

import Image from 'next/image';
import Masonry from 'react-masonry-css';
import styles from './ImagesList.module.css';
import { imagesApi } from '@/types/api.types';
import Link from 'next/link';

export const ImagesList = ({
  images,
  columnCount,
}: Readonly<{ images: imagesApi[]; columnCount?: boolean }>) => {
  const breakpointColumnsObj = {
    default: columnCount ? 3 : 5,
    1280: 3,
    1024: 2,
    767: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((photo, index) => (
        <div key={`image-${photo.id}-${index}`} className={styles.imageWrapper}>
          <Link href={`/photos/${photo.slug}`}>
            <div className={styles.userWrapper}>
              <Image
                src={photo.user.profile_image.small}
                alt={photo.user.name}
                width={30}
                height={30}
                className={styles.avatar}
                unoptimized
              />

              <p>{photo.user.name}</p>
            </div>
            <Image
              src={photo.urls.regular}
              alt={photo.alt_description}
              width={photo.width}
              height={photo.height}
              className="image"
              unoptimized
            />
          </Link>
        </div>
      ))}
    </Masonry>
  );
};
