import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sidebarInner">
        <h2 className="sidebarHero">Health Insight</h2>

        <nav className="sideBarNav navbar">
          {/* One */}
          <ul className="navbar-nav">
            <li class="nav-item nav-item dropdown">
              <a href="#" className="nav-link">
                <div className="navIcon">
                  <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/spread%20(1)%201.svg?raw=true" />
                </div>
                <div className="navLabel">Adult Onset</div>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">
                <div className="navIcon">
                  <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/spreading%201.svg?raw=true" />
                </div>
                <div className="navLabel">Career Risk</div>
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">
                <div className="navIcon">
                  <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/StrandBrandGuide-14%202.svg?raw=true" />
                </div>
                <div className="navLabel">Pharmacogenomics</div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
