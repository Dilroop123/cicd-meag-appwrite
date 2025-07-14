import { Link } from "react-router-dom"
import service from "../appwrite/conf";
import parse from "html-react-parser";
import './component.css'

import avatar from '../assests/avatar.jpg'

function PostCard({ $id, title, featuredImage, content, isGrid = false }: any) { //$id is used in appwrite
    return (
        <Link to={`/post/${$id}`} style={{ textDecoration: 'none', listStyle: 'none', color: 'gray' }}>
            <div style={{ width: '100%', height: isGrid ? '275px' : '320px', border: '1px solid rgba(0, 0, 0, 0.25)', display: 'flex', marginTop: '25px' }}>
                <div style={{ flex: isGrid ? 2 : 1 }}>
                    <img style={{ height: '100%', width: '100%' }} src={service.getFilePreview(featuredImage) + '&mode=admin'} alt={title} />
                </div>

                <div style={{ padding: isGrid ? '25px' : '40px', flex: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={avatar} height={50} width={50} />
                        <div style={{ marginLeft: '15px', fontSize: '13px' }}>
                            <p>Admin</p>
                            <p>22 march 2023</p>
                        </div>
                    </div>
                    <h2 style={{ fontWeight: 'bold', fontSize: isGrid ? '20px' : '28px', color: 'black', margin: '12px 0px' }}>{title}</h2>
                    <div>
                        <span className="ellipsis_3_line" style={{ fontSize: isGrid ? '15px' : '17px', lineHeight: isGrid ? '18px' : '22px' }}>{parse(content)}</span>
                    </div>
                    <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.25)', marginTop: isGrid ? '25px' : '20px' }} />
                </div>
            </div>
        </Link>
    )
}

export default PostCard;



