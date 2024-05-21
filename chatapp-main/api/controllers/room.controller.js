 
 import Room from "../models/room.model.js";
import Topic from "../models/topic.model.js"; // Assurez-vous d'importer correctement le modèle Topic
import createError from "../utils/createError.js";
import User from "../models/user.model.js";

// Fonctions de gestion des endpoints de room
export const deleteRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);

    if (!room) {
      return next(createError(404, "Room not found!"));
    }

    if (req.user.id !== room.roomCreator.toString()) {
      return next(createError(403, "You can delete only your room!"));
    }
    
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted.");
  } catch (error) {
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

export const updateRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);

    if (!room) {
      return next(createError(404, "Room not found!"));
    }

    if (req.user.id !== room.roomCreator.toString()) {
      return next(createError(403, "You can only modify your own room!"));
    }

    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    }, { new: true });

    res.status(200).send(updatedRoom);
  } catch (error) {
    next(error);
  }
};

export const approveRoom = async (req, res, next) => {
  try {
    // only an expert user can approve a room
    if (req.user.role !== "expert" || !req.user.topic_subscribed_at.includes(req.params.id)) {
      return next(createError(403, "Only expert users can approve rooms!"));
    }

    const room = await Room.findById(req.params.id);
    if (!room) {
      return next(createError(404, "Room not found!"));
    }

    room.approved = true;
    await room.save();
    res.status(200).send(room);
  } catch (error) {
    next(error);
  }
};

export const createRoom = async (req, res, next) => {
  try {
    const { roomId, title, initialProblem, roomCreator, topicId, userId } = req.body;

    // Vérifiez si tous les champs requis sont présents
    if (!roomId || !title || !initialProblem || !roomCreator || !topicId || !userId) {
      return res.status(400).send({ message: 'All fields are required.' });
    }

    // Créez un nouveau room avec les données de la requête
    const room = new Room({ roomId, title, initialProblem, roomCreator, topicId, userId });

    // Sauvegardez le room dans la base de données
    await room.save();

    // Mettre à jour le topic correspondant pour inclure le nouvel ID de chambre
    await Topic.findByIdAndUpdate(topicId, { $push: { rooms: room._id } });

    res.status(201).send(room);
  } catch (error) {
    res.status(500).send({ message: 'Error creating room', error });
  }
};

// Les autres fonctions de contrôleur...
