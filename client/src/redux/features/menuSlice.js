import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    showMenu: false,
}


const menuSlice = createSlice({
    name: 'menu',
    initialState: INITIAL_STATE,
    reducers: {
        toggleMenu: (state) => {
            const menuIcon = document?.getElementById('menu-icon');

            if (!state.showMenu) {
                // menuIcon.style.backgroundColor='red';
                menuIcon.classList.add('menu-open');
            }
            else {
                menuIcon.classList.remove('menu-open')
            }
            menuIcon.style.transition = ".5s";
            state.showMenu = !state.showMenu;
        }
    }

});

export const { toggleMenu } = menuSlice.actions;

// export const menuReducer = menuSlice.reducer; 
export default menuSlice.reducer; 
