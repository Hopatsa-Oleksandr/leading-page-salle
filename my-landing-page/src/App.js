import React from 'react';
import styled from '@emotion/styled';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #282c34;
  color: white;
  font-size: 1.5rem;
`;

const Header = styled.h1`
  margin-bottom: 50px;
`;

const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const Timer = () => {
  const duration = 4 * 24 * 60 * 60 + 19 * 60 * 60; // 4 days and 19 hours in seconds

  return (
    <CountdownCircleTimer
      isPlaying
      duration={duration}
      colors={[
        ['#004777', 0.33],
        ['#F7B801', 0.33],
        ['#A30000', 0.33],
      ]}
      onComplete={() => [true, 1000]}
    >
      {({ remainingTime }) => {
        const days = Math.floor(remainingTime / (24 * 60 * 60));
        const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
        return `${days} дней ${hours} часов`;
      }}
    </CountdownCircleTimer>
  );
};

function App() {
  return (
    <Container>
      <Header>Предложение ограничено по времени!</Header>
      <TimerWrapper>
        <Timer />
      </TimerWrapper>
      <p>Покупайте наш товар сейчас и получите скидку!</p>
    </Container>
  );
}

export default App;
