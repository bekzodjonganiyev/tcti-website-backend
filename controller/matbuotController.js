const Matbuot = require('../models/matbuot')

exports.addMatbuot = async (req, res) => {
    try {
        const matbuot = new Matbuot({
            ...req.body,
            photo: req.file.filename
        })
        await matbuot.save()
        res.status(201).json(
            {
                success: true,
                status: 201,
                data: matbuot
            }
        )
    } catch (err) {
        res.status(500).json(
            {
                success: false,
                err: "error"
            }
        )
    }
}

exports.getById = async (req, res) => {
    try {
        const matbuot = await Matbuot.findById({ _id: req.params.id })
        res.status(200).json(
            {
                success: true,
                status: 200,
                data: matbuot
            }
        )
    } catch (e) {
        res.status(404).json(
            {
                message: "matbuot not found"
            }
        )
    }
}

exports.getAll = async (req, res) => {
    try {
        const matbuot = await Matbuot.find({}).sort({ date: -1 })
        res.status(200).json(
            {
                success: true,
                status: 200,
                total: matbuot.length, 
                data: matbuot
            }
        )
    } catch (e) {
        res.status(404).json(
            {
                message: "matbuot not found"
            }
        )
    }
}

exports.updatematbuot = async (req, res) => {
    try {
        const matbuot = await Matbuot.findByIdAndUpdate(req.params.id, {
            ...req.body,
            photo: req.file.filename,
        })
        res.status(200).json(
            {
                success: true,
                status: 200,
                data: matbuot
            }
        )
    } catch (e) {
        res.status(404).json(
            {
                message: "matbuot not found"
            }
        )
    }
}

exports.deletematbuot = async (req, res) => {
    try {
        await Matbuot.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json(
            {
                success: true,
                status: 200,
                data: []
            }
        )
    } catch (e) {
        res.status(404).json(
            {
                message: "matbuot not found"
            }
        )
    }
}
