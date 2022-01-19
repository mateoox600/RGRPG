import { Router } from 'express';
import { Entities } from '../data/entities/Entity';
import { HuntableEntities } from '../data/entities/HuntableEntity';
import { RequireEntityIdError } from '../utils/Error';

const router = Router();

router.get('/', (req, res) => {
    const entityId = req.query.entityId;

    if(!entityId) return res.status(400).send({ error: RequireEntityIdError });

    res.json(Entities.find((entity) => entity.id === entityId));
});

router.get('/list', (req, res) => {
    res.json(Entities.map((e) => e.id));
});

router.get('/list/huntable', (req, res) => {
    res.json(HuntableEntities.map((e) => e.id));
});

export default router;