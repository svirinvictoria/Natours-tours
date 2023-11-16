import logoFooter from "../img/logo-green-2x.png";
function Footer() {
  const footerMenu = [
    "Company",
    "Contact us",
    "Carrers",
    "Privacy Policy",
    "Terms",
  ];

  const footerMenuReactElements = footerMenu.map((item, index) => {
    return (
      <div class="footer__navigation" key={index}>
        <ul class="footer__list">
          <li class="footer__item">
            <a href="#" class="footer__link">
              {item}
            </a>
          </li>
        </ul>
      </div>
    );
  });

  return (
    <footer class="footer">
      <div class="footer__logo-box">
        <img class="footer__logo" src={logoFooter} alt="" />
      </div>

      <div class="row">
        <div class="col-1-of-2">
          <ul>
            <li class="footer__item">{footerMenuReactElements}</li>
          </ul>
        </div>

        <div class="col-1-of-2">
          <p class="footer__copyright">
            Built by Victoria Svirin for the online course of Jonas Schmedtmann
            <a href="#" class="footer__link">
              Advanced CSS and SASS
            </a>{" "}
            &copy; by
            <a href="#" class="footer__link">
              Jonas Schmedtmann{" "}
            </a>{" "}
            . A credit to the design - Jonas Schmedtmann. The students are 100%
            allowed to use this webpage for both personal and commercial use.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
