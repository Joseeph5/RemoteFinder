import BookmarkIcon from './BookmarkIcon';
import { getDayDifference } from '../utils/job.ts';
import { JobItem } from '../lib/types.ts';

type JobListItemProps = {
  jobItem: JobItem;
  activeId?: string;
  handleActiveClick: (jobItem: JobItem) => void;
};

export default function JobListItem({
  jobItem,
  activeId,
  handleActiveClick,
}: JobListItemProps) {
  return (
    <li
      onClick={() => {
        handleActiveClick(jobItem);
      }}
      className={`job-item ${
        activeId === jobItem?.id ? 'job-item--active' : ''
      }`}
    >
      <a href={`#${jobItem?.id}`} className='job-item__link'>
        <div className='job-item__badge'>
          <img src={jobItem?.company_logo} alt='' width={50} height={50} />
        </div>

        <div className='job-item__middle'>
          <h3 className='third-heading'>{jobItem?.title}</h3>
          <p className='job-item__company'>{jobItem?.company_name}</p>
        </div>

        <div className='job-item__right'>
          <BookmarkIcon jobItem={jobItem} />
          <time className='job-item__time'>
            {getDayDifference(
              jobItem?.publication_date,
              new Date().toDateString()
            )}
          </time>
        </div>
      </a>
    </li>
  );
}
