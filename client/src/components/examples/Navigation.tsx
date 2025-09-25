import Navigation from '../Navigation';

export default function NavigationExample() {
  const handleSectionClick = (section: string) => {
    console.log(`Navigation clicked: ${section}`);
  };

  return (
    <div className="h-screen bg-background">
      <Navigation 
        activeSection="home" 
        onSectionClick={handleSectionClick}
      />
      <div className="pt-16 p-8">
        <h2 className="text-2xl font-bold text-foreground">Navigation Example</h2>
        <p className="text-muted-foreground mt-2">
          The navigation bar is fixed at the top with theme toggle and responsive design.
        </p>
      </div>
    </div>
  );
}