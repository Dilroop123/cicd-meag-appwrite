import { useEffect, useState } from 'react'
import { PostForm } from '../components'

import { useNavigate, useParams } from 'react-router-dom';
import service from '../appwrite/conf';
import AuthLayout from '../components/AuthLayout';

function EditPost() {
    const [post, setPosts] = useState({})
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            service.getBlog({ documentId: slug }).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
    return post ? (
        <div className='py-8'>
            <AuthLayout>
                <PostForm post={post} />
            </AuthLayout>
        </div>
    ) : null
}

export default EditPost