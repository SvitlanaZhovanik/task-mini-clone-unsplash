import Link from 'next/link';
import styles from './Header.module.css';
import data from '@/data/common.json';

export const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <Link href="/#button">{data.headerLinkName}</Link>
    </div>
  </header>
);
