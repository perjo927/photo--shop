import hyperHTML from "hyperhtml";

const { wire } = hyperHTML;

const PicElement = (props: any) => {
  const { pic, onBuyRequest } = props;

  if (!pic.visible) {
    return wire()`<div style="display: none"></div>`;
  }

  return wire()`
          <div class="photo" id=${pic.id}>
              <h3 class=${pic.size}>${pic.title}</h3>
              <picture>
                  <source media="(min-width: 650px)" srcset=${pic.path}>
                  <source media="(min-width: 465px)" srcset=${pic.path}>
                  <a href=${pic.link} target="_blank">
                    <img src=${pic.path} alt=${pic.title} class=${pic.type +
    " " +
    pic.size}>
                  </a>
              </picture>
              <div class=${"meta " + pic.size}>
                  <div>
                      <i class="fas fa-expand-arrows-alt"></i>
                      <span>${pic.measure}</span>
                  </div>
                  <div>
                      <i class="fas fa-edit"></i>
                      <span>${pic.material}</span>
                  </div>
                  <div>
                      <i class="far fa-money-bill-alt"></i>
                      <span>x${pic.price}</span>
                  </div>
                  <div class="buy" id=${"buy-" + pic.id} data-item=${
    pic.id
  } onclick=${onBuyRequest}>
                      <i class="fas fa-cart-plus" data-item=${pic.id}></i>
                      <span data-item=${pic.id}>Buy</span>
                  </div>
              </div>
          </div>
      `;
};

export default PicElement;
