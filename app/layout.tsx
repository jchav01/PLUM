import Header from './components/Header';
import '@/app/globals.css';

// Import ReactNode from React
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

