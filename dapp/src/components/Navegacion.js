import { NavLink } from 'react-router-dom';

const Navegacion = () => {
  const f = ({ isActive }) => (isActive ? 'navlinkactive' : '');

  /*        <li>
      <div>
        <img src="/zara.jpg" alt="Zara Logo" style={{ width: '50px', height: '50px' }} />
      </div>
      </li>
      */
  return (
    <nav>
      <ul>
      { /* <li>
         <NavLink className={f} to="/">
            Home
          </NavLink>
  </li> */}
        <li>
          <NavLink className={f} to="/perfil/">
            Perfiles
          </NavLink>
        </li>
        <li>
          <NavLink className={f} to="/prendas/">
            Prendas
          </NavLink>
        </li>
        <li>
          <NavLink className={f} to="/ipfs/">
            Crear Perfil
          </NavLink>
        </li>
        <li>
          <NavLink className={f} to="/ipfsprenda/">
            Crear Prenda
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default Navegacion;
