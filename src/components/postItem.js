import logo from '../images/postImg.jpg'

function PostItem({item,searchComments,dataPostComments}){
    const itemID = item.id;
    const showComments = (e) => {
        e.preventDefault();
        searchComments(itemID).then( data => dataPostComments(data));
    }

    return <div key={itemID} className='post_item'>
            <div className='post_img'>
                <img src={logo} alt=""/>
            </div>
            <div className='post_text'>
                <p><span>Post #{itemID}</span>{item.title}</p>
                <span>{item.body}</span>
                <a href="#" onClick={showComments}>show comments</a>
            </div>
    </div>
}

export default PostItem;