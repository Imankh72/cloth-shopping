import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";
import { shopActionTypes } from "./shopActionTypes";

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsFailure = (error) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error,
});

export const fetchCollections = () => async (dispatch) => {
  dispatch(fetchCollectionsStart());
  try {
    const colRef = await collection(db, "shop");
    onSnapshot(colRef, (snapshot) => {
      const { docs } = snapshot;
      let shopData = [];
      docs.forEach((doc) => {
        shopData.push({ ...doc.data(), id: doc.id });
      });
      dispatch(fetchCollectionsSuccess(shopData));
    });
  } catch (error) {
    dispatch(fetchCollectionsFailure(error.message));
  }
};
