import { Input, Container, Typography, Button, List } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export const TodoForm = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setInputValue("");
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
    <Container maxWidth="xs" sx={{ mt: 6 }}>
      <Typography component="h1" variant="h5" align="center" sx={{ mb: 5 }}>
        Welcome, here you can track your ongoing tasks
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          sx={{ mb: 10 }}
          fullWidth
          label="fullWidth"
          placeholder="What's next..."
          id="fullWidth"
          color="primary"
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          size="1rem"
          sx={{ ml: 19, mb: 5 }}
        >
          Add Task
        </Button>
      </form>
      <List sx={{ width: "100%" }}>
        <Typography component="p">
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => deleteTask(task.id)}
                size="small"
                color="warning"
              >
                Delete
              </Button>
            </li>
          ))}
        </Typography>
      </List>
      <Typography align="center">{`You have ${tasks.length} To-Dos`}</Typography>
    </Container>
  );
};

export default TodoForm;
