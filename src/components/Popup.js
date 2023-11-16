import nat8 from "../img/nat-8.jpg";
import nat9 from "../img/nat-9.jpg";


function Popup(){
    return(
        <div class="popup" id="popup">
        <div class="popup__content">
          <div class="popup__left">
            <img src={nat8} alt="" class="popup__img popup__img-1" />
            <img src={nat9} alt="" class="popup__img popup__img-2" />
          </div>
  
          <div class="popup__right">
            <a href="#section-tours" class="popup__close">&times;</a>
           
            <h2 class="heading-secondary u-margin-bottom-small">
              Start booking now
            </h2>
            <h3 class="heading-tertiary u-margin-bottom-small">
              Important &ndash; Please read these term before booking
            </h3>
            <p class="popup__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              minima assumenda obcaecati minus quisquam quidem voluptatem magni
              doloribus iure dolor quas a sed adipisci cumque necessitatibus
              reiciendis, id asperiores nam. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sint minima assumenda obcaecati minus
              quisquam quidem voluptatem magni doloribus iure dolor quas a sed
              adipisci cumque necessitatibus reiciendis, id asperiores nam.
            </p>
            <a href="#" class="btn btn--green">Book now</a>
          </div>
        </div>
      </div>
  
    )
}

export default Popup;