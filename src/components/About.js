const About = () => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="images/profile.jpg" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
            Hello! I’m Ahmad Haikal. A student based in Subang Jaya, Malaysia.
            I am still pursuing ACCA but I am also a self-taught web developer.
            I have a passion for web development and love to create for web. I
            am a fast learner and I am always eager to learn new things.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 23
              </li>
              <li>
                <strong>Residence:</strong> Malaysia
              </li>
              <li>
                <strong>Freelance:</strong> Available
              </li>
              <li>
                <strong>Address:</strong> Subang Jaya, Malaysia
              </li>
              <li>
                <strong>Phone:</strong> +60 18 3519048
              </li>
              <li>
                <strong>Email:</strong> ahmadhaikalmutalib@gmail.com
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="https://drive.google.com/file/d/11quuFgbU9H_LAqMOrZzTnkScgZYwFWgA/view?usp=sharing" target="_blank" rel="noopener" className="btn hover-animated">
              <span className="circle" />
              <span className="lnk">Download CV</span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
