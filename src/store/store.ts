import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { postsAPI } from "../services/PostService"

const rootReducer = combineReducers({
  [postsAPI.reducerPath]: postsAPI.reducer,
})

export const setupStore = () => {
  return configureStore ({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer> // определить тип нашего состояния - для создания useAppSelector
export type AppStore = ReturnType<typeof setupStore> // определить тип store - с помощью ReturnType мы можем получить тот тип который вернет нам setupStore
export type AppDispatch = AppStore['dispatch'] // определили тип dispatch - для создания useAppDispatch