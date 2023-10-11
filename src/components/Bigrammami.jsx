import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./AddNews/AddNews.module.css";

const Bigrammami = () => {

    const [title, setTitle] = useState("");
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    function encryptText() {
        let encrypted = '';
        const bigramMap = {
            "aa": "af",
            "ab": "ad",
            "ac": "af",
            "ad": "aa",
            "ae": "ag",

        };
        for (let i = 0; i < title.length; i += 2) {
            const bigram = title.slice(i, i + 2).toLowerCase();
            const encryptedBigram = bigramMap[bigram] || bigram;
            encrypted += encryptedBigram;
        }
        setEncryptedText(encrypted);
    }

    function decryptText() {
        let decrypted = '';
        const bigramMap = {
            "af": "aa",
            "ad": "ab",
            "ac": "aa",
            "aa": "ad",
            "ag": "ae",
            // ... complete with the rest of the alphabet
        };
        for (let i = 0; i < encryptedText.length; i += 2) {
            const encryptedBigram = encryptedText.slice(i, i + 2).toLowerCase();
            const decryptedBigram = bigramMap[encryptedBigram] || encryptedBigram;
            decrypted += decryptedBigram;
        }
        setDecryptedText(decrypted);
    }

    return (
        <div className={style.news}>
            <p>Шифр <b>биграммами</b></p>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Введите текст' />
            <div className={style.btns}>

                <button onClick={decryptText}>Расшифровать</button>
                <button onClick={encryptText}>Зашифровать</button>
            </div>
            <div className={style.btns}>
                <Link to="/AiNews/">
                    <button>Назад</button>
                </Link>
            </div>
            {title.length > 1 ?
                <div className={style.res}>
                    Зашифрованный текст: {encryptedText}
                </div> : ""}
            {title.length > 1 ?
                <div className={style.res}>
                    Расшифрованный текст: {decryptedText}
                </div> : ""}
        </div>
    )
}

export default Bigrammami