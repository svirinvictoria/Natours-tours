
function Features() {
  const featuresPull = [
    {
      picture: "",
      header: " Explore the world",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rerum inventore.",
    },
    {
      picture: "",
      header: " Meet nature",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rerum inventore.",
    },
    {
      picture: "",
      header: " Find your way",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rerum inventore.",
    },
    {
      picture: "",
      header: " Live a healthier life",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rerum inventore.",
    },
  ];

  const featuresPullReactElements = featuresPull.map((item, index) => {
    return (
      <div className="col-1-of-4">
        <div className="feature-box">
          <i className="feature-box__icon icon-basic-world"></i>
          <h3 className="heading-tertiary u-margin-bottom-small">
            {item.header}
          </h3>
          <p className="feature-box__text">{item.text}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="section-features">
      <div className="row">{featuresPullReactElements}</div>
    </div>
  );
}

export default Features;
