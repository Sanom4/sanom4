import { FC } from 'react';
import useProgressbar from 'hooks/useProgressbar';
// -------- data -------- //
import { skill1 } from 'data/skill';

const ProgressList: FC = () => {
  // used for the animated line
  useProgressbar();

  return (
    <ul className="progress-list mt-3">
      {skill1.map(({ id, title, percent, color}) => (
        <li key={id}>
          <p>{title}</p>
          <div className={`progressbar line ${color}`} data-value={percent} />
        </li>
      ))}
    </ul>
  );
};

export default ProgressList;
