import useSWR from 'swr';
import Form from '../components/form';
import { deletePost, getPosts, postPost, updatePost } from '../utils/data';
import Vote from '../components/vote';
import { v4 as uuidv4 } from 'uuid';
import { DeleteButton } from '../components/deleteButton';

export default function Feed() {
    const { data: posts = [], mutate } = useSWR('/posts', getPosts);

    async function handlePostVote(value, post) {
        await updatePost(
            post.id,
            post.username,
            post.title,
            post.content,
            post.upvotes + value
        );
        await mutate(
            [
                ...posts.filter((item) => item.id !== post.id),
                {
                    id: post.id,
                    username: post.username,
                    title: post.title,
                    content: post.content,
                    upvotes: post.upvotes + value,
                },
            ].sort((firstPost, secondPost) => {
                return secondPost.upvotes - firstPost.upvotes;
            })
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                        Jobeed
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Cloudflare workers assignment Software Engineer - New
                        Grad
                    </p>
                </div>
                <Form
                    onSubmit={async ({ title, content }) => {
                        const id = uuidv4();
                        await postPost(id, 'toni', title, content, 0);
                        await mutate(
                            [
                                ...posts,
                                {
                                    id: id,
                                    username: 'toni',
                                    title: title,
                                    content: content,
                                    upvotes: 0,
                                },
                            ].sort((firstPost, secondPost) => {
                                return secondPost.upvotes - firstPost.upvotes;
                            }),
                            false
                        );
                    }}
                />
                <div className="mt-12 max-w-3xl mx-auto grid gap-5 ">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="flex flex-col rounded-lg shadow-lg break-all"
                        >
                            <div className="flex bg-white p-6 justify-between rounded-lg">
                                <div className="flex flex-col whitespace-normal">
                                    <p className="text-sm font-medium text-indigo-600 truncate">
                                        {post.username}
                                    </p>
                                    <p className="text-xl font-semibold text-gray-900">
                                        {post.title}
                                    </p>
                                    <p className="mt-3 text-base text-gray-500">
                                        {post.content}
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-end ml-4">
                                    <div className="mt-auto" />

                                    <Vote
                                        classname="mt-auto"
                                        upvotes={post.upvotes}
                                        handleUpVote={() =>
                                            handlePostVote(1, post)
                                        }
                                        handleDownVote={() =>
                                            handlePostVote(-1, post)
                                        }
                                    />

                                    <DeleteButton
                                        classnames="mt-auto"
                                        handleClick={async () => {
                                            deletePost(post.id);
                                            await mutate(
                                                [
                                                    ...posts.filter(
                                                        (item) =>
                                                            item.id !== post.id
                                                    ),
                                                ],
                                                false
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const posts = await getPosts();
    return {
        props: { posts },
    };
}
