const Service = () => {
  return (
    <div className="section service" id="section-services">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Services</div>
        </div>
        {/* service items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-code" />
              </div>
              <div className="name">Web Development</div>
              <div className="text">
                Modern and mobile-ready website that will help you reach all of
                your marketing.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-file" />
              </div>
              <div className="name">Financial reporting</div>
              <div className="text">
                Financial reporting, SOFP and SOPL according to IAS and IFRS standard.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-layer-group" />
              </div>
              <div className="name">Graphic Design</div>
              <div className="text">
                Advertising services include television, radio, print, mail, and
                web apps.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-camera" />
              </div>
              <div className="name">Photography</div>
              <div className="text">
                Our in-house photography services team made up of professional
                photographers.
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Service;
