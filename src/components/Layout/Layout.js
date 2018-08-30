
import React from 'react';
import Auxs from '../../hoc/Auxs';
import classes from './Layout.css';

const Layout =  (props) =>
    <Auxs>
        <div>SideDrawer, BackDrop</div>
        <main className={classes.MainContainer}>
            {props.children}
        </main>
    </Auxs>
;

export default Layout;



