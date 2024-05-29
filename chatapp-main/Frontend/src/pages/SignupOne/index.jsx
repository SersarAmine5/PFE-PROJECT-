import React, { useState } from "react";
import { Text, Button, Input, Img, Heading } from "../../components";
import { SelectBox } from "components/SelectBox1";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/user.context";

const dropDownOptions = [
  { label: "Homme", value: "Homme" },
  { label: "Femme", value: "Femme" },
];

export default function SignupOne() {
  const handleloginClick = () => {
    window.location.href = '/login';
  }

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    day: "",
    month: "",
    year: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Utiliser useNavigate pour la redirection

  const { login } = useUserContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", {
        firstname: formData.firstname,
        lastname: formData.lastname,
        gender: formData.gender,
        dateOfBirth: `${formData.year}-${formData.month}-${formData.day}`,
        email: formData.email,
        password: formData.password,
      });

      await login(formData.email, formData.password);

      navigate("/signuptwo"); // Redirection vers la deuxième page de sign up
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      <Helmet>
        <title>Informations personnelles</title>
        <meta
          name="description"
          content="Site web créé avec create-react-app"
        />
      </Helmet>
      <div className="overflow-hidden">
        <div className="bg-gradient py-6 sm:py-3 flex justify-center">
          <Img
            src="/images/img_image_removebg_preview.png"
            alt="image d'en-tête"
            className="h-[60px] w-[150px] sm:w-[200px] md:w-[300px]"
          />
        </div>
        <center>
          <div className="flex justify-center p-9 sm:p-5 bg-blue_gray-200_a5 rounded shadow-sm w-[45rem] mt-8">
            <div className="w-full max-w-md flex flex-col items-center">
              <Heading as="h1" className="text-4xl text-indigo-900 mb-5">
                Inscription
              </Heading>
              <form onSubmit={handleSubmit} className="w-full">
                <Input
                  shape="round"
                  type="text"
                  name="firstname"
                  placeholder="Prénom*"
                  className="w-full mb-4"
                  onChange={handleChange}
                />
                <Input
                  shape="round"
                  type="text"
                  name="lastname"
                  placeholder="Nom*"
                  className="w-full mb-4"
                  onChange={handleChange}
                />
                <SelectBox
                  shape="round"
                  name="gender"
                  placeholder="Sexe"
                  options={dropDownOptions}
                  className="w-full mb-4"
                  onChange={(value) => handleSelectChange("gender", value)}
                />
                <div className="flex w-full gap-3 mb-4">
                  <SelectBox
                    shape="round"
                    name="day"
                    placeholder="JJ"
                    options={dropDownOptions}
                    variant="fill"
                    size="xs"
                    color="white_A700"
                    className=""
                    onChange={(value) => handleSelectChange("day", value)}
                  />
                  <SelectBox
                    shape="round"
                    name="month"
                    placeholder="MM"
                    options={dropDownOptions}
                    className="w-1/3"
                    onChange={(value) => handleSelectChange("month", value)}
                  />
                  <SelectBox
                    shape="round"
                    name="year"
                    placeholder="AAAA"
                    options={dropDownOptions}
                    className="w-1/3"
                    onChange={(value) => handleSelectChange("year", value)}
                  />
                </div>
                <Input
                  shape="round"
                  type="email"
                  name="email"
                  placeholder="Adresse e-mail*"
                  className="w-full mb-4"
                  onChange={handleChange}
                />
                <Input
                  shape="round"
                  type="password"
                  name="password"
                  placeholder="Mot de passe*"
                  className="w-full mb-4"
                  onChange={handleChange}
                />
                <Input
                  shape="round"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirmer le mot de passe*"
                  className="w-full mb-4"
                  onChange={handleChange}
                />
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms" className="flex items-center ">
                    J'accepte les termes et conditions de Headspace et reconnais
                    la politique de confidentialité.
                  </label>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <div className="flex justify-center mt-[50px] w-full">
                  <Button
                    className="w-80 bg-gradient text-white-A700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    variant="fill"
                    color="blue_500"
                    shape="round"
                    size="md"
                    type="submit"
                  >
                    Créer un compte
                  </Button>
                </div>
              </form>
              <Text size="md" as="p" className="mt-4 text-center">
                Vous avez déjà un compte ?{" "}
                <Link to="/login" className="text-blue-400 cursor-pointer"
                  onClick={handleloginClick}>
                  Se connecter
                </Link>
              </Text>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}
