import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import IconTextField from './IconTextField';

export default function AutoCompletTextField(props) {
  var myicon = props.iconEnd;
  var label = props.label;
  var dataProps = props.data;
  var items = props.items;
  return (
    <Autocomplete
      options={dataProps}
      getOptionLabel={(option) => items}
      renderInput={(params) => <TextField {...params} label={label} />}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(items, inputValue);
        const parts = parse(items, matches);

        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
    />
  );
}
