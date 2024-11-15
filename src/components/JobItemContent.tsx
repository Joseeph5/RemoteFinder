import { useActiveIdContext } from '../lib/hooks';
import { getDayDifference } from '../utils/job';
import BookmarkIcon from './BookmarkIcon';
import EmptyJobContent from './EmptyJobContent';

export default function JobItemContent() {
  const { selectedJobItem: jobItem } = useActiveIdContext();

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

        <a className='apply-btn' href={jobItem.url} target='_blank'>
          Apply
        </a>

        <section className='job-info'>
          <div className='job-info__left'>
            <div className='job-info__badge'>
              <img src={jobItem?.company_logo} alt='' width={70} height={70} />
            </div>
            <div className='job-info__below-badge'>
              <time className='job-info__time'>
                {getDayDifference(
                  jobItem?.publication_date,
                  new Date().toDateString()
                )}
              </time>

              <BookmarkIcon jobItem={jobItem} />
            </div>
          </div>

          <div className='job-info__right'>
            <h2 className='second-heading'>{jobItem.title}</h2>
            <p className='job-info__company'>{jobItem.company_name}</p>

            <div className='job-info__extras'>
              <p className='job-info__extra'>
                <i className='fa-solid fa-clock job-info__extra-icon'></i>
                {jobItem.job_type}
              </p>
              <p className='job-info__extra'>
                <i className='fa-solid fa-money-bill job-info__extra-icon'></i>
                {jobItem.salary}
              </p>
              <p className='job-info__extra'>
                <i className='fa-solid fa-location-dot job-info__extra-icon'></i>{' '}
                {jobItem.candidate_required_location}
              </p>
            </div>
          </div>
        </section>

        <div
          className='job-details__other'
          style={{
            overflowY: 'scroll',
            maxHeight: '428px',
          }}
        >
          <section className='qualifications'>
            <div className='qualifications__left'>
              <h4 className='fourth-heading'>Qualifications</h4>
              <p className='qualifications__sub-text'>
                Other qualifications may apply
              </p>
            </div>
            <ul className='qualifications__list'>
              {jobItem.tags.map((tag, i) => {
                return (
                  <li key={i} className='qualifications__item'>
                    {tag}
                  </li>
                );
              })}
            </ul>
          </section>

          {/* <section className='reviews'>
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
          </section> */}

          <section className='description'>
            <h4 className='fourth-heading'>Description </h4>
            <br />
            <div
              dangerouslySetInnerHTML={{ __html: jobItem.description }}
            ></div>
          </section>
        </div>
      </div>
    </section>
  );
}
