import React from "react";
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

export default function Chat() {
    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
    };

    return (
        <>
            <div className="App">
                <Widget />
            </div>
        </>
    );
  }
