import course from './Courses.module.css'

const Courses = () => {

  return <div data-testid="courses" className={course.wrapper}>
    <h2 className={course.heading}>Full Time Courses</h2>
    <ol>
      <li>Full Stack Web Development
        <ul>
          <li>Eligibility : 18-28 yrs</li>
          <li>Duration : 30 weeks</li>
        </ul>
      </li>
    </ol>

    <h2 className={course.heading}>Part Time Courses</h2>
    <ol>
      <li>Full Stack Web Development
        <ul>
          <li>Eligibility : 18-28 yrs</li>
          <li>Duration : 30 weeks</li>
        </ul>
      </li>
      <li>Data Analytics
        <ul>
          <li>Eligibility : 18-28 yrs</li>
          <li>Duration : 30 weeks</li>
        </ul>
      </li>

    </ol>
  </div>;
};

export default Courses;
