import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TestQuestion from "./components/TestQuestion";

export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                <main>
                    <TestQuestion
                        questionId={0}
                        questionText={
                            "What on the list is not programming language?"
                        }
                        answers={["JavaScript", "HTML", "C#", "Cobol", "Rust"]}
                    />
                </main>
                <Footer />
            </>
        );
    }
}
