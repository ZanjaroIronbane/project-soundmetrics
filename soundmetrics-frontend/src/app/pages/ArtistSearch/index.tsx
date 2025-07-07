import { Autocomplete, Select, TextField } from '@mui/material';

const ArtistSearch = () => {
  return (
    <div>
      <Select />
      <Autocomplete
        options={[]}
        renderInput={(params) => <TextField {...params} label="Artist name" />}
      />
    </div>
  );
};

export default ArtistSearch;
