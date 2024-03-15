import mark from '../assets/images/Frame.jpg'

const Blog = ({blog ,handleBookmark,handleRead}) => {
    const {cover_img,author_img,reading_time,publish_date,author,title}=blog
    return (
        <div className='pl-6'>
            <img  className=' h-[845px] lg:w-[1200px]' src={cover_img} alt="" />
            <div className='flex  mt-5 mb-3 items-center gap-24 lg:gap-96'>
                <div className="flex gap-8">
                    <img style={{height:'60px' ,width:'60px'}} src={author_img} alt="" />
                    <div>
                        <h2>{author}</h2>
                        <p>{publish_date}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <h2>{reading_time} mins</h2>
                <button onClick={()=>handleBookmark(blog)}><img style={{height:'24px' ,width:'24px'}} src={mark} alt="" /></button>
                </div>
            </div>
            <h1 className="text-3xl ">{title}</h1>
            <button onClick={()=>{handleRead(reading_time)}} className='underline mb-3'>Mark as Read</button>
            <hr className='mb-9' />
        </div>
    );
};

export default Blog;