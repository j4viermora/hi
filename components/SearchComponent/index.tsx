import React, { ChangeEvent, FC, useState } from 'react';
import { useRouter } from 'next/router';

export const SearchComponent: FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>('');
  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setQuery(value);
    router.push(`${router.route}?q=${value}`);
  };
  return (
    <div className='field'>
      <div className='control'>
        <input
          className='input'
          value={query}
          onChange={handleChange}
          placeholder='Buscar...'
        />
      </div>
    </div>
  );
};
