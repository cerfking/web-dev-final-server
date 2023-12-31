import * as dao from "./dao.js";


function OnlineItemRoutes(app) {
    const createItem = async (req, res) => {
        const onlineItem = await dao.createOnlineItem(req.body);
        res.json(onlineItem);
    };

    const findAllItems = async (req, res) => {
        const onlineItems = await dao.findAllOnlineItems();
        res.json(onlineItems);
    };


    app.post("/api/onlineItems", createItem);
    app.get("/api/onlineItems", findAllItems);



}
export default OnlineItemRoutes;