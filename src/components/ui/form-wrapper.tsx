"use client";

import { useState } from "react";
import { Input } from "./input";
import Button from "./button";

export default function FormWrapper() {
  const [selectedRoom, setSelectedRoom] = useState<"create" | "join">("join");

  function handleRoomSelection(room: "create" | "join") {
    setSelectedRoom(room);
  }

  return (
    <div className="max-w-[600px] w-full p-4 py-8">
      <div className="flex mx-auto items-center space-x-6 text-center">
        <span
          className={`cursor-pointer w-1/2 p-4 rounded-t-md bg-white bg-opacity-20 backdrop-blur-sm drop-shadow-lg" ${
            selectedRoom === "join" && " bg-white bg-opacity-100 text-primary"
          }`}
          onClick={() => handleRoomSelection("join")}
        >
          Join
        </span>
        <span
          className={`cursor-pointer w-1/2 p-4 rounded-t-md bg-white bg-opacity-20 backdrop-blur-sm drop-shadow-lg" ${
            selectedRoom === "create" && "bg-white bg-opacity-100 text-primary"
          }`}
          onClick={() => handleRoomSelection("create")}
        >
          New Meeting
        </span>
      </div>

      <div className="space-y-5 bg-white bg-opacity-20 backdrop-blur-sm rounded-b-md drop-shadow-lg p-4 py-6">
        {selectedRoom === "join" ? (
          <>
            <Input placeholder="Your name" type="text" />
            <Input placeholder="Meeting code" type="text" />
            <Button title="Join" type="submit" />
          </>
        ) : (
          <div className="space-y-20">
            <Input placeholder="Your name" type="text" />

            <Button title="Create Room" type="submit" />
          </div>
        )}
      </div>
    </div>
  );
}
