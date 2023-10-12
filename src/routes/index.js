import { Router } from 'express';
import FinancialRouter from '../modules/financial/router';
import InventoryRouter from '../modules/inventory/router';

const router = Router();

router.use('/financial', FinancialRouter);
router.use('/inventory', InventoryRouter);

export default router;
