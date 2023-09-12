import React from 'react'
import './pages.css';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();
    return (
        <div className='home_main_container'>
            <div>
                <h3>{t('home.firstnews_heading')}</h3>
                <p>{t('home.firstnews_para')}</p>
                <hr />
                <img src="https://images.indianexpress.com/2023/09/Modi-Parliament.jpg?w=640" alt="img" />
                <p>{t('home.firstnews_main_para')}</p>
            </div>
            <hr />
            <div>
                <h3>{t('home.secoundnews_heading')}</h3>
                <img src="https://uspolicy.org/wp-content/uploads/2023/09/AdobeStock_97512162-768x576.jpeg" alt="img" />
                <p>{t('home.secoundnews_para')}</p>
                <p>{t('home.secoundnews_secound_para')}</p>
                <p>{t('home.secoundnews_third_para')}</p>
                <p>{t('home.secoundnews_fourth_para')}</p>
                <p>{t('home.secoundnews_fifth_para')}</p>
                <p>{t('home.secoundnews_sixth_para')}</p>
                <p>{t('home.secoundnews_seventh_para')}</p>

            </div>

        </div>
    )
}

export default Home;
