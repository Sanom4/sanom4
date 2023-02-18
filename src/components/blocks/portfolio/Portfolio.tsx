import { FC } from 'react';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';

const Portfolio9: FC = () => {
  return (
    <section className="wrapper bg-light wrapper-border">
      <div className="container py-14 pt-md-18 pb-md-16">
        <div className="row align-items-center mb-10">
          <div className="col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20">
            <h2 className="display-4 mb-3">Latest Projects</h2>
            <p className="lead fs-20 mb-0">Check out some of my latest projects with creative ideas.</p>
          </div>

          <div className="col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0">
            <NextLink title="See All Projects" href="/projects" className="btn btn-outline-primary rounded-pill mb-0" />
          </div>
        </div>

        <div className="card bg-soft-violet mb-10">
          <div className="card-body p-12 pb-0">
            <div className="row">
              <div className="col-lg-4 pb-12 align-self-center">
                <div className="post-category mb-3 text-violet">Working Experience</div>
                <h3 className="h1 post-title mb-3">PH International</h3>
                <p>
                   10 years of IT professional responsible for IT infrastructure and website project management, including business requirements, technical specifications, data access tools, and security measures. Collaborated with Ministry of Education on successful initiative.
                </p>
                <NextLink title="See Info" href="/projects/phinternational" className="more hover link-violet" />
              </div>

              <div className="col-lg-7 offset-lg-1 align-self-end">
                <figure>
                  <img className="img-fluid" src="/img/f1.png" srcSet="/img/f1@2x.png 2x" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-soft-blue mb-10">
          <div className="card-body p-12">
            <div className="row gy-10 align-items-center">
              <div className="col-lg-4 order-lg-2 offset-lg-1">
                <div className="post-category mb-3 text-blue">Working Experience</div>
                <h3 className="h1 post-title mb-3">VIZITKA.GE</h3>
                <p>
                  2 years of experience as a developer in a publishing organization, with a focus on front-end and back-end development. Have created interfaces for advertising materials using PHP, MySQL, and Bootstrap. They have also designed databases for e-commerce projects and have experience in database design and architecture, and have managed SEO and optimized search results, as seen with their ranking for "Savizito Barati" in Georgia.
                </p>
                <NextLink title="See Info" href="/projects/vizitka" className="more hover link-blue" />
              </div>

              <div className="col-lg-7">
                <figure>
                  <img className="img-fluid" src="/img/f2.png" srcSet="/img/f2@2x.png 2x" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div className="row gx-md-8 gx-xl-10">
          <div className="col-lg-6">
            <div className="card bg-soft-leaf mb-10">
              <div className="card-body p-12 pb-0">
                <div className="post-category mb-3 text-leaf">Project</div>
                <h3 className="h1 post-title mb-3">VMomentum.ART</h3>
                <p>
                  Collaborative Photography based platform for public photo sharing, private sharing, and giving access to a photographers to do same within their communities.
                </p>
                <NextLink title="See Info" href="/projects/vmomentum" className="more hover link-leaf mb-8" />
              </div>

              <img className="card-img-bottom" src="/img/f3.png" srcSet="/img/f3@2x.png 2x" alt="" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card bg-soft-pink">
              <div className="card-body p-12 pb-0">
                <div className="post-category mb-3 text-pink">Projects</div>
                <h3 className="h1 post-title mb-3">WEB Frameworks</h3>
                <p>
With a deep understanding of web frameworks and content management systems, you bring expertise to the table in platforms like Laravel, Nette, CodeIgniter, WordPress, React.js, Next.js, and Tailwind, delivering innovative and impactful solutions.                </p>
                <NextLink title="See Info" href="/projects/webframeworks" className="more hover link-pink mb-8" />
              </div>

              <img className="card-img-bottom" src="/img/f4.png" srcSet="/img/f4@2x.png 2x" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio9;
