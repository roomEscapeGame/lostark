import styled from "styled-components";

export const Container = styled.div`
    background-color: #666;
    width: 98%;
    min-width: 1350px;
    padding: 15px;
    margin: 0 auto;
    border-radius: 5px;
    margin-bottom:10px;
`

export const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
    display: flex;
    align-items: flex-end;
`

export const Selects = styled.ul`
    display: inline-flex;
    gap: 15px;
    h3{
        font-size: 18px;
        margin-bottom: 10px;
    }
    li{
        display: flex;
        flex-direction: column;
        div{
            display: flex;
        }
    }
`

export const Selects_2 = styled.ul`
    display: inline-flex;
    flex-direction: column;
    gap: 15px;
    h3{
        font-size: 18px;
        margin-bottom: 10px;
    }
    li{
        display: flex;
        flex-direction: column;
        div{
            display: flex;
            gap: 15px;
        }
    }
`

export const Radio = styled.ul`
    display: inline-flex;
    gap: 15px;
    li{
        label{
            display: flex;
            align-items: center;
            gap: 5px;
            span{
                font-size: 18px;
                cursor: pointer;
            }
        }
    }
`

export const Searching = styled.button`
    display: block;
    background-color: #555;
    border: 1px solid #fff;
    border-radius: 5px;
    line-height: 35px;
    width: 70px;
    font-family: 'KCCMurukmuruk';
    margin-top: 10px;
    cursor: pointer;
    :hover{
        background-color: #aaa;
    }
`