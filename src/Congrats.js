import React from 'react';


export default ({success} ) => {
    return success ? <div data-test="component-congrats">
                    <span data-test="congrats-message">
                    Congratulations! you guessed the word!
                    </span>
                </div> : <div data-test="component-congrats"></div>
};