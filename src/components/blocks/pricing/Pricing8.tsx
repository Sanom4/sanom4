import { FC, Fragment, useState } from 'react';
// -------- custom component -------- //
import Switch from 'components/reuseable/Switch';
import { PricingCard1 } from 'components/reuseable/pricing-cards';
// -------- data-------- //
import { pricingList3 } from 'data/pricing';

const Pricing8: FC = () => {
  const [activeYearly, setActiveYearly] = useState(false);

  return (
    <Fragment>
      {/* ========== title section ========== */}
      <div className="row text-center">
        <div className="col-md-11 col-lg-9 col-xl-8 mx-auto">
          <h2 className="fs-16 text-uppercase text-muted mb-3">Our Pricing</h2>
          <h3 className="display-4 mb-10 px-xxl-10">
            We offer great prices, premium products and quality service for your business.
          </h3>
        </div>
      </div>


    </Fragment>
  );
};

export default Pricing8;
