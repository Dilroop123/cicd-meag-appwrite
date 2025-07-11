import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import service from "../appwrite/conf";

export default function Post() {
    const [post, setPost] = useState<any>({});
    const { slug } = useParams();
    console.log(slug);

    const navigate = useNavigate();

    const userData = useSelector((state: any) => state.auth.userData);

    const isAuthor = post && userData ? post?.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getBlog({ documentId: slug }).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        service.deleteBlog({ documentId: post.$id }).then((status) => {
            console.log(status);

            if (status) {
                service.deleteStorageImage(post.featuredImage);
                navigate("/");
            }
        });
    };

    const buttonStyle = {
        border: 'none',
        padding: '5px'
    }

    return post ? (
        <div>
            <div>
                <img
                    src={service.getFilePreview(post.featuredImage) + '&mode=admin'}
                    alt={post.title}
                    height='450px'
                    width='100%'
                    className="rounded-xl"
                />

                {isAuthor && (
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginRight: '20px' }}>
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button style={buttonStyle} bgColor="green" className="mr-3">
                                Edit
                            </Button>
                        </Link>
                        <Button style={buttonStyle} bgColor="red" onClick={deletePost}>
                            Delete
                        </Button>
                    </div>
                )}
            </div>
            <div>
                <h1>{post.title}</h1>
            </div>
            <div style={{ marginTop: '15px' }}>
                {parse(post.content)}
            </div>
        </div>
    ) : null;
}