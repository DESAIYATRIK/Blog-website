import { Box, styled, Typography } from '@mui/material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">About Our Platform</Typography>
                <Text variant="h5">
                    Welcome to our comprehensive blogging platform. Here are some of the key features you can enjoy:
                    <ul>
                        <li>Create blogs effortlessly with our user-friendly editor.</li>
                        <li>Update your existing blogs to keep your content fresh and relevant.</li>
                        <li>Delete blogs that are no longer needed or relevant.</li>
                        <li>Engage with readers through comments on blogs.</li>
                        <li>Maintain quality discussions by deleting inappropriate comments.</li>
                        <li>Enjoy a seamless and responsive design that works well on both desktop and mobile devices.</li>
                        <li>Benefit from real-time updates and notifications to keep you informed about the latest activities.</li>
                    </ul>
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;
