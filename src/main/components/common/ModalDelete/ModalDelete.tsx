import React, {FC} from "react";
import style from "./ModalDelete.module.css"

type ModalPropsType = {
    showModal: boolean
    width: number;
    height: number;
    backgroundOnClick: () => void
    cancelOnClick: () => void
    deleteOnClick: () => void
}

const ModalDelete: FC<ModalPropsType> = (props) => {

    const {
        showModal,
        width,
        height,
        backgroundOnClick,
        cancelOnClick,
        deleteOnClick,
        children
    } = props

    const top = `calc(50vh - ${height / 2}px)`;
    const left = `calc(50vw - ${width / 2}px)`;

    if (!showModal) return null;

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    top: '0px',
                    left: '0px',
                    width: '100vw',
                    height: '100vh',

                    background: 'black',
                    opacity: 0.35,
                    zIndex: 20,
                }}
                onClick={backgroundOnClick}
            />
            <div
                style={{
                    position: 'fixed',
                    top,
                    left,
                    width,
                    height,
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    borderRadius: '5px',
                    background: '#5f6a72',
                    zIndex: 21,
                }}
                onClick={() => {
                }}
            >
                <div className={style.question}>Are you sure you want to delete this pack?</div>
                <div className={style.btnBlock}>
                    <button onClick={deleteOnClick} className={style.btn}>Delete</button>
                    <button onClick={cancelOnClick} className={style.btn}>Cancel</button>
                </div>
            </div>

        </>
    )
}

export default ModalDelete;