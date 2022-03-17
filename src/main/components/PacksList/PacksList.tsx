import style from './packList.module.scss'
import {Table} from "./Table/Table";
import {Sidebar} from "./Sidebar/Sidebar";

export const PacksList = () => {


    return (
        <div className={style.container}>
                <Sidebar/>
                <Table/>
        </div>
    )
};
