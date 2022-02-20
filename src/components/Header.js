import SearchInput from "./Search";

const Header = () => {
  return (
    <header className="header">
      <div className="header__items">
        <img
          className="header__items-logo"
          src="./images/logo.png"
          alt="logo"
        />
        <h1 className="header__items-title">Movie Search</h1>

      </div>
      <SearchInput />
    </header>
  );
};

export default Header;
