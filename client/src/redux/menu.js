import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    showMenu: false,
    ref: {}
}

const menuSlice = createSlice({
    name: 'menu',
    initialState: INITIAL_STATE,
    reducers: {
        toggleMenu: (state, action = state.ref) => {
            state.ref = action?.payload.current;
            // console.log(action.payload.current);
            const menuIcon = action.payload.current;
            console.log(action.payload.current);
            // if(!state.showMenu){

            //     state.ref.classList.add('menu-open');
            // }
            // else{
            //     state.ref.classList.remove('menu-open')
            // }

            menuIcon.style.transition = ".5s";
            if (!state.showMenu) {
                // menuIcon.style.backgroundColor = "rgba(150, 117, 250, 0.623)";
                menuIcon.style.rotate = "90deg";
            } else {
                menuIcon.style.rotate = "0deg";
            }

            state.showMenu = !state.showMenu;
        }
    }

});

export const { toggleMenu } = menuSlice.actions;

export default menuSlice.reducer; 