import nat1Large from "../img/nat-1-large.jpg";
import nat2Large from "../img/nat-2-large.jpg";
import nat3Large from "../img/nat-3-large.jpg";

function About(){
    return(
    <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              You're going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              rerum inventore? Itaque debitis pariatur magni sequi quidem odit
              mollitia obcaecati voluptas, accusamus, natus amet? Commodi
              blanditiis architecto possimus voluptatibus quasi.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventures like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              rerum inventore? Itaque debitis pariatur magni sequi quidem odit.
            </p>
            <a href="#" class="btn-text">Learn more &rarr;</a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={nat1Large}
                alt="photo 1"
                className="composition__photo composition__photo--p1"
              />
              <img
                src={nat2Large}
                alt="photo 2"
                class="composition__photo composition__photo--p2"
              />
              <img
                src={nat3Large}
                alt="photo 3"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
      )
}

export default About