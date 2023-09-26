import { projectFirestore } from "@/firebase/config";
import { ref, watchEffect } from "vue";

const getCollection = (collection) => {
  const error = ref(null);
  const documents = ref(null);

  const collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      const results = snap.docs.reduce((accumulator, doc) => {
        return (
          doc.data().createdAt && [
            ...accumulator,
            { ...doc.data(), id: doc.id },
          ]
        );
      }, []);

      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err);
      documents.value = null;
      error.value = "Could not fetch data";
    }
  );

  watchEffect((onInvalidate) => {
    // unsub from prev collection when component unmounted
    onInvalidate(() => unsub());
  });

  return {
    error,
    documents,
  };
};

export default getCollection;
