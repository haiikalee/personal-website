const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>ahmadhaikalmutalib@gmail.com</p>
        <p>+60 18 3519048</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ahmad-haikal-814767242/">
            <span className="icon fab fa-linkedin-in" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/haiikalee/">
            <span className="icon fab fa-instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/haiikalee">
            <span className="icon fab fa-github" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
