import styles from './Header.module.css';
import React from 'react';

export const Header = ({
  children,
  className = '',
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => (
  <header className={`${styles.header} ${className}`}>
    <div className="container">{children}</div>
  </header>
);
