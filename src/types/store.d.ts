import {  rootReducer, store } from "store";
type RootState = ReturnType<typeof rootReducer>;
type MyError ={};
type AppDispatch = typeof store.dispatch;
