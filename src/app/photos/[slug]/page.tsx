import { getImage } from '@/api/getImages';
import { notFound } from 'next/navigation';

import { ImageDetails } from '@/sections/ImageDetails';

export default async function ImagePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const image = await getImage(slug);

  if (!image) {
    notFound();
  }

  return <ImageDetails image={image} />;
}
