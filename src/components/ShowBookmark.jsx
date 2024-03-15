

const ShowBookmark = ({show}) => {
    const{title}=show
    return (
        <div className="text-xl font-bold rounded-xl bg-white">
           <h1 className=" mt-2 p-3"> {title}</h1>
        </div>
    );
};

export default ShowBookmark;