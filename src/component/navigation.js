import React from 'react';
import posed from 'react-pose';
import {Link} from 'react-router-dom';

import GovOfDubai from '../resource/images/gov-of-dubai.png';
import Logo from '../resource/images/logo.png';
import TopBarImage from '../resource/images/top-bar.png';

const NavLink = posed.li({
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: ({delay}) => ({delay: (delay * 75) + 1000, duration: 400})
  }
});

const TopBar = posed.img({
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {delay: 600, duration: 400}
  }
});

const NavImages = posed.div({
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {delay: 600, duration: 400}
  }
});

const navItems = [
  {link: '/about', label: 'about'},
  {link: '/initiatives-and-policies', label: 'initiatives & policies'},
  {link: '/programs', label: 'programs'},
  {link: '/forums', label: 'forums'},
  {link: '/publications', label: 'publications'},
  {link: '/stats', label: 'stats'},
  {link: '/media-centre', label: 'media centre'},
  {link: '/contact-us', label: 'contact us'},
];

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poseState: 'hidden',
    };
  }

  componentDidMount() {
    this.setState({poseState: 'visible'});
  }

  render() {
    const {poseState} = this.state;

    return (
      <nav>
        <TopBar pose={poseState} className='top-bar' src={TopBarImage}/>
        <NavImages pose={poseState} className='images'>
          <img src={GovOfDubai}/>
          <img src={Logo}/>
        </NavImages>
        <ul className="links">
          {navItems.map((nav, i) =>
            <NavLink key={i} delay={i} pose={poseState}>
              <Link to='/'>{nav.label}</Link>
            </NavLink>
          )}
        </ul>
      </nav>
    )
  }
}

export default Navigation;
