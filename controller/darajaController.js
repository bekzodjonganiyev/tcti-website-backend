const Daraja = require('../models/daraja')

exports.addDaraja = async (req, res) => {
    try {
        const daraja = new Daraja({
            ...req.body,
            photo: req.file.filename
        })
        await daraja.save()
        res.status(201).json(
            {
                success: true,
                status: 201,
                data: daraja
            }
        )
        console.log(daraja);
    } catch (e) {
        console.log(e);
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
        const daraja = await Daraja.findById({ _id: req.params.id })
        res.status(200).json(
            {
                success: true,
                status: 200,
                data: daraja
            }
        )
    } catch (e) {
        res.status(404).json(
            {
                message: "daraja not found"
            }
        )
    }
}

exports.getAll = async (req, res) => {
    try {
        const daraja = await Daraja.find({}).sort({ date: -1 })
        res.status(200).json(
            {
                success: true,
                status: 200,
                total: daraja.length,
                data: daraja
            }
        )
    } catch (e) {
        res.status(404).json(
            {
                message: "daraja not found"
            }
        )
    }
}

exports.getQuery = async (req, res) =>{
    try {
        let condition = {};
        const {
            title,
            body,
            daraja,
            oqishTuri,
            yili,
            Fakultet,
            Kafedra2019,
            Kafedra2020,
            Kafedra2021,
            Kafedra2022,
            yonalish2019,
            SirtqiYonalish2019,
            yonalish2020,
            yonalishSirtqi2020,
            yonalish2021,
            yonalishSirtqi2021,
            yonalishMagister2021,
            yonalish2022,
            yonalishSirtqi2022,
            yonalishMagister2022
        } = req.query
        if (title) condition = { ...condition, title }
        if (body) condition = { ...condition, body }
        if (daraja) condition = { ...condition, daraja }
        if (oqishTuri) condition = { ...condition, oqishTuri }
        if (yili) condition = { ...condition, yili }
        if (Fakultet) condition = { ...condition, Fakultet }
        if (Kafedra2019) condition = { ...condition, Kafedra2019 }
        if (Kafedra2020) condition = { ...condition, Kafedra2020 }
        if (Kafedra2021) condition = { ...condition, Kafedra2021 }
        if (Kafedra2022) condition = { ...condition, Kafedra2022 }
        if (yonalish2019) condition = { ...condition, yonalish2019 }
        if (SirtqiYonalish2019) condition = { ...condition, SirtqiYonalish2019 }
        if (yonalish2020) condition = { ...condition, yonalish2020 }
        if (yonalishSirtqi2020) condition = { ...condition, yonalishSirtqi2020 }
        if (yonalish2021) condition = { ...condition, yonalish2021 }
        if (yonalishSirtqi2021) condition = { ...condition, yonalishSirtqi2021 }
        if (yonalishMagister2021) condition = { ...condition, yonalishMagister2021 }
        if (yonalish2022) condition = { ...condition, yonalish2022 }
        if (yonalishSirtqi2022) condition = { ...condition, yonalishSirtqi2022 }
        if (yonalishMagister2022) condition = { ...condition, yonalishMagister2022 }
        const data = await Daraja.find(condition)
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
}

exports.updatedaraja = async (req, res) => {
    try {
        const daraja = await Daraja.findByIdAndUpdate(req.params.id, {
            ...req.body,
            photo: req.file.filename,
        })
        res.status(200).json(
            {
                success: true,
                status: 200,
                data: daraja
            }
        )
    } catch (e) {
        res.status(404).json(
            {
                message: "daraja not found"
            }
        )
    }
}

exports.deletedaraja = async (req, res) => {
    try {
        await Daraja.findByIdAndDelete({ _id: req.params.id })
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
                message: "daraja not found"
            }
        )
    }
}
