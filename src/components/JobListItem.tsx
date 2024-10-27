import BookmarkIcon from './BookmarkIcon';
import { getDayDifference } from '../utils/job.ts';

type JobListItemProps = {
  jobItem: {
    id: string;
    company_logo: string;
    title: string;
    company_name: string;
    publication_date: string;
  };
  isActive: boolean;
};

export default function JobListItem({ jobItem }: JobListItemProps) {
  return (
    <li>
      <a href={`#${jobItem?.id}`} className='job-item__link'>
        <div className='job-item__badge'>
          <img src={jobItem?.company_logo} alt='' width={50} height={50} />
        </div>

        <div className='job-item__middle'>
          <h3 className='third-heading'>{jobItem?.title}</h3>
          <p className='job-item__company'>{jobItem?.company_name}</p>
        </div>

        <div className='job-item__right'>
          <BookmarkIcon id={jobItem?.id} />
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
