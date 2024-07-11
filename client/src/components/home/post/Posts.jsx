import { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { API } from '../../../service/api';
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await API.getAllPosts({ category: category || '' });
                if (response.isSuccess) {
                    setPosts(response.data);
                    setError(null);
                } else {
                    setError('Failed to fetch posts');
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
                setError('Failed to fetch posts');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);

    if (loading) {
        return <Box>Loading...</Box>;
    }

    if (error) {
        return <Box style={{ color: '#878787', margin: '30px 80px', fontSize: 18 }}>Error: {error}</Box>;
    }

    return (
        <>
            {posts.length > 0 ? (
                <Grid container spacing={3}>
                    {posts.map((post) => (
                        <Grid item key={post._id} lg={3} sm={4} xs={12}>
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`details/${post._id}`}>
                                <Post post={post} />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Box style={{ color: '#878787', margin: '30px 80px', fontSize: 18 }}>No posts available.</Box>
            )}
        </>
    );
};

export default Posts;
