import axios from "axios";
import { useUserContext } from "contexts/user.context";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Heading, Img, Input, Text } from "../../components";
import Header from "../../components/Header";

function groupMessagesByDay(messages) {
  const groups = {};

  messages.forEach((message) => {
    const date = message.date_heure_envoie.split("T")[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(message);
  });

  return groups;
}

export default function MessagesframePage() {
  const messagesEndRef = useRef(null);
  const navigate = useNavigate(); // Ajout de useNavigate
  const { user } = useUserContext();

  const [newMessage, setNewMessage] = useState("");

  const [messages, setMessages] = useState([]);
  const [messagesError, setMessagesError] = useState(null);
  const [isMessagesLoading, setIsMessagesLoading] = useState(true);

  const [room, setRoom] = useState([]);
  const [roomError, setRoomError] = useState(null);
  const [isRoomLoading, setIsRoomLoading] = useState(true);

  const { topicId, roomId } = useParams();

  console.log("[user]", user)

  const handleDeleteRoom = async () => {
    try {
      if (!roomId || !topicId) {
        throw new Error("Invalid roomId or topicId");
      }
      await axios.delete(`http://localhost:8800/api/rooms/topics/${topicId}/${roomId}`, {
        withCredentials: true,
      });
      setRoom(null);
      navigate(`/topics/${topicId}`);
    } catch (error) {
      console.error('Failed to delete room:', error);
      navigate(-1);
    }
  };


  useEffect(() => {
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    scrollToBottom();
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

        console.log("[messages]:", response.data);
      } catch (err) {
        setMessagesError("Something went wrong!");
        setIsMessagesLoading(false);
      }
    };

    fetchRoom();
    fetchMessages();
  }, [roomId]);

  const handleSendMessage = async (event) => {
    event.preventDefault();

    if (!user) {
      return alert("Login to send messages.");
    }

    if (newMessage.trim() !== "") {
      const message = {
        contenu: newMessage,
        date_heure_envoie: new Date(),
        userId: user._id,
        userName: user.firstname, // Ajout du nom de l'utilisateur
        roomID: roomId,
      };

      try {
        const response = await axios.post(
          `http://localhost:8800/api/messages/messages`,
          message,
          {
            withCredentials: true,
          }
        );

        setMessages([...messages, response.data]);
        setNewMessage("");
      } catch (err) {
        console.error("Failed to send message", err);
      }
    }
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  if (isRoomLoading || isMessagesLoading) {
    return (
      <div>
        <div>Data is Loading..</div>
      </div>
    );
  }

  if (roomError || messagesError) {
    return (
      <div>
        <div>Error fetching data.</div>
      </div>
    );
  }

  const grouppedMessages = groupMessagesByDay(messages);

  console.log("[grouppedMessages]:", grouppedMessages);

  return (
    <>
      <Helmet>
        <title>Join the Discussion on Our Message Board | SiteName</title>
        <meta
          name="description"
          content="Dive into detailed conversations about health and prevention. Discuss the importance of vaccination and share personal insights with a supportive online community."
        />
      </Helmet>

      <div className="flex flex-col h-screen w-full">
        <Header className="bg-gradient" />
        <div
          className="flex flex-col flex-grow mx-auto w-[97%] md:w-full md:p-5"
          style={{ marginTop: "20px" }}
        >
          <div className="flex items-center gap-4 w-full md:flex-col">
            <Button
              size="xs"
              className="min-w-[88px] rounded bg-gray-300 font-extrabold py-2 px-4"
              onClick={() => navigate(-1)} // Ajout de la redirection en arrière
            >
              Retour
            </Button>
            {(user.role === "utilisateur expert" || user.role === "moderator" || user.role === "admin") && (
              <Button
                size="xs"
                className="min-w-[88px] rounded bg-gray-300 font-extrabold py-2 px-4"
                onClick={handleDeleteRoom}
              >
                supprimer
              </Button>
            )}
            <div className="flex flex-1 items-start justify-center bg-white-A700 px-2 pt-2 rounded-lg shadow-sm md:w-full">
              <Heading
                size="s"
                className="mb-2 text-gray-900 tracking-tight"
              >
                {room.title}
              </Heading>
            </div>
          </div>

          <div
            ref={messagesEndRef}
            className="mt-4 flex-grow overflow-y-auto w-full px-2"
            style={{
              maxHeight: "calc(100vh - 200px)",
              paddingBottom: "60px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {Object.keys(grouppedMessages).length === 0 ? (
              <div className="w-full flex flex-col item-center justify-center mt-16">
                <div className="text-2xl font-bold text-center">Aucun Message Disponible.</div>
                <div className="text-base font-medium text-center">Soyez le premier a envoyé un message sur cette room.</div>
              </div>
            ) : Object.keys(grouppedMessages).map((date, index) => {
              return (
                <div>
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center justify-center gap-2">
                    <div className="w-full h-[0.25px] rounded bg-gray-500"></div>
                    <div className="text-gray-500 text-xs" >{date}</div>
                    <div className="w-full h-[0.25px] rounded bg-gray-500"></div>
                  </div>
                  <div>
                    {grouppedMessages[date].map((msg) => {
                      return (
                        <div
                          key={index}
                          className={`flex ${msg.userId._id === user?._id ? "justify-end" : "justify-start"
                            } my-2`}
                        >
                          <div
                            className={`flex flex-col gap-y-1 max-w-[80%] p-3 rounded-lg shadow-sm ${msg.userId._id === user?._id
                              ? "bg-blue-500  mr-4"
                              : "bg-gray-400 ml-4"
                              }`}
                          >
                            <Text className="text-white-A700 font-extrabold text-xl">
                              {msg.userId.lastname + " " + msg.userId.firstname}
                            </Text>

                            <Text className="text-white-A700 break-words">{msg.contenu}</Text>
                            <Text size="xs" className="text-white-A700 self-end">
                              {formatTime(msg.date_heure_envoie)}
                            </Text>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white px-4 py-2 shadow-sm">
          <form
            onSubmit={handleSendMessage}
            className="flex items-center gap-3"
          >
            <Input
              color="gray_100"
              size="md"
              shape="round"
              name="Message Input"
              placeholder="Start typing your message..."
              prefix={
                <Img
                  src="/images/img_clock.svg"
                  alt="clock"
                  className="h-5 w-7 mr-2"
                />
              }
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-grow rounded-md py-2 px-4 bg-gray-100 text-gray-900"
            />
            <Button className="bg-blue-500 rounded-lg p-2">
              <Img src="/images/img_send_2.png" alt="send" className="h-5" />
            </Button>
          </form>
        </div>
      </div >
    </>
  );
}
