import './Sidebar.css';
import Category from './Category/Category';
import Prize from './Prize/Prize';
import Color from './Colors/Color';

const Sidebar = ({handleChange}) => {
  
  return (
   <>
    <section className='sidebar'>
    <div className="logo_container">
        <h1>🛒</h1>
    </div>

    <Category handleChange={handleChange}/>
    <Prize handleChange={handleChange}/>
    <Color handleChange={handleChange}/>



    </section>
   </>
  )
}

export default Sidebar