import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Input'
import Select from '../Select'
import RealTimeEditor from '../RealTimeEditor'
import service from '../../appwrite/conf'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components'

type Post = {
    title: string;
    slug: any;
    content: any;
    status: any;
    image: any
}

function PostForm({ post }: any) {
    const {
        register,
        handleSubmit,
    } = useForm<Post>({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'Active',
        },
    })
    const [RTEValue, setRTEValue] = useState('');
    const userData = useSelector((state: any) => state.auth.userData);
    const navigate = useNavigate();


    const editorChange = (value: any) => {
        //  console.log(value);
        setRTEValue(value);

    }

    const onSubmit = async (data: any) => {
        if (post) {
            // update the post
            //    const image= await data?.image[0] ? service.uploadImage(data?.image[0]) : null;
            try {
                //first upload the same image of post

                const res = await service.updateBlog(
                    post.$id, {
                    ...data,
                    featuredImage: post.featuredImage,
                    content: RTEValue,
                    userId: userData?.$id
                });
                if (res) {
                    navigate(`/post/${res.$id}`);
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const image = data?.image[0] ? await service.uploadImage(data?.image[0]) : null;
                const res = await service.createBlog({ ...data, featuredImage: image?.$id, content: RTEValue, userId: userData?.$id })
                if (res) {
                    navigate(`/post/${res.$id}`);
                }
            } catch (error) {
                console.log(error);
            }
        }

    }
    const buttonStyle = {
        border: 'none',
        padding: '5px',
        width: '20%'
    }

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ display: 'flex', marginBottom: '15px' }}>
                    <Input placeholder='Title'
                        {...register("title")}
                        type='text'
                    />
                    <Input placeholder='Slug'
                        {...register("slug")}
                        type='text'
                    />
                    <Input placeholder='Image'
                        {...register("image")}
                        type='file'
                    />
                    <Select label='Status' placeholder='Enter your email'
                        options={['Active', 'Inactive']}
                        {...register("status")} />
                </div>

                <RealTimeEditor value={post?.content || 'Please type the content of your blog'} onChange={editorChange} />
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                    <Button bgColor='orange' style={buttonStyle}>{post ? 'Update' : 'Publish'}</Button>
                </div>

            </form >
        </div>

    )
}

export default PostForm;


// featuredImage,
