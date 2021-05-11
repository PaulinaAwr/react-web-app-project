import React, { useState } from 'react';
import useDropdown from 'react-dropdown-hook';

import Input from "./forms/Input";

import { DropdownButton, DropdownWrapper, DropdownItem, DropdownListWrapper, SubMenuLabel, FilterWrapper, DropdownIcon, DropdownProfileSection, LogoutButton, ScrollableListArea } from './DropdownNavigation.styles';
import { HouseIcon, PublicationsIcon, PeopleIcon, EntitiesIcon, AdministrationIcon, PrivacyIcon, SettingsIcon, LogoutIcon } from 'styles';
import PlaceholderImage from 'assets/images/avatar-placeholder.jpg';

const DropdownNavigation: React.FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
  const [filterString, setFilterString] = useState<string>('');

  const dropdownItems = [
    {
      name: 'Platform',
      items: [
        {
          name: 'Home',
          icon: <HouseIcon />
        },
        {
          name: 'Publications',
          icon: <PublicationsIcon />
        },
        {
          name: 'People',
          icon: <PeopleIcon />
        },
        {
          name: 'Entities',
          icon: <EntitiesIcon />
        },
        {
          name: 'Administration',
          icon: <AdministrationIcon />
        },
      ]
    },
    {
      name: 'Workspaces',
      items: [
        {
          name: 'Client contract',
          icon: <HouseIcon />
        },
        {
          name: 'Supplier contract',
          icon: <HouseIcon />
        },
        {
          name: 'Corporate',
          icon: <EntitiesIcon />
        },
        {
          name: 'Group Norms',
          icon: <HouseIcon />
        },
        {
          name: 'Real estate contracts',
          icon: <HouseIcon />
        }
      ]
    }
  ]

  // dropdown menu items filtering logic
  let filteredDropdownItems = dropdownItems;
  if (filterString) {
    filteredDropdownItems = dropdownItems.filter(itemsList => {
      itemsList.items = itemsList.items.filter(item => {
        return item.name.toLowerCase().includes(filterString.toLowerCase());
      });
      return itemsList.items.length > 0;
    })
  }

  const handleFilterInputChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setFilterString((ev.target as HTMLInputElement).value);
  }

  return (
      <DropdownWrapper ref={wrapperRef}>
        <DropdownButton onClick={toggleDropdown}>
          <div>
            <HouseIcon />
            Home
          </div>

          <DropdownIcon />
        </DropdownButton>
        {dropdownOpen &&
        <DropdownListWrapper>
          <FilterWrapper>
            <Input placeholder={'Filter...'} onChange={handleFilterInputChange} />
          </FilterWrapper>

          <ScrollableListArea>
            {filteredDropdownItems.map(itemsList => (
              <>
                <SubMenuLabel>{itemsList.name}</SubMenuLabel>
                {itemsList.items.map(item => (
                  <DropdownItem>
                    {item.icon}
                    {item.name}
                  </DropdownItem>
                ))}
              </>
            ))}
          </ScrollableListArea>

          <SubMenuLabel>Account</SubMenuLabel>
          <DropdownProfileSection>
              <img src={PlaceholderImage} alt=""/>

              <div>
                  <p>Paulina Kowalska-Awrahman</p>
                  <span>See profile</span>
              </div>
          </DropdownProfileSection>
          <DropdownItem>
              <PrivacyIcon />
              Privacy
          </DropdownItem>

          <DropdownItem>
              <SettingsIcon />
              Settings
          </DropdownItem>

          <LogoutButton>
              <LogoutIcon />
              Logout
          </LogoutButton>
        </DropdownListWrapper>
        }
      </DropdownWrapper>
  )
};

export default DropdownNavigation;