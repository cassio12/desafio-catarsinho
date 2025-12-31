export default function Navbar() {
  return (
    <nav className="navbar is-primary is-fixed-top is-flex is-align-items-center is-justify-content-space-between ">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <p className="is-size-4 has-text-weight-bold has-text-white">
            Catarsinho
          </p>
        </a>
      </div>

      <div className="is-flex is-flex-direction-row ">
        <div className="navbar-item">
          <p className="has-text-white has-text-weight-bold">3 Items</p>
        </div>

        <div className="navbar-item">
          <p className="has-text-white has-text-weight-bold">Total R$ 30,00</p>
        </div>
      </div>
    </nav>
  );
}
