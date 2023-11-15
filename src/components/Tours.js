import Card from "./Card";
import "../css/style.css";

function Tours() {
  return (
    <section className="section-tours" id="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>
      <div className="row">
      {/* <div className="col-1-of-3">  */}
        <Card />
      </div>
      
      {/* </div> */}


      {/* <Card 
        frontImg1={"card__picture-1"}
        title={"The see explorer"}
        duration={"3 day tours"}
        quantity={"Up tp 30 people"}
        guides={"2 tour guides"}
        overnight={"Sleep in cozy hotels"}
        difficulty={"Difficulty: easy"}
        backImg1={"card__side--back-1"} 
        price={"$297"}
        /> */}

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn btn--green">
          Discover all tours
        </a>
      </div>
    </section>
  );
}

export default Tours;
