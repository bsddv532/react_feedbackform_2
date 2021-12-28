import React, {useState} from 'react';
import './style.css';

const FeedbackForm = () => {

    const[name ,setName] = useState("");
    const[department ,setDepartment] = useState("");
    const[rating ,setRating] = useState("");
    const[data ,setData] = useState([]);
    const[content, setContent] = useState(true);

    
    const handleSubmit = (details) =>{
        details.preventDefault();

        const info = {name , department , rating}

        if(name && department && rating){
            setData((total) => [...total, info])
            setName("")
            setDepartment("")
            setRating("")
            setContent(false)
        }
    }


    return (
        <div id="main-parent">
            {content ?      
                <>
                <h1>EMPLOYEE FEEDBACK FORM</h1>
                <form onSubmit={handleSubmit}>
                    <label>Name : </label>
                        <input type="text" name='E-name' id="E-name" value={name} onChange={ (details) => setName(details.target.value) }/><br/>

                    <label>Department :</label>
                        <input type="text" name='E-department' id="E-department" value={department} onChange={ (details) => setDepartment(details.target.value) }/><br/>

                    <label>Rating : </label>
                        <input type="number" name='E-rating' id="E-rating" value={rating} onChange={(details) => setRating(details.target.value) }/><br/>

                    <input type="submit" className='btn' value="SUBMIT"/>
                </form>
                </>:
                <>
                <h1>EMPLOYEE FEEDBACK DATA</h1>
                <div id="feedbackResult">
                    {
                        data.map((val) => 
                            <div className='Information'>
                                Name : {val.name} | Department : {val.department} | Rating : {val.rating}
                            </div>    
                        )
                    }
                </div>
                <button className='btn' onClick={ ()=> setContent(true) }>GO BACK</button>
                </>
            }
        </div>   
    )
}

export default FeedbackForm