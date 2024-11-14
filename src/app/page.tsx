import { getImages } from '@/api/getImages';
import { Images } from '@/sections/Images/Images';
import { Header } from '@/sections/Header';

export default async function Home() {
  const images = await getImages({ page: 1 });
  return (
    <>
      <Header>
        <h1>Images</h1>
      </Header>
      <main>
        <Images images={images} />
      </main>
    </>
  );
}
