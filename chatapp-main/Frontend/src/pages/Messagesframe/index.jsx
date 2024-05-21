import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import { Img, Input, Text, Heading, Button } from "../../components";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function MessagesframePage() {
  const messagesEndRef = useRef(null);

  const [newMessage, setNewMessage] = useState("");

  const [messages, setMessages] = useState([]);
  const [messagesError, setmessagesError] = useState(null);
  const [isMessagesLoading, setIsMessagesLoading] = useState(true);

  const [room, setRoom] = useState([]);
  const [roomError, setRoomError] = useState(null);
  const [isRoomLoading, setIsRoomLoading] = useState(true);

  const { topicId, roomId } = useParams();

  console.log("[params]:", topicId, roomId);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
 
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/rooms/${roomId}`,
          {
            withCredentials: true,
          }
        );

        setRoom(response.data);
        setIsRoomLoading(false);

        console.log("[room]:", response.data);
      } catch (err) {
        setRoomError("Something went wrong!");
        setIsRoomLoading(false);
      }
    };

    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/rooms/${roomId}/messages`,
          {
            withCredentials: true,
          }
        );

        setMessages(response.data);
        setIsMessagesLoading(false);

        console.log("[room]:", response.data);
      } catch (err) {
        setRoomError("Something went wrong!");
        setIsMessagesLoading(false);
      }
    };

    // fetchMessages();
    fetchRoom();
    // const initialMessages = Array.from({ length: 20 }, (_, i) => {
    //   const baseTime = new Date("2024-05-04T20:15:00"); // Base time for the first message
    //   baseTime.setMinutes(baseTime.getMinutes() + i); // Increment minutes by the index

    //   const formattedTime = baseTime.toTimeString().substring(0, 5); // Format to "HH:MM"

    //   return {
    //     content: `Message ${i + 1}: Content of the message here.`,
    //     timestamp: formattedTime,
    //     outgoing: i % 2 === 0,
    //   };
    // });
    // setMessages(initialMessages);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const baseTime = new Date();
      const formattedTime = baseTime.toTimeString().substring(0, 5); // Format to "HH:MM"
      const message = {
        content: newMessage,
        timestamp: formattedTime,
        outgoing: true,
      };
      setMessages([...messages, message]);
      setNewMessage(""); // Clear the input field
    }
  };

  if (isRoomLoading)
    return (
      <div>
        <div>Data is Loading..</div>
      </div>
    );

  if (roomError)
    return (
      <div>
        <div>Eror fetchinf data.</div>
      </div>
    );

  return (
    <>
      <Helmet>
        <title>Join the Discussion on Our Message Board | SiteName</title>
        <meta
          name="description"
          content="Dive into detailed conversations about health and prevention. Discuss the importance of vaccination and share personal insights with a supportive online community."
        />
      </Helmet>

      <div className="flex flex-col h-screen w-full ">
        <Header className="bg-gradient" />

        <div
          className="flex flex-col flex-grow mx-auto w-[97%] md:w-full md:p-5"
          style={{ marginTop: "20px" }}
        >
          <div className="flex items-center gap-x-4 w-full md:flex-col">
            <Button className="min-w-[88px] rounded-full bg-gray-300 font-extrabold py-2 px-4">
              Rooms
            </Button>
            <div className="flex flex-1 items-start justify-center bg-white-A700 px-2 pt-2 rounded-lg shadow-sm md:w-full">
              <Img
                src="images/img_room_pic.png"
                alt="room image"
                className="h-14 w-1/20 object-cover md:w-full ml-[-80]"
              />
              <div className="flex flex-col w-11/12 md:w-full">
                <div className="flex justify-between items-start gap-x-6 ml-[80]">
                  <Heading
                    size="s"
                    className="mb-2 text-gray-900 tracking-tight"
                  >
                    {room.title}
                  </Heading>
                </div>
              </div>
            </div>
            <Img
              src="images/img_rewind.svg"
              alt="rewind icon"
              className="h-8 md:w-full"
            />
          </div>

          <div
            className="flex-grow overflow-y-auto w-full px-2"
            style={{
              maxHeight: "calc(100vh - 200px)",
              paddingBottom: "60px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>
              {`/* Hide scrollbar for Chrome, Safari and Opera */
              .w-full::-webkit-scrollbar {
                display: none;
              }

              /* Hide scrollbar for IE, Edge and Firefox */
              .w-full {
                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none;  /* Firefox */
              }`}
            </style>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.outgoing ? "justify-end" : "justify-start"
                } my-2`}
              >
                <div
                  className={`flex flex-col gap-y-1 max-w-[80%] p-3 rounded-lg shadow-md ${
                    msg.outgoing ? "bg-blue-500 mr-4" : "bg-gray-400 ml-4"
                  }`}
                >
                  <Text className="text-white break-words">{msg.content}</Text>
                  <Text size="xs" className="text-white self-end">
                    {msg.timestamp}
                  </Text>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white px-4 py-2 shadow-md">
          <div className="flex items-center gap-3">
            <Input
              color="gray_100"
              size="md"
              shape="round"
              name="Message Input"
              placeholder="Start typing your message..."
              prefix={
                <Img
                  src="images/img_clock.svg"
                  alt="clock"
                  className="h-5 w-7 mr-2"
                />
              }
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-grow rounded-md py-2 px-4 bg-gray-100 text-gray-900"
            />
            <Button
              className="bg-blue-500 rounded-lg p-2"
              onClick={handleSendMessage}
            >
              <Img src="images/img_send_2.png" alt="send" className="h-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
