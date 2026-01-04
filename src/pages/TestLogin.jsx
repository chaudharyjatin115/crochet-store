import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function TestLogin() {
  const testLogin = () => {
    signInWithEmailAndPassword(
      auth,
      "chaudharyjatin471@gmail.com",
      "Test@1234"
    )
      .then(() => console.log("AUTH OK"))
      .catch(e => console.error(e.code, e.message));
  };

  return (
    <div style={{ padding: 40 }}>
      <button onClick={testLogin}>
        Test Firebase Login
      </button>
    </div>
  );
}
