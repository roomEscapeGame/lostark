import React from 'react';
import styled from 'styled-components';

const Select = ({ options, defaultOption, name, onChange, type }) => {
    const filters = options.filter(option => option.skill !== null);
    return (
        <Selects>
            <select onChange={onChange} name={name}>
                <option value={null}>{defaultOption}</option>
                {
                    type !== "각인서"
                        ? options.map((a, i) => {
                            return (
                                <option key={i} value={a}>{a}</option>
                            )
                        })
                        : filters.map((a, i) => {
                            return (
                                <option key={i} value={a.skill}>{a.skill}</option>
                            )
                        })
                }
            </select>
            <i className="fa-solid fa-caret-down"></i>
        </Selects>
    );
};

const Selects = styled.span`
    position: relative;
    margin-bottom: 10px;
    display: inline-block;
    width: 170px;
    select{
        width: 100%;
        background-color: #555;
        line-height: 30px;
        padding: 0px 5px;
        border: 1px solid #fff;
        border-radius: 5px;
        font-family: 'KCCMurukmuruk';
    }

    i{
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
    }
`

export default Select;