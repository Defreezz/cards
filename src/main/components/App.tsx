import React, {useEffect} from "react";
import "./App.css";
import {useSelector} from "react-redux";
import {Header} from "./Header/Header";
import {Path, Router} from "./Routes/Router";
import {initializeApp} from "../../store/reducers/appReducer";
import {selectIsInit, selectIsLoggedIn} from "../../store/selectors";
import {Preloader} from "./common/Preloader/Preloader";
import {useTypedDispatch} from "../utils";
import {RouterWithoutLogin} from "./Routes/RouterWithoutLogin";
import {setModeIsMyPack} from "../../store/actions/packsReducerActions";
import {useLocation} from "react-router-dom";

export const App = () => {
    const dispatch = useTypedDispatch()

    const isLoggedIn = useSelector(selectIsLoggedIn)
    const isInitialized = useSelector(selectIsInit)
    const {pathname} = useLocation()

    useEffect(() => {
        if (pathname === Path.PacksList) {
            dispatch(setModeIsMyPack(false))
        } else {
            dispatch(setModeIsMyPack(true))
        }
        dispatch(initializeApp())

    }, [dispatch])

    if (!isInitialized) return <Preloader width={"40px"} height={"40px"}/>

    return (
        <>
            {isLoggedIn
                ? <div className="App">
                    <Header/>
                    <Router/>
                </div>
                : <div>
                    <RouterWithoutLogin/>
                </div>
            }
        </>
    );
};
