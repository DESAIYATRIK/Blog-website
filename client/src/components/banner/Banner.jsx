import React, { useContext } from 'react';
import { styled, Box, Typography } from '@mui/material';
import { DataContext } from '../../context/DataProvider';

const Image = styled(Box)`
    width: 100%;
    background: url(https://www.blogger.com/about/img/social/facebook-1200x630.jpg) center/cover no-repeat #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #000000;
    line-height: 1;
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
    color: blue;
`;

const Banner = () => {
    const { account } = useContext(DataContext);

    return (
        <Image>
            <Heading>{account.name}</Heading>
            <SubHeading>Welcome to the site!</SubHeading>
        </Image>
    );
};

export default Banner;
