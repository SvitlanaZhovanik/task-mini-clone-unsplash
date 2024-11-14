import Link from 'next/link';
import data from '@/data/common.json';
import { Header } from '@/sections/Header';

export default function CollectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header>
        <Link href="/" className="linkStyle">
          {data.notFoundLinkName}
        </Link>
      </Header>
      <main>{children}</main>
    </>
  );
}
