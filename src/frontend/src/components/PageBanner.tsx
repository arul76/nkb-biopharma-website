interface PageBannerProps {
  title: string;
  subtitle?: string;
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="banner-gradient py-16 px-4 text-center text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
          {title}
        </h1>
        {subtitle && <p className="text-white/80 text-lg">{subtitle}</p>}
        <div className="mt-4 flex justify-center">
          <div className="w-16 h-1 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}
