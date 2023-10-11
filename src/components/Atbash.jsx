import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./AddNews/AddNews.module.css";

const Atbash = () => {

    const [title, setTitle] = useState("");
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    function encryptText() {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let encrypted = '';
        for (let i = 0; i < title.length; i++) {
            const char = title.charAt(i).toLowerCase();
            const index = alphabet.indexOf(char);
            if (index !== -1) {
                const encryptedChar = alphabet.charAt(25 - index);
                encrypted += encryptedChar;
            } else {
                encrypted += char;
            }
        }
        setEncryptedText(encrypted);
    }

    function decryptText() {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let decrypted = '';
        for (let i = 0; i < encryptedText.length; i++) {
            const char = encryptedText.charAt(i).toLowerCase();
            const index = alphabet.indexOf(char);
            if (index !== -1) {
                const decryptedChar = alphabet.charAt(25 - index);
                decrypted += decryptedChar;
            } else {
                decrypted += char;
            }
        }
        setDecryptedText(decrypted);
    }

    return (
        <div className={style.news}>
            <p>Шифр <b>Атбаш</b></p>
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

export default Atbash