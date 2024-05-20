import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Input, Heading } from '../../components';
import Header from '../../components/Header';
import axios from 'axios';

export default function TopicsframePage() {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('http://localhost:8800/api/topic/topics', {
          withCredentials : true
        });
        setTopics(response.data);
        setIsLoading(false);
      } catch (err) {
        setError('Something went wrong!');
        setIsLoading(false);
      }
    };

    fetchTopics();
  }, []);

  const handleSearchChange = (e) => {
    setSearchBarValue(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Explore Various Topics in Our Topics List | SiteName</title>
        <meta
          name="description"
          content="Join the conversation on a wide range of topics in our Topics. Search and participate in discussions that interest you. Engage with experts and enthusiasts alike."
        />
      </Helmet>
      <div className="flex flex-col items-center w-full min-h-screen bg-gray-50 p-0 m-0">
        <Header className="w-full bg-gradient-to-r from-blue-500 to-blue-800" />
        <div className="mt-5 flex w-full max-w-4xl flex-col items-center gap-4 px-5">
          <Heading size="lg" as="h1" className="w-full text-center text-xl font-semibold m-8">
            Topics
          </Heading>
          <div className="flex w-full items-center gap-2">
            <Input
              value={searchBarValue}
              onChange={handleSearchChange}
              placeholder="Search in topics"
              className="flex-grow rounded-full border-2 border-gray-300 px-4 py-2"
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            {isLoading ? (
              "loading"
            ) : error ? (
              "Something went wrong!"
            ) : (
              topics.map((topic, index) => (
                <Button
                  key={index}
                  className="w-full rounded-lg bg-white px-4 py-2 text-left text-gray-900 shadow hover:bg-gray-200 hover:shadow-md transition"
                >
                  {topic.name}
                </Button>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}