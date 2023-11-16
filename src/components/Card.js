import "../css/style.css";

function Card() {
  const cardsPull = [
    {
      frontImg: "card__picture-1",
      title: "The see explorer",
      titleBcg: "card__heading-span--1",
      duration: "3 day tours",
      quantity: "Up to 30 people",
      guides: "2 tour guides",
      overnight: "Sleep in cozy hotels",
      difficulty: "Difficulty: easy",
      backImg: "card__side--back-1",
      only: "only",
      price: "$297",
      btn: "Book now!",
    },

    {
      frontImg: "card__picture-2",
      title: "The forest hiker",
      titleBcg: "card__heading-span--2",
      duration: "7 day tours",
      quantity: "Up to 40 people",
      guides: "6 tour guides",
      overnight: "Sleep in provided tents",
      difficulty: "Difficulty: medium",
      backImg: "card__side--back-2",
      only: "only",
      price: "$497",
      btn: "Book now!",
    },

    {
      frontImg: "card__picture-3",
      title: "The snow adventurer",
      titleBcg: "card__heading-span--3",
      duration: "5 day tours",
      quantity: "Up to 15 people",
      guides: "3 tour guides",
      overnight: "Sleep in provided tents",
      difficulty: "Difficulty: hard",
      backImg: "card__side--back-3",
      only: "only",
      price: "$897",
      btn: "Book now!",
    },
  ];

  const cardsPullReactElements = cardsPull.map((cardItem, index) => {
    return (
      <div key={index} className="col-1-of-3">
        <div className="card">
          <div className="card__side card__side--front">
            <div className={cardItem.frontImg + " card__picture"}>&nbsp;</div>

            <h4 className="card__heading">
              <span className={cardItem.titleBcg + " card__heading-span"}>
                {cardItem.title}
              </span>
            </h4>

            <div className="card__details">
              <ul>
                <li>{cardItem.duration}</li>
                <li>{cardItem.quantity}</li>
                <li>{cardItem.guides}</li>
                <li>{cardItem.overnight}</li>
                <li>{cardItem.difficulty}</li>
              </ul>
            </div>
          </div>

          <div className={cardItem.backImg + " card__side card__side--back "}>
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">{cardItem.only}</p>
                <p className="card__price-value">{cardItem.price}</p>
              </div>
              <a href="#popup" className="btn btn--white">
                {cardItem.btn}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="row">{cardsPullReactElements}</div>;
}

export default Card;
