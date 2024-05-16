import express from "express";
import mongoose from "mongoose";
import User from "../models/user.model.js"; // Assurez-vous que le chemin vers votre modèle est correct

const router = express.Router();

// Route pour mettre à jour les centres d'intérêt de l'utilisateur
router.post("/:id/interests", async (req, res) => {
  try {
    const { id } = req.params;
    const { center_of_interest } = req.body;

    // Vérifiez que l'ID est un ObjectId valide
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("ID utilisateur invalide");
    }

    if (!Array.isArray(center_of_interest)) {
      return res.status(400).send("center_of_interest doit être une liste.");
    }

    // Trouvez l'utilisateur et mettez à jour ses centres d'intérêt
    const user = await User.findByIdAndUpdate(
      id,
      { center_of_interest },
      { new: true }
    );

    if (!user) {
      return res.status(404).send("Utilisateur non trouvé");
    }

    res.status(200).send(user);
  } catch (error) {
    console.error("Erreur lors de la mise à jour des centres d'intérêt:", error);
    res.status(500).send("Erreur serveur");
  }
});

export default router;
