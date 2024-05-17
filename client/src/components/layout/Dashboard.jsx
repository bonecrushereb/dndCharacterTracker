import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Card, Button } from 'react-bootstrap'

import { getCharacters } from '../../actions/character';

const Dashboard = ({ getCharacters, character: {characters} }) => {
    useEffect(() => {
        getCharacters();
    }, [getCharacters]);
    return (
        <>
        <div className='dashboard'>
            <h1>My Characters</h1>

            <div className='characterCard'>
                {characters.map((character) => (
                    <Card key={character.id}>
                        <Card.Body>
                            <Card.Title>{character.characterName}</Card.Title>
                            <Card.Text> level {character.level} | {character.race} | {character.characterClass}</Card.Text>
                            <div className='cardButtons'>
                                <Button>View</Button>
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
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