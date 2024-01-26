import express from "express"
import { HelloWorld, getCharactersData } from "./handlers.mjs"

const router = express.Router()

router.get('/', HelloWorld)

router.get("/api/characters", async (req, res)=>{
    const characters = await getCharactersData();
    res.json({characters})
})

router.get("/api/:character", async(req, res)=>{
    const characterData = await getCharactersData();
    const character = characterData.find((character)=>character.name.toLowerCase() === req.params.character.toLowerCase())
    res.json({character})
})

export default router