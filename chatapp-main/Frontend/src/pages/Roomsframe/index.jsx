import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Input, Heading } from "../../components";
import Header from "../../components/Header"; // Assurez-vous que le chemin est correct

export default function RoomsframePage() {
  const handleCreateRoom = () => {
    window.location.href = `/topics/${topicId}/new`;
  };

  const [searchBarValue, setSearchBarValue] = useState("");
<<<<<<< Updated upstream
=======
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { topicId } = useParams();

  console.log("[topicId]:", topicId);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        if (!topicId) {
          setError("No topic selected");
          setIsLoading(false);
          return;
        }

        const response = await axios.get(
          `http://localhost:8800/api/topic/topics/${topicId}/rooms`
        );

        setRooms(response.data);
        console.log("[rooms]:", response.data);
        setIsLoading(false);
      } catch (err) {
        setError("Something went wrong!");
        setIsLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const handleSearchChange = (e) => {
    setSearchBarValue(e.target.value);
  };

  const handleRoomClick = (roomId) => {
    navigate(`/topics/${topicId}/${roomId}`); // Utiliser navigate à la place de history.push
  };
>>>>>>> Stashed changes

  return (
    <>
      <Helmet>
        <title>Explore Our Various Rooms List</title>
        <meta
          name="description"
          content="Join the conversation on a wide range of topics in our rooms. Search and participate in discussions that interest you. Engage with experts and enthusiasts alike."
        />
      </Helmet>
      {/* Structure de base pour toute la hauteur de l'écran */}
      <div className="flex flex-col h-screen w-full bg-gray-50 p-0 m-0">
        {/* En-tête avec largeur complète */}
        <Header className="w-full bg-gradient" />
        
        <div className="flex flex-col flex-grow w-full max-w-4xl mx-auto px-5 mt-5">
          <Heading
            size="lg"
            as="h1"
            className="w-full text-center text-xl font-semibold mb-8"
          >
            Rooms
          </Heading>

          <div className="flex items-center gap-2 mb-4">
            <Button className="self-start rounded-lg bg-gray-300 px-4 py-2 text-sm font-extrabold hover:bg-gray-400 hover:text-white transition duration-300 ease-in-out h-12">
              Topics
            </Button>

            <Input
              placeholder="Search in Rooms"
              className="flex-grow rounded-full border-2 border-gray-300 px-4 py-2"
            />
<<<<<<< Updated upstream
            <Button className="self-start rounded-lg bg-gray-300 hover:bg-gray-400 hover:text-white transition duration-300 ease-in-out p-2 text-white h-12">
              <Img src="images/plus.png" alt="Add room" className="h-6 w-6" />
=======
            <Button className="self-start rounded-lg bg-gray-300 hover:bg-gray-400 hover:text-white transition duration-300 ease-in-out p-2 text-white h-12"
              onClick={handleCreateRoom}>
              <Img src="/images/plus.png" alt="Add room" className="h-6 w-6" />
>>>>>>> Stashed changes
            </Button>
          </div>

          <div className="flex-grow overflow-y-auto hide-scroll-bar">
            {Array.from({ length: 30 }).map((_, index) => (
              <Button
                key={index}
                className="w-full rounded-lg bg-white px-4 py-2 text-left text-gray-900 shadow hover:bg-gray-200 hover:shadow-md transition mb-2"
              >
                Room {index + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          .hide-scroll-bar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }

          .hide-scroll-bar::-webkit-scrollbar {
            display: none;  /* Chrome, Safari and Opera */
          }
        `}
      </style>
    </>
  );
}
