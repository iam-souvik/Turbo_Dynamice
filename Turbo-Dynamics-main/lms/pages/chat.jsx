import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import io from "socket.io-client";

var Message = {
  author: "",
  message: "",
};
export default function Chat() {
  const [username, setUsername] = useState("");
  const [chosenUsername, setChosenUsername] = useState("");
  const [landing, setLanding] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    // We just call it because we don't need anything else out of it
    await fetch("/api/socketio");

    let socket = io();

    socket.on("newIncomingMessage", (msg) => {
      setMessages((currentMsg) => [
        ...currentMsg,
        { author: msg.author, message: msg.message },
      ]);
      console.log(messages);
    });
  };

  const sendMessage = async () => {
    let socket = io();
    socket.emit("createdMessage", { author: chosenUsername, message });
    setMessages((currentMsg) => [
      ...currentMsg,
      { author: chosenUsername, message },
    ]);
    setMessage("");
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      if (message) {
        sendMessage();
      }
    }
  };

  return (
    <div className="flex items-center  mx-auto min-h-screen justify-center bg-teal-500">
      <main className="gap-4 flex flex-col items-center justify-center w-full h-full">
        {landing == true ? (
          <>
            <h1 className="text-4xl">User Support Panel</h1>
            <img
              className="h-64"
              src="https://img.freepik.com/free-vector/man-engineer-working-computer-server-rack-switchboard-guy-switching-panel-cabinet-with-plugged-ethernet-optical-cables-telecommunications-engineering-concept-flat-illustration_74855-20639.jpg?w=2000"
              alt="support"
            />
            <Button
              onClick={() => setLanding(!landing)}
              className="mb-10 mt-10"
              colorScheme="teal"
              variant="outline"
            >
              Click to Connect With Admin
            </Button>
          </>
        ) : !chosenUsername ? (
          <>
            <h3 className="font-bold text-white text-xl">
              Please Enter Your Username
            </h3>
            <input
              type="text"
              placeholder="Identity..."
              value={username}
              className="p-3 rounded-md outline-none"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button
              onClick={() => {
                setChosenUsername(username);
              }}
              className="bg-white rounded-md px-4 py-2 text-xl"
              colorScheme="teal"
              variant="outline"
            >
              Connect !
            </Button>
          </>
        ) : (
          <>
            <p className="font-bold text-white text-xl">
              Your Username: {username}
            </p>
            <div className="flex flex-col justify-end bg-white h-[20rem] min-w-[33%] rounded-md shadow-md ">
              <div className="h-full last:border-b-0 overflow-y-scroll bg-blue-200">
                {messages.map((msg, i) => {
                  return (
                    <div
                      className="w-full py-1 px-2 border-b border-gray-200 bg-blue-500 text-black"
                      key={i}
                    >
                      {msg.author} : {msg.message}
                    </div>
                  );
                })}
              </div>
              <div className="border-t border-gray-300 w-full flex rounded-bl-md bg-blue-500 ">
                <input
                  type="text"
                  placeholder="New message..."
                  value={message}
                  className="outline-none py-2 px-2 rounded-bl-md flex-1 bg-blue-500 text-black"
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={handleKeypress}
                />
                <div className="border-l border-gray-300 bg-blue-500 flex justify-center items-center rounded-br-md">
                  <Button
                    className="text-black px-3 h-full bg-blue-500"
                    onClick={() => {
                      sendMessage();
                    }}
                  >
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
