import { getCollection } from '@/api/getImages';
import { CategoryImages } from '@/sections/CategoryImages';

export default async function Collection({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const textSlug = decodeURIComponent(slug);
  const collection = await getCollection(slug, 1);
  return (
    <main>
      <div className="container">
        <h1>{textSlug}</h1>
      </div>

      <CategoryImages images={collection} slug={textSlug} />
    </main>
  );
}
