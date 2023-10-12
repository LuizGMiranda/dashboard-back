import {
	collection,
	getDocs,
	addDoc,
	where,
	query,
	orderBy,
} from 'firebase/firestore/lite';
import { db } from '../../../config/db';
import Service from '../model/Service'

export class SericeController {
	static async getAll() {
			const refCol = collection(db, 'services');
			const refSnapshot = await getDocs(
				query(refCol, orderBy('createdAt', 'desc'))
			);
			const data = refSnapshot.docs.map((doc) => doc.data());
			return data;
	}

	static async getAllByType(type) {
			// if (!(type.toLowerCase() in typesTransaction)) {
			// 		throw new Error('Invalid type');
			// }
			const refCol = query(
				collection(db, 'services'),
				where('type', '==', type),
				orderBy('createdAt', 'desc')
			);
			const refSnapshot = await getDocs(refCol);
			const data = refSnapshot.docs.map((doc) => doc.data());
			return data.filter((entrie) => entrie.type === type);
	}

	static async create (entrie) {
			try {
					const data = new Service({entrie});
					const refCol = collection(db, 'services');
					await addDoc(refCol, data.getEntrie());
			} catch (error) {
					throw new Error(error);
			}
	}

}
