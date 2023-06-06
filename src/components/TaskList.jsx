import {
  Input,
  Container,
  Typography,
  Button,
  List, 
  Paper,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

export const TodoForm = () => {
  const [tasks, setTasks] = useState([]); 
  const [inputValue, setInputValue] = useState(''); 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };

      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };
  return (
    <Container maxWidth="xs" sx={{ mt: 10}} >
      <Typography component="h1" variant="h4" align="center" sx={{ mb: 5 }}>
      Welcome, here you can track your ongoing tasks
        <CheckCircleOutlineIcon
          color="secondary"
          sx={{ fontSize: 40, ml: 2 }}
        ></CheckCircleOutlineIcon>
      </Typography>
      <form  onSubmit={handleFormSubmit}>
        <Input
          type="text"
          value = {inputValue}
          onChange={handleInputChange}
          sx={{ mb: 10 }}
          fullWidth
          label="fullWidth"
          placeholder="What's next..."
          id="fullWidth"
          color="secondary"
        />
        <Button variant="contained" type="submit" color="secondary" size="1rem" sx={{ ml: 19 , mb: 5 }}>
          Add Task
        </Button>
      </form>
      <Paper elevation={7}>
      <List sx={{ width: '100%' }}>
        <Typography component="p" >
            {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <DeleteIcon onClick={() => deleteTask(task.id)} sx={{ fontSize: 20 }}></DeleteIcon>
          </li>
        ))}
        </Typography>
        </List>
        </Paper>
    </Container>

    
  );
};

export default TodoForm;
