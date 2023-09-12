import React from 'react'
import './pages.css';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();

    return (
        <div className='about_container'>
            <div className="background_Img_contaienr">
                <img className='background_img' src="https://img.freepik.com/free-vector/global-technology-earth-news-bulletin-background_1017-33687.jpg?size=626&ext=jpg&uid=R107810796&semt=sph" alt="" />
                <div className="colorEffect"></div>
                <div className="data">
                    <h3>{t('about.heading')}</h3>
                    <p>{t('about.para')}</p>
                </div>
            </div>
            <div className="first_container">
                <div className="data">
                    <h3>{t('about.first_heading')}</h3>
                    <p>{t('about.first_para')}</p>
                </div>
                <img src="https://img.freepik.com/free-photo/happy-professional-sitting-workplace_74855-2296.jpg?size=626&ext=jpg&uid=R107810796&semt=sph" alt="image" />
            </div>
            <hr />
            <div className="first_container secound_container">
                <div className="data">
                    <h3>{t('about.secound_heading')}</h3>
                    <p>{t('about.secound_para')}</p>
                </div>
                <img src="https://img.freepik.com/free-psd/3d-rendering-announcement-blank-banner-background_23-2150742099.jpg?size=626&ext=jpg&uid=R107810796&semt=sph" alt="image" />
            </div>
            <hr />
            <div className="first_container ">
                <div className="data">
                    <h3>{t('about.third_heaing')}</h3>
                    <p>{t('about.third_para')}</p>
                </div>
                <img src="https://img.freepik.com/free-vector/live-news-template-with-microphone-journalism-concept-hand-drawn-sketch-vector-illustration_460848-14801.jpg?size=626&ext=jpg&uid=R107810796&semt=sph" alt="image" />
            </div>

        </div>
    )
}
export default About;
