import React, { useEffect, useState } from 'react';
import './LanguageSelector.css';
import { Link } from 'react-router-dom';
import { GrLanguage } from 'react-icons/gr';
import { useTranslation } from 'react-i18next';
import i18n from '../languageChanger/languageChanger';
function LanguageSelector() {
    const { t } = useTranslation();
    const [dropdown, setDropdown] = useState(false);

    //Setup currect active languge
    useEffect(() => {
        //Get item from loaclStorage
        let setlanguage = localStorage.getItem('lang');
        i18n.changeLanguage(setlanguage);
    }, []);
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        //Set value in local storage
        localStorage.setItem("lang", lng);
    };

    return (
        <>
            <div className='navbar_container'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className='language_main'
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}>
                <div className='language_icon'>
                    <GrLanguage
                    />
                </div>
                <ul className='language_container' style={{ height: dropdown ? "100px" : "0" }}>
                    <li onClick={() => changeLanguage('en')}>{t('english')}</li>
                    <li onClick={() => changeLanguage('hi')}>{t('hindi')}</li>
                    <li onClick={() => changeLanguage('fr')}>{t('franch')}</li>
                </ul>

            </div>
        </>

    );
}

export default LanguageSelector;
