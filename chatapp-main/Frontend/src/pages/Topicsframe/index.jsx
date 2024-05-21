import axios from "axios";
import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { Button, Input, Heading } from "../../components";

export default function TopicsframePage() {
  const navigate = useNavigate();

  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [searchBarValue, setSearchBarValue] = useState("");

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8800/api/topic/topics",
          {
            withCredentials: true,
          }
        );
        setTopics(response.data);
        setIsLoading(false);
      } catch (err) {
        setError("Something went wrong!");
        setIsLoading(false);
      }
    };

    fetchTopics();
  }, []);

  const handleSearchChange = (e) => {
    setSearchBarValue(e.target.value);
  };

  const handleTopicClick = (topicId) => {
    localStorage.setItem("selectedTopicId", topicId);
    navigate("/rooms/" + topicId); // Utiliser navigate à la place de history.push
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
          <Heading
            size="lg"
            as="h1"
            className="w-full text-center text-xl font-semibold m-8"
          >
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
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              topics
                .filter((topic) =>
                  topic.name
                    .toLowerCase()
                    .includes(searchBarValue.toLowerCase())
                )
                .map((topic) => (
                  <Button
                    key={topic._id}
                    onClick={() => handleTopicClick(topic._id)}
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
