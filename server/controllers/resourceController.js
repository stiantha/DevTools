const Resource = require('../models/resourceModel');

const getAllResources = async (req, res) => {
    try {
        const resources = await Resource.find();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getResourceById = async (req, res) => {
    try {
        const resource = await Resource.findById(req.params.id);
        res.status(200).json(resource);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const createResource = async (req, res) => {
    const { index, name, route, category, visible } = req.body;
    try {
        const resource = new Resource({ index, name, route, category, visible });
        await resource.save();
        res.status(201).json(resource);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteResource = async (req, res) => {
    try {
        const resource = await Resource.findByIdAndDelete(req.params.id);
        res.status(200).json(resource);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateResource = async (req, res) => {
    try {
        const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(resource);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
    getAllResources,
    getResourceById,
    createResource,
    deleteResource,
    updateResource
};