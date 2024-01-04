import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "../common/NavBar";
import { useLocation } from "react-router-dom";
import { getMessagesAxios } from "../../api/commonApi";

function MentorChat() {
  const user = useSelector((state) => state.userReducer.user);

  const webSocket  = import.meta.env.VITE_APP_WEBSOCKET_URL;

  console.log('==============user=============',user);

  const location = useLocation()
  const data = location.state

  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    console.log("dddddddddddddddddddddddddddddddddddddddd");
    try {
      if (user) {
        const res = await getMessagesAxios(data.id);
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
        `${webSocket}/${user.user.id}/${data.id}/`
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
    <NavBar/>
    <div className="flex h-screen overflow-hidden">
  {/* Sidebar */}
  <div className="w-1/4 bg-white border-r border-gray-300">
    {/* Sidebar Header */}
    <header className="p-4 border-b border-gray-300 flex justify-between items-center bg-indigo-600 text-white">
      <h1 className="text-2xl font-semibold">Chat Web</h1>
      <div className="relative">
        <button id="menuButton" className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-100"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path d="M2 10a2 2 0 012-2h12a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2z" />
          </svg>
        </button>
        {/* Menu Dropdown */}
        <div
          id="menuDropdown"
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden"
        >
          <ul className="py-2 px-3">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:text-gray-400"
              >
                Option 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:text-gray-400"
              >
                Option 2
              </a>
            </li>
            {/* Add more menu options here */}
          </ul>
        </div>
      </div>
    </header>
    {/* Contact List */}
    {user && (
    <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
      <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
          <img
            src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold">hiiiii</h2>
          <p className="text-gray-600">Hoorayy!!</p>
        </div>
      </div>
    </div>
    )}
  </div>
  {/* Main Chat Area */}
  <div className="flex-1">
    {/* Chat Header */}
    <header className="bg-white p-4 text-gray-700">
      <h1 className="text-2xl font-semibold">Alice</h1>
    </header>
    {/* Chat Messages */}
    <div className="h-screen overflow-y-auto p-4 pb-36">
      {/* Incoming Message */}

      {messages.map((item, key) => (
  <React.Fragment key={key}>
    {item.sender !== user.user.id ? (
      <div className="flex mb-4 cursor-pointer">
        <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
          <img
            src={user.profile_picture}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
          <p className="text-gray-700">{item.message}</p>
        </div>
      </div>
    ) : (
      /* Outgoing Message */
      <div className="flex justify-end mb-4 cursor-pointer">
        <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
          <p>{item.message}</p>
        </div>
        <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
          <img
            src={user.profile_picture}
            alt="My Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    )}
  </React.Fragment>
))}
    </div>
    {/* Chat Input */}
    <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4">
      
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">Send</button>
      </form>
    </footer>
  </div>
</div>

    </>
  );
}

export default MentorChat;
