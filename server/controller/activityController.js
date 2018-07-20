const Activity = require('../model/activity');
const uuid = require('uuid/v4');

module.exports = {
    async createActivity (req, res) {
        let activity = {
            _id: uuid(),
            name: req.body.name,
            description: req.body.description
        };
        await Activity.create(activity, (err,activity) => {
            if(err) return res.status(500).json({'Error':err});

            return res.status(200).json({'response': activity});
        })
    },
    async deleteActivity (req, res) {
        const activityId = req.params.id;
        await Activity.findByIdAndRemove(activityId, (err) => {
            if(err) return res.status(500).json({'Error':err});

            return res.status(200).json({'Message':'Activity deleted'});
        })
    },
    async updateActivity (req, res) {
        const activityId = req.params.id;
        let dataToUpdate = {
            name: req.body.name,
            description: req.body.description
        }
        await Activity.findByIdAndUpdate(activityId, dataToUpdate, (err) => {
            if(err) return res.status(500).json({'Error':err});

            return res.status(200).json({'Message':'Activity updated!'});
        })
    },
    async getAllActivities (req, res) {
        await Activity.find({}, (err, activities) =>{
            if(err) return res.status(500).json({'Error':err});

            return res.status(200).json({'response': activities});
        })
    },
    async getActivity (req, res) {
        const activityId = req.params.id;
        await Activity.find({'_id': activityId}, (err, activity) => {
            if(err) return res.status(500).json({'Error':err});

            return res.status(200).json({'response': activity});
        })
    }
}