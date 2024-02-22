import Header from '../components/header/Header';
import '@/app/globals.css';

import { ReactNode } from 'react';

// Define a type for your component's props
type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default Layout;

