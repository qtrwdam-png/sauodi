import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTp81CPSpdZ5d1ynFHEKT1txpKMzKf8rA",
  authDomain: "sgdhds-b86d5.firebaseapp.com",
  projectId: "sgdhds-b86d5",
  storageBucket: "sgdhds-b86d5.firebasestorage.app",
  messagingSenderId: "176380552174",
  appId: "1:176380552174:web:3d5b18e1c10c0c30cfe4ff",
  measurementId: "G-RY5BBFVKW6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function runTest() {
  const visitorId = "TEST-MG-" + Math.floor(Math.random() * 100000);
  const data = {
    id: visitorId,
    referenceNumber: visitorId,
    orderReference: "MG-2026-TEST",
    customerName: "فاحص النظام التجريبي",
    phoneNumber: "0500000000",
    city: "الرياض",
    shippingAddress: "شارع التخصصي، الرياض",
    status: "paid",
    source: "test-script",
    createdAt: new Date().toISOString(),
  };

  await setDoc(doc(db, "pays", visitorId), data);
  console.log("SUCCESS: Test order written with ID:", visitorId);
}

runTest().catch(console.error);
