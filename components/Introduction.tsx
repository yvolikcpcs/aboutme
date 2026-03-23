import { MDXRemote } from 'next-mdx-remote/rsc';

const Introduction = ({ data }: { data: { key: string; value: string }[] }) => {
    const intro = data.find(block => block.key === 'intro_hero')?.value || 'Welcome to my portfolio!';
    return (
        <section className="py-12">
            <MDXRemote 
                source={intro} 
            />
        </section>
    );
}

export default Introduction;