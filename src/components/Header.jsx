import profile from '../assets/images/profile.png'

const Header = () => {
    return (
        <div className='container mx-auto flex justify-between  items-center mt-7'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img style={{height:'60px' ,width:'60px'}} src={profile} alt="" />
        </div>
    );
};

export default Header;