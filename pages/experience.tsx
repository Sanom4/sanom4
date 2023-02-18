import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navmain } from 'components/blocks/navbar';
import ListColumn from 'components/reuseable/ListColumn';
import PageProgress from 'components/common/PageProgress';
import { Contact } from 'components/blocks/contact';
// -------- data -------- //
import data from 'data/experience';

const Experience: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navmain
          social
        />
      </header>

      <main className="content-wrapper">
        {/* ========== page section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
            <div className="row">
              <div className="col-md-10 col-xl-8 mx-auto">
                <div className="post-header">
                  <h1 className="display-1 mb-5">Experience</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== job description section ========== */}
        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="blog single mt-n17">
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <h2 className="h1 mb-3">Summary</h2>
                      <p>
                        Experienced and professional IT Manager with over 12+ years of valuable experience in monitoring project performance to ensure company success. Familiar and adept in working with engineering, industrial engineering, change management, and business transformation systems. Reputation for continually achieving on time and under-budget performance goals. Accustomed to handling IT support, managing IT projects, and supporting various engineering departments with IT tools and applications. Bringing forth a motivated attitude and the ability to establish strong and productive relationships with other company members. 
                      </p>

                      <h3 className="h2 mb-3 mt-9">Employment History</h3>
                      <p>
                         <h2 className="h4 mb-3 mt-9">Director of IT and Technical Development at PH International, Vermont, USA</h2>
                         <i>AUGUST 2021 — PRESENT</i><br/>
                         <br></br>
                         <ListColumn rowClass="gx-xl-8" list={data.phtasks} />
                        </p>

                        <p>
                        <h2 className="h4 mb-3 mt-9">IT Manager at PH International - Georgia, Tbilisi, Georgia</h2>
                         <i>OCTOBER 2012 — AUGUST 2021</i><br/>
                         <br></br>
                         <ListColumn rowClass="gx-xl-8" list={data.phtasks2} />
                        </p>


                        <p>
                        <h2 className="h4 mb-3 mt-9">Back-end Developer at YappeCOM, Tbilisi, Georgia</h2>
                         <i>JULY 2011 — OCTOBER 2012</i><br/>
                         <br></br>
                         <ListColumn rowClass="gx-xl-8" list={data.yappe} />
                         </p>

                        <p>
                        <h2 className="h4 mb-3 mt-9">Full Stack Developer at Vizitka.GE, Tbilisi, Georgia</h2>
                         <i>OCTOBER 2012 — AUGUST 2021</i><br/>
                         <br></br>
                         <ListColumn rowClass="gx-xl-8" list={data.vizitka} />
                         </p>

                        <p>
                        <h2 className="h4 mb-3 mt-9">IT Manager at Geo-Coop, Tbilisi, Georgia</h2>
                         <i>MARCH 2010 — DECEMBER 2010</i><br/>
                         <br></br>
                         <ListColumn rowClass="gx-xl-8" list={data.geocoop} />
                         </p>

                        <p>
                        <h2 className="h4 mb-3 mt-9">Full stack Developer at Cerodena - Toy Store, Tbilisi, Georgia</h2>
                         <i>FEBRUARY 2009 — AUGUST 2010</i><br/>
                         <br></br>
                         <ListColumn rowClass="gx-xl-8" list={data.cerodena} />
                         </p>




                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    <Contact />
      </main>
    </Fragment>
  );
};

export default Experience;
