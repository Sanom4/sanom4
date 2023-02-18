import { FC } from 'react';
import Accordion from 'components/reuseable/accordion';
// -------- data -------- //
const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'Expertise',
    body: 'Skills and knowledge necessary to deliver high-quality work that meets clients needs.'
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Communication',
    body: 'Listening to clients needs and concerns, communicate clearly and effectively, and provide regular updates on project progress.'
  },
  {
    no: 'Three',
    expand: false,
    heading: 'Reliability',
    body: 'Dependable, meet deadlines, and consistently deliver work of the highest standard.'
  },
    {
    no: 'Four',
    expand: false,
    heading: 'Creativity',
    body: 'Bring fresh ideas and innovative solutions to the table, pushing the boundaries of what is possible and delivering truly exceptional results.'
  }
];

const AccordionList: FC = () => {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  );
};

export default AccordionList;
