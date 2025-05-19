import React from 'react';
import {
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, onToggle, onDelete }) => (
  <ListItem
    secondaryAction={
      <IconButton edge="end" aria-label="delete" onClick={() => onDelete(todo.id)}>
        <DeleteIcon />
      </IconButton>
    }
    disablePadding
  >
    <Checkbox
      edge="start"
      checked={todo.completed}
      onChange={() => onToggle(todo.id)}
      tabIndex={-1}
      disableRipple
    />
    <ListItemText
      primary={
        <Typography
          variant="body1"
          sx={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? 'text.secondary' : 'text.primary',
          }}
        >
          {todo.text}
        </Typography>
      }
    />
  </ListItem>
);

export default TodoItem;
