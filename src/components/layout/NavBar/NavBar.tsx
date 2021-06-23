import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import DropdownNavigation from "../../ui/DropdownNavigation/DropdownNavigation";
import Input from '../../ui/forms/Input/Input';
import NavIcon from '../../ui/NavIcon/NavIcon';
import { FullscreenContext } from 'contexts/fullscreen.context';

import { NavBarWrapper, SearchWrapper, NavIconsWrapper, NavBarContainer } from './NavBar.styles';
import { HouseLighterIcon, CommentsIcon, BellIcon, SearchIcon } from 'styles';

const NavBar: React.FC = () => {
  const history = useHistory();
  const {isFullscreenActive, setFullscreenActive} = useContext(FullscreenContext);

  const goToHomepage = () => {
    history.push('/');
  }

  return (
    <NavBarWrapper isFullscreen={isFullscreenActive}>
      <NavBarContainer>
        <DropdownNavigation />

        <SearchWrapper>
          <Input placeholder={'Search Legalcluster'} inputType={'search'} />
        </SearchWrapper>

        <NavIconsWrapper>
          <NavIcon onClick={goToHomepage}>
            <HouseLighterIcon />
          </NavIcon>

          <NavIcon notificationsCount={22}>
            <CommentsIcon />
          </NavIcon>

          <NavIcon notificationsCount={10}>
            <BellIcon />
          </NavIcon>

          <NavIcon hideLg>
            <SearchIcon />
          </NavIcon>
        </NavIconsWrapper>
      </NavBarContainer>
    </NavBarWrapper>
  )
}
export default NavBar;