import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navmain } from 'components/blocks/navbar';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import PageProgress from 'components/common/PageProgress';
import ContactForm from 'components/common/ContactForm';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
const breadcrumb = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Contact', url: '#' }
];

const Contact: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navmain social
          logoAlt="defaultnew-white"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark"
        />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section
          className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white"
          style={{ backgroundImage: 'url(/img/photos/bg3.jpg)' }}
        >
          <div className="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h1 className="display-1 mb-3 text-white">Get in Touch</h1>
                <Breadcrumb className="text-white" data={breadcrumb} />
              </div>
            </div>
          </div>
        </section>

        <div className="wrapper bg-light angled upper-end">
          <div className="container pb-11">
            {/* ========== contact info section ========== */}
            <div className="row mb-14 mb-md-16">
              <div className="col-xl-10 mx-auto mt-n19">
                <div className="card">
                  <div className="row gx-0">
                    <div className="col-lg-6 align-self-stretch">
                      <div className="map map-full rounded-top rounded-lg-start">
                        <iframe
                          allowFullScreen
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24237.209155171!2d34.76396094178075!3d32.06703038584983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1676719335006!5m2!1sen!2sil"
                          style={{ width: '100%', height: '100%', border: 0 }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="p-10 p-md-11 p-lg-14">
                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-location-pin-alt" />
                            </div>
                          </div>
                          <div className="align-self-start justify-content-start">
                            <h5 className="mb-1">Address</h5>
                            <address>
                              Findme At, <br className="d-none d-md-block" />
                              Tel Aviv-Yafo, Israel
                            </address>
                          </div>
                        </div>

                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-phone-volume" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1">Phone</h5>
                            <p>
                              +972 (53) 301 64 0F
                            </p>
                          </div>
                        </div>

                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-envelope" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1">E-mail</h5>
                            <p className="mb-0">
                              <a href="mailto:alexander@yes-i-have-this-long-email.com" className="link-body">
                                alexander@yes-i-have-this-long-email.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== contact form section ========== */}
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <h2 className="display-4 mb-3 text-center">Drop Me a Line</h2>
                <p className="lead text-center mb-10">
                  Reach out to me from our contact form and I will get back to you shortly.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>

    </Fragment>
  );
};

export default Contact;
