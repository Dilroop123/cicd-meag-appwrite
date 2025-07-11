import { useEffect, useState } from 'react'
import {  PostCard } from '../components'
import service from '../appwrite/conf';
import { useSelector } from 'react-redux';

import coverImage from '../assests/spicecover.jpg';


const BlankComponent = ({ text }: { text: string }) => {
    return (
        <div style={{ border: '1px solid rgba(0, 0, 0, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px' }}>
            <h1>
                {text}
            </h1>
        </div>
    )
}

function Home() {
    const [posts, setPosts] = useState([])
    const IsAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

    useEffect(() => {
        if (IsAuthenticated) {
            service.getAllBlog().then((posts: any) => {
                if (posts) {
                    setPosts(posts?.documents)
                }
            })
        }

    }, [IsAuthenticated]);

    if (IsAuthenticated === false) {
        return (
            <BlankComponent text=' Login to read the posts' />
        )
    }

    if (posts.length === 0) {
        return (
            <BlankComponent text=' Add posts to your Account' />
        )
    }
    return (
        <div style={{ position: 'relative' }}>
            <img src={coverImage} width='100%' height='450px' />

            <div style={{ border: '5px solid black', padding: '20px', width: 'max-content', position: 'absolute', top: -70, left: '34%' }}>
                <p style={{ fontSize: '33px', letterSpacing: '8px', fontWeight: 'bold' }}>SALT & PEPPER</p>
            </div>
            <div style={{ textAlign: 'center', margin: '25px 0px' }}>
                <p style={{ fontSize: '20px', letterSpacing: '7px', color: 'black', fontWeight: 'bold', alignSelf: 'center' }}>FOOD BLOG</p>
            </div>

            <div>
                {posts.map((post: any) => (
                    <div key={post.$id}>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Home