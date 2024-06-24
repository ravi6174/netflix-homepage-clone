export default function HeaderComponent() {
    return (

        <div id='headCom' className="d-flex" >
            <h1 className="text-danger m-3 ml-5">NETFLIX</h1>
            <div className="d-flex align-items-center m-3">
                <select className="dropdown">
                    <option>Language</option>
                    <option>English</option>
                    <option>Telugu</option>
                </select>
                <button className="btn btn-danger m-2">Login</button>
            </div>
        </div>
    )
}