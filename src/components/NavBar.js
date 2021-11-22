import './estilo.css';
const NavBar = () => {
     return (
        <nav className="bar">
            <ul className="ulmenu"> 
                 <a><img src="logo192.png"></img><div></div></a>
                 <a><div className="botones">REACT</div></a>
                 <a><div className="botones">BOTON1</div></a>
                 <a><div className="botones">BOTON2</div></a>
            </ul>
          </nav>

     )
}
export default NavBar