import Header from "./Header";
import * as React from "react"

export default function Layout({ children }) {
    return (
        <body>
            <Header />
            {children}
        </body>
    );
}