'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import data from '@/data/common.json';

export const GoBackLink = () => {
  const [backHref, setBackHref] = useState<string | null>('/');

  useEffect(() => {
    if (window.history.length > 1) {
      setBackHref(null);
    }
  }, []);

  const handleBack = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.history.back();
  };

  return backHref ? (
    <Link href={backHref} className="linkStyle">
      {data.linkTextGoBack}
    </Link>
  ) : (
    <a href="#" onClick={handleBack} className="linkStyle">
      {data.linkTextGoBack}
    </a>
  );
};
