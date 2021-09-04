import React from 'react';
import Head from 'next/head'
import Link from 'next/link';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Tabs, Tab, Grid, Toolbar, Container } from '@material-ui/core'

const Layout = ({ children }) => {

    const head = () => (
        <Head>
            {/* import material-ui roboto font */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
    )

    const nav = () => (
        <ul className="nav">
            <li className="nav--item">
                <Link href="/createuser">
                    <a className="nav--link">Create User</a>
                </Link>
            </li>
            <li className="nav--item">
                <Link href="/listusers">
                    <a className="nav--link">List Users</a>
                </Link>
            </li>
        </ul>
    )


    return (
    <React.Fragment>
        <CssBaseline />
            <AppBar>
                
            </AppBar>
        {head()} {nav()} {children}
    </React.Fragment>
    )
}

export default Layout;