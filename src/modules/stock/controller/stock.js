import {
	addDoc,
	getDocs,
	orderBy,
	collection,
	query,
	doc,
	updateDoc,
} from 'firebase/firestore/lite';
import { db } from '../../../config/db';
import Stock from '../model/Stock';

export class StockController {
	static async getAll() {
		const entradasCol = collection(db, 'stock');
		const entradasSnapshot = await getDocs(
			query(entradasCol, orderBy('createdAt', 'desc'))
		);
		const data = entradasSnapshot.docs.map(
			(doc) => new Stock({ ...doc.data(), id: doc.id })
		);
		const dataFiltered = data.filter((data) => data.getShow());
		return dataFiltered;
	}

	static async create(data) {
		const entries = await data.map(
			({ title, description, unit, amount }) =>
				new Stock({ title, description, unit, amount })
		);
		const entradasCol = collection(db, 'stock');
		const entradasSnapshot = await entries.map(
			async (entrie) => await addDoc(entradasCol, entrie.getEntitie())
		);
		return entradasSnapshot;
	}

	static async editItem(id, data) {
		const docRef = collection(db, 'stock');
		const docSnap = doc(docRef, id);
		await updateDoc(docSnap, data);
		return true;
	}

	static async deleteItem(id) {
		const docRef = collection(db, 'stock');
		const docSnap = doc(docRef, id);
		await updateDoc(docSnap, { show: false });
		return true;
	}
}
