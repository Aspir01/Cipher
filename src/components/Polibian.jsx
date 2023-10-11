import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./AddNews/AddNews.module.css";

const Polibian = () => {

    const [title, setTitle] = useState("");
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const polybiusSquare = [
        ['A', 'B', 'C', 'D', 'E'],
        ['F', 'G', 'H', 'I', 'K'],
        ['L', 'M', 'N', 'O', 'P'],
        ['Q', 'R', 'S', 'T', 'U'],
        ['V', 'W', 'X', 'Y', 'Z']
    ];

    const encryptText = () => {
        let encrypted = '';
        for (let i = 0; i < title.length; i++) {
            if (title[i].toUpperCase() === 'J') {
                continue; // Пропускаем букву J, так как она отсутствует в полибианском квадрате
            }
            for (let j = 0; j < polybiusSquare.length; j++) {
                for (let k = 0; k < polybiusSquare[j].length; k++) {
                    if (title[i].toUpperCase() === polybiusSquare[j][k]) {
                        encrypted += (j + 1) + '' + (k + 1); // Шифрованный символ представлен парой чисел, соответствующих индексам в полибианском квадрате
                    }
                }
            }
        }
        setEncryptedText(encrypted);
        setDecryptedText(''); // Сбрасываем расшифрованный текст при шифровании
    };

    const decryptText = () => {
        let decrypted = '';
        for (let i = 0; i < title.length; i += 2) {
            let row = parseInt(title[i]) - 1;
            let col = parseInt(title[i + 1]) - 1;
            decrypted += polybiusSquare[row][col];
        }
        setDecryptedText(decrypted);
        setEncryptedText('');
    };


    return (
        <div className={style.news}>
            <p>Шифр <b>Полибианский квадрат</b></p>
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

export default Polibian