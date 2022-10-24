import styled from "styled-components";

const florecenteGren = '#5AFF2E'

export const BannerTwoContainer = styled.div`
    background-color: #ccc;
    width: 100%;
    min-height: 203px;
    padding: 15px 0;
    margin: 15px 0;
    display: flex;
    align-items: center;
    .main {
        width: 100%;
        max-width: 960px;
        min-height: 150px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    .card {
        background-color: red;
        width: 32%;
        min-width: 250px;
        height: 175px;
        display: flex;
        align-items: flex-end;
        margin-bottom: 10px;
        margin-right: 2px;
        :hover {
            cursor: pointer;
            span {
                text-decoration: underline;
            }
        }
    }
    .bg1{
        background: url('/image/banner-index1.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .bg2{
        background: url('/image/banner-index2.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .bg3{
        background: url('/image/banner-index3.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: flex-end;
        :hover{
            cursor: default;
        }
    }
    .card-text {
        width: 70%;
        background-color: ${florecenteGren};
        font-size: .8rem;
        font-weight: 700;
        text-align: left;
        padding-left: 10px;
        margin-bottom: 20px;
    }
    .div-right {
        margin-left: auto;
        text-align: right;
    }
    .cardleft {
        width: 55%;
        margin-bottom: 10px;

        p {
            width: 100%;
            height: 30px;
            padding: 2px 5px;
            background-color: ${florecenteGren};
            font-size: .8rem;
            font-weight: 700;
            text-align: right;
            line-height: .8rem;
            margin-bottom: 10px;
        }
    }
    .groupnot {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .logonot {
        width: 30px;
        height: 30px;
        :hover {
            transform: scale(1.3);
            cursor: pointer;
        }
    }
    .telnot {
        width: 32%;
        min-width: 100px;
        max-width: 100px;
        transform: translateY(10px);
        margin-right: 5px;
        cursor: pointer;
    }

    @media (max-width: 753px) {
        .card {
            min-width: 400px;
            height: 190px;
        }
    }
    @media (max-width: 426px) {
        .card {
            min-width: 420px;
            height: 200px;
        }
    }
    @media (max-width: 375px) {
        .card {
            min-width: 360px;
            height: 180px;
        }
    }
    @media (max-width: 321px) {
        .card {
            min-width: 315px;
            height: 175px;
        }
        .telnot {
            width: 30%;
            min-width: 80px;
        }
    }

`