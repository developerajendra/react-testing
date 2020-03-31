import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props => {
    const guessedWordsRow = props.guessedWords.length && props.guessedWords.map((word, index)=>{
        return <tr data-test="guessed-word" key={index}>
            <td>{word.guessedWord}</td>
            <td>{word.letterMatchCount}</td>
        </tr>
    });

    let contents = props.guessedWords.length  ? 
    <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
            <thead className="thead-light">
                <tr>
                    <th>Guess</th>
                    <th>Matchng Letters</th>
                </tr>
                <tbody>
                    {guessedWordsRow}
                </tbody>
            </thead>
        </table>
    </div>
    :<span data-test="guess-instructions">
        Try to guess the secret word!
    </span>
   

    return <div data-test="component-guessed-words">
            {contents}
        </div>
});

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        }).isRequired
    )
};

export default GuessedWords;