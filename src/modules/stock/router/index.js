import { Router } from 'express';
import { StockController } from '../controller/stock';
import { UnitTypesController } from '../controller/unitTypes';

const router = Router();

router.get('/', async (req, res) => {
	try {
		const data = await StockController.getAll();
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

router.post('/', async (req, res) => {
	try {
		const { data } = req.body;
		const response = StockController.create(data);
		res.status(200).json(response);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
});

router.put('/:id', async (req, res) => {
	try {
		const data = req.body;
		const { id } = req.params;
		const response = StockController.editItem(id, data);
		res.status(200).json(response);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const response = StockController.deleteItem(id);
		res.status(200).json(response);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
});

router.get('/types', async (req, res) => {
	try {
		const data = await UnitTypesController.getAll();
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

export default router;
