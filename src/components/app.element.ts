import hyperHTML from "hyperhtml";

const { wire } = hyperHTML;

const AppElement = () => {
  return wire()`
    <nav></nav>
    <header>
        <h1>
            Per's Photo-Shop
        </h1>
        <section id="modal"></section>
        <section>
            <p>
                Select x number of photos of your liking, by clicking "Buy", until you reach your quota.
                Then click the shopping cart and send your order. 
            </p>
            <ul>
                <li>
                    <i class="fas fa-expand-arrows-alt"></i>
                    Size of the photo, including frame.
                </li>
                <li>
                    <i class="fas fa-edit"></i>
                    Print material of the photo.
                </li>
                <li>
                    <i class="far fa-money-bill-alt"></i>
                    The price of the photo.
                </li>
                <li>
                    <i class="fas fa-cart-plus"></i>
                    Purchase the photo.
                </li>
            </ul>
        </section>
    </header>
    <main>
    </main>
    <footer></footer>
`;
};

export default AppElement;
