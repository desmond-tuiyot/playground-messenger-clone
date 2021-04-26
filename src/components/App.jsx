import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";

import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState({});

  useEffect(() => {
    setUserName(prompt("Please enter your name"));
  }, []);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { userName, input }]);
  };

  return (
    <div>
      <Typography variant="h3">Messenger</Typography>
      <FormControl>
        <InputLabel htmlFor="message-input">Enter a message...</InputLabel>
        <Input
          id="message-input"
          value={input}
          aria-describedby="message-input-helper"
          onChange={handleChange}
        />
        <Button
          disabled={input.length === 0}
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}
        >
          Send Message
        </Button>
      </FormControl>
      {messages.map((message, index) => (
        <Message
          key={index}
          userName={message.userName}
          message={message.input}
        />
      ))}
    </div>
  );
}

export default App;
