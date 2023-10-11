import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./AddNews/AddNews.module.css";

const AddDateset = () => {

    const [title, setTitle] = useState("");
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const encryptText = () => {
        const shift = 3; // Количество позиций для сдвига
        let encrypted = '';

        for (let i = 0; i < title.length; i++) {
            // Получаем текущий символ
            const char = title[i];

            // Если символ является латинской буквой
            if (char.match(/[a-z]/i)) {
                // Получаем ASCII-код текущего символа
                const charCode = title.charCodeAt(i);

                // Определяем, является ли символ верхним регистром
                const isUppercase = char === char.toUpperCase();

                // Производим сдвиг символов
                const shiftedCharCode = ((charCode - (isUppercase ? 65 : 97) + shift) % 26) + (isUppercase ? 65 : 97);

                // Получаем зашифрованный символ
                const shiftedChar = String.fromCharCode(shiftedCharCode);

                // Добавляем зашифрованный символ к зашифрованному тексту
                encrypted += shiftedChar;
            } else {
                // Если символ не является буквой, добавляем его как есть
                encrypted += char;
            }
        }

        setEncryptedText(encrypted);
    };

    const decryptText = () => {
        const shift = 3; // Количество позиций для сдвига
        let decrypted = '';

        for (let i = 0; i < encryptedText.length; i++) {
            // Получаем текущий зашифрованный символ
            const char = encryptedText[i];

            // Если символ является латинской буквой
            if (char.match(/[a-z]/i)) {
                // Получаем ASCII-код текущего символа
                const charCode = encryptedText.charCodeAt(i);

                // Определяем, является ли символ верхним регистром
                const isUppercase = char === char.toUpperCase();

                // Производим обратный сдвиг символов
                const shiftedCharCode = ((charCode - (isUppercase ? 65 : 97) - shift + 26) % 26) + (isUppercase ? 65 : 97);

                // Получаем расшифрованный символ
                const shiftedChar = String.fromCharCode(shiftedCharCode);

                // Добавляем расшифрованный символ к расшифрованному тексту
                decrypted += shiftedChar;
            } else {
                // Если символ не является буквой, добавляем его как есть
                decrypted += char;
            }
        }
        setDecryptedText(decrypted);
    };

    return (
        <div className={style.news}>
            <p>Шифр <b>Цезаря</b></p>
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
    );
};

export default AddDateset;