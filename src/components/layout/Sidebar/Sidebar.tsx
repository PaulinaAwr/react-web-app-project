import React from 'react';

import { SidebarProfileSection, Avatar, Separator, SidebarProfileControl, SidebarProfileControlButton, SidebarProfileControlLink, SidebarNavigationItem, SidebarWrapper } from './Sidebar.styles';
import { PeopleIcon, UserPlusIcon, PublicationsIcon, PlusIcon, NetworkIcon, EcosystemIcon, EntitiesIcon } from 'styles/icons';
import PlaceholderImage from 'assets/images/avatar-placeholder.jpg';

const Sidebar: React.FC = () => {
  return (
    <SidebarWrapper>
      <SidebarProfileSection>
        <Avatar alt={'User avatar'} src={PlaceholderImage} />
        <h3>Paulina Kowalska-Awrahman</h3>
        <p>Job Title - Company</p>

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

      <SidebarNavigationItem>
        <PublicationsIcon />
        Publications
      </SidebarNavigationItem>
      <SidebarNavigationItem>
        <EcosystemIcon />
        Ecosystem
      </SidebarNavigationItem>
      <SidebarNavigationItem>
        <EntitiesIcon />
        Entities
      </SidebarNavigationItem>
    </SidebarWrapper>
  )
}

export default Sidebar;