import express from "express";
import { Group } from "../models/IceBreaker";
import  { getClient } from "../db"


const routes = express.Router();

routes.get("/groups", async (req, res) => {
    try {
        const client = await getClient();
        console.log(client.db().databaseName)
        const results = await client.db().collection<Group>("groups").find().toArray();
        res.json(results);
    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json( { message: "Internal Server Error"} )
    }
});