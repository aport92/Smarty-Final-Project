import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
    return (
        <>
        <div className="container">
        <div className="navegacion">
            <br>
            <div className="logo">
                <img src="img/smarty-w3.svg">
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
                        <span className="icon"><ion-icon name="document-attach-sharp"></ion-icon></ion-icon></span>
                        <span className="title">Quizzes</span>
                    </Link>
                </li>



                <li>
                    <Link href="#">
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








        //*Aqui main*/
        <div class="main">
            <div class="topbar">
                <div class="toggle">
                    <ion-icon name="menu-outline"></ion-icon>
                </div>

                <!--Icono lupa buscador-->
                <div class="search">
                    <label>
                        <input type="text" placerholder="Search Here">
                        <ion-icon name="search-outline">Search Here</ion-icon>
                    </label>
                </div>
                <!--Usuario img-->
                <div class="user">
                    <img src="img/usuario.jpg">
                </div>
            </div>

            <!--tarjetas-->
            <div class="cardBox">
                <div class="card">
                    <div>
                        <div class="numbers">Usuarios</div>
                        <div class="iconBx"><ion-icon name="person-sharp"></ion-icon>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">Materias</div>
                        <div class="iconBx"><ion-icon name="book-sharp"></ion-icon</ion-icon>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">Quizzes</div>
                        <div class="iconBx"><ion-icon name="document-attach-sharp"></ion-icon>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">Institución</div>
                        <div class="iconBx">
                            <ion-icon name="business-sharp"></ion-icon>
                        </div>
                    </div>
                </div>

            </div>
        
          

         
            
           </div>
                   
             







        
    </div>
    </div>

    </>;)
};
export default Admin;
