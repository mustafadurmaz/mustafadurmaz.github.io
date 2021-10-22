import React from 'react' 
export default function Form({ onChange, onClick }) {
    return (
        <div className="form">
            <input
                className="input"
                placeholder="Your location"
                onChange={onChange}
                required 
            />
                <button type="submit" className="btn" onClick={onClick}>
                    Search
                </button>
            
        </div>
    )
}
