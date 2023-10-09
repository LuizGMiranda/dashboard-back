import { Router } from 'express';
import { FinancialController } from '../controller/FinancialController';

const router = Router();

router.get('/', async (req, res) => {
	try {
		const data = await FinancialController.getAll();
		res.json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
});

router.get('/filter', async (req, res) => {
	try {
		const { type, date } = req.query;
		const data = await FinancialController.getAllByFilter(type, date);
		res.json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
});

router.get('/:type', async (req, res) => {
	try {
		const data = await FinancialController.getAllByType(req.params.type);
		res.json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
});

router.post('/', async (req, res) => {
	try {
		await FinancialController.create(req.body);
		res.json();
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
});

export default router;
