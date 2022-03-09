import React, {Dispatch, useEffect} from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {HashRouter} from "react-router-dom";
import {Header} from "./Header/Header";
import {ThunkType} from "../../store/store";
import {Router} from "./Routes/Router";
import {initializeApp} from "../../store/reducers/appReducer";
import {selectIsInit, selectIsLoggedIn} from "../../store/selectors";
import {Preloader} from "./common/Preloader/Preloader";
import {LogIn} from "./LogIn/LogIn";


export const App = () => {
    const dispatch = useDispatch<Dispatch<ThunkType>>()
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
            : <LogIn/>}
        </HashRouter>
    );
};
