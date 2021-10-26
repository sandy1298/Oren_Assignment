import React, {  useEffect, useState } from 'react';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiOutlineEdit} from 'react-icons/ai';
import {AiFillDelete} from 'react-icons/ai';
import axios from 'axios';
export default function Fetching() {
    const [state, setstate] = useState([]);
    const fetch = async()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setstate(res.data);
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
        
    }
    useEffect(() => {
       fetch();
    }, [])
    return (
        <>
        <div className="container-fluid">
            <div className="card_alignments row">
       
        {
            state.map((val,ind)=>{
                return(
                    <>
                        <div className="card ml-4  pl-0  mt-4 mr-0 small_card ">
                            <div className="card-header ">
                                <img src="https://avatars.dicebear.com/v2/avataaars/%7B%7Busername%7D%7D.svg?options[mood][]=happy" className="img-fluid   h-100 w-100 " alt="phot"/>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="font-weight-bold pt-3">{val.name}</h5>
                                <i className="far fa-envelope fa-1x"></i><span className="pl-2">{val.email}</span><br/>
                                <i class="fas fa-phone fa-1x"></i><span className="pl-2">{val.phone}</span><br/>
                                <i class="fas fa-globe fa-1x"></i><span className="pl-2">{val.website}</span>
                            </div>
                            <div className="card-header">
                                <div className="row ml-4">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                        <AiOutlineHeart size={30} color="red"/>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                        <AiOutlineEdit size={30} color="gray"/>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                        <AiFillDelete size={30} color="gray"/>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </>
                )
            })
        }
            </div>
        </div> 
       
        </>
    )
}

 
