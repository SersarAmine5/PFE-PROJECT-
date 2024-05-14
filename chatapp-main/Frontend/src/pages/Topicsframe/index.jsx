import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Img, Input, Heading } from '../../components';
import Header from '../../components/Header'; // Make sure this is the correct path

export default function TopicsframePage() {
  const [searchBarValue, setSearchBarValue] = useState("");

  return (
    <>
      <Helmet>
        <title>Explore Various Topics in Our Topics List | SiteName</title>
        <meta
          name="description"
          content="Join the conversation on a wide range of topics in our Topics. Search and participate in discussions that interest you. Engage with experts and enthusiasts alike."
        />
      </Helmet>
      {/* Resetting default margin and padding */}
      <div className="flex flex-col items-center w-full min-h-screen bg-gray-50 p-0 m-0">
        {/* Header with full width */}
        <Header className="w-full bg-gradient-to-r from-blue-500 to-blue-800" />

        <div className="mt-5 flex w-full max-w-4xl flex-col items-center gap-4 px-5">
          
          <Heading size="lg" as="h1" className="w-full text-center text-xl font-semibold m-8">
            Topics
          </Heading>
          
          <div className="flex w-full items-center gap-2">
            <Input
              placeholder="Search in topics"
              className="flex-grow rounded-full border-2 border-gray-300 px-4 py-2"
            />

          </div>
          
          <div className="flex w-full flex-col gap-2">
  {Array.from({ length: 30 }).map((_, index) => (
    <Button
      key={index}
      className="w-full rounded-lg bg-white px-4 py-2 text-left text-gray-900 shadow hover:bg-gray-200 hover:shadow-md transition"
    >
      Topic {index + 1}
    </Button>
  ))}
</div>

          
        </div>
      </div>
    </>
  );
}
