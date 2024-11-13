import { getImages } from '@/api/getImages';
import { Images } from '@/sections/Images/Images';

export default async function Home() {
  const images = await getImages({ page: 1 });
  return (
    <>
      <Images images={images} />
    </>
  );
}
