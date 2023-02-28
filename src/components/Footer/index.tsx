import "./styles.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <footer>
        <div className="tooltip">
          <span className="tooltip-text">Visite meu Perfil no Linkedin!</span>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/rafa1st"
            target="_blank"
          >
            rafa1st@{year}
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
