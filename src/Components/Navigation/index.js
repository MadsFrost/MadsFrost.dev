import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { Menu, MenuOpen, Code, HistoryEdu, AccountCircleOutlined, Feed } from '@mui/icons-material';
export const Navigation = () => {
  const [isOpen, setOpen] = React.useState(false);
  const closeMenu = () => {
    setOpen(false)
  }

  const toggleMenu = () => {
    setOpen(!isOpen)
  }
  return (
    <div className={'sticky'}>
      <div className={styles.navigation}>
        <NavLink to={'/'} onClick={closeMenu}>
         <span className={styles.navigationHeader}>MadsFrost.<span className={styles.navigationExt}>dev</span></span>
        </NavLink>
        <ul className={styles.navigationLinkContainer}>
          <div className={styles.navigationLinksLeft}>
            <NavLink to={'/projects'} activeClassName={styles.navigationLinkActive} className={styles.navigationLink}>
              <Code className={styles.navigationLinkIcon} />
              Projects
            </NavLink>
            <NavLink to={'/resume'} activeClassName={styles.navigationLinkActive} className={styles.navigationLink}>
              <HistoryEdu className={styles.navigationLinkIcon} />
              Resume
            </NavLink>
            <NavLink to={'/about'} activeClassName={styles.navigationLinkActive} className={styles.navigationLink}>
              <AccountCircleOutlined className={styles.navigationLinkIcon} />
              About Me
            </NavLink>
          </div>
          <div className={styles.navigationLinksRight}>
            <NavLink to={'/blog'} activeClassName={styles.navigationLinkActive} className={styles.navigationLink}>
              <Feed className={styles.navigationLinkIcon} />
              Blog
            </NavLink>
          </div>
          <button className={styles.navigationMenuButton} onClick={toggleMenu}>
            {isOpen ? <MenuOpen className={'text-green-500'} /> : <Menu />}
          </button>
        </ul>
      </div>
      {isOpen ? <div className={styles.mobileNavigationContainer}>
        <NavLink to={'/projects'} onClick={closeMenu} className={styles.mobileNavigationLink} activeClassName={styles.navigationLinkActive}>
          <Code className={styles.navigationLinkIcon} />
          Projects
        </NavLink>
        <NavLink to={'/resume'} onClick={closeMenu} className={styles.mobileNavigationLink} activeClassName={styles.navigationLinkActive}>
          <HistoryEdu className={styles.navigationLinkIcon} />
          Resume
        </NavLink>
        <NavLink to={'/about'} onClick={closeMenu} className={styles.mobileNavigationLink} activeClassName={styles.navigationLinkActive}>
          <AccountCircleOutlined className={styles.navigationLinkIcon} />
          About Me
        </NavLink>
        <NavLink to={'/blog'} onClick={closeMenu} className={styles.mobileNavigationLink} activeClassName={styles.navigationLinkActive}>
          <Feed className={styles.navigationLinkIcon} />
          Blog
        </NavLink>
      </div> : null}
    </div>
  )
};