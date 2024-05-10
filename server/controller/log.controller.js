const Log = require('../model/log.model.js');

// search logs
module.exports.search = async (req, res) => {
    try {
        const {search, message} = req.query;
        // if not searching for specific log, returning all logs
        if(!search){
            const data = await Log.find();
            return res.status(200).json(data);
        }

        // if we are searching for specific level in logs
        if(search==="level"){
            const data = await Log.find({level: message});
            if(data.length === 0){
                return res.status(404).json({message: "Resource not found."});
            }
            return res.status(200).json(data);
        }
        // if we are searching for specific message in logs
        else if(search==="message"){
            const data = await Log.find({message: message});
            if(data.length === 0){
                return res.status(404).json({message: "Resource not found."});
            }
            return res.status(200).json(data);
        }

        // if we are searching for specific resource id in logs
        else if(search==="resourceId"){
            const data = await Log.find({resourceId: message});
            if(data.length === 0){
                return res.status(404).json({message: "Resource not found."});
            }
            return res.status(200).json(data);
        }
         // if we are searching for specific trace id in logs
         else if(search==="traceId"){
            const data = await Log.find({traceId: message});
            if(data.length === 0){
                return res.status(404).json({message: "Resource not found."});
            }
            return res.status(200).json(data);
        }
         // if we are searching for specific span id in logs
         else if(search==="spanId"){
            const data = await Log.find({spanId: message});
            if(data.length === 0){
                return res.status(404).json({message: "Resource not found."});
            }
            return res.status(200).json(data);
        }

         // if we are searching for specific commit in logs
         else if(search==="commit"){
            const data = await Log.find({commit: message});
            if(data.length === 0){
                return res.status(404).json({message: "Resource not found."});
            }
            return res.status(200).json(data);
        }

         // if we are searching for specific parentResource id in logs
         else if(search==="parentResourceId"){
            const data = await Log.find({"metadata.parentResourceId" : message});
            if(data.length === 0){
                return res.status(404).json({message: "Resource not found."});
            }
            return res.status(200).json(data);
        }

        // if the query is wrong, like search is provided but not message 
        else{
            return res.status(404).json({message: "Check your query"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal server error"});
    }
}

// create logs
module.exports.createLogs = async (req, res) => {
    try {
        const {level, message, resourceId, traceId, spanId, commit, metadata} = req.body;

        // returning error if not all the fields are present in body
        if(!level || !message || !resourceId || !traceId || !spanId || !commit || !metadata){
            return res.json({message: "Please provide all the logs detail"});
        }

        // creating a new log in our db
        const newLog = await Log.create({
            level,
            message,
            resourceId,
            traceId,
            spanId,
            commit,
            metadata,
        });

        return res.status(201).json({message: "New log created.", newLog});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal server error"});
    }
}