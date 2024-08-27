const Interests = () => {
  return (
    <div className="section service" id="section-interests">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Interests</div>
        </div>
        {/* interests items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-futbol" />
              </div>
              <div className="name">Football</div>
              <div className="text">
                A Manchester United fan since born. I do play regulary but not competitively.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-users" />
              </div>
              <div className="name">Politics</div>
              <div className="text">
                Just a casual observer of politics. I do not have any political affiliation.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-tree" />
              </div>
              <div className="name">Nature</div>
              <div className="text">
                I love nature. I do enjoy hiking and camping.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-headphones" />
              </div>
              <div className="name">Music</div>
              <div className="text">
                I listen to all kinds of music. I do not have a specific genre that I like.
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Interests;
