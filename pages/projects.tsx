import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navmain } from 'components/blocks/navbar';
import { Contact } from 'components/blocks/contact';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
// -------- custom hook -------- //
import useIsotope from 'hooks/useIsotope';
// -------- data -------- //
const projectList = [
  {
    id: 1,
    link: '#',
    color: 'purple',
    type: 'wexperience',
    category: 'WORKING EXPERIENCE',
    title: 'PH International',
    image: { width: 1200, height: 800, url: '/img/phc.png' }
  },
  {
    id: 2,
    link: '#',
    color: 'leaf',
    type: 'projects',
    category: 'PROJECTS',
    title: 'Vizitka.GE',
    image: { width: 1300, height: 1435, url: '/img/vizitka.png' }
  },
  {
    id: 3,
    link: '#',
    color: 'violet',
    type: 'wexperience',
    category: 'WORKING EXPERIENCE',
    title: 'Yappe.COM',
    image: { width: 1200, height: 923, url: '' }
  },
  {
    id: 4,
    link: '#',
    color: 'yellow',
    type: 'wexperience',
    category: 'WORKING EXPERIENCE',
    title: 'Cerodena.GE',
    image: { width: 1200, height: 919, url: '/img/cerodena.jpg' }
  },
  {
    id: 5,
    link: '#',
    color: 'orange',
    type: 'projects',
    category: 'PROJECTS',
    title: 'Wemomentum.ART',
    image: { width: 1300, height: 1365, url: '/img/momentum2.png' }
  },
  {
    id: 9,
    link: '#',
    color: 'pink',
    type: 'misc',
    category: 'PROJECTS',
    title: 'Transparency Georgia',
    image: { width: 1200, height: 800, url: '' }
  }, 
      {
    id: 11,
    link: '#',
    color: 'pink',
    type: 'projects',
    category: 'PROJECTS',
    title: 'Civics.GE',
    image: { width: 1200, height: 800, url: '/img/civics2.png' }
  },
];

const filterItems = [
  { id: 1, title: 'All', value: '*' },
  { id: 2, title: 'Projects', value: '.projects' },
  { id: 3, title: 'Working Experience', value: '.wexperience' },
  { id: 4, title: 'Ideas', value: '.ideas' },
  { id: 5, title: 'Misc', value: '.misc' }
];

const ProjectsThree: NextPage = () => {
  const { handleFilterKeyChange, filterKey } = useIsotope();

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navmain
          social
        />
      </header>

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="wrapper bg-light">
          <div className="container pt-10 pt-md-14">
            <div className="row">
              <div className="col-lg-10 col-xxl-8">
                <h1 className="display-1 mb-0">Check out some of my awesome projects with creative ideas.</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="grid grid-view projects-masonry">
              {/* ========== filter section ========== */}
              <div className="isotope-filter filter mb-10">
                <p>Filter:</p>
                <ul>
                  {filterItems.map(({ id, title, value }) => (
                    <li key={id}>
                      <a
                        onClick={handleFilterKeyChange(value)}
                        className={`filter-item ${value === filterKey ? 'active' : ''}`}
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ========== projects section ========== */}
              <div className="row gx-md-10 gy-10 gy-md-13 isotope">
                {projectList.map(({ id, image, title, category, color, link, type }) => (
                  <div className={`project item col-md-6 ${type}`} key={id}>
                    <Link href={link}>
                      <a>
                        <figure className="lift rounded mb-6">
                          <Image
                            alt={title}
                            src={image.url}
                            width={image.width}
                            layout="responsive"
                            height={image.height}
                          />
                        </figure>
                      </a>
                    </Link>

                    <div className="project-details d-flex justify-content-center flex-column">
                      <div className="post-header">
                        <div className={`post-category text-line mb-3 text-${color}`}>{category}</div>
                        <h3 className="post-title">{title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    <Contact />
      </main>
    </Fragment>
  );
};

export default ProjectsThree;
