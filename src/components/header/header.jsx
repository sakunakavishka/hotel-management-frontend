import UserTag from '../userData/userdata.jsx';


function Header() {
  return (
    <header className='w-full bg-blue-500 flex h-[100px] items-center relative p-[10px] mr-2'>
        <h1 className='text-white text-[30px]'>Leonine Villa </h1>
        <UserTag imageLink="https://t3.ftcdn.net/jpg/04/49/19/08/360_F_449190831_i2whvIQdDIGtuIVWT6QfenWwmRApVJ5l.jpg" name="Sakuna Kavishka"/>
    </header>
  ) 
}
export default Header;