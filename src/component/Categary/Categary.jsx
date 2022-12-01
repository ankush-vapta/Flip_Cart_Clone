import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import CardComponent from './card/CardComponent';




const Categary = () => {
    const categary = [
        { id: "1", name: "Music" },
        { id: "2", name: "Movice" },
        { id: "3", name: "Sport" },
        { id: "4", name: "Tech" },
        { id: "5", name: "Fashion" },

    ]



    {/* search param and use location read properly imp............................... */ }
    const [searchParam] = useSearchParams();
    const category = searchParam.get("category");


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Link to={`/create?category=${category || ""}`}>
                            <button type="button" className="btn btn-primary btn-lg my-2" style={{ width: "100%" }}> create blog</button>
                        </Link>
                        <table className="table">
                            <thead className=''>
                                <tr>
                                    <Link to="/">
                                        <th scope="col">All categary</th>
                                    </Link>
                                </tr>
                            </thead>
                            <tbody >
                                {categary.map(item =>
                                    <tr key={item.id}>
                                        {/* yha se category aayegi our upr param me chli jaayegi  */}
                                        <Link to={`/?category=${item.name}`}>
                                            <th style={{ color: "none" }} scope="row">{item.name}</th>
                                        </Link>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="col-md-8">
                        <CardComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categary