import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { getCharacter } from '../../actions/character';

import SkillsView from "./SkillsView";

const CharacterView = ({ getCharacter, character: { character }}) => {
    const { id } = useParams();
    useEffect(() => {
        getCharacter(id);
    },[getCharacter, id])
    return (
        <>
            <div className="characterView-Header">
                <h1 className="characterView-Title">{character.characterName}</h1>
                <p>{character.sex} {character.race} {character.characterClass}</p>
                <p>level {character.level}</p>
            </div>

            <SkillsView character={character}/>
        </>
    );
}

CharacterView.propTypes = {
    getCharacter: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    character: state.characterReducer
})

export default connect(mapStateToProps, {getCharacter})(CharacterView);