import clogo from '../images/commItem.png'

function CommentItem({item, commNum}){

        return <div className='comment_box' key={item.id}>
            <img src={clogo} alt=""/>
            <div className='comment-text'>
                <p><span>comm #{commNum}</span> {item.name}</p>
                <span>{item.body}</span>
            </div>
        </div>

}

export default CommentItem;