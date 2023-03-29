import React from "react";
import Avatar from "../../assets/avatar-new.svg";
import Input from "../../components/Input";

export default function Dashboard() {
  const contacts = [
    {
      name: "John",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Mary",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Alex",
      status: "Available",
      img: Avatar,
    },
    {
      name: "JohnMard",
      status: "Available",
      img: Avatar,
    },
    {
      name: "MaryQuy",
      status: "Available",
      img: Avatar,
    },
    {
      name: "Adam",
      status: "Available",
      img: Avatar,
    },
  ];
  return (
    <div className="w-screen flex">
      <div className="w-[25%] border h-screen bg-secondary">
        <div className="flex  items-center mx-14 py-8">
          <img
            src={Avatar}
            width={75}
            height={75}
            className="border p-[2px] rounded-full"
          />
          <div className="ml-8">
            <h3 className="text-2xl">Tutorials Dev</h3>
            <p className="text-lg font-light">My Account</p>
          </div>
        </div>
        <hr />
        <div className="mx-14 mt-10">
          <div className="text-primary text-lg">Messages</div>
          <div className="">
            {contacts.map(({ name, status, img }) => {
              return (
                <div className="flex items-center py-8 border-b border-b-gray-300">
                  <div className="cursor-pointer flex items-center"></div>
                  <img
                    src={img}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-sm font-light text-gray-600">{status}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[55%] h-screen bg-white flex flex-col items-center ">
        <div className="w-[75%] bg-secondary h-[80px]  rounded-full flex items-center px-14 mt-8">
          <div className="cursor-pointer">
            <img
              src={Avatar}
              width={60}
              height={60}
              className="border p-[2px] rounded-full"
            />
          </div>
          <div className="ml-6 mr-auto">
            <h3 className="text-lg font-semibold">Alexander</h3>
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
        <div className="h-[75%]  w-full overflow-y-scroll border-b">
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
        <div className="p-14">
          <Input placeholder="Type a message...." className="w-full" />
        </div>
      </div>
      <div className="w-[25%] border  h-screen"></div>
    </div>
  );
}
