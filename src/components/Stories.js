import StoryItem from "./StoryItem";
import videoMp from "../img/video.mp4";
import videoWebm from "../img/video.webm";

function Stories() {
  return (
    <section class="section-stories">
      <div class="bg-video">
        <video class="bg-video__content" autoplay muted loop>
          <source src= {videoMp} type="video/mp4" />
          <source src={videoWebm} type="video/webm" />
          Your browser is not supported
        </video>
      </div>
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">We make people genuinely happy</h2>
      </div>
      <StoryItem />

      <div class="u-center-text u-margin-top-huge">
        <a href="#" class="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
}

export default Stories;
