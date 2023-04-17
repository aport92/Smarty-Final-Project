import React from "react";
import { Link } from "react-router-dom";
import '../admin/admin.css';

const Admin = () => {

     //MenuToggle
        let toggle = document.querySelector('.toggle');
        let navegacion = document.querySelector('.navegacion');
        let main = document.querySelector('.main');

        toggle.onclick = function () {
            navegacion.classList.toggle('active')
            main.classList.toggle('active');

        }


        toggle.onclick = function () {
            navegacion.classList.toggle('active')
            main.classList.toggle('active')
        }

        let list = document.querySelectorAll('.navegacion li ');
        function activeLink() {
            list.forEach((item) =>
                item.classList.remove('hovered'));
            this.classList.add('hovered')
        }
        list.forEach((item) =>
            item.addEventListener('mouseover', activeLink));


return (

<>
    <div className="container">
        <div className="navegacion">
            <br/>
            <div className="logo">
                            <img src={"img/smarty-w3.svg"} />
                        </div>

                        <ul>
                            <li>
                                <Link to={"#"}>
                                    <span className="title"></span>
                                </Link>
                </li>

                <li>
                                <Link to={"#"}>
                        <span className="icon"><ion-icon name="person-sharp"></ion-icon></span>
                        <span className="title">Usuarios</span>
                    </Link>
                </li>

                <li>
                                <Link to={"#"}>
                        <span className="icon"><ion-icon name="book-sharp"></ion-icon></span>
                        <span className="title">Materias</span>
                    </Link>
                </li>

                <li>
                    <Link to={"#"}>
                        <span className="icon"><ion-icon name="document-attach-sharp"></ion-icon>
                        </span>
                        <span className="title">Quizzes</span>
                    </Link>
                </li>

                <li>
                            <Link to={"#"}>
                        <span clasName="icon"><ion-icon name="business-sharp"></ion-icon></span>
                        <span className="title">Institución</span>
                    </Link>
                </li>

                <li>
                            <Link to={"#"}>
                        <span className="icon"><ion-icon name="checkmark-circle-sharp"></ion-icon></span>
                        <span className="title">Status</span>
                    </Link>
                </li>
            </ul>
        </div>

        {/*Aqui main*/}
        <div className="main">
            <div className="topbar">
                <div className="toggle">
                    <ion-icon name="menu-outline"></ion-icon>
                </div>

                {/*Icono lupa buscador*/}
                <div className="search">
                    <label>
                        <input type="text" placerholder="Buscar"/>
                        <ion-icon name="search-outline">Buscar</ion-icon>
                    </label>
                </div>

                {/*Usuario img*/}
                <div className="user">
                            <img src={"img/usuario.jpg"} />
                </div>
            </div>

            {/*tarjetas*/}
            <div className="cardBox">
                <div className="card">
                    <div>
                        <div className="numbers">Usuarios</div>
                        <div className="iconBx"><ion-icon name="person-sharp"></ion-icon>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">Materias</div>
                        <div className="iconBx"><ion-icon name="book-sharp"></ion-icon>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">Quizzes</div>
                        <div className="iconBx"><ion-icon name="document-attach-sharp"></ion-icon>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">Institución</div>
                        <div className="iconBx">
                            <ion-icon name="business-sharp"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>

</div>

    </div>
    </div>
    </>
    ;)
};
export default Admin;
