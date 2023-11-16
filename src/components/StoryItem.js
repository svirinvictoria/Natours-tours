import nat8 from "../img/nat-8.jpg";
import nat9 from "../img/nat-9.jpg";


function StoryItem(){
    const storiesPull=[
        {
            header:" I had the best week ever with my family", 
            name: "Mary Smith",
            photo: nat8,
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nostrum suscipit assumenda? Consequatur vitae sunt impedit id explicabo, dolores ea eos, quos fugit officia hic. Illo non cumque modi quas? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, omnis."
        },
        {
            header:" Wow! My life is completly different now", 
            name:"Jonh Wilson",
            photo: nat9,
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nostrum suscipit assumenda? Consequatur vitae sunt impedit id explicabo, dolores ea eos, quos fugit officia hic. Illo non cumque modi quas? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, omnis."
        }
    ];

    const storiesReactElements = storiesPull.map((item, index)=>{
        return(
            <div class="row" key={index}>
          <div class="story">
            <figure class="story__shape">
              <img class="story__image" src={item.photo} alt="" />
              <figcaption class="story__caption">{item.name}</figcaption>
            </figure>
            <div class="story__text">
              <h3 class="heading-tertiary u-margin-bottom-small">
                {item.header}
              </h3>
              <p>
                {item.text}
              </p>
            </div>
          </div>
        </div>
        )
    })
    return(
        <div>
            {storiesReactElements}
        </div>
    )
}

export default StoryItem;