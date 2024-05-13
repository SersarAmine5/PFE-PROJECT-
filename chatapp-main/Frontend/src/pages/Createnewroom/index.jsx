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
      <div className="flex w-full flex-col items-center gap-50 bg-gray-50 pb-45 md:pb-5">
        <Header className="self-stretch bg-gradient-to-r from-blue-500 to-blue-800" />
        <div className="container-xs px-7 md:p-5 sm:px-5">
          <div className="flex flex-col items-center gap-7">
            <Heading size="lg" as="h1" className="rounded-10 bg-blue-gray-200 px-35 py-0.5 tracking-tight sm:px-5">
              Create
            </Heading>
            <div className="flex flex-col items-end self-stretch">
              <div className="mr-9 flex w-full md:mr-0 flex-col gap-1">
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
              </div>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank" rel="noopener noreferrer">
                <Button
                  size="md"
                  variant="gradient"
                  color="blue to indigo"
                  className="rounded-22 font-bold tracking-wider"
                >
                  Create new room
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
