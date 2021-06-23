import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { SidebarProfileSection, Avatar, Separator, SidebarProfileControl, SidebarProfileControlButton, SidebarProfileControlLink, SidebarNavigationItem, SidebarWrapper } from './Sidebar.styles';
import { PeopleIcon, UserPlusIcon, PublicationsIcon, PlusIcon, NetworkIcon, EcosystemIcon, EntitiesIcon } from 'styles/icons';
import { UserContext } from 'contexts/user.context';

import PlaceholderImage from 'assets/images/avatar-placeholder.jpg';

const Sidebar: React.FC = () => {
  const {name, company, workPosition} = useContext(UserContext);

  return (
    <SidebarWrapper>
      <SidebarProfileSection>
        <Avatar alt={'User avatar'} src={PlaceholderImage} />
        <Link to={`/profile`}><h3>{name}</h3></Link>
        <p>{workPosition} - {company}</p>

        <Separator />

        <SidebarProfileControl>
          <SidebarProfileControlLink>
            <PeopleIcon />
            Your network
          </SidebarProfileControlLink>
          <SidebarProfileControlButton>
            <UserPlusIcon />
          </SidebarProfileControlButton>
        </SidebarProfileControl>

        <SidebarProfileControl>
          <SidebarProfileControlLink>
            <PublicationsIcon />
            Your publications
          </SidebarProfileControlLink>
          <SidebarProfileControlButton>
            <PlusIcon />
          </SidebarProfileControlButton>
        </SidebarProfileControl>
      </SidebarProfileSection>

      <SidebarNavigationItem to={'/'}>
        <PublicationsIcon />
        Publications
      </SidebarNavigationItem>
      <SidebarNavigationItem to={'/workspaces'}>
        <EcosystemIcon />
        Ecosystem
      </SidebarNavigationItem>
      <SidebarNavigationItem to={'/entities'}>
        <EntitiesIcon />
        Entities
      </SidebarNavigationItem>
    </SidebarWrapper>
  )
}

export default Sidebar;