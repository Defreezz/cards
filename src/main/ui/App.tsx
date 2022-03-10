import React, {useEffect} from "react";
import "./App.css";
import {useSelector} from "react-redux";
import {HashRouter} from "react-router-dom";
import {Header} from "./Header/Header";
import {Router} from "./Routes/Router";
import {initializeApp} from "../../store/reducers/appReducer";
import {selectIsInit, selectIsLoggedIn} from "../../store/selectors";
import {Preloader} from "./common/Preloader/Preloader";
import {useTypedDispatch} from "../utils";
import {RouterWithoutLogin} from "./Routes/RouterWithoutLogin";

export const App = () => {
    const dispatch = useTypedDispatch()
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const isInitialized = useSelector(selectIsInit)

    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    if (!isInitialized) return <Preloader width={"40px"} height={"40px"}/>

    return (
        <HashRouter>
            {isLoggedIn ?
            <div className="App">
                    <Header/>
                    <Router/>
            </div>
            : <RouterWithoutLogin/>
            }
        </HashRouter>
    );
};
