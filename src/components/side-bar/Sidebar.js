import React, { useState } from 'react';
import './Sidebar.css';

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // document.addEventListener('mouseup', function (e) {
  //   var container = document.getElementById('slideSubMenu');
  //   if (!container.contains(e.target)) {
  //     container.style.display = 'none';
  //   }
  // });

  return (
    <div className="sideBar">
      <div className="sidebarInner">
        <h2 className="sidebarHero">Health Insight</h2>

        <nav className="sideBarNav">
          {/* One */}
          <ul>
            <li class="position-relative subMenu">
              <a onClick={() => setMenuOpen(true)} className="nav-link">
                <div className="navIcon">
                  <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/spread%20(1)%201.svg?raw=true" />
                </div>
                <div className="navLabel">Adult Onset</div>
              </a>

              {menuOpen && (
                <ul className="slideSubMenu" id="slideSubMenu">
                  <li>
                    <a onClick={() => setMenuOpen(true)} className="nav-link">
                      <div className="navIcon">
                        <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/spread%20(1)%201.svg?raw=true" />
                      </div>
                      <div className="navLabel">Adult Onset</div>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => setMenuOpen(true)} className="nav-link">
                      <div className="navIcon">
                        <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/spread%20(1)%201.svg?raw=true" />
                      </div>
                      <div className="navLabel">Adult Onset</div>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => setMenuOpen(true)} className="nav-link">
                      <div className="navIcon">
                        <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/spread%20(1)%201.svg?raw=true" />
                      </div>
                      <div className="navLabel">Adult Onset</div>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => setMenuOpen(false)} className="nav-link">
                      <div className="navLabel close">Close</div>
                    </a>
                  </li>
                </ul>
              )}
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
