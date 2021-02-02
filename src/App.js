import React, { useState, useEffect } from "react";
import { FormControl, Input } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import "./App.css";
import { db, timestamp } from "./firebase";
import Message from "./Message";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  // console.log("Check Send Message:", input);
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("Messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
      });
  }, []);
  // console.log("Messages :", messages);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);
  // console.log("Username :", username);

  const sendMessage = (event) => {
    event.preventDefault();
    // console.log("Event :", event);
    db.collection("Messages").add({
      message: input,
      timestamp: timestamp,
      username: username,
    });
    setInput("");
  };
  return (
    <div className="App">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/1024px-Facebook_Messenger_logo_2020.svg.png"
        alt="Messenger Logo"
      />
      <h1>Messenger</h1>
      <p>
        The
        <strong> MK</strong> Productions
      </p>
      <h2>Welcome {username}</h2>
      <form className="app_form">
        <FormControl className="app_formcontrol">
          <Input
            placeholder="Type a message here"
            className="app_input"
            onChange={(event) => setInput(event.target.value)}
            value={input}
          />
          <IconButton
            varient="contained"
            color="primary"
            type="submit"
            className="app_iconbutton"
            disabled={!input}
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ message, id }) => {
          return <Message key={id} message={message} username={username} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
