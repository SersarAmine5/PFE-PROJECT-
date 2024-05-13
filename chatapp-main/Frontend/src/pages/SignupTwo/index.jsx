import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Button, Heading, Img } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const data = [
  {
    dynamicproperty1: "Mindfulness",
    dynamicproperty2: "Yoga",
    dynamicproperty3: "Meditation",
    dynamicproperty4: "Stress Relief",
    dynamicproperty5: "Sleep",
  },
  {
    dynamicproperty1: "Productivity",
    dynamicproperty2: "Fitness",
    dynamicproperty3: "Nutrition",
    dynamicproperty4: "Personal Growth",
    dynamicproperty5: "Other",
  },
];

export default function SignupTwoPage() {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleSelectTag = (tag) => {
    const currentIndex = selectedTags.indexOf(tag);
    const newSelectedTags = [...selectedTags];

    if (currentIndex === -1) {
      // Only add if less than 5 tags are already selected
      if (newSelectedTags.length < 5) {
        newSelectedTags.push(tag);
      }
    } else {
      // Remove the tag if it's already selected
      newSelectedTags.splice(currentIndex, 1);
    }

    setSelectedTags(newSelectedTags);
  };

  return (
    <>
      <Helmet>
        <title>Select Your Interests - Tailor Your Headspace Experience</title>
        <meta
          name="description"
          content="Set up your Headspace account by choosing your fields of interest. Customize your experience to get the most out of your mindfulness journey."
        />
      </Helmet>
      <Header />
      <div className="flex w-full flex-col items-center gap-16 bg-white pb-73px md:pb-5">
        <div className="flex justify-center self-stretch bg-gradient pb-19px pt-18px">
          <Img
            src="images/img_image_removebg_preview.png"
            alt="header image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container-xs flex justify-center rounded bg-blue_gray-200_a5 px-35px pb-8 pt-35px shadow-sm">
          <div className="flex w-full flex-col items-center">
            <Heading as="h1" className="text-5xl text-indigo-900 m-8">
              Setting up your account
            </Heading>
            <Heading as="h2" className="mt-10 text-2xl text-indigo-900 m-8">
              Choose 5 of your fields of interest
            </Heading>
            <div className="mt-8 flex flex-col gap-6 self-stretch">
              {data.map((group, index) => (
                <div key={index} className="flex flex-wrap justify-center gap-4">
                  {Object.values(group).map((tag) => (
                    <label key={tag} className="checkbox-container">
                      {tag}
                      <input
                        type="checkbox"
                        checked={selectedTags.includes(tag)}
                        onChange={() => handleSelectTag(tag)}
                        className="accent-indigo-900"
                      />
                      <span className="checkmark"></span>
                    </label>
                  ))}
                </div>
              ))}
            </div>
            <Button
              shape="round"
              className="mt-10 min-w-[200px] rounded-lg font-bold text-lg hover:bg-gray-400 hover:text-white transition duration-300 ease-in-out"
              disabled={selectedTags.length !== 5}
            >
              Next
            </Button>
            
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .checkbox-container {
          display: block;
          position: relative;
          padding-left: 35px;
          cursor: pointer;
          font-size: 18px;
          line-height: 24px;
          user-select: none;
        }
        .checkbox-container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 20px;
          width: 20px;
          background-color: #eee;
          border-radius: 4px;
        }
        .checkbox-container:hover input ~ .checkmark {
          background-color: #ccc;
        }
        .checkbox-container input:checked ~ .checkmark {
          background-color: #2196F3;
        }
        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }
        .checkbox-container input:checked ~ .checkmark:after {
          display: block;
        }
        .checkbox-container .checkmark:after {
          left: 7px;
          top: 3px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 3px 3px 0;
          transform: rotate(45deg);
        }
      `}</style>
    </>
  );
}
