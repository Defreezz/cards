import style from '../packList.module.scss'
import SuperDoubleRange from "../../common/SuperDoubleRange/SuperDoubleRange";

export const Sidebar = () => {

    //const pack = useSelector(packSelector);

    return (
        <div className={style.sidebar}>
            <div className={style.doubleRange}>
                <span>Show number of cards</span>
                <SuperDoubleRange value={[10, 50]}/>
            </div>
        </div>

    )
}