const ActivityController = require('./controller/activityController');

module.exports = (app) => {
    app.post('/todo', ActivityController.createActivity);
    app.delete('/todo/:id', ActivityController.deleteActivity);
    app.put('/todo/:id', ActivityController.updateActivity);
    app.get('/todo', ActivityController.getAllActivities);
    app.get('/todo/:id', ActivityController.getActivity);
}