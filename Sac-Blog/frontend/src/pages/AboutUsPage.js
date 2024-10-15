import React from "react";
import AnimationWrapper from "../components/AnimationWrapper";
import SubjectTable from "../components/SubjectTable";

const AboutUsPage = () => {
  return (
    <div className="container my-5">
      <AnimationWrapper animationType="fade-right">
        <h2 className="mb-4 text-center text-success"><em>Department Of Computer Science</em></h2>
      </AnimationWrapper>
      <AnimationWrapper animationType="fade-up" duration={1200}>
        <p>
          Our Department has well experienced and Ph.D/NET/SET qualified faculty
          members to nurture the students. Our faculty members are capable of
          providing secure and Out of the Box thinking to the students. The
          global standards set by our department in the field of teaching and
          research spurs the students with relentless pursuit of excellence.
          Individual attention is given to the students to make them excel in
          both curricular and extra-curricular activities. Some of the major
          research areas which the faculty members and students working on are
          Image Processing, Virtual Reality, Cyber Security, Deep Learning, Data
          Mining and Internet of Things.
        </p>
      </AnimationWrapper>
      <AnimationWrapper animationType="fade-up" duration={1200} delay={200}>
        <p>
         
        </p>
        <div className="container mt-5">
          <h2 className="py-3">
          Programmes Offered
          </h2>
          <table className="table table-bordered">
            <thead className="bg-primary text-white">
              <tr>
                <th scope="col" className="bg-warning">
                  Courses
                </th>
                <th scope="col" className="bg-warning">
                  Year of Establishment
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PG (Computer Science) (Unaided)</td>
                <td>2006</td>
              </tr>
              <tr>
                <td>Ph.D</td>
                <td>2013</td>
              </tr>
              <tr>
                <td>M.Phil</td>
                <td>2015</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <h1 className="text-primary p-3 text-center">Faculty Members</h1>
          <div className="col-md-6 mb-3">
            <div className="team-member-card">
              <div className="image-container">
                <img
                  src="https://sadakath.ac.in/images/department/pgcomputerscience/STCS03.jpg"
                  alt="CEO"
                  className="team-image"
                />
              </div>
              <h4 className="member-name">Dr. V. Roseline</h4>
              <p className="member-title">Head of Department</p>
              <p className="member-description">
                M.Sc., M.Phil., B.Ed., SET, NET., Ph.D
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="team-member-card">
              <div className="image-container">
                <img
                  src="https://sadakath.ac.in/images/department/rrc/rrc_faculty_4.jpg"
                  alt="assistant professor"
                  className="team-image"
                />
              </div>
              <h4 className="member-name">Mr. K. Ganeshkumar</h4>
              <p className="member-title">Assistant Professor</p>
              <p className="member-description">M.C.A., M.Phil., NET</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="team-member-card">
              <div className="image-container">
                <img
                  src="https://sadakath.ac.in/images/department/pgcomputerscience/STCS07.jpg"
                  alt="assistant professor"
                  className="team-image"
                />
              </div>
              <h4 className="member-name">Mr. K.A. Mohamed Riyazudeen</h4>
              <p className="member-title">Assistant Professor</p>
              <p className="member-description">
                M.Sc., M.Phil., M.B.A., SET, M.Sc. (Psychology)
              </p>
            </div>
          </div>

          <div className="col-md-6 team-member">
            <div className="team-member-card">
              <div className="image-container">
                <img
                  src="https://sadakath.ac.in/images/department/computerscience/STCS26.jpg"
                  alt="Assistant Professor"
                  className="team-image"
                />
              </div>
              <h4 className="member-name">Mrs.R.Saranya</h4>
              <p className="member-title">Assistant Professor</p>
              <p className="member-description">M.C.A., M.Tech., SET</p>
            </div>
          </div>
        </div>
        <SubjectTable/>
      </AnimationWrapper>
    </div>
  );
};

export default AboutUsPage;
