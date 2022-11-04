import styled from 'styled-components'

export const HeaderDiv = styled.header`

    width: 100%;
    min-height: 57px;
    height: auto;
    position: fixed;
    z-index: 9;
    display: flex;
    align-items: center;
    .main {
        background-color: #0C3900;
        width: 100%;
        min-height: 57px;
        height: auto;
        color: white;
        -webkit-box-shadow: 0px 7px 19px -2px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 7px 19px -2px rgba(0,0,0,0.75);
        box-shadow: 0px 7px 19px -2px rgba(0,0,0,0.75);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container {
        width: 99%;
        min-width: 310px;
        height: 57px;
        max-width: 960px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    
    }
    .hb {
        width: 35px;
        height: 35px;
    }
    .hlogo {
        cursor: pointer;
        position: absolute;
        width: 200px;
        height: 66px;
        transform: translateY(12px);
        margin-left: min(34%, 400px);
    }
    
    .hicons {
        height: 24px;
        border-radius: 5px;
        background-color: gray;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding-left: 5px;

        font-size: .8rem;
        color: #e0dfdf;
        div {
            
            width: 45%;
            display: flex;
            justify-content: space-around;
            padding-left: 5px;
        }
        
        img {
            width: 38px;
            height: 38px;
            cursor: pointer;
            margin-left: 5px;
            :hover {
                transform: scale(1.2);
            }
        }        
    }



.btn-hb {
    width: 33px;
    height: 30px;
    .visuallyHidden {
        position: absolute; 
        overflow: hidden; 
        clip: rect(0 0 0 0); 
        height: 1px; width: 1px; 
        margin: -1px; padding: 0; border: 0; 
        
    }

    h1 {
        text-align: center;
    }

    .hamburger {
        margin: 0 auto;
        width: 33px;
        height: 30px;
        position: relative;
        cursor: pointer;
    }

    .hamburger .bar {
        padding: 0;
        width: 33px;
        height: 6px;
        background-color: white;
        display: block;
        border-radius: 4px;
        transition: all 0.4s ease-in-out;
        position: absolute; 
    }

    .bar1 {
        top: 0;
    }

    .bar2,
    .bar3 {
        top: 13.5px;
    }

    .bar3 {
        right: 0;
    }

    .bar4 {
        bottom: 0;
    }

    .hamburger3 .bar1 {
    transform-origin: 5%;
}

.hamburger3 .bar4 {
    transform-origin: 5%;
}

.checkbox3:checked + label > .hamburger3 > .bar1{
    transform: rotate(45deg);
    height: 3px;
    width: 42px;
}

.checkbox3:checked + label > .hamburger3 > .bar3{
    transform: rotate(45deg);
    height: 3px;
    background-color: transparent;
}

.checkbox3:checked + label > .hamburger3 > .bar2{
    transform: rotate(-45deg);
    height: 3px;
    background-color: transparent;
}

.checkbox3:checked + label > .hamburger3 > .bar4{
    transform: rotate(-45deg);
    height: 3px;
    width: 42px;
}





}


///////////////////////media //////////////
    @media (max-width: 626px){
        .main{
            padding: 40px;
            .hlogo {
                margin-top: 80px;
                margin-left: 20%;
            }
        }
    }

    @media (max-width: 426px) {
        .main {
            .container {
                width: 370px;
                
            }
            .hlogo {
                margin-left: 25%;
            }
        }
    }
    @media (max-width: 376px) {
        .main {
            .container {
                min-width: 340px;
            }
            .hlogo {
                margin-left: 20%;
            }
        }
    }

    @media (max-width: 320px) {
        .main {
            .container {
                min-width: 310px;
            }
            .hlogo {
                margin-left: 17%;
            }
        }
    }
    
`