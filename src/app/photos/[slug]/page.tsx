import Image from 'next/image';
import Link from 'next/link';
import { getImage } from '@/api/getImages';
import styles from './ImagePage.module.css';
import data from '@/data/common.json';

export default async function ImagePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const image = await getImage(slug);
  const { imageData } = data;
  return (
    <section>
      <div className="container">
        <h1 className={styles.title}>{image.alt_description}</h1>
        <div className={styles.imagePosition}>
          <Image
            src={image.urls.regular}
            alt={image.alt_description}
            quality={70}
            width={800}
            height={600}
            placeholder="blur"
            blurDataURL={image.blur_hash}
            priority
            className={`image ${styles.image}`}
          />

          <div>
            <div className={styles.infoWrapper}>
              <p className={styles.info}>
                <span>{imageData.authorText}</span>
                {image.user.name}
              </p>
              <p className={styles.info}>
                <span>{imageData.likeText}</span>
                {image.likes}
              </p>
              <p className={styles.info}>
                <span>{imageData.viewText}</span>
                {image.views}
              </p>
              <p className={styles.info}>
                <span>{imageData.downloadsText}</span>
                {image.downloads}
              </p>
            </div>
            <ul className={styles.tagList}>
              {image.tags.map(
                (tag: { type: string; title: string; source?: object[] }) => (
                  <li key={tag.title} className={styles.tagItem}>
                    <Link href={`/collection/${tag.title}`}>{tag.title}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
