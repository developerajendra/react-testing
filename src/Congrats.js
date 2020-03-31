import React from 'react';
import PropTypes from 'prop-types';

const Congrats =  ({success} ) => {
    return success ? <div data-test="component-congrats" className="alert alert-success" >
                    <span data-test="congrats-message">
                    Congratulations! you guessed the word!
                    </span>
                </div> : <div data-test="component-congrats"></div>
};

Congrats.propTypes = {
    success: PropTypes.bool,
}
export default Congrats;
