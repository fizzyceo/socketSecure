import React, { useEffect, useState } from "react";

const InivitationPopup = ({ isvisible, onClose }) => {
  const handleClose = (e) => {
    if (e.target?.id == "wrapper") {
      onClose();
    }
  };
  const [invitationsNumber, setinvitationsNumber] = useState(0);
  const [invitations, setinvitations] = useState([]);

  useEffect(() => {
    //fetch invites related to the current user, and only the pending ones
    setinvitations([
      { _id: 2, from: "@ilyes", name: "projet testing" },
      { _id: 2, from: "@amine", name: "projet integration" },
    ]);
  }, []);
  const acceptInvite = async (invite) => {
    //change the status from pending to accepted or rejected
  };
  if (!isvisible) return null;
  return (
    <div
      onClick={(e) => handleClose(e)}
      id="wrapper"
      className="fixed flex inset-0 bg-black bg-opacity-25  backdrop-blur-sm justify-center items-center"
    >
      <div className="w-[750px] flex-col flex">
        <button
          onClick={() => onClose()}
          className="text-white text-xl place-self-end"
        >
          X
        </button>
        <div className="bg-white flex flex-col gap-5 p-5 rounded-md">
          <h1 className="font-sans">
            Invites List{" "}
            <span className="bg-red-700 text-white py-1 rounded-full px-3">
              {invitations.length}
            </span>
          </h1>
          <ul className="flex flex-col gap-4">
            {invitations.map((invite) => (
              <li
                key={invite._id}
                className="flex flex-row items-center justify-between"
              >
                <p>
                  {" "}
                  <strong>{invite.from}</strong> has invited you to{" "}
                  <strong>{invite.name}</strong>
                </p>

                <div className="buttons flex flex-row gap-2">
                  <button className="bg-blue-500 p-3 rounded-lg text-white font-bold">
                    Accept
                  </button>
                  <button className="bg-red-500 p-3 rounded-lg text-white font-bold">
                    reject
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InivitationPopup;
