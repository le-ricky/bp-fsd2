import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {

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

    return <React.Fragment>
        {nav()} {children}
    </React.Fragment>
    }

export default Layout;