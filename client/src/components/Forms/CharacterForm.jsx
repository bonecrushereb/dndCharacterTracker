import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createCharacter } from '../../actions/character';
import { characterModel } from '../../models/characterModel';

const CharacterForm = ({character: {character}, createCharacter }) => {
    const [formData, setFormData] = useState(characterModel);

    const {
        characterName,
        sex,
        race,
        characterClass,
        level,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
        walkSpeed,
        currentHealth,
        fullHealth,
        tempHealth,
        armor,
        weapons,
        tools,
        languages,
        background,
        alignment,
        faith,
        lifeStyle,
        hairStyle,
        skinColor,
        eyeColor,
        height,
        weight,
        age,
        personalityTrait,
        ideals,
        bonds,
        flaws,
        organizations,
        allies,
        enemies,
        backstory
    } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        createCharacter(formData);
    }
    return (
        <>
        <h1 className='formTitle'>Character Sheet</h1>
        
        <form onSubmit={onSubmit}>
            <div>
                <input className='characterName' type="text" placeholder="Character Name" name="characterName" value={characterName} onChange={onChange}/>
                <input className='characterRace' type="text" placeholder="Race" name="race" value={race} onChange={onChange}/>
                <input className='characterClass' type="text" placeholder="Character Class" name="characterClass" value={characterClass} onChange={onChange}/>
                <input className='characterLevel' type="number" placeholder="level" name="level" value={level} onChange={onChange}/>
            </div>

            <div className='healthbar'>
                <input className='health' type="number" placeholder="CH" name="currentHealth" value={currentHealth} onChange={onChange}/>
                <input className='health' type="number" placeholder="FH" name="fullHealth" value={fullHealth} onChange={onChange}/>
                <input className='health' type="number" placeholder="TH" name="tempHealth" value={tempHealth} onChange={onChange}/>
            </div>

            <div className='tools'>
                <input className='toolInput' type="text" placeholder="Armor" name="armor" value={armor} onChange={onChange}/>
                <input className='toolInput' type="text" placeholder="Weapons" name="weapons" value={weapons} onChange={onChange}/>
                <input className='toolInput' type="text" placeholder="Tools" name="tools" value={tools} onChange={onChange}/>
                <input className='toolInput' type="text" placeholder="Languages" name="languages" value={languages} onChange={onChange}/>
            </div>

            <div className='skills'>
                <input className='skill' type="number" placeholder="str" name="strength" value={strength} onChange={onChange}/>
                <input className='skill' type="number" placeholder="dex" name="dexterity" value={dexterity} onChange={onChange}/>
                <input className='skill' type="number" placeholder="con" name="constitution" value={constitution} onChange={onChange}/>
                <input className='skill' type="number" placeholder="int" name="intelligence" value={intelligence} onChange={onChange}/>
                <input className='skill' type="number" placeholder="wis" name="wisdom" value={wisdom} onChange={onChange}/>
                <input className='skill' type="number" placeholder="char" name="charisma" value={charisma} onChange={onChange}/>
                <input className='skill' type="number" placeholder="speed" name="walkSpeed" value={walkSpeed} onChange={onChange}/>
            </div>

            <div className='characteristics'>
                <input className='characterAge' type="number" placeholder='age' name='age' value={age} onChange={onChange} />
                <input className='characterSex' type="text" placeholder='sex' name='sex' value={sex} onChange={onChange} />
                <input className="weight" type="number" placeholder='weight' name='weight' value={weight} onChange={onChange}/>
                <input className="height" type="number" placeholder='height' name='height' value={height} onChange={onChange}/>
                <input className='hairStyle' type="text" placeholder='hair style' name='hairStyle' value={hairStyle} onChange={onChange}/>
                <input className='eyeColor' type="text" placeholder='eye color' name='eyeColor' value={eyeColor} onChange={onChange}/>
                <input className='skinColor' type="text" placeholder='skin color' name='skinColor' value={skinColor} onChange={onChange}/>
            </div>

            <div>
                <textarea className='background' placeholder="background" name="background" value={background} cols="150" rows="10" onChange={onChange}></textarea>
            </div>
            <div>
                <input className='alignment' type="text" placeholder='alignment' name='alignment' value={alignment} onChange={onChange}/>
                <input className='faith' type="text" placeholder='faith' name='faith' value={faith} onChange={onChange}/>
                <input className='lifeStyle' type="text" placeholder='life style' name='lifeStyle' value={lifeStyle} onChange={onChange}/>
            </div>

            <div className='personality'>
                <textarea placeholder='personality trait' name="personalityTrait" value={personalityTrait} cols="30" rows="10" onChange={onChange}></textarea>
                <textarea placeholder='ideals' name="ideals" value={ideals} cols="30" rows="10" onChange={onChange}></textarea>
                <textarea placeholder='bonds' name="bonds" value={bonds} cols="30" rows="10" onChange={onChange}></textarea>
                <textarea placeholder='flaws' name="flaws" value={flaws} cols="30" rows="10" onChange={onChange}></textarea>
            </div>

            <div className='people'>
                <input className='organization' placeholder='organizations' name="organizations" value={organizations} onChange={onChange} />
                <input className='allies' placeholder='allies' name="allies" value={allies} onChange={onChange} />
                <input className='enemies' placeholder='enemies' name="enemies" value={enemies} onChange={onChange} />
            </div>

            <div>
                <textarea className='backstory' placeholder='backstory' name="backstory" value={backstory} cols="170" rows="20" onChange={onChange}></textarea>
            </div>
        </form>
        </>
    )
}

CharacterForm.propTypes = {
    createCharacter: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    character: state.characterReducer
})

export default connect(mapStateToProps, { createCharacter })(CharacterForm)