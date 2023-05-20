import { firebaseConfig } from './firebase-config';

export const updateUserChapitre1 = async (userId, chapitre1Value) => {
  try {
    await firebaseConfig.collection('users').doc(userId).update({
      chapitre1: 'true'
    });
  } catch (error) {
    console.error("Error updating user data: ", error);
  }
};

export const getUserChapitre1 = async (userId) => {
    try {
      const userDoc = await firebaseConfig.collection('users').doc(userId).get();
      const userData = userDoc.data();
      return userData.chapitre1;
    } catch (error) {
      console.error("Error getting user data: ", error);
    }
  };