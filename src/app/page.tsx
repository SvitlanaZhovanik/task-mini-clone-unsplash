import { getImages } from '@/api/getImages';
import { Images } from '@/sections/Images/Images';
import { Header } from '@/sections/Header';
import { NotFound } from '@/sections/NotFound';

export default async function Home() {
  const images = await getImages({ page: 1 });

  return (
    <>
      <Header>
        <h1>Images</h1>
      </Header>
      <main>{images ? <Images images={images} /> : <NotFound />}</main>
    </>
  );
}
