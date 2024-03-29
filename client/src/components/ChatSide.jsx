import React, { useState } from "react";
import {
  SparklesIcon,
  HashtagIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserPlusIcon,
  ArrowRightStartOnRectangleIcon,
  UserCircleIcon,
  PlusCircleIcon,
  InformationCircleIcon,
  FaceSmileIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import ChatBox from "./ChatBox";

const ChatSide = () => {
  const [infoShow, setInfoShow] = useState(false);

  const showInfo = () => {
    setInfoShow((showing) => !showing);
  };

  return (
    <div className="h-full transition-all  text-white bg-yellow-300 w-full mx-auto flex flex-row ">
      <div
        className={` transition-all bg-[#424549] ${
          infoShow ? "w-4/6" : "w-full"
        }`}
      >
        <div className="flex flex-row items-center justify-between px-5 py-2 bg-[#282b30]">
          <div>
            <span className="flex flex-row items-center gap-3">
              <UserCircleIcon className="w-20" />
              <span>
                <p>@uername</p>
                <p className="italic text-sm font-bold">status</p>
              </span>
            </span>
          </div>
          <button onClick={showInfo}>
            <InformationCircleIcon className="w-10" />
          </button>
        </div>
        <div className="h-[75%] overflow-y-auto bg-[#36393e]">
          <ChatBox />
        </div>
        <div className="buttons flex flex-row items-center justify-center gap-5      px-5 py-2 h-1/6 bg-[#282b30]">
          <div className="flex flex-row p-1 rounded-full  gap-1  ring-2 ring-[#ffff] focus:ring-blue-500 w-[85%] items-center">
            <button className="emojis bg-[#1e2124] rounded-full px-3 py-3  border-2 border-white">
              <FaceSmileIcon className="w-7" />
            </button>
            <input
              type="text"
              placeholder="Enter your message..."
              className="w-[90%] text-lg outline-none p-2 bg-[#282b30]"
            />
          </div>
          <button>
            <PaperAirplaneIcon className="bg-gradient-to-l from-[#3e59b9] to-[#112f9c] rounded-full -rotate-45 p-2 w-12" />
          </button>
        </div>
      </div>

      <div
        className={`transition-all flex flex-col gap-10 items-center justify-between   bg-[#424549] ${
          !infoShow ? "w-[0]" : "w-2/6"
        }`}
      >
        <div
          className={`${
            !infoShow ? "w-[0]" : "w-full"
          } h-[80%] flex flex-col gap-10 items-center justify-between  my-auto`}
        >
          {infoShow && (
            <>
              <div className="flex flex-col items-center justify-center">
                <UserCircleIcon className="w-20 " />
                <h1>Chat/Channel name</h1>
              </div>

              <div>
                <h1>Members</h1>
                <span>@Ilyes, @brahim...</span>
              </div>
              <div className="flex flex-row gap-5 items-center justify-center w-[70%] mx-auto">
                <button className="bg-red-700 text-white px-3 py-2 rounded-full">
                  Delete Chat
                </button>
                <button>Modify Chat</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatSide;
