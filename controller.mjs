import 'dotenv/config';
import express from 'express';
import * as activities from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.

// CREATE controller ******************************************
app.post ('/log', (req,res) => { 
    activities.createActivity(
        req.body.name, 
        req.body.description, 
        req.body.date,
        req.body.startTime,
        req.body.endTime,
        req.body.length
        )
        .then(activity => {
            res.status(201).json(activity);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'The server is not able to create the new entry because of client side error.' });
        });
});

// RETRIEVE controller ****************************************************
app.get('/log', (req, res) => {
    activities.retrieveActivities()
        .then(activity => { 
            if (activity !== null) {
                res.json(activity);
            } else {
                res.status(404).json({ Error: 'The activity cannot be found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The activities can not be successfully retrieved.' });
        });
});


// RETRIEVE by ID controller
app.get('/log/:_id', (req, res) => {
    activities.retrieveActivityByID(req.params._id)
    .then(activity => { 
        if (activity !== null) {
            res.json(activity);
        } else {
            res.status(404).json({ Error: 'The activity cannot be found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The activity you are requesting can not be successfully retrieved.' });
    });

});

// UPDATE controller ************************************
app.put('/log/:_id', (req, res) => {
    activities.updateActivity(
        req.params._id, 
        req.body.name, 
        req.body.description, 
        req.body.date,
        req.body.startTime,
        req.body.endTime,
        req.body.length
    )
    .then(activity => {
        res.json(activity);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'The activity has not been edited successfully!' });
    });
});


// DELETE Controller ******************************
app.delete('/log/:_id', (req, res) => {
    activities.deleteActivityById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'document no longer exists' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'delete a document failed' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});