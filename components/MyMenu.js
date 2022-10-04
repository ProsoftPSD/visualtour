import { Jumbotron, Nav, NavItem, NavLink } from "reactstrap";
import VrPic from "./VrPic";
export default props => {
  return (
    <div>
      <style>
        {`
          .nav {
          
            top: 0;
            width: 100wv;
            z-index: 6;
            background: black;
          }
          .jumbotron {
       
          }
        }
      `}
      </style>
      <Nav>
        <NavItem>
          <NavLink href="/">Acasa</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/oferta">Oferte</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavItem>
      </Nav>
      <Jumbotron className="margins">
        <h1 className="display-4 text-primary">
          Tururi virtuale <span className="hotspan"> imobiliare</span>
        </h1>
      </Jumbotron>
      {/* <VrPic width="20%" /> */}

      <style global jsx>{`
        .nav {
          background: black;

          margin-left: 20px;
          margin-right: 20px;
        }
        .nav-link {
          color: aliceblue;
        }
        .nav-link:hover {
          color: hotpink;
        }
        .hotspan {
          color: black;
        }
        .margins {
          margin-left: 20px;
          margin-right: 20px;
        }
      `}</style>
    </div>
  );
};
