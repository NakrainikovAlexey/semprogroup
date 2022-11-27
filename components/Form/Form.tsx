import styles from "./Form.module.scss";
import Link from "next/link";
import React, {useState} from "react";

const Form: React.FC = () => {

    const [name, setName] = useState("")
    const [plName, setPlName] = useState(`${styles.placeholder}`)
    const [email, setEmail] = useState("");
    const [plEmail, setPlEmail] = useState(`${styles.placeholder}`)
    const [area, setArea] = useState("");
    const [plArea, setPlArea] = useState(`${styles.placeholder}`)

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setEmail(value);
        value ? setPlEmail(`${styles.placeholder} ${styles.non_p}`) : setPlEmail(`${styles.placeholder}`)
    };
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setName(value);
        value ? setPlName(`${styles.placeholder} ${styles.non_p}`) : setPlName(`${styles.placeholder}`)
    };
    const handleAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        setArea(value);
        value ? setPlArea(`${styles.placeholder} ${styles.non_p}`) : setPlArea(`${styles.placeholder}`)
    };
    const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(`${name}, ${email}, ${area} `)
    }

    return (
        <form onSubmit={handleFormSubmit} id="partnership" className={styles.form}>
            <span className={styles.form_title}>Напишите нам, и мы предоставим <br/> всю необходимую информацию.</span>
            <label className={styles.form_label}>
                <input onChange={handleNameChange} value={name} type="text" required autoFocus={true}/>
                <span className={plName}>Ваше имя</span>
            </label>
            <label className={styles.form_label}>
                <input onChange={handleEmailChange} value={email} type="email" required/>
                <span className={plEmail}>Введите e-mail</span>
            </label>
            <label className={`${styles.form_label} ${styles.area}`}>
                <textarea onChange={handleAreaChange} value={area} className={styles.area_input} required/>
                <span className={plArea}>Ваше сообщение</span>
            </label>
            <input className={styles.checkbox} id={"check"} type={"checkbox"} required/>
            <label htmlFor={"check"}><span>заполняя форму, вы даёте <br/>
                        <Link href={"/personal"}>согласие на обработку персональных данных </Link></span>
                <button type="submit">Отправить</button>
            </label>
        </form>
    )
}

export default Form