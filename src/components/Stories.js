import StoryItem from "./StoryItem";

function Stories(){
    return(
        <section class="section-stories">
        <div class="bg-video">
          <video class="bg-video__content" autoplay muted loop>
            <source src="img/video.mp4" type="video/mp4" />
            <source src="img/video.webm" type="video/webm" />
            Your browser is not supported
          </video>
        </div>
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">We make people genuinely happy</h2>
        </div>
        <StoryItem />

        {/* <div class="row">
          <div class="story">
            <figure class="story__shape">
              <img class="story__image" src="img/nat-8.jpg" alt="Person 1" />
              <figcaption class="story__caption">Mary Smith</figcaption>
            </figure>
            <div class="story__text">
              <h3 class="heading-tertiary u-margin-bottom-small">
                I had the best week ever with my family
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti nostrum suscipit assumenda? Consequatur vitae sunt
                impedit id explicabo, dolores ea eos, quos fugit officia hic.
                Illo non cumque modi quas? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Quibusdam, omnis.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="story">
            <figure class="story__shape">
              <img class="story__image" src="img/nat-9.jpg" alt="Person 1" />
              <figcaption class="story__caption">Jonh Wilson</figcaption>
            </figure>
            <div class="story__text">
              <h3 class="heading-tertiary u-margin-bottom-small">
                Wow! My life is completly different now
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti nostrum suscipit assumenda? Consequatur vitae sunt
                impedit id explicabo, dolores ea eos, quos fugit officia hic.
                Illo non cumque modi quas? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Quibusdam, omnis.
              </p>
            </div>
          </div>
        </div> */}

        <div class="u-center-text u-margin-top-huge">
          <a href="#" class="btn-text">Read all stories &rarr;</a>
        </div>
      </section>
    )
}

export default Stories;