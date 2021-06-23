import React, { useState } from 'react';

import { Tag } from 'components/api/types';

import { ProfileTagsWrapper, ProfileTag, StyledInput } from './ProfileTags.styles';
import { TrashIcon, PlusCircleIcon, SaveIcon, XIcon } from 'styles';

interface Props {
  tags: Tag[]
  onTagRemove: (id: number) => void;
  onTagSave: (value: string, category: string) => void;
  category: string
}

const ProfileTags: React.FC<Props> = ({tags, onTagRemove, onTagSave, category}) => {
  const [isAddingTagActive, setAddingTagActive] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const handleTagRemove = (id: number) => () => {
    onTagRemove(id);
  }

  const toggleAddingActive = () => {
    setAddingTagActive(!isAddingTagActive);
  }

  const handleInputChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setValue(ev.currentTarget.value);
  }

  const handleTagSave = () => {
    if (!value) return;

    onTagSave(value, category);
    setAddingTagActive(false);
    setValue('');
  }

  let AddingIcon = isAddingTagActive ? <SaveIcon onClick={handleTagSave}/> : <PlusCircleIcon onClick={toggleAddingActive}/>;
  if (!value && isAddingTagActive) {
    AddingIcon = <XIcon onClick={toggleAddingActive} />
  }

  return (
    <ProfileTagsWrapper>
      {tags.filter(tag => tag.category === category).map(({name, id}) => <ProfileTag>
        {name}
        <TrashIcon onClick={handleTagRemove(id)} />
      </ProfileTag>)}

      {isAddingTagActive && <StyledInput value={value} onChange={handleInputChange} />}

      {AddingIcon}
    </ProfileTagsWrapper>
  )
}

export default ProfileTags;