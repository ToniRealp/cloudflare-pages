import Textarea from './textarea';
import Input from './input';
import Button from './button';
import { useState } from 'react';

export default function Form({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        onSubmit({ title, content });
    }

    return (
        <form
            className="mt-12 max-w-3xl mx-auto grid gap-5 "
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 gap-y-2 bg-white p-6 flex flex-col justify-between">
                    <Input
                        placeholder="Title"
                        handleChange={setTitle}
                        value={title}
                    />
                    <Textarea
                        name="Content"
                        placeholder="Write your thoughts"
                        handleChange={setContent}
                        value={content}
                    />
                    <Button type="submit" />
                </div>
            </div>
        </form>
    );
}
