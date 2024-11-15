import { getImagesByQuery } from '@/api/getImages';
import { CategoryImages } from '@/sections/CategoryImages';
import { notFound } from 'next/navigation';

export default async function Collection({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const textSlug = decodeURIComponent(slug);
  const collection = await getImagesByQuery(slug, 1);

  if (collection.length === 0) {
    notFound();
  }
  return (
    <main>
      <CategoryImages images={collection} slug={textSlug} />
    </main>
  );
}
