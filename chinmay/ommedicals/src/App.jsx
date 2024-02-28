import './App.css'
import Product from './Product'

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
initializeApp();
const db = getFirestore();
const docRef = db.collection('users').doc('alovelace');
await docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});
const aTuringRef = db.collection('users').doc('aturing');

await aTuringRef.set({
  'first': 'Alan',
  'middle': 'Mathison',
  'last': 'Turing',
  'born': 1912
});
const snapshot = await db.collection('users').get();
snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
});
function App() {
    // JS scripts
    return (
    <>
    <div class="container">
        <Product id="00000001"
            title="Ayurvedic Body Lotion - Boro Plus"
            price={90}
            image="https://imgur.com/u6kTtXE.jpg"
            alt="Boro Plus - Ayurvedic Body Lotion"
            category="Cosmetics"/>
        <Product id="00000002"
            title="Vaseline Cocoa glow"
            price={99}
            image="https://imgur.com/t485XxJ.jpg"
            alt="Vaseline Cocoa glow"
            category="Cosmetics"/>
        <Product id="00000003"
            title="Anti Lice Oil - Mediker"
            price={36}
            image="https://imgur.com/YErVKFH.jpg"
            alt="Anti Lice Oil - Mediker"
            category="Cosmetics"/>
        <Product id="00000004"
            title="Nail Color Remover Lakme"
            price={99}
            image="https://imgur.com/wO2fGxx.jpg"
            alt="Nail Color Remover Lakme"
            category="Cosmetics"/>
        <Product id="00000005"
            title="Dabur Chyawanprash"
            price={230}
            image="https://imgur.com/GLAvynX.jpg"
            alt="Dabur Chyawanprash"
            category="Medicine"/>
        <Product id="00000006"
            title="SAFI Blood Purifier"
            price={598}
            image="https://imgur.com/MUQ5qdr.jpg"
            alt="SAFI Blood Purifier"
            category="Medicine"/>
        <Product id="00000007"
            title="Glucon D - Instant energy"
            price={195}
            image="https://imgur.com/GepbMXY.jpg"
            alt="Glucon D - Instant energy"
            category="Medicine"/>
    </div>
    </>
  )
}

export default App
