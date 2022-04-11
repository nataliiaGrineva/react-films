import styles from './Alert.module.scss';

const Alert = ({alert}) => (
    <div className={styles.alert_container}>
        <div className={styles.alert}>
            <span className={styles.alert_msg}>{`ERROR: ${alert}`}</span>
        </div>
    </div>
);

export default Alert;
