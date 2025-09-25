import Hero from '../Hero';

export default function HeroExample() {
  const handleContactClick = () => {
    console.log("Contact button clicked");
  };

  return (
    <div className="bg-background">
      <Hero onContactClick={handleContactClick} />
    </div>
  );
}