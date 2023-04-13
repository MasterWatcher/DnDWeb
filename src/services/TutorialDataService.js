import { ref, push } from "firebase/database";
import { db } from '@/firebase.js';

//const db = database.ref("/tutorials");


class TutorialDataService {
  // getAll() {
  //   return db;
  // }

  create(tutorial) {
    return push(ref(db, '/tutorials'), tutorial);
    //return db.push(tutorial);
  }

  // update(key, value) {
  //   return db.child(key).update(value);
  // }

  // delete(key) {
  //   return db.child(key).remove();
  // }

  // deleteAll() {
  //   return db.remove();
  // }
}

export default new TutorialDataService();