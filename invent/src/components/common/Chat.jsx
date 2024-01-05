import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";
import { getMessagesAxios } from "../../api/commonApi";

function Chat() {
  const user = useSelector((state) => state.userReducer.user);

  console.log(user);

  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    console.log("dddddddddddddddddddddddddddddddddddddddd");
    try {
      if (user) {
        const res = await getMessagesAxios(user.mentor.user.id);
        setMessages(res.data);
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchMessages();
      const newSocket = new WebSocket(
        `wss://invent.lojlee.shop/ws/chat/${user.user.id}/${user.mentor.user.id}/`
      );
      setSocket(newSocket);

      newSocket.onopen = () => console.log("WebSocket connected");
      newSocket.onclose = () => console.log("WebSocket disconnected");

      // Clean up the WebSocket connection when the component unmounts
      return () => {
        newSocket.close();
      };
    }
  }, []);

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, data]);
      };
    }
  }, [socket]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message && socket) {
      const data = {
        message: message,
      };
      socket.send(JSON.stringify(data));
      setMessage("");
    }
  };

  return (
    <>
      <NavBar />


      {/*  ---------------------------------   */}

      <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
          {user && (
            <div className="relative flex items-center space-x-4">
              <div className="relative">
                <span className="absolute text-green-500 right-0 bottom-0">
                  <svg width={20} height={20}>
                    <circle cx={8} cy={8} r={8} fill="currentColor" />
                  </svg>
                </span>
                <img
                  src={user.mentor.profile_picture}
                  alt=""
                  className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <div className="text-2xl mt-1 flex items-center">
                  <span className="text-gray-700 mr-3 uppercase">
                    {user.mentor.user.first_name}
                  </span>
                </div>
                <span className="text-lg text-gray-600">Mentor</span>
              </div>
            </div>
          )}
        </div>
        <div
          id="messages"
          className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
          {messages.map((item, key) => (
            <React.Fragment key={key}>
              {item.sender !== user.user.id ? (
                <div className="chat-message">
                  <div className="flex items-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                      <div>
                        <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                          {item.message}
                        </span>
                      </div>
                    </div>
                    <img
                      src={user.mentor.profile_picture}
                      alt="My profile"
                      className="w-6 h-6 rounded-full order-1"
                    />
                  </div>
                </div>
              ) : (
                <div className="chat-message">
                  <div className="flex items-end justify-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                      <div>
                        <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                          {item.message}
                        </span>
                      </div>
                    </div>
                    <img
                      src={user.profile_picture}
                      alt="My profile"
                      className="w-6 h-6 rounded-full order-2"
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
          
          <form onSubmit={handleSubmit} className="relative flex">
            <input
              type="text"
              placeholder="Write your message!"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
            />
            <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
              >
                <span className="font-bold">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 ml-2 transform rotate-90"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
            </form>
          
        </div>
      </div>
    </>
  );
}

export default Chat;
