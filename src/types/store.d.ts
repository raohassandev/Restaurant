import {  rootReducer, store } from "store";
type RootState = ReturnType<rootReducer>;
type MyError ={};
type AppDispatch = typeof store.dispatch;
