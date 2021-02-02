import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div className={`message ${isUser && "message_user"}`} ref={ref}>
      <Card className={isUser ? "message_usercard" : "message_guestcard"}>
        <CardContent>
          <Typography variant="h5" component="h2">
            <strong className="users">
              {!isUser && `${message.username || "Unknown user"} : `}
            </strong>
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
