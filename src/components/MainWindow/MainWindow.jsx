import React from 'react'
import style from "./MainWindow.module.css"
import { Link } from 'react-router-dom';

const MainWindow = () => {
    return (
        <div className={style.main}>
            <p><b>Выберите шифр:</b> <br />
                Вводите буквы на английском</p>
            <div className={style.btns}>
                <Link to="/AiNews/news">
                    <button className={style.btnOne}>Шифр Виженера</button>
                </Link>
                <Link to="/AiNews/dataset">
                    <button className={style.btnTwo}>Шифр Цезаря</button>
                </Link>
                <Link to="/AiNews/pol">
                    <button className={style.btnOne}>Полибианский квадрат</button>
                </Link>
                <Link to="/AiNews/atb">
                    <button className={style.btnOne}>Шифр Атбаш</button>
                </Link>
                <Link to="/AiNews/tri">
                    <button className={style.btnTwo}>Шифр Трисимуса</button>
                </Link>
                <Link to="/AiNews/big">
                    <button className={style.btnOne}>Шифр биграммами</button>
                </Link>
                <Link to="/AiNews/gron">
                    <button className={style.btnTwo}>Шифр Гронсфельда</button>
                </Link>
            </div>
        </div>
    )
}

export default MainWindow