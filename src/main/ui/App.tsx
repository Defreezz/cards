import React, {Dispatch, useEffect} from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {HashRouter} from "react-router-dom";
import {Header} from "./Header/Header";
import {ThunkType} from "../../store/store";
import {Router} from "./Routes/Router";
import {initializeApp} from "../../store/reducers/appReducer";
import {SelectIsInit, SelectIsLoggedIn} from "../../store/selectors";
import {Preloader} from "./common/Preloader/Preloader";

export const App = () => {
    const dispatch = useDispatch<Dispatch<ThunkType>>()
const isLoggedIn = useSelector(SelectIsLoggedIn)
const isInitialized = useSelector(SelectIsInit)

    useEffect(() => {
            dispatch(initializeApp())
        }, [dispatch])

    if(!isInitialized) return <Preloader/>
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <Router/>
            </HashRouter>
        </div>
    );
};
