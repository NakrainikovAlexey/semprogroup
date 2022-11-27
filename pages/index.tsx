import styles from '../styles/Home.module.scss'
import Form from "../components/Form/Form";


const Home = () => {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.partnership}>
                    <h1>Сотрудничество</h1>
                    <span>по вопросам сотрудничества</span>
                    <div className={styles.number}>+7 (495) 111-22-33</div>
                </div>
                <Form/>
            </main>
        </>
    )
}

export default Home