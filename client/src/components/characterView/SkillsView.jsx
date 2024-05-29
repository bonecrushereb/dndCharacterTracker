import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { skillLevelModel } from '../../models/skillLevelModel';
import { profbonusModel } from '../../models/proficiencyBonusModel';

const SkillsView = ({character: { character }}) => {
  return (

    <div className='characterView-skills'>
        <div className='characterView-skill'>
            <p>Strength</p>
            <h3 className='abilityscore'>{skillLevelModel[character.strength]}</h3>
            <p>{character.strength}</p>
        </div>

        <div className='characterView-skill'>
            <p>Dexterity</p>
            <h3 className='abilityscore' >{skillLevelModel[character.dexterity]}</h3>
            <p>{character.dexterity}</p>
        </div>

        <div className='characterView-skill'>
            <p>Constitution</p>
            <h3 className='abilityscore'>{skillLevelModel[character.constitution]}</h3>
            <p>{character.constitution}</p>
        </div>

        <div className='characterView-skill'>
            <p>Intelligence</p>
            <h3 className='abilityscore'>{skillLevelModel[character.intelligence]}</h3>
            <p>{character.intelligence}</p>
        </div>

        <div className='characterView-skill'>
            <p>Wisdom</p>
            <h3 className='abilityscore'>{skillLevelModel[character.wisdom]}</h3>
            <p>{character.wisdom}</p>
        </div>

        <div className='characterView-skill'>
            <p>Charisma</p>
            <h3 className='abilityscore'>{skillLevelModel[character.charisma]}</h3>
            <p>{character.charisma}</p>
        </div>

        <div className='characterView-profbonus'>
            <p>Proficiency</p>
            <h3>+ {profbonusModel[character.level]}</h3>
            <p>Bonus</p>
        </div>

        <div className='characterView-walkspeed'>
            <p>Walking</p>
            <h3>{character.walkSpeed} ft.</h3>
            <p>Speed</p>
        </div>

        <div>
            <h3>Current Health</h3>
            <h3>{character.currentHealth}</h3>
            <h3>/</h3>
            <h3>Full Health</h3>
            <h3>{character.fullHealth}</h3>
        </div>
    </div>

  )
}

SkillsView.propTypes = {
    character: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    character: state.characterReducer
});

export default connect(mapStateToProps)(SkillsView);
