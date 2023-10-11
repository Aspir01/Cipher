import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./AddNews/AddNews.module.css";

const Tricimus = () => {

    const [title, setTitle] = useState("");
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const encryptText = () => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const key = "TRISIMUS";
        let encryptedText = "";

        // Преобразуем текст в верхний регистр и удаляем пробелы
        const cleanText = title.toUpperCase().replace(/\s/g, "");

        for (let i = 0; i < cleanText.length; i++) {
            const plaintextChar = cleanText[i];

            // Ищем индекс текущего символа в алфавите
            const alphabetIndex = alphabet.indexOf(plaintextChar);

            // Если символ не найден в алфавите, добавляем его к зашифрованному тексту без шифрования
            if (alphabetIndex === -1) {
                encryptedText += plaintextChar;
                continue;
            }

            // Ищем индекс символа ключа, который будет использован для шифрования
            const keyIndex = i % key.length;

            // Находим символ шифра, заменяющий текущий символ
            const encryptedChar = alphabet[(alphabetIndex + alphabet.indexOf(key[keyIndex])) % alphabet.length];

            encryptedText += encryptedChar;
        }

        setEncryptedText(encryptedText);
    }


    const decryptText = () => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const key = "TRISIMUS";
        let decryptedText = "";

        // Преобразуем зашифрованный текст в верхний регистр и удаляем пробелы
        const cleanText = encryptedText.toUpperCase().replace(/\s/g, "");

        for (let i = 0; i < cleanText.length; i++) {
            const encryptedChar = cleanText[i];

            // Ищем индекс текущего символа шифра в алфавите
            const alphabetIndex = alphabet.indexOf(encryptedChar);

            // Если символ не найден в алфавите, добавляем его к расшифрованному тексту без расшифровки
            if (alphabetIndex === -1) {
                decryptedText += encryptedChar;
                continue;
            }

            // Ищем индекс символа ключа, который был использован для шифрования
            const keyIndex = i % key.length;

            // Находим символ исходного текста, заменяемый текущим символом шифра
            const decryptedCharIndex = (alphabet.indexOf(encryptedChar) - alphabet.indexOf(key[keyIndex]) + alphabet.length) % alphabet.length;
            const decryptedChar = alphabet[decryptedCharIndex];

            decryptedText += decryptedChar;
        }

        setDecryptedText(decryptedText);
    }

    return (
        <div className={style.news}>
            <p>Шифр <b>Трисимуса</b></p>
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

export default Tricimus