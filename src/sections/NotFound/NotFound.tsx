import Image from 'next/image';
import data from '@/data/common.json';
import style from './NotFound.module.css';

export const NotFound = () => {
  const {
    componentNotFoundTitle,
    componentNotFoundDescription,
    componentNotFoundImgAlt,
  } = data;
  return (
    <section className="section">
      <div className="container">
        <h2 className={style.title}>{componentNotFoundTitle}</h2>
        <p className={style.description}>{componentNotFoundDescription}</p>
        <Image
          src="/not-found.png"
          alt={componentNotFoundImgAlt}
          width={473}
          height={517}
          priority
          className={style.image}
        />
      </div>
    </section>
  );
};
