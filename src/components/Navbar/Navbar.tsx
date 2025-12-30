export default function Navbar() {
  return (
    <nav className="navbar is-primary is-fixed-top ">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <p className="navbar-item is-size-4 has-text-weight-bold has-text-white">
            Catarsinho
          </p>
        </a>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-end">
        <div className="navbar-start">
          <p className="navbar-item has-text-white has-text-weight-bold">
            3 Items
          </p>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <p className="has-text-white has-text-weight-bold">
              Total R$ 30,00
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
