import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { Button, Input, Heading } from '../../components';
import Header from '../../components/Header';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function CreateNewRoomPage() {
  const [roomName, setRoomName] = useState('');
  const [roomDescription, setRoomDescription] = useState('');

  const navigate = useNavigate();

  const { topicId } = useParams();
  console.log("[params]:", topicId);

  const handleCreateRoom = async () => {
    try {
      await axios.post(`http://localhost:8800/api/rooms/topics/${topicId}/new`, {
        title: roomName,
        initialProblem: roomDescription,
        topicId: topicId
      }, {
        withCredentials: true,
      });
      navigate(`/topics/${topicId}`);
    } catch (error) {
      console.error('Failed to create room:', error);
      navigate(-1);
    }
  };

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleRoomDescriptionChange = (event) => {
    setRoomDescription(event.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Create Your Own Room | SiteName</title>
        <meta
          name="description"
          content="Start your own discussion by creating a new room. Share your knowledge, ask questions, and connect with users who share your interests."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-10 bg-gray-50 pb-10 md:pb-5 min-h-screen">
        <Header className="w-full bg-gradient" />
        <div className="container-xs px-7 md:p-5 sm:px-5 flex flex-col items-center">
          <Heading size="lg" as="h1" className="rounded-lg bg-blue-gray-200 px-8 py-1 tracking-tight sm:px-5 text-center m-10">
            Create
          </Heading>
          <div className="flex flex-col items-center gap-5 w-full max-w-md">
            <Input
              size="sm"
              shape="round"
              type="text"
              name="Room Name Input"
              placeholder="Room name*"
              className="w-full border border-solid border-gray-300 font-inter text-gray-900"
              value={roomName}
              onChange={handleRoomNameChange}
            />
            <Input
              size="sm"
              shape="round"
              type="text"
              name="Room Description Input"
              placeholder="Room description*"
              className="w-full border border-solid border-gray-300 font-inter text-gray-900"
              value={roomDescription}
              onChange={handleRoomDescriptionChange}
            />
            <Button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
              variant="fill"
              color="blue_500"
              shape="round"
              size="md"
              onClick={handleCreateRoom}
            >
              Create new room
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
