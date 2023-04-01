import React, { useEffect, useState } from "react";
import Avatar from "../../assets/avatar-new.svg";
import Input from "../../components/Input";

export default function Dashboard() {
  const contacts = [
    {
      name: "Minh",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Trang",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Dung",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Duy",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Duc",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Adam",
      status: "Available",
      img: Avatar,
    },
  ];
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user:detail"));
    const fetchConversations = async () => {
      const res = await fetch(
        `http://localhost:8000/api/conversation/${loggedInUser?.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resData = await res.json();
      setConversations(resData);
    };
    fetchConversations();
  }, []);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user:detail"))
  );
  const [conversations, setConversations] = useState([]);
  return (
    <div className="w-screen flex">
      <div className="w-[25%] border h-screen bg-secondary">
        <div className="flex  items-center mx-14 py-4">
          <img
            src={Avatar}
            width={75}
            height={75}
            className="border p-[2px] rounded-full"
          />
          <div className="ml-8">
            <h3 className="text-2xl">{user?.fullName}</h3>
            <p className="text-lg font-light">My Account</p>
          </div>
        </div>
        <hr />
        <div className="mx-14 mt-10">
          <div className="text-primary text-lg">Messages</div>
          <div className="">
            {
            conversations.length > 0 ?
            conversations.map(({ user, conversationId }) => {
              return (
                <div className="flex items-center py-4 border-b border-b-gray-300">
                  <div className="cursor-pointer flex items-center" onClick={() => console.log('hdhdhd')}>
                    <div>
                      <img
                        src={Avatar}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold">
                        {user?.fullName}
                      </h3>
                      <p className="text-sm font-light text-gray-600">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }) : <div className="text-center text-lg font-semibold mt-24">No conversations</div>}
          </div>
        </div>
      </div>
      <div className="w-[50%] h-screen bg-white flex flex-col items-center ">
        <div className="w-[75%] bg-secondary h-[80px]  rounded-full flex items-center px-14 my-10 shadow-md">
          <div className="cursor-pointer">
            <img
              src={Avatar}
              width={60}
              height={60}
              className="border p-[2px] rounded-full"
            />
          </div>
          <div className="ml-6 mr-auto">
            <h3 className="text-lg font-semibold">Quyt</h3>
            <p className="text-sm font-light text-gray-600">online</p>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-phone-outgoing"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
              <path d="M15 9l5 -5"></path>
              <path d="M16 4l4 0l0 4"></path>
            </svg>
          </div>
        </div>
        <div className="h-[75%]  w-full overflow-y-scroll border-b shadow-sm">
          <div className="p-14">
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem Ipsum is industry
            </div>
            <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem Ipsum is industry
            </div>
            <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem Ipsum is industry
            </div>
            <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <div className="max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6">
              Lorem Ipsum is industry
            </div>
            <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
          </div>
        </div>
        <div className="p-14 w-full flex items-center">
          <Input
            placeholder="Type a message...."
            className="w-[75%]"
            inputClassName="p-2 border-0 shadow-md rounded-full bg-secodary"
          />
          <div className="ml-2 p-2 cursor-pointer bg-light rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-send"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 14l11 -11"></path>
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
            </svg>
          </div>
          <div className="ml-2 p-2 cursor-pointer bg-light rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-circle-plus"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M9 12l6 0"></path>
              <path d="M12 9l0 6"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[25%] border  h-screen bg-light"></div>
    </div>
  );
}
