import { randomUUID } from "crypto";
import express from "express";

type Message = {
    id: string,
    createdAt: number,
    from: string,
    to: string,
    content: string,
};

let messages: Message[] = [];

export const router = express.Router();

router.post("/:userId/messages", (req, res) => {
    const { userId } = req.params;

    messages.push({
        id: randomUUID(),
        createdAt: Date.now(),
        from: "currentUser",
        to: userId,
        content: req.body.content,
    });
    
    res.status(204);
    res.end();
});

router.get("/:userId/messages", (req, res) => {
    const { userId } = req.params;
    
    res.json(
        messages.filter((message) => message.to === userId),
    );
});
