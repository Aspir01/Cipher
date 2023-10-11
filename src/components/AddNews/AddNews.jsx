import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./AddNews.module.css";

const AddNews = () => {
    const [title, setTitle] = useState("");
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const encryptText = () => {
        // Массив, содержащий алфавит
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const key = 'key'; // Ключ шифрования

        let encrypted = '';
        let keyIndex = 0;

        for (let i = 0; i < title.length; i++) {
            // Получаем текущую букву сообщения
            const char = title[i].toLowerCase();

            // Если текущий символ является буквой
            if (char.match(/[a-z]/)) {
                const charIndex = alphabet.indexOf(char); // Индекс текущей буквы
                const keyChar = key[keyIndex].toLowerCase(); // Получаем текущую букву ключа
                const keyIndexInAlphabet = alphabet.indexOf(keyChar); // Индекс текущей буквы ключа в алфавите

                // Шифруем текущую букву
                const encryptedCharIndex = (charIndex + keyIndexInAlphabet) % 26;
                const encryptedChar = alphabet[encryptedCharIndex];
                encrypted += encryptedChar;

                // Переходим к следующей букве ключа
                keyIndex = (keyIndex + 1) % key.length;
            } else {
                // Если символ не является буквой, добавляем его как есть
                encrypted += char;
            }
        }

        setEncryptedText(encrypted);
    };

    const decryptText = () => {
        // Логика расшифровки текста
        // Массив, содержащий алфавит
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const key = 'key'; // Ключ расшифрования

        let decrypted = '';
        let keyIndex = 0;

        for (let i = 0; i < encryptedText.length; i++) {
            // Получаем текущий зашифрованный символ
            const char = encryptedText[i].toLowerCase();

            // Если текущий символ является буквой
            if (char.match(/[a-z]/)) {
                const charIndex = alphabet.indexOf(char); // Индекс текущей буквы
                const keyChar = key[keyIndex].toLowerCase(); // Получаем текущую букву ключа
                const keyIndexInAlphabet = alphabet.indexOf(keyChar); // Индекс текущей буквы ключа в алфавите

                // Расшифровываем текущую букву
                const decryptedCharIndex = (charIndex - keyIndexInAlphabet + 26) % 26;
                const decryptedChar = alphabet[decryptedCharIndex];
                decrypted += decryptedChar;

                // Переходим к следующей букве ключа
                keyIndex = (keyIndex + 1) % key.length;
            } else {
                // Если символ не является буквой, добавляем его как есть
                decrypted += char;
            }
        }

        setDecryptedText(decrypted);
    };

    return (
        <div className={style.news}>
            <p>Шифр <b>Виженера</b></p>
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
}

export default AddNews;