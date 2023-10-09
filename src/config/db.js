import 'dotenv/config'
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
	apiKey: process.env.DB_API_KEY,
	authDomain: process.env.DB_AUTH_DOMAIN,
	projectId: process.env.DB_PROJECT_ID,
	storageBucket: process.env.DB_STORAGE_BUCKET,
	messagingSenderId: process.env.DB_MESSAGING_SENDER_ID,
	appId: process.env.DB_APP_ID,
	measurementId: process.env.DB_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, app };
