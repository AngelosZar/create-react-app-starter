import imgOnQuoteSection from '../media/images/growtika-mlpsHpUUCHY-unsplash.jpg';
export function QuoteSection() {
  return (
    <div className="text-center py-20">
      <blockquote className="italic text-gray-800 border-l-4 border-blue-3 pl-4 my-6 max-w-2xl mx-auto">
        Transform your lifestyle with our curated collection. From
        state-of-the-art electronics that power your day to designer shoes that
        elevate your style, luxurious perfumes that capture unforgettable
        moments, and advanced skincare that reveals your natural radiance.
        Everything you desire, all in one destination.
      </blockquote>
      <img src={imgOnQuoteSection} alt="" className="max-w-2xl mx-auto" />
    </div>
  );
}
