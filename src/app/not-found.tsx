import Link from 'next/link';
import data from '@/data/common.json';

export default function NotFound() {
  return (
    <div className="container not_found_container">
      <h1 className="not_found_title">{data.notFoundTitle}</h1>
      <Link href="/" className="not_found_link">
        {data.notFoundLinkName}
      </Link>
    </div>
  );
}
