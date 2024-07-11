import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-shadow: 2px 2px 4px #000000;
`;

const BannerText = styled(Typography)`
    font-size: 3rem;
    font-weight: bold;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 20px;
    }
`;

const Text = styled(Typography)`
    color: #555555;
    margin-top: 20px;
    line-height: 1.6;
`;

const SocialLink = styled(Link)`
    display: flex;
    align-items: center;
    margin-top: 10px;
    color: inherit;
    text-decoration: none;

    &:hover {
        color: #3f51b5; /* Change this color to your preference */
        text-decoration: underline;
    }
`;

const IconWrapper = styled(Box)`
    margin-right: 10px;
    display: flex;
    align-items: center;
`;

const Contact = () => {
    return (
        <Box>
            <Banner>
                <BannerText>Contact Me</BannerText>
            </Banner>
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5">
                    Feel free to reach out to me through any of the following platforms:
                </Text>
                <SocialLink href="https://github.com/yatrikdesai" target="_blank">
                    <IconWrapper>
                        <GitHub fontSize="large" />
                    </IconWrapper>
                    <Typography variant="body1">GitHub</Typography>
                </SocialLink>
                <SocialLink href="https://www.instagram.com/yatrikdesai/" target="_blank">
                    <IconWrapper>
                        <Instagram fontSize="large" />
                    </IconWrapper>
                    <Typography variant="body1">Instagram</Typography>
                </SocialLink>
                <SocialLink href="mailto:yatrikdesai11@gmail.com?Subject=This is a subject" target="_blank">
                    <IconWrapper>
                        <Email fontSize="large" />
                    </IconWrapper>
                    <Typography variant="body1">Email</Typography>
                </SocialLink>
            </Wrapper>
        </Box>
    );
}

export default Contact;
