import { Router } from 'express';
import FinancialRouter from '../modules/financial/router';
import StockRouter from '../modules/stock/router';

const router = Router();

router.use('/financial', FinancialRouter);
router.use('/stock', StockRouter);

export default router;
