import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import { Img, Input, Text, Heading, Button } from "../../components";

export default function MessagesframePage() {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const messages = Array.from({ length: 20 }, (_, i) => ({
    content: `Message ${i + 1}: Content of the message here.`,
    timestamp: "20:15",
    outgoing: i % 2 === 0
  }));

  return (
    <>
      <Helmet>
        <title>Join the Discussion on Our Message Board | SiteName</title>
        <meta
          name="description"
          content="Dive into detailed conversations about health and prevention. Discuss the importance of vaccination and share personal insights with a supportive online community."
        />
      </Helmet>

      <div className="flex flex-col w-full bg-[#EBE6E6] pb-6">
        <Header className="bg-gradient" />

        <div className="mx-auto w-[97%] md:w-full md:p-5" style={{ paddingBottom: '60px' , marginTop: '20px' }}>
          <div className="flex flex-col items-center gap-y-12 md:flex-col md:gap-y-6">
            <div className="flex items-center gap-x-4 w-full md:flex-col">
              <Button className="min-w-[88px] rounded-full bg-gray-300 font-extrabold py-2 px-4">
                Rooms
              </Button>
              <div className="flex flex-1 items-start justify-center bg-white-A700 px-2 pt-2 rounded-lg shadow-sm md:w-full">
                <Img src="images/img_room_pic.png" alt="room image" className="h-14 w-1/20 object-cover md:w-full" />
                <div className="flex flex-col w-11/12 md:w-full">
                  <div className="flex justify-between items-start gap-x-6">
                    <Heading size="s" className="mb-2 text-gray-900 tracking-tight">
                      Pourquoi la grippe est fatale pour l'humain ?
                    </Heading>
                    <div className="flex gap-x-1.5">
                      <Img src="images/img_call.svg" alt="call icon" className="h-6 w-6" />
                      <Img src="images/img_grid.svg" alt="grid icon" className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <div className="h-4 w-4 bg-green-600 rounded-lg"></div>
                    <Text size="md" className="text-gray-400">
                      15 users online
                    </Text>
                  </div>
                </div>
              </div>
              <Img src="images/img_rewind.svg" alt="rewind icon" className="h-8 md:w-full" />
            </div>

            <div className="w-full overflow-y-auto max-h-[calc(100vh-140px)] px-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
                <div key={index} className={`flex items-end ${msg.outgoing ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex flex-col gap-y-1 max-w-[80%] p-3 rounded-lg ${msg.outgoing ? 'bg-blue-500' : 'bg-gray-700'}`}>
                    <Text className="text-white">
                      {msg.content}
                    </Text>
                    <Text size="xs" className="text-gray-300 self-end">{msg.timestamp}</Text>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 px-4 py-2 shadow-md">
          <div className="flex items-center gap-3">
            <Input
              color="gray_200"
              size="md"
              shape="round"
              name="Message Input"
              placeholder="Start typing your message..."
              prefix={<Img src="images/img_clock.svg" alt="clock" className="h-5 w-7" />}
              className="flex-grow rounded-md py-2 px-4 bg-gray-700 text-white"
            />
            <Button className="bg-blue-500 rounded-lg p-2">
              <Img src="images/img_send_2.png" alt="send" className="h-6" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
