"use client"

import { Window } from "@/components/window"
import { styled } from "styled-components"
import { Input } from "@/components/input"
import { useState } from "react"

const Spacer = styled.div`
  flex: 1;
`

const Inputs = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 2rem;
  width: 40%;
`

const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`

export default function Home() {
    const [firstValue, setFirstValue] = useState<string>("");
    const [lastValue, setLastValue] = useState<string>("");
    const [amount, setAmount] = useState<string>("");

    const handleClick = () => {
        const minValue = parseInt(firstValue);
        const maxValue = parseInt(lastValue);
        const prizeAmount = parseInt(amount);

        if (!Number.isInteger(minValue) || !Number.isInteger(maxValue) || !Number.isInteger(prizeAmount || minValue <= 0 || maxValue <= 0 || prizeAmount <= 0)) {
            alert("Некорректный ввод: все числа должны быть натуральными!");
            return;
        }

        if (minValue >= maxValue) {
            alert("Некорректный ввод: номер первого билета должен быть меньше, чем номер второго билета!");
            return;
        }

        if (maxValue - minValue < prizeAmount) {
            alert("Некорректный ввод: билетов меньше, чем призов!");
            return;
        }

        window.location.href = `/results?minValue=${minValue}&maxValue=${maxValue}&amount=${prizeAmount}`;
    };

    return (
        <Window headerText="Квантовая лотерея">
            <Spacer />
            <Inputs>
                <Input
                    inputTitle="Первый билет"
                    inputValue={firstValue}
                    inputUpdateValue={setFirstValue}
                />
                <Input
                    inputTitle="Последний билет"
                    inputValue={lastValue}
                    inputUpdateValue={setLastValue}
                />
                <Input
                    inputTitle="Количество призов"
                    inputValue={amount}
                    inputUpdateValue={setAmount}
                />
            </Inputs>
            <ButtonWrapper>
                <button onClick={handleClick}>Запуск</button>
            </ButtonWrapper>
        </Window>
    );
}
