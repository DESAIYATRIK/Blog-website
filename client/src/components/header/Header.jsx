import React, { useContext } from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    background-color:#003366;
`;

const CenteredLinks = styled('div')`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    & > a {
        padding: 20px;
        color: #00ccff;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: #1976d2; 
        }
    }
`;

const LogoutLink = styled(Link)`
    padding: 20px;
    color: #00ccff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: #1976d2; /* Change this to your desired hover color */
    }
`;

const Header = () => {
    const navigate = useNavigate();
    const { account } = useContext(DataContext);

    const logout = async () => navigate('/account');

    return (
        <Component>
            <Container>
                <CenteredLinks>
                    <Link to='/'>HOME</Link>
                    <Link to='/about'>ABOUT</Link>
                    <Link to='/contact'>CONTACT</Link>
                </CenteredLinks>
                <LogoutLink to='/account' onClick={logout}>LOGOUT</LogoutLink>
            </Container>
        </Component>
    );
}

export default Header;
