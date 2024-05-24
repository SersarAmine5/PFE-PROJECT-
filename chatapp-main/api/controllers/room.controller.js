import Room from "../models/room.model.js";
import Topic from "../models/topic.model.js"; // Assurez-vous d'importer correctement le modèle Topic
import createError from "../utils/createError.js";
import User from "../models/user.model.js";
import Message from "../models/message.model.js";

export const getRoomMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({ roomID: req.params.id }).populate("userId");

    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};

export const createRoom = async (req, res, next) => {
  const room = new Room(req.body);
  await room.save();
  const createdRoom = await Room.findById(room._id).populate("userId");
  res.status(201).send(createdRoom);
};

// Fonctions de gestion des endpoints de room
export const deleteRoom = async (req, res, next) => {
  try {
    const { topicId, roomId } = req.params;
    const room = await Room.findOne({ roomId: req.params.id });

    if (!room) {
      return next(createError(404, "Room not found!"));
    }

    await Room.findByIdAndDelete(roomId);
    res.status(200).send("deleted.");
  } catch (error) {
    console.error(error); // Log de l'erreur pour le diagnostic
    next(error);
  }
};


export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return next(createError(404, "Room not found!"));
    }
    res.status(200).send(room);
  } catch (error) {
    next(error);
  }
};

export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).send(rooms);
  } catch (error) {
    next(error);
  }
};

// export const updateRoom = async (req, res, next) => {
//   try {
//     const room = await Room.findById(req.params.id);

//     if (!room) {
//       return next(createError(404, "Room not found!"));
//     }

//     if (req.user.id !== room.roomCreator.toString()) {
//       return next(createError(403, "You can only modify your own room!"));
//     }

//     const updatedRoom = await Room.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );

//     res.status(200).send(updatedRoom);
//   } catch (error) {
//     next(error);
//   }
// };

// export const approveRoom = async (req, res, next) => {
//   try {
//     // only an expert user can approve a room
//     if (
//       req.user.role !== "expert" ||
//       !req.user.topic_subscribed_at.includes(req.params.id)
//     ) {
//       return next(createError(403, "Only expert users can approve rooms!"));
//     }

//     const room = await Room.findById(req.params.id);
//     if (!room) {
//       return next(createError(404, "Room not found!"));
//     }

//     room.approved = true;
//     await room.save();
//     res.status(200).send(room);
//   } catch (error) {
//     next(error);
//   }
// };



// // Les autres fonctions de contrôleur...
