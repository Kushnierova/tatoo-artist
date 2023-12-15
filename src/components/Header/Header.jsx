import css from './Header.module.css'


const Header = () => {
  return (
    <div className={css.header}>
      <p>Тут буде Лого</p>

      <ul>
        <li>Galeria</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
};

export default Header;
