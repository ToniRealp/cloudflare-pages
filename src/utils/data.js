import ky from 'ky';

const api = ky.create({ prefixUrl: 'https://jobeed.tonirealp.workers.dev/' });

export async function getPosts() {
    const posts = await api.get('posts').json();
    return posts.sort((firstPost, secondPost) => {
        return secondPost.upvotes - firstPost.upvotes;
    });
}

export async function postPost(id, username, title, content, upvotes) {
    return api.post('posts', {
        json: {
            id: id,
            username: username,
            title: title,
            content: content,
            upvotes: upvotes,
        },
    });
}

export async function updatePost(id, username, title, content, upvotes) {
    return api.put(`posts/${id}`, {
        json: {
            id: id,
            username: username,
            title: title,
            content: content,
            upvotes: upvotes,
        },
    });
}

export async function deletePost(id) {
    return api.delete(`posts/${id}`);
}
