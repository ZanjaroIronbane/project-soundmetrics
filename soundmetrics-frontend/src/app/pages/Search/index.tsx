import {
  Autocomplete,
  Checkbox,
  FormControlLabel,
  Select,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useSpotifySearchQuery } from '../../api/search';
import debounce from 'lodash/debounce';
import uniq from 'lodash/uniq';
import type { SearchTypes } from './types';

const Search = () => {
  const [searchString, setSearchString] = useState<string>('');
  const [searchTypes, setSearchTypes] = useState<SearchTypes>([]);

  const { data } = useSpotifySearchQuery({
    q: searchString,
    type: searchTypes.join(','),
    limit: 20,
    // include_external: 'audio',
  });

  console.log(data);

  const handleSearchStringChange = debounce((e) => {
    const { value } = e.target;

    setSearchString(value);
  }, 300);

  return (
    <div>
      <Autocomplete
        options={[]}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Artist name"
            onChange={handleSearchStringChange}
          />
        )}
        color=""
      />

      <FormControlLabel
        label="Artist"
        control={
          <Checkbox
            checked={searchTypes.includes('artist')}
            onChange={(_) =>
              setSearchTypes((prev) => uniq([...prev, 'artist']))
            }
          />
        }
      />
    </div>
  );
};

export default Search;
