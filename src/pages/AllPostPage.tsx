import { useState, useEffect } from 'react'
import { PostCard } from '../components'
import service from '../appwrite/conf'
import AuthLayout from '../components/AuthLayout'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        service.getAllBlog([]).then((posts: any) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <AuthLayout>
            <div style={{ width: '100%', padding: '10px' }}>

                <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '20px' }}>
                    {posts.map((post: any) => (
                        <div key={post?.$id} >
                            <PostCard {...post} isGrid={true} />
                        </div>
                    ))}
                </div>

            </div>
        </AuthLayout>

    )
}

export default AllPosts