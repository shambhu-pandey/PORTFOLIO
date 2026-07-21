import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { profile } from '../data/profile';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home", to: "home" },
    { id: 2, text: "About", to: "about" },
    { id: 3, text: "Projects", to: "projects" },
    { id: 4, text: "Skills", to: "skills" },
    { id: 5, text: "Education", to: "education" },
    { id: 6, text: "Achievements", to: "achievements" },
    { id: 7, text: "Contact", to: "contact" },
  ];

  return (
    <header className="position-sticky top-0 z-3">
      <div className="container py-3 px-3 px-lg-4">
        <div className="glass-card px-3 px-lg-4 py-3 d-flex align-items-center justify-content-between rounded-pill">
          <Link to="home" smooth={true} duration={500} className="d-flex align-items-center gap-3 text-decoration-none cursor-pointer">
            <img src={profile.photo} className="rounded-circle" alt={profile.name} style={{ width: 46, height: 46, objectFit: "cover" }} />
            <div>
              <div className="fw-semibold text-white">{profile.name.split(' ')[0]}.Pandey</div>
              <div className="small text-[#94A3B8]">{profile.title}</div>
            </div>
          </Link>

          <div className="d-none d-lg-flex align-items-center gap-4">
            {navItems.map(({ id, text, to }) => (
              <Link
                key={id}
                to={to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-decoration-none text-[#94A3B8] fw-medium hover-text-accent"
              >
                {text}
              </Link>
            ))}
            <a href={profile.resume} download className="btn btn-sm btn-outline-accent">
              Resume
            </a>
          </div>

          <div className="d-lg-none text-white" onClick={() => setMenu(!menu)}>
            {menu ? <IoCloseSharp size={24} /> : <IoMenu size={24} />}
          </div>
        </div>

        {menu && (
          <div className="glass-card rounded-4 mt-3 p-3 d-lg-none">
            <div className="d-flex flex-column gap-3">
              {navItems.map(({ id, text, to }) => (
                <Link
                  key={id}
                  to={to}
                  onClick={() => setMenu(false)}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-decoration-none text-white fw-medium"
                >
                  {text}
                </Link>
              ))}
              <a href={profile.resume} download className="btn btn-sm btn-outline-accent w-50">
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
