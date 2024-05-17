import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCharacters } from '../../actions/character';

const Dashboard = ({ character: {characters} }) => {
    console.log(characters);
    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <>
        <div>
            <h1>My Characters</h1>

            <div>
                {characters.map((character) => {
                    {character.characterName}
                })}
            </div>
        </div>
        </>
    )
}

Dashboard.propTypes = {
    getCharacters: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    character: state.characterReducer
});

export default connect(mapStateToProps, { getCharacters })(Dashboard);