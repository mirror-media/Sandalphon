import { useDispatch, useSelector } from 'react-redux'
/**
 * @typedef {import('react-redux').TypedUseSelectorHook} TypedUseSelectorHook
 */

/**
 * @typedef {import('../store/index').RootState} RootState
 */

/**
 * @typedef {import('../store/index').AppDispatch} AppDispatch
 */

/**
 * Redux dispatch with types
 * @see https://react-redux.js.org/using-react-redux/usage-with-typescript
 * @function
 * @returns {AppDispatch}
 */
const useAppDispatch = useDispatch

/**
 * Redux selector with types
 * @see https://react-redux.js.org/using-react-redux/usage-with-typescript
 * @function
 * @type {import('react-redux').TypedUseSelectorHook<RootState>}
 */
const useAppSelector = useSelector
export { useAppDispatch, useAppSelector }
