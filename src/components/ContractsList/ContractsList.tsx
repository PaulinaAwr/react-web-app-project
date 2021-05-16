import React, { useState, useEffect } from 'react';
import Input from 'components/ui/forms/Input/Input';

import { ContractWrapper, ContractMeta, ListHeader } from './ContractsList.styles';

import { Comment } from 'components/api/types';
import { PeopleIcon, Entities2Icon } from 'styles';

const ContractsList: React.FC = () => {
  const [filterString, setFilterString] = useState<string>('');
  const [contracts, setContracts] = useState<Comment[]>([]);

  const handleFilterChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setFilterString((ev.target as HTMLInputElement).value);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((json) => setContracts(json));
  }, [])

  const filterContractsByTitle = ({ name }: { name: string }) => {
    if (filterString === '') return true
    return name.toLowerCase().includes(filterString.toLowerCase());
  }

  return (
    <>
      <ListHeader>
        <h2>Resume your work</h2>
        <div>
          <Input inputType={'search'} align={'left'} placeholder={'Filter by title...'} onChange={handleFilterChange} />
        </div>
      </ListHeader>
      {contracts.filter(filterContractsByTitle).slice(0, 10).map(contract => (
        <ContractWrapper>
          <h3>{contract.name}</h3>
          <p>
            {contract.body}
          </p>
          <ContractMeta>
          <span>
            <PeopleIcon />
            Subsid.corp.
          </span>

            <span>
            <Entities2Icon />
            Supplier contract
          </span>

            <span>
            Updated 3 days ago by John Doe
          </span>

          </ContractMeta>
        </ContractWrapper>
      ))}
    </>
  )
}

export default ContractsList;