import { PostForm } from '../components'
import AuthLayout from '../components/AuthLayout'

function AddPostPage() {
    return (
        <div>
            <AuthLayout>
                <PostForm />
            </AuthLayout>

        </div>
    )
}

export default AddPostPage