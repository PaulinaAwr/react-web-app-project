import React, {useEffect, useState} from 'react';

import Input from "components/ui/forms/Input/Input";
import Pagination from "components/ui/Pagination/Pagination";
import { FilterSelectWrapper } from "components/pages/Entities/components/EntitiesList/EntitiesList.styles";

import { LastUpdatesHeader, LatestUpdatesWrapper, FilterTags, Tag, Update, UpdateMeta } from './LatestUpdates.styles';
import { CrosshairIcon, EntitiesIcon } from "styles";

const LatestUpdates: React.FC = () => {
  const [filterString, setFilterString] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [updates, setUpdates] = useState<[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setUpdates(json);
        setTotalPages(Math.ceil(json.length / 9));
      });
  }, [])

  const handleFilterChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setFilterString((ev.target as HTMLInputElement).value);
  }

  const filterUpdatesByTitle = ({ title }: { title: string }) => {
    if (filterString === '') return true
    return title.toLowerCase().includes(filterString.toLowerCase());
  }

  const handlePaginationPageChange = (selectedItem: {selected: number}) => {
    setCurrentPage(selectedItem.selected);
  }

  const filteredUpdates = updates.filter(filterUpdatesByTitle).slice(currentPage * 9, (currentPage + 1) * 9);

  return (
    <LatestUpdatesWrapper>
      <LastUpdatesHeader>
        <h4>Latest updates</h4>

        <div>
          <Input inputType={'search'} align={'left'} placeholder={'Search ...'} onChange={handleFilterChange} />

          <FilterSelectWrapper>
            <CrosshairIcon />
            <select>
              <option value="">Followed</option>
            </select>
          </FilterSelectWrapper>
        </div>
      </LastUpdatesHeader>

      <FilterTags>
        <Tag> All </Tag>
        <Tag backgroundColor={'#cce6cc'} textColor={'#667566'}> <EntitiesIcon /> SAS </Tag>
        <Tag backgroundColor={'#bdd7d9'} textColor={'#667475'}> <EntitiesIcon /> SARL </Tag>
        <Tag backgroundColor={'#d9d4bd'} textColor={'#757366'}> <EntitiesIcon /> Secondary business </Tag>
        <Tag backgroundColor={'#d6d6d6'} textColor={'#636363'}> <EntitiesIcon /> Communities </Tag>
        <Tag backgroundColor={'#ededed'} textColor={'#8a8a8a'}> <EntitiesIcon /> POA </Tag>
        <Tag> Survey </Tag>
        <Tag> ... </Tag>
      </FilterTags>

      {filteredUpdates.map(({title, body}) => <Update>
        <h4>{title}</h4>
        <p>{body}</p>

        <UpdateMeta>
          <Tag link textColor={'#667475'}> <EntitiesIcon/> SARL </Tag>
          <span>Updated 3 days ago by John Doe</span>
        </UpdateMeta>
      </Update>)}

      <Pagination marginPagesDisplayed={1} pageCount={totalPages} pageRangeDisplayed={2} onPageChange={handlePaginationPageChange} />
    </LatestUpdatesWrapper>
  )
}

export default LatestUpdates;