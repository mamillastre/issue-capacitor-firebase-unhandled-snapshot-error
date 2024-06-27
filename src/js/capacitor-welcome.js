import { FirebaseFirestore } from "@capacitor-firebase/firestore";
import { Browser } from "@capacitor/browser";
import { SplashScreen } from "@capacitor/splash-screen";

window.customElements.define(
  "capacitor-welcome",
  class extends HTMLElement {
    constructor() {
      super();

      SplashScreen.hide();

      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = `
    <main>
      <h1>Capacitor App</h1>
      <p>
        This project is used to create a minimal, reproducible example. Just add
        the affected Capacitor platforms and plugins.
      </p>
      <p>
        Look at the console logs, we must receive the error in callback, but instead see an unhandled error.
      </p>
    </main>
    `;
    }

    connectedCallback() {
      FirebaseFirestore.addDocumentSnapshotListener(
        { reference: 'doc' },
        (data, error) => {
          console.log('[addDocumentSnapshotListener] CALLBACK', { data, error });
        }
      );

      FirebaseFirestore.addCollectionSnapshotListener(
        { reference: 'collection' },
        (data, error) => {
          console.log('[addCollectionSnapshotListener] CALLBACK', { data, error });
        }
      )
    }
  },
);
