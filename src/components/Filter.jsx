import React from 'react';
import { ToggleButtonGroup, ToggleButton, Box } from '@mui/material';

const Filter = ({ current, onChange }) => {
  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      onChange(newFilter);
    }
  };

  return (
    <Box display="flex" justifyContent="center" mb={2}>
      <ToggleButtonGroup
        value={current}
        exclusive
        onChange={handleFilterChange}
        aria-label="filter"
      >
        <ToggleButton value="all" aria-label="all">
          All
        </ToggleButton>
        <ToggleButton value="completed" aria-label="completed">
          Completed
        </ToggleButton>
        <ToggleButton value="pending" aria-label="pending">
          Pending
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default Filter;
