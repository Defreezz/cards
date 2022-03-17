import {useCallback, useMemo, useState} from "react";
import {useTypedDispatch} from "./useTypedDispatch";
import {setSortPacks} from "../../store/actions/packsReducerActions";

export const useTableSort = () => {
    const dispatch = useTypedDispatch()

    const [itemNameSort, setItemNameSort] = useState<"0name" | "1name">("0name");
    const [userNameSort, setUserNameSort] = useState<"0user_id" | "1user_id">("0user_id");
    const [quantitySort, setQuantitySort] = useState<"0cardsCount" | "1cardsCount">("0cardsCount");
    const [lastUpdate, setLastUpdate] = useState<"0updated" | "1updated">("0updated");


    const handleSortName = useCallback(() => {
        if (itemNameSort === "1name") {
            setItemNameSort(() => "0name")
        } else {
            setItemNameSort(() => "1name")
        }
        dispatch(setSortPacks(itemNameSort))
    }, [dispatch, itemNameSort])

    const handleUserNameSort = useCallback(() => {
        if (userNameSort === "1user_id") {
            setUserNameSort(() => "0user_id")
        } else {
            setUserNameSort(() => "1user_id")
        }
        dispatch(setSortPacks(userNameSort))
    }, [dispatch, userNameSort])

    const handleQuantitySort = useCallback(() => {
        if (quantitySort === "1cardsCount") {
            setQuantitySort(() => "0cardsCount")
        } else {
            setQuantitySort(() => "1cardsCount")
        }
        dispatch(setSortPacks(quantitySort))
    }, [dispatch, quantitySort])

    const handleLastUpdateSort = useCallback(() => {
        if (lastUpdate === "1updated") {
            setLastUpdate(() => "0updated")
        } else {
            setLastUpdate(() => "1updated")
        }
        dispatch(setSortPacks(lastUpdate))

    }, [dispatch, lastUpdate])
    return useMemo(() => ({
            handleSortName,
            handleUserNameSort,
            handleQuantitySort,
            handleLastUpdateSort,
            itemNameSort,
            userNameSort,
            quantitySort,
            lastUpdate,
        }),
        [
            handleSortName,
            handleUserNameSort,
            handleQuantitySort,
            handleLastUpdateSort,
            itemNameSort,
            userNameSort,
            quantitySort,
            lastUpdate,
        ])
}