import Room from "../models/room.model.js";
import createError from "../utils/createError.js";
import User from "../models/user.model.js";

//route handler functions

<<<<<<< Updated upstream
export const deleteRoom = async (req, res, next) => {
  const room = await Room.findById(req.params.id);

  if (req.roomId !== room._id.toString()) {
    return next(createError(403, "You can delete only your room!"));
=======
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
>>>>>>> Stashed changes
  }
  await Room.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted.");
};


export const getRoom = async (req, res, next) => {
  const room = await Room.findById(req.params.id);
  res.status(200).send(room);
};

export const getRooms = async (req, res, next) => {
  const rooms = await Room.find();
  res.status(200).send(rooms);
};

<<<<<<< Updated upstream
export const updateRoom = async (req, res, next) => {
  const room = await Room.findById(req.params.id);

  if (req.roomId !== room._id.toString()) {
    return next(createError(403, "You can only modify your own room!"));
  }

  const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  });

  res.status(200).send(updatedRoom);
};

export const requestCreateRoom = async (req, res, next) => {
  const room = new Room({
    ...req.body,
    approved: false, // room is not approved when created
  });
  await room.save();
  res.status(201).send(room);
};

export const approveRoom = async (req, res, next) => {
  // only an expert user can approve a room
  if (
    req.user.role !== "expert" ||
    !req.user.topic_subscribed_at.includes(req.params.id)
  ) {
    return next(createError(403, "Only expert users can approve rooms!"));
  }

  const room = await Room.findById(req.params.id);
  if (!room) {
    return next(createError(404, "Room not found!"));
  }

  room.approved = true;
  await room.save();
  res.status(200).send(room);
};
=======
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
>>>>>>> Stashed changes
