import styled from "@emotion/styled";
import styles from "./App.module.css";
import { vars } from "@xyz/themes";
import { ThemeProvider } from "@emotion/react";

function App() {
  const theme = {
    colors: vars.colors.$scale,
  };

  return (
    <ThemeProvider theme={theme}>
      <View />
    </ThemeProvider>
  );
}

const Button = styled.button`
  background-color: ${({ theme }) => {
    // @ts-ignore
    return theme.colors.blue[500];
  }};
  color: ${vars.colors.$scale.red[500]};
`;

function View() {
  return (
    <div>
      <header className={styles.header}>헤더</header>
      <main className={styles.main}>
        <h1 className="heading4xl">제목1</h1>
        <p className="textxl">다람쥐 헌 쳇바퀴에 타고파</p>
        <Button>버튼</Button>
      </main>
      <footer className={styles.footer}>푸터</footer>
    </div>
  );
}

export default App;
