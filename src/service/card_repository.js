import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";
import { app } from "./firebase";

class CardRepository {
  syncCards(userId, onUpdate) {
    const db = getDatabase();
    const syncRef = ref(db, `${userId}/cards`);
    onValue(syncRef, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(syncRef);
  }
  saveCard(userId, card) {
    const db = getDatabase();
    set(ref(db, `${userId}/cards/${card.id}`), card);
  }
  removeCard(userId, card) {
    const db = getDatabase();
    const cardRef = ref(db, `${userId}/cards/${card.id}`);
    remove(cardRef);
  }
}

export default CardRepository;

// memo를 쓸 때 주의할 점 = react 컴포넌트 성능 보기로 해봤을 때 업데이트가 된다고 해서 다 성능에 무리가 가는 것은 아니다
