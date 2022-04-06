import React, {useState, useRef, useEffect } from 'react';
import {useGlobalContext} from './context';

const Submenu = () => {
  //use context
  const {isSubmenuOpen, location, page:{page, links}} = useGlobalContext();
  //use ref
  const container = useRef(null);

  const [colummns, setColummns] = useState('col-2');

  useEffect(() => {
      setColummns('col-2');
      const submenu = container.current;
      const {center, bottom} = location;
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;

      if (links.length === 3) {
        setColummns('col-3');
      }
      if (links.length > 3) {
        setColummns('col-4');
      }
  }, [location]);

  return (
      <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
          <h4>{page}</h4>
          <div className={`submenu-center ${colummns}`}>
              {links.map((link, index) => {
                  const {label, icon, url} = link;
                  return (
                      <a key={index} href={url}>
                          {icon}
                          {label}
                      </a>
                  );
              })}
          </div>
      </aside>
  );
}

export default Submenu;