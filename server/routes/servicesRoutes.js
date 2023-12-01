const express = require('express');
const Service = require('../models/service');
const serviceRoutes = express.Router();
// const User = require('../models/user');
const ObjectId = require('mongoose').Types.ObjectId;
const upload = require('../utils/multer');
const cloudinary = require('../utils/cloudinary');

serviceRoutes.post('/services', upload.single('image'), async (req, res) => {
    try {
        // Upload the file to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);

        // Create a new service object
        let service = new Service({
            PropertyName: req.body.PropertyName,
            description : req.body.description,
            date: req.body.date,
            user: new ObjectId(req.body.user),
            image: result.secure_url,
            status: req.body.status
        });

        // Save the service to the database
        await service.save();
        res.status(200).json({ message: 'Service saved successfully', service });
        //testing t`he service
        console.log(service);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ message: error.toString() });
    }
});

serviceRoutes.get('/services/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const service = await Service.findById(id);
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json({ service });
    } catch (error) {
        res.status(500).json({ message: error.toString() });
    }
});
serviceRoutes.get('/services', async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json({ services });
    } catch (error) {
        res.status(500).json({ message: error.toString() });
    }
});

serviceRoutes.put('/services/:id', async (req, res) => {
    const { id } = req.params;
    const { PropertyName, description, date, status } = req.body;
    try {
        const service = await Service.findById(id);
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        service.PropertyName = PropertyName;
        service.description = description;
        service.date = date;
        service.status = status;
        await service.save();
        res.status(200).json({ message: 'Service updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.toString() });
    }
});

serviceRoutes.delete('/services/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const service = await Service.findByIdAndDelete(id);
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.toString() });
    }
});

serviceRoutes.get('/services/user/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const services = await Service.find({ user: id });
        res.status(200).json({ services });
    } catch (error) {
        res.status(500).json({ message: error.toString() });
    }
});

serviceRoutes.put('/services/user/:id', async (req, res) => {
    const { id } = req.params;
    const { PropertyName, description, date } = req.body;
    try {
        const service = await Service.findById(id);
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        service.PropertyName = PropertyName;
        service.description = description;
        service.date = date;
        await service.save();
        res.status(200).json({ message: 'Service updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.toString() });
    }
});

module.exports = serviceRoutes;
