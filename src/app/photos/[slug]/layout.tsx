import { GoBackLink } from '@/components/GoBackLink';
import { Header } from '@/sections/Header';

export default function ImageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header>
        <GoBackLink />
      </Header>
      <main>{children}</main>
    </>
  );
}
