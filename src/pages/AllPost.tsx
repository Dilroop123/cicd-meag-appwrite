import { useState, useEffect } from 'react'
import { PostCard } from '../components'
import service from '../appwrite/conf'

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
        <div style={{ width: '100%', padding: '10px' }}>

            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '20px' }}>
                {posts.map((post: any) => (
                    <div key={post?.$id} >
                        <PostCard {...post} isGrid={true} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AllPosts