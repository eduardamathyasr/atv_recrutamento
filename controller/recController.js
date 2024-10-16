import Vaga from '../models/vaga.js';

const addVaga = async (req, res) => {

    try {
        const vaga = await Vaga.create(req.body);
        res.status(201).json(vaga);
    } catch (fail) {
        res.status(400).json({ fail: fail.message });
    }
};

const listaVaga = async (req, res) => {
    try {
        const vagas = await Vaga.findAll();
        res.status(200).json(vagas);
    } catch (fail) {
        res.status(400).json({ fail: fail.message });
    }
}

const infoVaga = async (req, res) => {
    try {
        const vaga = await Vaga.findByPk(req.params.id);
        if (vaga) {
            res.status(200).json(vaga);
        } else {
            res.status(404).json({ fail: 'Vaga não encontrada' });
        }
    } catch (fail) {
        res.status(500).json({ fail: fail.message });
    }
};

const attVaga = async (req, res) => {
    try {
        const vaga = await Vaga.findByPk(req.params.id);
        if (!vaga) {
            return res.status(404).json({ fail: 'Vaga não encontrada' });
        }
        await vaga.update(req.body);
        res.status(200).json(vaga);
    } catch (fail) {
        res.status(400).json({ fail: fail.message });
    }
};

const apagaVaga = async (req, res) => {
    try {
        const vaga = await Vaga.findByPk(req.params.id);
        if (!vaga) {
            return res.status(404).json({ fail: 'Vaga não encontrada' });
        }
        await vaga.destroy();
        res.status(204).send(); // 204 No Content
    } catch (fail) {
        res.status(500).json({ fail: fail.message });
    }
};

const listaCargo = async (req, res) => {
    try {
        const vagas = await Vaga.findAll({ where: { cargo: req.params.cargo } });
        res.status(200).json(vagas);
    } catch (fail) {
        res.status(500).json({ fail: fail.message });
    }
};

const localVaga = async (req, res) => {
    try {
        const vagas = await Vaga.findAll({ where: { cidade: req.params.cidade } });
        res.status(200).json(vagas);
    } catch (fail) {
        res.status(500).json({ fail: fail.message });
    }
};

export { addVaga, listaVaga, infoVaga, attVaga, apagaVaga, listaCargo, localVaga };