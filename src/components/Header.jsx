import logoImg from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A resturant" />
        <h1>Online Food Order</h1>
        <nav>
          <button>Cart (0)</button>
        </nav>
      </div>
    </header>
  );
}
