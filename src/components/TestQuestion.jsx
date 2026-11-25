import React, { Component } from "react";

export default class TestQuestion extends Component {
    render() {
        return (
            <div className="question">
                <h2>
                    Question #{this.props.questionId}: {this.props.questionText}
                </h2>
                <ul>
                    {this.props.answers.map((a, index) => (
                        <li key={index}>
                            <input
                                type="radio"
                                name="answer"
                                id={"answer_" + index}
                                value={a}
                            />
                            <label htmlFor={"answer_" + index}>{a}</label>
                        </li>
                    ))}
                </ul>
                <button>Submit</button>
            </div>
        );
    }
}
