const ResumeSection = () => {
  return (
    <div className="section resume" id="section-history">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Experience</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box">
                <div className="date">Jan 2024 - Feb 2024</div>
                <div className="name">42 Kuala Lumpur</div>
                <div className="text">
                  Join 42 Kuala Lumpur as a cadet to learn and improve my coding.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">Jan 2019 - March 2019</div>
                <div className="name">Petronas Kuala Pilah</div>
                <div className="text">
                  Work as a part-time cashier at Petronas Kuala Pilah, Negeri Sembilan.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2014 - 2018</div>
                <div className="name">SBP Integrasi Jempol</div>
                <div className="text">
                  Photoragpher, chief editor for school magazine in high school
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Education</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box active">
                <div className="date">2021 - Present</div>
                <div className="name">ACCA - Sunway University</div>
                <div className="text">
                  Association of Chartered Certified Accountants (ACCA) in 
                  Sunway University.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2020 - 2021</div>
                <div className="name">CAT - Sunway University</div>
                <div className="text">
                  Certified Accounting Technician (CAT) in Sunway University.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2019 - 2020</div>
                <div className="name">Foundation in University Malaya</div>
                <div className="text">
                  Foundation of Life Sciences in University Malaya.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2014 - 2018</div>
                <div className="name">SPM - SBP Integrasi Jempol</div>
                <div className="text">
                  Sijil Pelajaran Malaysia (SPM) in Sekolah Berasrama Penuh 
                  Integrasi Jempol.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeSection;
