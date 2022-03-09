import styles from './preloader.module.css';
type PreloaderType = {
    width?:string
    height?:string
}

export const Preloader = ({width,height}:PreloaderType) => (
    <div className={styles.container}>
        <div style={{width:width,height:height}} className={styles.loader} />
    </div>
);

