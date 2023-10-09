import {
	collection,
	getDocs,
	addDoc,
	where,
	query,
	orderBy,
} from 'firebase/firestore/lite';
import { db } from '../../../config/db';
import Transaction from '../model/Transaction';

const typesTransaction = {
	credit: 'credit',
	debit: 'debit',
};
Object.freeze(typesTransaction);

export class FinancialController {
	static async getAll() {
		const creditsCol = collection(db, 'financial');
		const creditsSnapshot = await getDocs(
			query(creditsCol, orderBy('createdAt', 'desc'))
		);
		const data = creditsSnapshot.docs.map((doc) => doc.data());
		return data;
	}

	static async getAllByType(type) {
		if (!(type.toLowerCase() in typesTransaction)) {
			throw new Error('Invalid type');
		}
		const creditsCol = query(
			collection(db, 'financial'),
			where('type', '==', type),
			orderBy('createdAt', 'desc')
		);
		const creditsSnapshot = await getDocs(creditsCol);
		const data = creditsSnapshot.docs.map((doc) => doc.data());
		return data.filter((entrie) => entrie.type === type);
	}

	// TODO: implements where with date
	static async getAllByFilter(type) {
		if (!(type.toLowerCase() in typesTransaction)) {
			throw new Error('Invalid type');
		}
		const creditsCol = query(
			collection(db, 'financial'),
			where('type', '==', type)
		);
		const creditsSnapshot = await getDocs(creditsCol);
		const data = creditsSnapshot.docs.map((doc) => doc.data());
		return data.filter((entrie) => entrie.type === type);
	}

	static async create(entrie) {
		try {
			const data = new Transaction({ ...entrie, show: true });
			const creditsCol = collection(db, 'financial');
			await addDoc(creditsCol, data.getEntrie());
			return true;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}
