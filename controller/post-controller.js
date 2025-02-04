import Post from '../model/post.js';

export const createPost = async (request, response) => {
    try {
        const post = new Post(request.body);
        await post.save();

        response.status(200).json('Post saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const updatePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        if (!post) {
            return response.status(404).json({ msg: 'Post not found' });
        }
        
        const updatedPost = await Post.findByIdAndUpdate(request.params.id, { $set: request.body, createdDate: new Date() }, { new: true });

        response.status(200).json(updatedPost);
    } catch (error) {
        response.status(500).json({ error: 'Internal server error', message: error.message });
    }
}

export const deletePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        
        await post.delete();

        response.status(200).json('Post deleted successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getPost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getAllPosts = async (request, response) => {
    let username = request.query.username;
    let category = request.query.category;
    let posts;
    try {
        if (username) 
            posts = await Post.find({ username: username });
        else if (category) 
            posts = await Post.find({ categories: category });
        else 
            posts = await Post.find({});
        
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error);
    }
}
