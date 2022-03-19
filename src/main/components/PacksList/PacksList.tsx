import style from './packList.module.scss'
import {PacksTable} from "./PacksTable/PacksTable";
import {Sidebar} from "./Sidebar/Sidebar";

export const PacksList = () => {

       return (
        <div className={style.container}>
                <Sidebar/>
                <PacksTable/>
        </div>
    )
};
