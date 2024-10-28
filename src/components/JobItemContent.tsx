import { JobItem } from '../lib/types';
import BookmarkIcon from './BookmarkIcon';
import EmptyJobContent from './EmptyJobContent';

type JobItemContentProps = {
  jobItem: JobItem | null;
};

export default function JobItemContent({ jobItem }: JobItemContentProps) {
  if (!jobItem) {
    return <EmptyJobContent />;
  }

  return (
    <section className='job-details'>
      <div>
        <img
          src='https://images.unsplash.com/photo-1610374792793-f016b77ca51a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1272&q=100'
          alt='#'
        />

        <a className='apply-btn'>Apply</a>

        <section className='job-info'>
          <div className='job-info__left'>
            <div className='job-info__badge'>9T</div>
            <div className='job-info__below-badge'>
              <time className='job-info__time'>2d</time>

              <BookmarkIcon />
            </div>
          </div>

          <div className='job-info__right'>
            <h2 className='second-heading'>{jobItem.title}</h2>
            <p className='job-info__company'>{jobItem.company_name}</p>
            <p className='job-info__description'>{jobItem.company_name}</p>
            <div className='job-info__extras'>
              <p className='job-info__extra'>
                <i className='fa-solid fa-clock job-info__extra-icon'></i>
                Full-Time
              </p>
              <p className='job-info__extra'>
                <i className='fa-solid fa-money-bill job-info__extra-icon'></i>
                $105,000+
              </p>
              <p className='job-info__extra'>
                <i className='fa-solid fa-location-dot job-info__extra-icon'></i>{' '}
                Global
              </p>
            </div>
          </div>
        </section>

        <div className='job-details__other'>
          <section className='qualifications'>
            <div className='qualifications__left'>
              <h4 className='fourth-heading'>Qualifications</h4>
              <p className='qualifications__sub-text'>
                Other qualifications may apply
              </p>
            </div>
            <ul className='qualifications__list'>
              <li className='qualifications__item'>React</li>
              <li className='qualifications__item'>Next.js</li>
              <li className='qualifications__item'>Tailwind CSS</li>
            </ul>
          </section>

          <section className='reviews'>
            <div className='reviews__left'>
              <h4 className='fourth-heading'>Company reviews</h4>
              <p className='reviews__sub-text'>
                Recent things people are saying
              </p>
            </div>
            <ul className='reviews__list'>
              <li className='reviews__item'>Nice building and food also.</li>
              <li className='reviews__item'>Great working experience.</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
