import {React} from 'react';
import { Navbar } from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import '../Materias/materias.css';
import Math from '../Materias/math.png';
import Science from '../Materias/science.png';

const Materias = () => {
    return (
<>
<Navbar/>
<div class="container">
                <div class="col">
                    <span class="active">
                        <div class="box">
                            <i class="fa fa-gift" aria-hidden="true"></i>
                            <h2>Lorem Ipsum</h2>
                            <a href="#">Read More</a>
                        </div>
                    </span>
                    <span><img src="https://venture-lab.org/wp-content/uploads/2019/11/writing.jpg"></span>
                </div>
                <div class="col">
                    <span><img src="https://i1.wp.com/learnenglishfunway.com/wp-content/uploads/2020/04/expert-tips-for-writing-job-posts.jpg?resize=810%2C500&ssl=1"></span>
                    <span class="active">
                        <div class="box">
                            <i class="fa fa-glass" aria-hidden="true"></i>
                            <h2>Lorem Ipsum</h2>
                            <a href="#">Read More</a>
                        </div>
                </div>
                <div class="col">
                    <span class="active">
                        <div class="box">
                            <i class="fa fa-globe" aria-hidden="true"></i>
                            <h2>Lorem Ipsum</h2>
                            <a href="#">Read More</a>
                        </div>
                    </span>
                    <span><img src="https://global-exam.com/blog/wp-content/uploads/2018/10/writing-ex1-e1553097551973.jpeg"></span>
                </div>
                <div class="col">
                    <span><img src="https://149349728.v2.pressablecdn.com/wp-content/uploads/2021/03/marcos-paulo-prado-tcyW6Im5Uug-unsplash-scaled-e1615501484783.jpg"></span>
                    <span class="active">
                        <div class="box">
                            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                            <h2>Lorem Ipsum</h2>
                            <a href="#">Read More</a>
                        </div>
                    </span>
                </div>
            </div>
            <F
            ooter/>
            </>
    );
}

export default Materias;