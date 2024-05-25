import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from "../../components";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";

const UserTable = () => {
    // State to handle user data
    const [userData, setUserData] = useState([]);
    // State to handle checkbox selections
    const [selectedUsers, setSelectedUsers] = useState([]);
    // State to handle visibility of checkboxes
    const [showCheckboxes, setShowCheckboxes] = useState(false);
    const { userId } = useParams();

    // Fetch users from the API
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('http://localhost:8800/api/users/users');
            setUserData(response.data);
        };

        fetchUsers();
    }, []);

    // Handle checkbox change
    const handleCheckboxChange = (index) => {
        setSelectedUsers((prevSelectedUsers) => {
            const newSelectedUsers = [...prevSelectedUsers];
            newSelectedUsers[index] = !newSelectedUsers[index];
            console.log(index, newSelectedUsers, userId);
            return newSelectedUsers;
        });
    };

    // Handle blocking users
    // Handle blocking users 
    const handleBlockUsers = async () => {
        if (showCheckboxes) {
            const usersToDelete = userData.filter((_, index) => selectedUsers[index]);
            for (let userToDelete of usersToDelete) {
                console.log("[will-delete]:", userToDelete._id)
                await axios.delete(
                    `http://localhost:8800/api/users/users/bloqueruser/${userToDelete._id}`, {
                    withCredentials: true
                }
                );

            }
            const remainingUsers = userData.filter(
                (_, index) => !selectedUsers[index]
            );
            setUserData(remainingUsers);
            setSelectedUsers([]);
        } else {
            setShowCheckboxes(true);
        }
    };


    // Handle cancel action
    const handleCancel = () => {
        setShowCheckboxes(false);
        setSelectedUsers([]);
    };

    return (
        <div className="flex w-full flex-col items-center ">
            {/* navigation bar section */}
            <Header className="bg-gradient w-[1272px]" />
            <div className="p-4 w-[1000px]">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Lastname</th>
                            <th className="py-2 px-4 border-b">Firstname</th>
                            <th className="py-2 px-4 border-b">Block</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user, index) => (
                            <tr key={user._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className="py-2 px-4 border-b">{user.lastname}</td>
                                <td className="py-2 px-4 border-b">{user.firstname}</td>
                                <td className="py-2 px-4 border-b text-center">
                                    {showCheckboxes && (
                                        <input
                                            type="checkbox"
                                            checked={selectedUsers[index] || false}
                                            onChange={() => handleCheckboxChange(index)}
                                            className="form-checkbox h-5 w-5 text-blue-600 cursor-pointer focus:ring-blue-500"
                                        />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center mt-[20px] space-x-4">
                    <Button
                        className="flex justify-center items-center min-w-[250px] bg-gradient text-white-A700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        variant="fill"
                        color="blue_500"
                        shape="round"
                        size="md"
                        onClick={handleBlockUsers}
                    >
                        Bloquer utilisateur
                    </Button>
                    <Button
                        className="flex justify-center items-center min-w-[250px] bg-gradient text-white-A700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        variant="fill"
                        color="blue_500"
                        shape="round"
                        size="md"
                        onClick={handleCancel}
                    >
                        Annuler
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default UserTable;
