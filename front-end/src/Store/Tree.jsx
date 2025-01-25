import { combineReducers } from "redux";
import { BookReducer } from "./Reducers/BookReducer";
import { UserReducer } from "./Reducers/UserReducer";
import { ReservationReducre } from "./Reducers/ReservationReducer";

export const Tree=combineReducers({
    Users:UserReducer,
    Books:BookReducer,
    Reservations:ReservationReducre
})