'use client' // Тут делаем чтобы можно было юзать хуки
import { useState } from "react" // Тут импортируем хук с React
import "./main.css" // Тут подключаем CSS файл

export default function Home() {

  const [ count, setCount ] = useState(0) // Объявляем переменную и функцию которая работает с переменной

  // Создаем стрелочную функцию добавляем которая добавляет к count цифру 1
  const onClickPlus = () => {
    setCount(count + 1)
  }
  // Создаем стрелочную функцию которая убирает от count цифру 1
  const onClickMinus = () => {
    setCount(count - 1)
  }

  const multiplication = count * 2
  const multiplication2 = multiplication * 2

  return (
    <main className="_next"> 
        <h1>Counter:</h1>
        <h2>{count}</h2>
        <p>{count} * 2 = {multiplication}</p>
        <p>{multiplication} * 2 = {multiplication2}</p>
        <button onClick={onClickPlus} className="plus">Plus</button>
        <button onClick={onClickMinus} className="minus">Minus</button>
    </main>
  )
}
