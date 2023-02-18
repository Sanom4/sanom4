import { Fragment } from 'react';
import type { NextPage } from 'next';
import CountUp from 'react-countup';
import Typewriter from 'typewriter-effect';
import { fadeInAnimate, slideInDownAnimate } from 'utils/animation';
import { Navmain } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
// -------- custom component -------- //
import { Hero } from 'components/blocks/hero';
import { Contact } from 'components/blocks/contact';
import { Services } from 'components/blocks/services';
import { Portfolio } from 'components/blocks/portfolio';

const Home: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-gray">
        <Navmain social fancy navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light" />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero />

        {/* ========== what i do section ========== */}
        <Services />

        {/* ========== latest projects section ========== */}
        <Portfolio />

        {/* ========== contact and footer section ========== */}
        <Contact />
      </main>
    </Fragment>
  );
};

export default Home;
