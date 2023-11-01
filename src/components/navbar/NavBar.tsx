import "./navbar.scss";

import { Icon, IconName } from "components/icons/Icon";

import { NavLink } from "react-router-dom";
import { routeNames } from "routes";
import { useState } from "react";

interface Props {
  imageUrl: string;
  name: string;
  navlinks: {
    name: string;
    path: string;
  }[];
}

function NavBar({ imageUrl, name, navlinks }: Props) {
  const [click, setClick] = useState(false);

  const handleMenu = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            {/* <img src="http://localhost:4000/uploads/1698766781419bread.png" alt="" className="logo_img" /> */}
            <img src={imageUrl} alt="" className="logo_img" />
            <span>{name}</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {navlinks.map((link, index) => (
              <li key={`${index}`} className="nav-item">
                <NavLink to={link.path} className="nav-links" onClick={handleMenu}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav-icon">
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}
            <span className="icon">
              <Icon name={IconName.notification} style={{ marginLeft: -20 }} />
            </span>
            {!click ? (
              <span className="icon" onClick={handleMenu}>
                <Icon name={IconName.menu_fold} />
              </span>
            ) : (
              <span className="icon" onClick={handleMenu}>
                <Icon name={IconName.menu_unfold} />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

const vendorNavlinks = [
  {
    name: "Home",
    path: routeNames.home,
  },
  {
    name: "Restaurants",
    path: routeNames.vendor.restaurant,
  },
  {
    name: "Orders",
    path: routeNames.vendor.vendorOrder,
  },
  {
    name: "Profile",
    path: routeNames.vendor.vendorProfile,
  },
];

export const VendorNavBar = () => (
  <NavBar imageUrl="http://localhost:4000/uploads/1698766781419bread.png" name="Foodie" navlinks={vendorNavlinks} />
);
