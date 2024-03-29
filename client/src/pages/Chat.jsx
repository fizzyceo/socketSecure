import React, { useEffect, useState } from "react";
import {
  SparklesIcon,
  HashtagIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserPlusIcon,
  ArrowRightStartOnRectangleIcon,
  UserCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import ChatSide from "../components/ChatSide";
import CreatePopup from "../components/CreatePopup";
import InivitationPopup from "../components/InvitationPopup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";

const Chat = () => {
  const [showAddChat, setShowAddChat] = useState(false);
  const [showInvites, setShowInvites] = useState(false);
  const [channelList, setChannelList] = useState([]);
  const [chatList, setChatList] = useState([]);
  const [chatSelected, setChatSelected] = useState(null);
  const logout = useAuth((state) => state.logout);
  const user = useAuth((state) => state.user);
  let navigate = useNavigate();
  const fetchChannels = async () => {
    //fetch chat table with type chat
    const response = await axios.post("http://localhost:5000/chat/get", {
      id: user.id,
      type: "channel",
    });
    console.log(response.data);
    setChannelList(response.data);
  };
  const fetchChats = async () => {
    //fetch channel table with type channel
    const response = await axios.post("http://localhost:5000/chat/get", {
      id: user.id,
      type: "chat",
    });
    setChatList(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchChats();
    fetchChannels();
  }, []);
  return (
    <div className="h-screen w-screen  overflow-y-hidden flex flex-row flex-wrap ">
      <div className="absolute h-screen w-screen top-0 right-0 -z-10 bg-[#1e2124]"></div>
      {/* <div className="bg-red-600 rounded-full w-80 h-80 blur-lg opacity-55 absolute right-11 top-4"></div>
      <div className="bg-blue-600 rounded-full w-80 h-80 blur-lg opacity-55 absolute left-11 top-4"></div>
      <div className="bg-green-600 rounded-full w-80 h-80 blur-lg opacity-20 absolute right-56 bottom-4"></div> */}
      <div className=" w-full relative md:w-[30%] bg-[#1e2124] text-[#99aab5] flex flex-col items-center gap-3 py-10">
        <div className="w-[90%] mx-auto flex flex-row items-center justify-between ">
          <h1 className="text-2xl text-start w-full p-3">Title</h1>
          <button
            onClick={() => setShowAddChat((pop) => !pop)}
            className=" w-64 p-3 rounded-full bg-gradient-to-l from-[#3e59b9] to-[#112f9c] text-xl text-white"
          >
            <span className="flex flex-row items-center gap-2">
              <PlusCircleIcon className="w-7" />
              <p>new Chat</p>
            </span>
          </button>
        </div>

        <div className="w-[95%] mx-auto">
          <div className="flex flex-row items-center justify-center my-5">
            <SparklesIcon className="w-7  " />

            <h1 className="text-xl text-start  w-full p-3 ">Channels</h1>
          </div>
          <div>
            {channelList.length > 0 ? (
              <ul className="w-[90%] mx-auto flex flex-col gap-2">
                {channelList.map((channel) => (
                  <li
                    key={channel.id}
                    onClick={() => setChatSelected(channel)}
                    className="flex flex-row items-center p-3 gap-2 rounded-full  hover:bg-[#33373a]"
                  >
                    <HashtagIcon className="w-5  " />
                    <p>{channel.Titre}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <li className="flex flex-row items-center p-3 gap-2 rounded-full ">
                <HashtagIcon className="w-5  " />
                <p>No channels...</p>
              </li>
            )}
          </div>
        </div>
        <div className="w-[95%] mx-auto">
          <div className="flex flex-row items-center justify-center my-5">
            <SparklesIcon className="w-7  " />

            <h1 className="text-xl text-start  w-full p-3 ">Chats</h1>
          </div>
          <div>
            {chatList.length > 0 ? (
              <ul className="w-[90%] mx-auto flex flex-col gap-2">
                {chatList.map((chat) => (
                  <li
                    key={chat.id}
                    onClick={() => setChatSelected(chat)}
                    className="flex flex-row items-center p-3 gap-2 rounded-full  hover:bg-[#33373a]"
                  >
                    <ChatBubbleOvalLeftEllipsisIcon className="w-5  " />
                    <p>{chat.Titre}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <li className="flex flex-row items-center p-3 gap-2 rounded-full ">
                <ChatBubbleOvalLeftEllipsisIcon className="w-5  " />
                <p>No chats...</p>
              </li>
            )}
          </div>
        </div>
        {/* <span className="flex flex-row w-full justify-between hover:bg-[#33373a] items-center"> */}
        <button
          onClick={() => setShowInvites((pop) => !pop)}
          className="flex flex-row w-full mx-auto px-3 rounded-full items-center justify-between hover:bg-[#33373a] my-2"
        >
          <span className="flex flex-row items-center justify-center my-2">
            <UserPlusIcon className="w-7  " />
            <h1 className="text-xl text-start  w-full p-3 ">Invitations</h1>
          </span>

          <p className="px-3 py-1 rounded-full text-white bg-red-700">5</p>
        </button>
        <div className="absolute bottom-0 w-full left-0">
          <div className="border-t border-slate-700 my-2 w-full"></div>
          <div className="w-full  flex flex-row items-center justify-between ">
            <div className="flex flex-row w-[95%] mx-auto items-center justify-center my-5">
              <UserCircleIcon className="w-10  " />

              <h1 className="text-xl text-start  w-full p-3 ">@username</h1>
            </div>
            <ArrowRightStartOnRectangleIcon
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="w-7 mx-5"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-full md:w-[70%] ">
        {chatSelected ? (
          <ChatSide
            name={chatSelected.Titre}
            type={chatSelected.type}
            selected={chatSelected.id}
          />
        ) : (
          <div className="flex items-center h-full w-full bg-slate-900 font-bold text-white italic font-sans text-xl">
            <p className=" font-bold text-white italic mx-auto font-sans text-xl ">
              no chat Selected Yet!
            </p>
          </div>
        )}
      </div>
      <InivitationPopup
        onClose={() => setShowInvites(false)}
        isvisible={showInvites}
      />
      <CreatePopup
        fetchChannels={fetchChannels}
        fetchChats={fetchChats}
        onClose={() => setShowAddChat(false)}
        isvisible={showAddChat}
      />
    </div>
  );
};

export default Chat;
