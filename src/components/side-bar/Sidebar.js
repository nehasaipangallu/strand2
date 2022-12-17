import React, { useState } from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');
  const navigate = useNavigate();

  function onMenuClick(clickedMenuName) {
    setSelectedMenu(clickedMenuName);
  }

  function onChildMenuClick(location) {
    setMenuOpen(false);
    navigate(location);
  }

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
            <li
              class="position-relative subMenu"
              onClick={() => onMenuClick('adult-onset')}
              name="adult-onset"
            >
              <a onClick={() => setMenuOpen(true)} className="nav-link">
                <div className="navIcon">
                  <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/spread%20(1)%201.svg?raw=true" />
                </div>
                <div className="navLabel">Adult Onset</div>
              </a>

              {menuOpen && (
                <ul className="slideSubMenu" id="slideSubMenu">
                  <li>
                    <a
                      onClick={() => onChildMenuClick('cancer')}
                      className="nav-link"
                    >
                      <div className="navIcon">
                        <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/cancer.svg?raw=true" />
                      </div>
                      <div className="navLabel">Cancer</div>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => setMenuOpen(true)} className="nav-link">
                      <div className="navIcon">
                        <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/cardio.svg?raw=true" />
                      </div>
                      <div className="navLabel">Cardio</div>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => setMenuOpen(true)} className="nav-link">
                      <div className="navIcon">
                        <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/metabolism.svg?raw=true" />
                      </div>
                      <div className="navLabel">Metabolic</div>
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
                <div
                  className="navIcon"
                  onClick={() => onMenuClick('adult-onset')}
                  name="carrier-risk"
                >
                  <img src="https://github.com/nehasaipangallu/strand2/blob/main/public/spreading%201.svg?raw=true" />
                </div>
                <div className="navLabel">Carrier Risk</div>
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">
                <div
                  className="navIcon"
                  onClick={() => onMenuClick('adult-onset')}
                  name="pharmacogenomics"
                >
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
