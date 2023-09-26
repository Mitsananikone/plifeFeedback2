import LandingPage from '@/pages/home/landingpage'
import LandingPopup from '@/components/home/landingPopup/landingPopup';

import FAQPage from '@/pages/faq/faqPage';
import PricingPage from '@/pages/pricing/pricingPage';

export default function Home() {
  return (
    <>
      {/* <LandingPopup /> */}
      <div className="screenSize">
        <div className="full-flex-centered">

          {/* <LandingPage /> */}
<PricingPage/>
        {/* <FAQPage/> */}
        </div>
      </div>

    </>
  );
}
