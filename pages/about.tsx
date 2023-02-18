import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navmain } from 'components/blocks/navbar';
import { Process8 } from 'components/blocks/process';
import { Contact } from 'components/blocks/contact';
import Carousel from 'components/reuseable/Carousel';
import ProgressList from 'components/common/ProgressList';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import AccordionList from 'components/common/AccordionList';
// -------- icons component -------- //
import Target from 'icons/lineal/Target';
import BarChart from 'icons/lineal/BarChart';
import Megaphone from 'icons/lineal/Megaphone';
import SettingsThree from 'icons/lineal/SettingsThree';


const About: NextPage = () => {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navmain
        social
        />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-20 pt-md-14 pb-md-23 text-center">
            <div className="row">
              <div className="col-xl-5 mx-auto mb-6">
                <h1 className="display-1 mb-3">About Me</h1>
                <p className="lead mb-0">A skilled developer who transforms complex ideas into polished and functional digital solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== services section ========== */}
        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row text-center mb-12 mb-md-15">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-n18 mt-md-n22">
                <figure>
                  <img
                    alt=""
                    className="w-auto"
                    src="/img/illustrations/i8.png"
                    srcSet="/img/illustrations/i8@2x.png 2x"
                  />
                </figure>
              </div>
            </div>

            <div className="row gx-lg-8 gx-xl-12 gy-6 mb-10 align-items-center">
              <div className="col-lg-6 order-lg-2">
                <ProgressList />
              </div>

              <div className="col-lg-6">
                <h3 className="display-5 mb-5">
                  Hello, and welcome to my website!
                </h3>

                <p>
                  I'm a developer with 2 years of experience working in a publishing organization. During my time there, I focused on front-end and back-end development and gained expertise in creating interfaces for advertising materials such as banners and business cards, using technologies like PHP, MySQL, and Bootstrap. I also have experience designing databases for e-commerce projects and a solid understanding of database design and architecture.
In addition to my full-time role, I have a part-time job and have managed SEO and optimized search results. <br></br> I'm proud to say that one of the keywords I worked on, "Savizito Barati," is still number 1 in search in Georgia.
I'm passionate about using my skills to create innovative solutions and improve user experiences. <br></br> I'm always looking for new challenges and opportunities to grow as a developer.
                </p>
              </div>
            </div>


          </div>
        </section>

        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-16">
            {/* ========== how it work section ========== */}
            <Process8 />

            {/* ========== why choose us section ========== */}
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-7 order-lg-2">
                <figure>
                  <img
                    alt=""
                    className="w-auto"
                    src="/img/illustrations/i2.png"
                    srcSet="/img/illustrations/i2@2x.png 2x"
                  />
                </figure>
              </div>

              <div className="col-lg-5">
                <h2 className="fs-15 text-uppercase text-line text-primary mb-3">Why Choose Me?</h2>
                <h3 className="display-5 mb-7">A few reasons why my valued clients choose me.</h3>
                <AccordionList />
              </div>
            </div>
          </div>
        </section>


    <Contact />
      </main>
    </Fragment>
  );
};

export default About;
