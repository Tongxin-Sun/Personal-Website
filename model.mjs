import mongoose from "mongoose";
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Activities collection using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const activitySchema = mongoose.Schema({
	name:    { type: String, required: true },
    description: { type: String, required: true, default: "No description" },
    date: { type: Date, required: true, default: Date.now},
	startTime:     { type: String, required: true },
	endTime: { type: String, required: true },
    length: { type: Number, required: true, min: [0, "Negative values are not valid!"]},
});

// Compile the model from the schema.
const Activity = mongoose.model('Activity', activitySchema);

// CREATE model *****************************************
const createActivity = async (name, description, date, startTime, endTime, length) => {
    const activity = new Activity({ 
        name: name, 
        description: description, 
        date: date,
        startTime: startTime, 
        endTime: endTime, 
        length: length 
    });
    return activity.save();
}

// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrieveActivities = async () => {
    const query = Activity.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveActivityByID = async (_id) => {
    const query = Activity.findById({_id: _id});
    return query.exec();
}

// UPDATE model *****************************************************
const updateActivity = async (_id, name, description, date, startTime, endTime, length) => {
    const result = await Activity.replaceOne({_id: _id }, {
        name: name,
        description: description,
        date: date,
        startTime: startTime,
        endTime: endTime,
        length: length
    });
    return { 
        _id: _id, 
        name: name,
        description: description,
        date: date,
        startTime: startTime,
        endTime: endTime,
        length: length 
    }
}

// DELETE model based on _id  *****************************************
const deleteActivityById = async (_id) => {
    const result = await Activity.deleteOne({_id: _id});
    return result.deletedCount;
};

// Export our variables for use in the controller file.
export { createActivity, retrieveActivities, retrieveActivityByID, updateActivity, deleteActivityById }
