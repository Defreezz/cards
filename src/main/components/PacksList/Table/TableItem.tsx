import style from './table.module.scss'

type TableItemType = {
    name: string
    cre: string
    lust: string
    pack: number
}
export const TableItem = ({pack, cre, lust, name}: TableItemType) => {


    return (
        <div className={style.itemsBlock}>
            <div className={style.tableItem}>{name}</div>
            <div className={style.tableItem}>{pack}</div>
            <div className={style.tableItem}>{cre}</div>
            <div className={style.tableItem}>{lust}</div>
            <div>тут кнопки</div>
        </div>
    )
}