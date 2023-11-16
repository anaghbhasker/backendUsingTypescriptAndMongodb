import express from "express";
import { Request, Response } from "express";
import { ObjectId } from "mongodb";
const router = express.Router();
import User from "../model/userModel";

router.post("/signup", async (req: Request, res: Response) => {
    try {
        const { email, name, phone } = req.body as User;
        const userDetails = new User(email, name, phone);
        await User.getModel().insertOne(userDetails);
        res.status(201).json({
            success: true,
            message: "user created successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "error while creating user",
            error: error,
        });
    }
});

router.get("/getUser/:id", async (req: Request, res: Response) => {
    try {
        const userId = new ObjectId(req.params.id);
        const user = await User.getModel().findOne({
            _id: userId,
        });
        res.status(201).json({
            success: true,
            userDetails: user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User not found",
            error: error,
        });
    }
});

router.get("/deleteUser/:id", async (req: Request, res: Response) => {
    try {
        const userId = new ObjectId(req.params.id);
        await User.getModel().deleteOne({
            _id: userId,
        });
        res.status(201).json({
            success: true,
            message: "The user has been deleted",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something error",
        });
    }
});

router.post("/updateUser/:id", async (req: Request, res: Response) => {
    try {
        const userId = new ObjectId(req.params.id);
        const { email,name,phone } = req.body as User
        const userDetails= new User(email,name,phone)
        await User.getModel().updateOne({ _id: userId }, { $set: userDetails });
        res.status(201).json({
            success: true,
            message: "This user has been updated",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something error",
        });
    }
});

export default router;
