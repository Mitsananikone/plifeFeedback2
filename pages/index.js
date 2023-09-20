import LandingPage from '@/pages/home/landingpage'
import LandingPopup from '@/components/home/landing/landingPopup';


export default function Home() {
  return (
    <>
      <LandingPopup/>
      <div className="full-flex-centered">
        <LandingPage />

    
      </div>
    </>
  );
}
