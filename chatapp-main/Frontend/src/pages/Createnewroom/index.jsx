import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input, Heading } from '../../components';
import Header from '../../components/Header';

export default function CreateNewRoomPage() {
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
            />
            <Input
              size="sm"
              shape="round"
              type="text"
              name="Room Description Input"
              placeholder="Room description*"
              className="w-full border border-solid border-gray-300 font-inter text-gray-900"
            />
            <Button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
              variant="fill"
              color="blue_500"
              shape="round"
              size="md"
            >
              Create new room
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
