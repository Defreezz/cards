import React, {FC} from "react";
import style from "./ModalUpdate.module.css"

type ModalPropsType = {
    showModal: boolean
    width: number;
    height: number;
    backgroundOnClick: () => void
    cancelOnClick: () => void
    updateOnClick: () => void
    packName : string
    setName : (name : string) => void
}

const ModalUpdate: FC<ModalPropsType> = (props) => {

    const {
        showModal,
        width,
        height,
        backgroundOnClick,
        cancelOnClick,
        updateOnClick,
        packName,
        setName,
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
            >
                <input
                    className={style.inputUpdate}
                    value={packName}
                    onChange={(e) => setName(e.target.value)}
                />
                <div className={style.btnBlock}>
                    <button onClick={updateOnClick} className={style.btn}>Update</button>
                    <button onClick={cancelOnClick} className={style.btn}>Cancel</button>
                </div>
            </div>

        </>
    )
}

export default ModalUpdate;