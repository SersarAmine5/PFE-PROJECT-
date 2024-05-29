import { useUserContext } from "contexts/user.context";
import { Helmet } from "react-helmet";
import { Button, Heading, Img, Input, TextArea } from "../../components";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SettingsframePage() {
  const { user, isLoading, isLogedIn, setUser } = useUserContext();

  const [isBeingSubmited, setIsBeingSubmited] = useState(false);

  const [fields, setFields] = useState({
    ...user
  });

  useEffect(() => {
    setFields({ ...user })
  }, [user])

  const handleOnSaveButtonClick = async (e) => {
    try {
      setIsBeingSubmited(true);

      const response = await axios.patch(`http://localhost:8800/api/users/users/${user._id}`, {
        firstname: fields.firstname,
        lastname: fields.lastname,
        description: fields.description,
      }, {
        withCredentials: true
      });

      const updated_user = response.data;

      setUser(updated_user);

    } catch (error) {
      alert("Erreur, Impossible de mettre a jour l'utilisateur.")
    } finally {
      setIsBeingSubmited(false);
    }
  };

  if (isLoading) {
    return (
      <div>
        <div>User Data is being fetched...</div>
      </div>
    )
  }

  if (!user || !isLogedIn) {
    return (
      <div>
        <div>You need to be logged in to access this page.</div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>User Settings - Manage Your Profile and Privacy</title>
        <meta
          name="description"
          content="Access your user settings to update personal information, privacy preferences, and account security. Manage your first name, last name, email, and password with ease."
        />
      </Helmet>

      <Header className="bg-gradient" />
      <div className="flex w-full flex-col items-center justify-center gap-10 bg-gray-50 pb-20 md:pb-4">
        <div className="w-4/5 md:w-full md:p-5">
          <div className="flex flex-col items-center">
            <div className="container-xs mt-9 pl-20 pr-16 md:p-5 md:px-5">
              <div className="flex flex-wrap justify-between gap-5">

              </div>
            </div>
            <div className="mt-2 h-0.5 w-1/2 bg-gray-300_01" />

            {/* Form Fields */}
            <div className="mt-8 w-full flex flex-col items-center gap-5 md:flex-col">
              <div className="w-full md:w-full flex flex-col gap-1.5 items-center">
                <Heading as="h3" className="w-1/2 text-left mb-2 text-indigo-900 font-semibold">First name</Heading>
                <Input
                  shape="round"
                  name="firstName"
                  value={fields.firstname}
                  onChange={(event) => setFields({ ...fields, firstname: event.target.value })}
                  className="self-center w-1/2 border border-blue-500 rounded-lg px-4 py-2"
                />
              </div>
              <div className="w-full md:w-full flex flex-col gap-1.5 items-center">
                <Heading as="h3" className="w-1/2 text-left mb-2 text-indigo-900 font-semibold">Last name</Heading>
                <Input
                  shape="round"
                  name="lastName"
                  value={fields.lastname}
                  onChange={(event) => setFields({ ...fields, lastname: event.target.value })}
                  className="self-center w-1/2 border border-blue-500 rounded-lg px-4 py-2"
                />
              </div>
              <div className="w-full md:w-full flex flex-col gap-1.5 items-center">
                <Heading as="h3" className="w-1/2 text-left mb-2 text-indigo-900 font-semibold">About me</Heading>
                <TextArea
                  shape="round"
                  name="aboutme"
                  value={fields.description}
                  placeholder="Dites quelques chose a propos de vous."
                  onChange={(text) => setFields({ ...fields, description: text })}
                  className="resize-none self-center w-1/2 border border-blue-500 rounded-lg px-4 py-2"
                />
              </div>
              <div className="w-full md:w-full flex flex-col gap-1.5 items-center">
                <Heading as="h4" className="w-1/2 text-left mb-2 text-indigo-900 font-semibold">Email</Heading>
                <Input
                  color="gray_50"
                  shape="round"
                  type="email"
                  name="email"
                  value={fields.email}
                  disabled
                  prefix={
                    <Img
                      src="images/img_message_24_outline.svg"
                      alt="message / 24 / outline"
                      className="h-6 w-6"
                    />
                  }
                  className="self-center w-1/2 border border-blue-500 rounded-lg px-4 py-2"
                />
              </div>
              <div className="w-full md:w-full flex flex-col gap-1.5 items-center">
              </div>
              <center>
                <div className="w-full md:w-full flex  gap-1.5 items-center">
                  <Button
                    onClick={handleOnSaveButtonClick}
                    className="mt-[10px] min-w-[250px] bg-gradient text-white-A700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    variant="fill"
                    color="blue_500"
                    shape="round"
                    size="md"
                  >
                    {isBeingSubmited ? "Loading..." : "Save Changes"}
                  </Button>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
