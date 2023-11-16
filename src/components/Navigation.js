function Navigation() {
  const navPull = [
    {
      navNumber: "01",
      navTitle: "About Natours",
    },
    {
      navNumber: "02",
      navTitle: "Your benefits",
    },
    {
      navNumber: "03",
      navTitle: "Popular tours",
    },
    {
      navNumber: "04",
      navTitle: "Stories",
    },
    {
      navNumber: "05",
      navTitle: "Book now",
    },
  ];

  const navPullReactElements = navPull.map((item, index) => {
    return (
      <li class="navigation__item">
        <a href="#" class="navigation__link">
          <span>{item.navNumber}</span>
          {item.navTitle}
        </a>
      </li>
    );
  });
  return (
    <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>
      <div class="navigation__background">&nbsp;</div>

      <nav class="navigation__nav">
        <ul class="navigation__list">
            {navPullReactElements}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
