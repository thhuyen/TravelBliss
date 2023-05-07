import classNames from "classnames/bind";
import { useState } from "react";
import "react-chatbot-kit/build/main.css";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import styles from "./Chatbot.module.scss";

const cxChat = classNames.bind(styles);

const theme = {
    background: "white",
    headerBgColor: "#FF5733",
    headerFontSize: "20px",
    botBubbleColor: "#FF5733",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "#FF5733",
    userFontColor: "white",
};
const config = {
    floating: true,
};

function Chatbot() {
    // const [userInput, setUserInput] = useState("");
    const userResponse = localStorage.getItem("userResponse");

    return (
        <div className={cxChat("chatbot")}>
            <ThemeProvider theme={theme}>
                <ChatBot
                    bubbleOptionStyle={{ backgroundColor: "white", color: "black" }}
                    placeholder="Hi, I need help!"
                    headerTitle="Support"
                    className={cxChat("chat")}
                    {...config}
                    steps={[
                        {
                            id: "1",
                            message: "How can I help you?",
                            trigger: "2",
                        },
                        {
                            id: "2",
                            user: true,
                            trigger: "save-response",
                        },
                        {
                            id: "save-response",
                            message: "Thanks for your response!",
                            action: (previousStep) => {
                                const userResponse = previousStep.value;
                                localStorage.setItem("userResponse", userResponse);
                                return { end: true };
                            },
                        },
                    ]}
                />
            </ThemeProvider>
        </div>
    );
}

export default Chatbot;
