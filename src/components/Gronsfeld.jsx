import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./AddNews/AddNews.module.css";

const Gronsfeld = () => {

    const [title, setTitle] = useState(""); const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    function encryptText() {
        const key = 'SECRETKEY'; // replace with your own secret key
        let encrypted = '';
        for (let i = 0; i < title.length; i++) {
            const charCode = title.charCodeAt(i);
            const keyChar = key.charCodeAt(i % key.length);
            const encryptedCharCode = (charCode + keyChar) % 256;
            encrypted += String.fromCharCode(encryptedCharCode);
        }
        setEncryptedText(encrypted);
    }

    function decryptText() {
        const key = 'SECRETKEY'; // replace with your own secret key
        let decrypted = '';
        for (let i = 0; i < encryptedText.length; i++) {
            const charCode = encryptedText.charCodeAt(i);
            const keyChar = key.charCodeAt(i % key.length);
            const decryptedCharCode = (charCode - keyChar + 256) % 256;
            decrypted += String.fromCharCode(decryptedCharCode);
        }
        setDecryptedText(decrypted);
    }

    return (
        <div className={style.news}>
            <p>Шифр <b>Гронсфельда</b></p>
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

export default Gronsfeld