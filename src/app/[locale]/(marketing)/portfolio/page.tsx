import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

type IPortfolioProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IPortfolioProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Portfolio',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Portfolio(props: IPortfolioProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Portfolio',
  });

  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold">{t('meta_title')}</h1>
      <p className="mb-6 text-lg">{t('presentation')}</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, elt) => (
          <Link
            key={elt}
            href={`/portfolio/${elt}`}
            className="rounded border border-gray-200 p-4 hover:bg-gray-50"
          >
            {t('portfolio_name', { name: elt })}
          </Link>
        ))}
      </div>
    </div>
  );
};
