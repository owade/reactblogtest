import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {lastItem,getCount,getLastItem} from './features/posts/postsSlice';

const Footer = () => {
    const today = new Date();
    const dispatch = useDispatch();
    // const count = useSelector((state) => 
    //    (state.posts.value)
      
    //   );
    const lastItemArray = useSelector(lastItem);
    return (
        <footer className='Footer'>
            <p>Copyright &copy; {today.getFullYear()}</p>
             <p>last item is {lastItemArray}</p>
            {/*count.map((x,i) => <div key={i}><div> {x.datetime} </div></div>)*/}
        </footer>
    )
}

export default Footer