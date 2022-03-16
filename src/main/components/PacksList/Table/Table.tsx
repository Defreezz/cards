import style from './table.module.scss'
import {PacksSearch} from "./SearchPack";
import {TableHeader} from "./TableHeader";
import {TableItem} from "./TableItem";

export const Table = () => {
    const packs = [
        {name: 'asd', card: 12, lactup: 'sdfsdfsd fs sdf sdfsd', cre: 'asd f asda asdas asasd '},
        {name: 'sdf', card: 33, lactup: 'sdfsdfsdfsdfsd', cre: 'asd fas asasd '},
        {name: 'sdfs', card: 22, lactup: 'sdfsdfsd fsdfsd', cre: 'asd fas asasd '},
        {name: 'asd', card: 12, lactup: 'sdfsdfsdfsdfsd', cre: 'asd fas asasd '},
        {name: 'sdfsdf', card: 44, lactup: 'sdfdfsgd sdfsdfsdfsd', cre: 'asd fas asasd '},
        {name: 'assdfsdd', card: 12, lactup: 's', cre: 'asd fas asasd '},
        {name: 'assdfsd', card: 12, lactup: 'sdfsdfsdfsdfsd', cre: 'asd fas asasd '},
    ]
    //const pack = useSelector(selectPacks);

    return (
        <div className={style.tableContainer}>
            <PacksSearch/>
            <TableHeader/>
            <div className={style.itemsWrapper}>
                {packs.map(p => <TableItem pack={p.card} cre={p.cre} name={p.name} lust={p.lactup}/>)}
            </div>
            <div>
                тут будет пагинация
            </div>
        </div>
    )
}